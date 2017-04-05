var net = require('net');

var zeroFill = function (arg) {
    return (arg < 10) ? '0' + arg : arg;
};

var server = net.createServer(function (socket) {
    var date = new Date(),
        year = date.getFullYear(),
        month = zeroFill(date.getMonth() + 1),
        day = zeroFill(date.getDate()),
        hour = zeroFill(date.getHours()),
        minutes = zeroFill(date.getMinutes());

    socket.end(year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n");
});

server.listen(process.argv[2]);
