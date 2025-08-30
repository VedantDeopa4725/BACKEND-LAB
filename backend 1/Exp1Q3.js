const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Hello, this is the server response!");
}).listen(3000, () => console.log("http://localhost:3000"));
