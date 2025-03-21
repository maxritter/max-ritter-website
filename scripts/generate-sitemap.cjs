const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your site URLs
const urls = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/skills', changefreq: 'monthly', priority: 0.8 },
  { url: '/work', changefreq: 'monthly', priority: 0.8 },
  { url: '/imprint', changefreq: 'yearly', priority: 0.3 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://maxritter.net' });

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(urls).pipe(stream))
  .then((data) => {
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, data.toString());
    console.log(`✅ Sitemap generated at ${sitemapPath}`);
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  }); 