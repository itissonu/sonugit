const express=require('express')
const mongoose=require('mongoose')
const authroute =require('../backendroom/routers/Userauth.js')
const userroute =require('../backendroom/routers/Userall.js')
const expenroute=require('../backendroom/routers/Expences.js')
const cors = require('cors');

const connection =async()=>{
    
    try {
       await mongoose.connect('mongodb+srv://sonu:1234567890@cluster0.nn7auyx.mongodb.net/expen?retryWrites=true&w=majority') 
       console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',authroute)
app.use('/api/user',userroute)
app.use('/api/expense',expenroute)


app.listen(8000,()=>{
    connection()
    console.log("connected to backend")
})