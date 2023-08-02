const express = require('express');
const { createRoom, updateRoom, deleteRoom, findRoom, allRoom } = require('../controlers/roommethod');
const router = express.Router();
const Room=require('../modals/Room.js');


//create
router.post('/:hotelid', createRoom)
  
//update
router.put('/availability/:id', updateRoom)
//delete endpoint
router.delete('/:id/:hotelid',  deleteRoom)
//get endpoint
router.get('/:id',findRoom)
//get all endpoint


router.get('/', allRoom )
module.exports = router;