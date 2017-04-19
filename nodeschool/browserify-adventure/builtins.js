var url = require('url'),
    querystring = require('querystring');

var addr = prompt('Web address...'),
    parsedAddr = url.parse(addr),
    basename = parsedAddr.protocol + "//" + parsedAddr.hostname + parsedAddr.pathname,
    file = querystring.parse(parsedAddr.query).file,
    res = url.resolve(basename, file);

console.log(res);
