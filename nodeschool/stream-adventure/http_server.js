var http = require('http'),
    through = require('through2');

var server = http.createServer(function (req, res) {
    console.log(req);
    if (req.method === 'POST') {
        req.pipe();
    }
    //var upStr = req.toString().toUpperCase();
    res.end();
});

server.listen(process.argv[2]);
