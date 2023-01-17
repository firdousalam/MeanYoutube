const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "name" : {type : String},
    "email" : {type : String}
})
const user = mongoose.model('Users',userSchema)
module.exports =  user;