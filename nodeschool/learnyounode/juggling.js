var http = require('http');

var data1 = [],
    data2 = [],
    data3 = [];

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        data1.push(data);
    });
    response.on('end', function () {
        http.get(process.argv[3], function (response) {
            response.setEncoding('utf8');
            response.on('data', function (data) {
                data2.push(data);
            })
            response.on('end', function () {
                http.get(process.argv[4], function (response) {
                    response.setEncoding('utf8');
                    response.on('data', function (data) {
                        data3.push(data);
                    });
                    response.on('end', function () {
                        console.log(data1.join(''));
                        console.log(data2.join(''));
                        console.log(data3.join(''));
                    });
                });
            });
        });
    });
});
