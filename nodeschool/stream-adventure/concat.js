var concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {
    var revStr = data.toString().split('').reverse().join('');
    process.stdout.write(revStr);
}));
