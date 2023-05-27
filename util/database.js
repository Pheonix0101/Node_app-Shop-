const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callBack) => {
  MongoClient.connect(
    "mongodb+srv://purushottam:Oc07QUuUv4vMFMOf@cluster0.rzbqmrj.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected to database successfully");
      _db = client.db();
      callBack();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
