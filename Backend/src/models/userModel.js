const mongoose = require('mongoose');
const userSchema=mongose.Schema({
    name:String,
    email:String,

})
module.exports=mongoose.model('User',userSchema)