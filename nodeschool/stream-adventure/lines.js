var through2 = require('through2'),
    split = require('split');

var i = 1;

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
        var line = line.toString();
        if (i % 2 === 0) {
            this.push(line.toUpperCase() + '\n');
        } else {
            this.push(line.toLowerCase() + '\n');
        }
        next();
        i++;
    }))
    .pipe(process.stdout);
;
