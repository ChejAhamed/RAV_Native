const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  category: String,
  question: String

});
module.exports = mongoose.model('Quiz', quizSchema);
