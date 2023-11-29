const User = require('../model/User.js')
const Room=require('../model/Room.js')

//we can see all the user
const alluser =async(req,res)=>{
try {
    const users=await User.find()
    res.status(200).json(users)
} catch (error) {
    res.status(401).json(error)
    
}
}

//find a user

const findUser =async(req,res)=>{
    try {
       // console.log(req.params.id)
          const id = req.params.id;
        const requser=await User.findById(id)
        if(requser){
            res.status(200).json(requser)
        }
        else{
            res.status(401).json("no such user is present")
        }
    } catch (error) {
        res.status(401).json("request failed")
    }

}
const allrooms =async(req,res)=>{
    try {
        const rooms=await Room.find()
        res.status(200).json(rooms)
    } catch (error) {
        res.status(401).json(error)
        
    }
    }

    //find user by room
    const findUsersByRoom = async (req, res) => {
        try {
          const roomId = req.params.roomId;
          
          // Find users by the selected room ID
          const users = await User.find({ selectedroom: roomId });
      
          if (users.length > 0) {
            return res.status(200).json(users);
          } else {
            return res.status(404).json("No users found for the specified room");
          }
        } catch (error) {
          console.error('Error finding users by room:', error);
          return res.status(500).json("Request failed");
        }
      };
      
module.exports={alluser,allrooms,findUser,findUsersByRoom}