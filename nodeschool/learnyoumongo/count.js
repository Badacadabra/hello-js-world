var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) {
    throw new Error('Oops!');
  }
  var collection = db.collection('parrots');
  collection.count({
    age: {
      $gt: Number(process.argv[2])
    }
  }, function (err, data) {
    if (err) {
      throw new Error('Oops!');
    }
    console.log(data);
  });
  db.close();
});
