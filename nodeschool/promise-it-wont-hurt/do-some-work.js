let http = require('q-io/http');

http.read('http://localhost:7000')
  .then((str) => str.toString())
  .then((id) => http.read(`http://localhost:7001/${id}`))
  .then(JSON.parse)
  .then(console.log)
  .catch(console.error);
