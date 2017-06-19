var webdriverio = require('webdriverio');

webdriverio
  .init()
  .url('http://webdriver.io/')
  .getTitle().then(function (title) {
    console.log('Title is: ' + title);
  })
  .end();
