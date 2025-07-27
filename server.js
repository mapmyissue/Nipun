const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/domain') {
    const html = fs.readFileSync(path.join(__dirname,'domain.html'), 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

server.listen(3000, () => console.log('Running at http://localhost:3000/domain'));
