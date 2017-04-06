var mod = require('./module');

mod(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log('Oops!');
    }
    console.log(data.join('\n'));
});
