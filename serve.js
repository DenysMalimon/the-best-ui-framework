const http = require('http');
const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'examples/test-app');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(base, req.url === '/' ? '/index.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
