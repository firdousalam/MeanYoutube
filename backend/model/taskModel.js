const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    "title" : {type : String,trim : true},
    "_listId" : {type : mongoose.Types.ObjectId,
    require : true},
    "completed" : {type : Boolean}

});
const task = mongoose.model('Task',taskSchema)
module.exports =  task;