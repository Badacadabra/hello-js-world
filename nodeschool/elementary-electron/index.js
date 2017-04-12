var picture = require('cat-picture'),
  image = require('lightning-image-poly'),
  remote = require('electron').remote,
  fs = require('fs');

var src = picture.src;
picture.remove();

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

function save () {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ' + err.message); 
      else alert('pdf saved!');
    });
  });
}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save();
});
