const http = require('http');
const server = http.createServer(handleServer);

const heapProfile = require('heap-profile');

heapProfile.start();

setInterval(() => {
  heapProfile.write((err, filename) => {
    console.log(`heapProfile.write. err: ${err} filename: ${filename}`);
  });
}, 2e4).unref();

server.listen(3030);

function handleServer(req, res) {
  res.end(computeTerm(Math.random()));
}

function computeTerm(term) {
  return computeTerm[term] || (computeTerm[term] = compute())

  function compute() {
    return Buffer.alloc(1e3);
  }
}
