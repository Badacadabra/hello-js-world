var blessed = require('blessed');

// Screen

var screen = blessed.screen({
  smartCSR: true,
  title: "Blessed form"
});

// Form

var form = blessed.form({
  parent: screen,
  width: '90%',
  left: 'center',
  keys: true,
  vi: true,
});

// Text boxes

var txt1 = blessed.text({
  parent: screen,
  top: 3,
  left: 5,
  content: 'FIRST NAME:'
});

var firstName = blessed.textbox({
  parent: form,
  top: 4,
  left: 5,
  height: 3,
  inputOnFocus: true,
  content: 'first',
  border: {
    type: 'line'
  },
  focus: {
    fg: 'blue'
  }
});

var txt2 = blessed.text({
  parent: screen,
  content: 'LAST NAME:',
  top: 8,
  left: 5,
});

var lastName = blessed.textbox({
  parent: form,
  top: 9,
  left: 5,
  height: 3,
  inputOnFocus: true,
  content: 'last',
  border: {
    type: 'line'
  },
  focus: {
    fg: 'blue'
  }
});

// Check boxes

var txt3 = blessed.text({
  parent: screen,
  content: 'What are your favorite editors?',
  top: 14,
  left: 5
});

var vim = blessed.checkbox({
  parent: form,
  content: 'Vim',
  top: 16,
  left: 5
});

var emacs = blessed.checkbox({
  parent: form,
  content: 'Emacs',
  top: 16,
  left: 20
});

var atom = blessed.checkbox({
  parent: form,
  content: 'Atom',
  top: 16,
  left: 35
});

var brackets = blessed.checkbox({
  parent: form,
  content: 'Brackets',
  top: 16,
  left: 50 
});

// Radio buttons

var txt4 = blessed.text({
  parent: screen,
  content: 'Do you like Blessed?',
  top: 19,
  left: 5
});

var radioset = blessed.radioset({
  parent: form,
  width: '100%',
  height: 5,
  top: 21
});

var yes = blessed.radiobutton({
  parent: radioset,
  content: 'Yes',
  left: 5
});

var no = blessed.radiobutton({
  parent: radioset,
  content: 'No',
  left: 15
});

// Text area

var txt5 = blessed.text({
  parent: screen,
  content: 'Your comments...',
  top: 24,
  left: 5
});

var textarea = blessed.textarea({
  parent: form,
  top: 26,
  left: 5,
  height: 7,
  inputOnFocus: true,
  border: {
    type: 'line'
  }
});

// Submit/Cancel buttons

var submit = blessed.button({
  parent: form,
  content: 'Submit',
  top: 35,
  left: 5,
  shrink: true,
  padding: {
    top: 1,
    right: 2,
    bottom: 1,
    left: 2
  },
  style: {
    bold: true,
    fg: 'white',
    bg: 'green',
    focus: {
      inverse: true
    }
  }
});

var reset = blessed.button({
  parent: form,
  content: 'Reset',
  top: 35,
  left: 15,
  shrink: true,
  padding: {
    top: 1,
    right: 2,
    bottom: 1,
    left: 2
  },
  style: {
    bold: true,
    fg: 'white',
    bg: 'red',
    focus: {
      inverse: true
    }
  }
});

// Info

var msg = blessed.message({
  parent: screen,
  top: 42,
  left: 5,
  style: {
    italic: true,
    fg: 'red'
  }
});

var table = blessed.table({
  parent: screen,
  content: '',
  top: 40,
  left: 'center',
  style: {
    fg: 'green',
    header: {
      bold: true,
      fg: 'white',
      bg: 'blue'
    }
  },
  hidden: true
});

// Event management

submit.on('press', function () {
  form.submit();
});

reset.on('press', function () {
  form.reset();
});

form.on('submit', function (data) {
  table.setData([
    data.textbox
  ]);
  table.show();
});

form.on('reset', function () {
  msg.display('Form cleared!', function () {});
});

// Key bindings

screen.key('q', function () {
  this.destroy();
});

// Render everything!

screen.render();
