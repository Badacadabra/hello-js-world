var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed list"
});

var list = blessed.list({
  parent: screen,
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
  screen.destroy();
});

screen.render();
