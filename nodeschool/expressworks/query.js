var express = require('express'),
    app = express();

app.get('/search', function (req, res) {
  res.json(req.query);
});

app.listen(process.argv[2]);
