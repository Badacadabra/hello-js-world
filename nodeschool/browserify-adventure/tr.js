var through = require('through2');
var split = require('split');
var sprintf = require('sprintf');
var quote = require('quote-stream');
var combiner = require('stream-combiner');

module.exports = function(file) {
  if (!/\.txt$/.test(file)) return through();
  var nb = 0;
  var txt = through(function write(buf, enc, next) {
    var line = buf.toString('utf8') + '\n';
    if (nb % 5 === 0) {
      this.push(sprintf('%3d %s', nb, line));
    }
    else this.push('    ' + line);
    nb++;
    next();
  });

  var init = through();
  init.write('module.exports = ');

  return combiner(split(), txt, quote(), init);
};
