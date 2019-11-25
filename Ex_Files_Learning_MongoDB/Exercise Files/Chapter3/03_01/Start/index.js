var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learning_mongo';

var findDocs = function(db, callback) {
    var collection = db.collection('tours');

    collection.find({"tourTags":"wine"}).toArray(function(err, docs) {
        console.log(docs);
        callback;
    })
}

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected successfully.")

    findDocs(db, function() {
        db.close();
    })
})