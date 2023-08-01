const Hotel = require('../modals/Hotel.js');

async function createHotel(req,res,next){
    const newHotel =  new Hotel(req.body);  //m created a schema for adding or creating hotel

    

    try {
       const saved= await newHotel.save();  //saving the data in db 
        res.status(200).json(saved); //Respond with the saved hotel document as JSON data
    } catch (error) {
        next(error);
    }
}
async function updateHotel(req,res,next){
    try {
        const updated= await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{ new: true })  //findByIdAndUpdate() is a Mongoose method used to find a document by its ID (req.params.id) and update it with the properties specified in req.body. The $set operator is used to specify the update operation.
         res.status(200).json(updated); //
     } catch (error) {
         next(error);
     }
}
async function deleteHotel(req,res,next){
    try {
        await Hotel.findByIdAndDelete(req.params.id)  
        res.status(200).json('hotel has been deleted'); //
    } catch (error) {
        next(error);
    }
}
async function findHotel(req,res,next){
    try {
        const wantedhotel=  await Hotel.findById(req.params.id)  
          res.status(200).json(wantedhotel); //
      } catch (error) {
          next(error);
      }
}
async function allHotel(req,res,next){
    try {
        const wantedhotels=  await Hotel.find()  
          res.status(200).json(wantedhotels); //
      } catch (error) {
          next(error);
      }
}
module.exports = {
    createHotel,
    updateHotel,
    deleteHotel,
    findHotel,
    allHotel,
  };