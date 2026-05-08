/* Prerenders all SPA routes into static HTML files.
 *
 * Output: dist/<route>/index.html for each route (and dist/index.html for /).
 * Each captured HTML contains Helmet's per-page <title>, meta, canonical,
 * og:*, twitter:*, ld+json, plus the rendered <h1>, body content, and
 * crawlable <a href> links. Crawlers without JS now see the full SEO surface.
 */

const path = require('node:path');
const fs = require('node:fs/promises');
const http = require('node:http');
const puppeteer = require('puppeteer');

const ROUTES = ['/', '/work', '/skills', '/imprint', '/privacy', '/terms'];
const DIST_DIR = path.join(__dirname, '..', 'dist');
const PORT = 4173;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const urlPath = decodeURIComponent(req.url.split('?')[0]);
        let filePath = path.join(DIST_DIR, urlPath);
        let stat;
        try {
          stat = await fs.stat(filePath);
        } catch {
          // SPA fallback
          filePath = path.join(DIST_DIR, 'index.html');
          stat = await fs.stat(filePath);
        }
        if (stat.isDirectory()) {
          filePath = path.join(filePath, 'index.html');
          try {
            stat = await fs.stat(filePath);
          } catch {
            filePath = path.join(DIST_DIR, 'index.html');
          }
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(await fs.readFile(filePath));
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

async function prerender() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setUserAgent('Prerender/1.0 (Puppeteer; build-time)');
      // Block third-party analytics requests during build so we don't pollute their data;
      // the <script> tags remain in the captured HTML so real users still get analytics.
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const url = req.url();
        if (url.includes('cloud.umami.is') || url.includes('analytics.ahrefs.com')) {
          req.abort();
        } else {
          req.continue();
        }
      });
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait for Helmet to inject its tags (any link with data-rh="true")
      await page.waitForFunction(
        () => document.querySelector('link[rel="canonical"][data-rh="true"]') !== null,
        { timeout: 10000 }
      );

      const html = await page.content();
      await page.close();

      const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ''));
      await fs.mkdir(outDir, { recursive: true });
      const outPath = path.join(outDir, 'index.html');
      await fs.writeFile(outPath, html, 'utf8');
      console.log(`✅ Prerendered ${route} → ${path.relative(DIST_DIR, outPath)}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
