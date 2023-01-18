var mongoose = require("mongoose");
require('dotenv').config()
mongoose.Promise = global.Promise;
const uri = process.env.DBCONFIG;
mongoose.set('strictQuery', false);

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}).then((conn)=> {console.log("connected")})
.catch((err)=> {console.log("connection error",err)})

module.exports = mongoose;