const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  score: Number

});
module.exports = mongoose.model('User', userSchema);
