var mongo = require('mongodb').MongoClient;

var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
};

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
  if (err) {
    throw new Error('Oops!');
  }
  var collection = db.collection('docs');
  collection.insert(doc, function (err, data) {
    if (err) {
      throw new Error('Oops!');
    }
    console.log(JSON.stringify(doc));
  });
  db.close();
});
