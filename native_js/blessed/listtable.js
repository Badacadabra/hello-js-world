var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed list table"
});

var lt = blessed.listtable({
  parent: screen,
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center',
  rows: [
    ['Foo', 'Bar'],
    ['foo1', 'bar1'],
    ['foo2', 'bar2'],
    ['foo3', 'bar3']
  ],
  border: {
    type: 'line',
    fg: 'blue'
  },
  style: {
    header: {
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
