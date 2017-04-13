var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    Menu = electron.Menu,
    Tray = electron.Tray,
    net = electron.net;

var path = require('path'),
    tpl = require('./menuTpl');

app.on('ready', function () {
  console.log("App initialization: OK");
  console.log("App name: " + app.getName());
  console.log("Current path directory: " + app.getAppPath());
  console.log("Locale: " + app.getLocale());

  // Menu
  var menu = Menu.buildFromTemplate(tpl);
  Menu.setApplicationMenu(menu);

  // Window
  var win = new BrowserWindow({
    darkTheme: true
  });

  win.loadURL('file://' + path.join(__dirname, 'index.html'));
  var contents = win.webContents;
  console.log(contents);

  // Request
  var req = net.request('https://api.github.com');
  req.on('response', function (res) {
    console.log('Status code: ' + res.statusCode);
    res.on('data', function (chunk) {
      console.log(chunk.toString());
    });
    res.on('end', function () {
      console.log('Data is complete');
    });
  });
  req.end();

  // Power
  electron.powerMonitor.on('suspend', function () {
    console.log('Suspend');
  });

  electron.powerMonitor.on('resume', function () {
    console.log('Resume');
  });

});
