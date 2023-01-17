const express = require('express');
const mongoose = require("./config/momgoose")
const app = express()
const port = 3000

const List = require("./model/listModel");
const Task = require("./model/taskModel");

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-methods','GET,POST');
    res.header('Access-Control-Allow-Headers','Origin,Content-Type');
    next();
});

app.use(express.json());


    
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Requests will never reach this route
app.get('/lists', function (req, res) {
    List.find({}).then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
});
app.get('/list/:listId', function (req, res) {
    List.find({"_id":req.params.listId}).then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
});
app.post('/createlist', (req, res) => {
    (new List({'title' : req.body.title}))
    .save()
    .then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
  })

app.patch('/list/:listId', function (req, res) {
    List.findOneAndUpdate({"_id":req.params.listId},{$set : req.body})
    .then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
});
app.delete('/deleteList/:listId', function (req, res) {
    console.log(req.params.listId);
    List.deleteOne({"_id":req.params.listId})
    .then((list)=>{
        res.send(list);
    }).catch((err)=>{
        res.send(err);
    })
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})