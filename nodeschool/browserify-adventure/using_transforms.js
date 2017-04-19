var fs = require('fs'),
    sprintf = require('sprintf');

var src = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');

var spl = src.split('\n');

var res = [];

for (var i = 0; i < spl.length; i++) {
  if (i % 5 === 0) {
    res.push(sprintf("%3d %s", i, spl[i]));
  } else {
    res.push("    " + spl[i]);
  }
}

console.log(res.join('\n'));
