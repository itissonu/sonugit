const express = require('express');
const mongoose = require('mongoose');
const dotenv =require('dotenv')    //.env holds the connection url of database
dotenv.config()

const  connection = async ()=>{
try {
    await mongoose.connect(process.env.MONGO)              //mong is the variable it holds the url
    console.log("mongodb connection successed")
    
} catch (error) {
    throw(error)
}
}

const app=express();

app.listen(3000, () => {
    connection();
    console.log("Connected to the backend");
  });