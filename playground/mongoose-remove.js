const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5bd0993c4a74b5716fd3b6b3'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('5bd0993c4a74b5716fd3b6b3').then((todo) => {
//   console.log(todo);
// });
