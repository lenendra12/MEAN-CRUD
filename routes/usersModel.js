const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  cpassword: String,
})


module.exports = mongoose.model('user',userSchema,'users')
