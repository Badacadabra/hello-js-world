var parse = require('./ndjson').parse,
    stringify = require('./ndjson').stringify;

console.log(parse(prompt('String to array...')));
console.log(stringify(prompt('Array to string...')));
