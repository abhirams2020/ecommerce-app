require('dotenv').config();

const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.jbhicbq.mongodb.net/?retryWrites=true&w=majority'
// const URL = 'mongodb+srv://username:password@cluster0.fl5q26q.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose