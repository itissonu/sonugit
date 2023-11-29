
const User = require('../model/User.js')
const Room=require('../model/Room.js')
const mongoose = require('mongoose');

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const registerroom =async(req,res)=>{
  try {
    const {name}=req.body;
    const newroom=new Room({
      name,
    })
    await newroom.save()
    res.status(201).json(newroom)
  } catch (error) {
    res.status(500).json("reg falied")
  }
  

}

const login =async(req,res)=>{
    try {
        const userask= await User.findOne({username:req.body.username})

        if(!userask){
            return res.status(401).json({ success: false, message: 'User not found' })
        }
        const retainedpass= await bcrypt.compare(req.body.password,userask.password)

        if(!retainedpass){
            return res.status(401).json({ success: false, message: 'User not have password bhulgaya hai' })
        }
        
        if (userask.selectedroom.toString() !== req.body.selectedroom) {
            return res.status(401).json({ success: false, message: 'This is not your room' });
          }
          const userData = {
            userId: userask._id,
            username: userask.username,
            selectedroom: userask.selectedroom,
          };
          
        const payload = { username:req.body.username,password:req.body.password};
       const token = jwt.sign(payload, "soumyaranjansahu", { expiresIn: '1h' });
       res.status(201).json({
        success: true,
        message: 'Logged in successfully',
        user: userData,
        token: token,
      });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Login failed' });
    }

}

const register =async(req,res)=>{
    try {
       const{ name, username, email, password, selectedroom, profilePic} =req.body

       const hashpassword= await bcrypt.hash(password,10)

       const newUser = new User({
        name,
        username,
        email,
        password: hashpassword, // Store the hashed password
        selectedroom,
        profilePic,
      });
      await newUser.save();
      //update the room also i meant the room users array
      await Room.findByIdAndUpdate(selectedroom, {
        $push: { members: newUser._id },
      });

       

       res.status(201).json({
        success: true,
        message: 'Registration successful',
   
        user: {
          name,
          username,
          email,
          password,
          selectedroom,
          profilePic,
        },
      });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
    
}
module.exports = { register, login ,registerroom }