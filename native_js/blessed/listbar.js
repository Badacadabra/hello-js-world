var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed list bar"
});

var lb = blessed.listbar({
  parent: screen,
  items: ['Foo', 'Bar', 'Baz'],
  autoCommandKeys: true,
  keys: true,
  vi: true,
  style: {
    selected: {
      bold: true,
      fg: 'white',
      bg: 'blue'
    }
  }
});

screen.key('q', function () {
  this.destroy();
});

screen.render();
