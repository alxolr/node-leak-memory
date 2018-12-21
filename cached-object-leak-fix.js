const LRU = require('lru-cache');
const http = require('http');

const computeCache = new LRU(50);
const server = http.createServer(handleServer);
server.listen(3030);

function handleServer(req, res) {
  res.end(compute(Math.random()));
}

function compute(term) {
  if (!computeCache.has(term)) {
    computeCache.set(term, doCompute());
  }

  return computeCache.get(term);

  function doCompute() {
    return Buffer.alloc(1e3);
  }
}
