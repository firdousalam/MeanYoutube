var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://MeanYoutube:MeanYoutube1234@cluster0.wl3vp.mongodb.net/MeanYoutube?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}).then((conn)=> {console.log("connected")})
.catch((err)=> {console.log("connection error",err)})

module.exports = mongoose;