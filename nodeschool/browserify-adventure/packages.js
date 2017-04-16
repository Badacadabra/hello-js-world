var uniq = require('uniq');

var str = prompt('Are you OK?');
console.log(uniq(str.split(',')));
