var dialog = require('electron').dialog;

module.exports = [
  {
    label: 'Dialogs',
    accelerator: 'Ctrl+d',
    role: 'help',
    submenu: [
      {
        label: 'Message',
        click: function () {
          dialog.showMessageBox(
            {
              type: 'info',
              buttons: [
                'OK',
                'Cancel'
              ],
              title: 'I have a message for you!',
              message: 'This is a message'
            }, function (response) {
                var str = '';
                if (response === 0) {
                  str = 'OK'
                } else {
                  str = 'Cancel'
                }
                dialog.showMessageBox({
                  type: 'info',
                  title: 'Nice!',
                  message: 'You clicked on ' + str
                });
              }
          )
        }
      },
      {
        label: 'Open',
        click: function () {
          dialog.showOpenDialog({
            title: 'Choose a file'
          });
        }
      },
      {
        label: 'Save',
        click: function () {
          dialog.showSaveDialog({
            title: 'Save'
          });
        }
      },
      {
        label: 'Error',
        click: function () {
          dialog.showErrorBox({
            title: 'Oops!',
            content: 'This is an error!'
          });
        }
      }
    ]
  },
  {
    label: 'Bar',
    accelerator: 'Ctrl+B',
    role: 'help',
    submenu: [
      {
        label: 'bar1',
        click: function () {
          alert('bar1');
        }
      },
      {
        label: 'bar2',
        click: function () {
          alert('bar2');
        }
      }
    ]
  }
];
