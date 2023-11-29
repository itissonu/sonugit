const mongoose =require("mongoose")
const {Schema}=mongoose

const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      username: {
        type: String,
        unique: true,
        required: true
      },
      email: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      profilePic: {
        type: String
      },
      selectedroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
      },
      expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
      }],
});


const User= mongoose.model('User', UserSchema);

module.exports = User;