const https = require('https');

const HOST = 'www.maxritter.net';
const KEY = 'f811ccade0d856d28998acf87dc495bb';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/projects`,
  `https://${HOST}/work`,
  `https://${HOST}/skills`,
  `https://${HOST}/imprint`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  },
  (res) => {
    let body = '';
    res.on('data', (chunk) => (body += chunk));
    res.on('end', () => {
      // 200 = accepted, 202 = received (async), 422 = invalid, 429 = throttled
      const ok = res.statusCode === 200 || res.statusCode === 202;
      const symbol = ok ? '✅' : '❌';
      console.log(`${symbol} IndexNow ${res.statusCode}: submitted ${urls.length} URL(s)`);
      if (body) console.log(body);
      if (!ok) process.exit(1);
    });
  }
);

req.on('error', (err) => {
  console.error('IndexNow submission failed:', err.message);
  process.exit(1);
});

req.write(payload);
req.end();
