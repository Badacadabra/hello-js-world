var express = require('express');
var router = express.Router();

// Middleware
var logger = function (req, res, next) {
    console.log('Foo Bar');
    next();
};

var datetime = function (req, res, next) {
    console.log(new Date());
    next();
};

router.use([logger, datetime]);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Deep pages
router.get('/f?oo', function (req, res) {
  res.send('Foo');
});

router.get('/bar', function (req, res) {
  res.send('Bar');
});

router.get('/foo/:id', function (req, res) {
    res.send('Foo with id ' + req.params.id);
});

router.get('/form', function (req, res) {
    res.render('form');
});

router.get('/host', function (req, res) {
    var info = '';
    for (var key in req) {
        if (typeof req[key] !== 'object') {
            info += key + ': ' + req[key] + '<br>';
        }
    }
    res.send(info);
});

router.get(/z/, function (req, res) {
    res.send('OK');
});

router.get('/img', function (req, res) {
    res.download(__dirname + '/../public/images/me.jpg');
});

router.get('/redirect', function (req, res) {
    res.redirect(301, '/');
});

router.post('/test', function (req, res) {
    res.send(req.body.firstName + " " + req.body.lastName);
});

router.put('/quux', function (req, res) {
    res.sendStatus(200);
    console.log('PUT request OK');
});

router.delete('/remove', function (req, res) {
    res.sendStatus(200);
    console.log('DELETE request OK');
});

module.exports = router;
