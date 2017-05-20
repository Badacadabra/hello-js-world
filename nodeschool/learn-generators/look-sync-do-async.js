const fs = require('fs');

function run (generator) {
  let it = generator(go);

  function go (err, result) {
    if (err) {
      return it.throw(err);
    }
    it.next(result);
  }

  go();
}

run(function* (done) {
  try {
    let dirFiles = yield fs.readdir('NoNoNoNo', done);
    let firstFile = dirFiles[0];
    console.log(firstFile);
  } catch (e) {
    console.log(null);
  }
});
