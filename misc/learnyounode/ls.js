var fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    var filteredList = list.filter(function (file) {
        return path.extname(file) === '.' + process.argv[3];
    });

    console.log(filteredList.join('\n'));
});
