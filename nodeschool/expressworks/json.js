var express = require('express'),
    app = express(),
    fs = require('fs');

app.get(/books/, function (req, res) {
  fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      throw new Error('Oops!');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
