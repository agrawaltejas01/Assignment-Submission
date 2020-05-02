const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'assignment-submission';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    docs;
    findDocuments(db, function (docs) {
        console.log(docs)
    });

    client.close();
});

// const findDocuments = function (db, callback) {
const findDocuments = function (db) {
    // Get the documents collection
    const collection = db.collection('student');

    result = [];
    // Find some documents
    docs = collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log('1');
        // console.log(docs)
        callback(docs);

    });

    // console.log(docs);
}