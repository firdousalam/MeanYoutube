const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    "title" : {type : String,trim : true}
});
const list = mongoose.model('List',listSchema)
module.exports =  list;