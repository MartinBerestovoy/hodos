const { createServer } = require('node:http');
const express = require ('express')
const app = express ()
const port = 3000; //spesifica en que lugar esta

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost${port}`); // significa-> Server running at http://localhost3000
});
