const http = require('http');
const server = http.createServer(handleServer);

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
