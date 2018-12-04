const http = require('http');
const server = http.createServer(handleServer);
const { transform } = require('./stream-leak');
const fs = require('fs');

server.listen(3030);

function handleServer(request, response) {
  if (request.url === '/') {
    const stream = fs.createReadStream('./big.file');
    stream.pipe(transform())
      .pipe(response);
  }
}

process.on('uncaughtException', console.error);
