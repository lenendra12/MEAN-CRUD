const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userslistSchema = new Schema({
  id: Number,
  firstname: String,
  lastname: String,
  email: String,
  age: Number,
  gender: String,
  salary: Number,
  profile: String
})

module.exports = mongoose.model('userlist',userslistSchema,'userslist')
