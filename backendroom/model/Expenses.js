const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  photo: {
    type: String, 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user who added the expense
    required: true,
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
