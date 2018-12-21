const http = require('http');
const server = http.createServer(handleServer);

server.listen(3030);

function handleServer(req, res) {
  res.end(compute(Math.random()));
}

function compute(term) {
  return compute[term] || (compute[term] = doCompute())

  function doCompute() {
    return Buffer.alloc(1e3);
  }
}
