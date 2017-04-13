var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed file manager"
});

var fm = blessed.filemanager({
  parent: screen,
  cwd: __dirname,
  width: '30%',
  mouse: false,
  keys: true,
  vi: true,
  items: ['foo', 'bar', 'baz'],
  style: {
    bold: true,
    fg: 'white',
    bg: 'blue',
    selected: {
      bold: true,
      fg: 'blue',
      bg: 'white'
    }
  }
});

screen.key('q', function () {
  this.destroy();
});

screen.key('o', function () {
  fm.pick(function () {});
  fm.on('file', function (file) {
    console.log(file);
  });
});

screen.render();
