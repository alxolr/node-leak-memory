const http = require('http');
const server = http.createServer(handleServer);
const path = require('path');
const fs = require('fs');

server.listen(3030);

function handleServer(request, response) {
  if (request.url === '/') {
    const readable = fs.createReadStream(path.join(__dirname, './big.file'));

    if (Math.random() < 0.30) {
      setImmediate(() => {
        response.end('Done');
        response.destroy();
      }, 0);
    }

    readable.pipe(response);
  }
}

process.on('uncaughtException', console.error);
