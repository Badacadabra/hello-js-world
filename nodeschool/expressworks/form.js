var express = require('express'),
    app = express(),
    bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
