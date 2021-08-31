const mongoose = require('mongoose');
const { string } = require('yargs');

const quizSchema = mongoose.Schema({
  description: String,
  alternatives: [
    {
      text: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ]
});
module.exports = mongoose.model('Quiz', quizSchema);
