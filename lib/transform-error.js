const { Transform } = require('stream');

function transform() {
  return new Transform({
    transform(chunk, enc, next) {
      const random = Math.random();
      if (random > 0.5) throw Error('Some error occured');
      next(null, chunk);
    }
  });
}

module.exports = {
  transform,
}
