var fs = require('fs'),
    path = require('path');

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, function (err, list) {
       
        if (err)
            return callback(err);

        var filteredList = list.filter(function (file) {
            return path.extname(file) === '.' + extension;
        });

        callback(null, filteredList);
    });
};
