const http = require('http');
const server = http.createServer(handleServer);
const pipeline = require('pump');
const fs = require('fs');
const path = require('path');

// const { pipeline } = require('stream');

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

    pipeline(
      readable,
      response,
      (err) => {
        if (err) console.error(err);
        response.end('Done');
      }
    )
  }
}

process.on('uncaughtException', console.error);
