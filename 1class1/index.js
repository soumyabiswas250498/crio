import currencies from './db.json';

const host = 'http://localhost';
const port = 3000;

const http = require('http');
const serverInfo = { server: 'test' };

const server = http.createServer((req, res) => {
  console.log('Hello from server');
  console.log(req.url);
  if (req.url === '/') {
    console.log('hello');
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('<h1>Hello World</h1>');
  } else if (req.url === '/currencies') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(currencies));
  } else {
    res.writeHead(404);
  }

  res.end();
});

server.listen(port, () => {
  console.log('Listening...');
});
