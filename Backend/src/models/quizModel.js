const mongoose = require('mongoose');
const quizSchema=mongose.Schema({
    category:String,
    question:String,

})
module.exports=mongoose.model('Quiz',quizSchema)