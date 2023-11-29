const express=require('express');
const { alluser,allrooms,findUser, findUsersByRoom } = require('../controler/userfun');
const router=express.Router()


router.get("/",alluser)

//all room
router.get("/allrooms",allrooms)

//find a user

router.get('/:id',findUser)


router.get('/userbyroom/:roomId',findUsersByRoom)

module.exports=router;