var http = require('http'),
    url = require('url');

var server = http.createServer(function (req, res) {
    var resource = url.parse(req.url, true),
        date = new Date(resource.query.iso);

    if (resource.pathname === '/api/parsetime') {
        var time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    } else if (resource.pathname === '/api/unixtime') {
        var time = {
            unixtime: date.getTime()
        };
    } else {
        res.end('This resource does not exist.');
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(time));
    res.end();
});

server.listen(process.argv[2]);
