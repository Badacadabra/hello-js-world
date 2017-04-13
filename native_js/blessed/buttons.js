var blessed = require('blessed');

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed buttons"
});

var button1 = blessed.button({
  parent: screen,
  content: "OK",
  width: 10,
  height: 5,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'green',
    hover: {
      fg: 'white',
      bg: 'blue'
    }
  }
});

var button2 = blessed.button({
  parent: screen,
  content: "Cancel",
  left: 10,
  width: 10,
  height: 5,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'red',
    hover: {
      fg: 'white',
      bg: 'blue'
    }
  }
});

button1.on('click', function () {
  console.log('OK');
});

button2.on('click', function () {
  screen.destroy();
});

screen.key('q', function () {
  this.destroy();
});

screen.render();
