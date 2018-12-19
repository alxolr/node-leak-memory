'use strict';

const http = require('http');
const server = http.createServer(handleServer);
const heapProfile = require('heap-profile');

heapProfile.start();
const storage = [];

function pushIntoStorage(data) {
  storage.push(data);
}

setInterval(() => {
  heapProfile.write((err, filename) => {
    console.log(`heapProfile.write. err: ${err} filename: ${filename}`);
  });
}, 1e4).unref();

function handleServer(request, response) {
  if (request.url === '/') {
    pushIntoStorage(Buffer.alloc(1e4));
    response.end('done');
  }
}

server.listen(3000);
