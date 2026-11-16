const http = require('http');
const os = require('os');
const port = process.env.PORT || 8080;
const started = Date.now();
const server = http.createServer((req, res) => {
  if (req.url === '/info') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({
      ok: true,
      app: 'abasthan-test',
      hostname: os.hostname(),
      node: process.version,
      uptime_s: Math.round((Date.now() - started) / 1000),
      totalmem_mb: Math.round(os.totalmem() / 1024 / 1024),
      freemem_mb: Math.round(os.freemem() / 1024 / 1024),
      cpus: os.cpus().length,
      rss_mb: Math.round(process.memoryUsage().rss / 1024 / 1024),
      port: port,
      time: new Date().toISOString()
    }, null, 2));
    return;
  }
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('ok abasthan-test ' + new Date().toISOString() + '\n');
});
server.listen(port, '0.0.0.0', () => {
  console.log('abasthan-test listening on ' + port);
});
