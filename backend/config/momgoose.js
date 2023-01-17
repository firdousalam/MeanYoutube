var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://MeanYoutube:MeanYoutube1234@cluster0.wl3vp.mongodb.net/MeanYoutube?retryWrites=true&w=majority";
//const uri = "mongodb://MeanYoutube:MeanYoutube@1234>@cluster0.wl3vp.mongodb.net/MeanYoutube";
mongoose.set('strictQuery', false);

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}).then((conn)=> {console.log("connected",conn)})
.catch((err)=> {console.log("connection error",err)})

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MeanYoutube:MeanYoutube@123@cluster0.wl3vp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("MeanYoutube").collection("users");
  console.log(collection.find("users"));
  // perform actions on the collection object
  client.close();
});
*/
module.exports = mongoose;