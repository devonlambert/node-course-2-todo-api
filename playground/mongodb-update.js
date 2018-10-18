// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bc8d4074a74b5716fd31cf6'),
  // },
  // {
  //   $set: {
  //     completed: true
  //   }
  // },
  // {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // Change Jen's name to Devon and increment age to 37
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bc7835126ee0c150ab2b94c')
  },
  {
    $set: {
      name: 'Devon'
    },
    $inc: {
      age: 1
    }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();
});
