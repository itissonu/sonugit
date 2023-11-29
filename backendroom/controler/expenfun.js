const User = require('../model/User.js')
const Room=require('../model/Room.js')
const Expense=require('../model/Expenses.js')

const addExpense = async (req, res) => {
    try {
      const userId = req.params.userId; // Get user ID from route params
      const { description, amount, date, photo,selectedroom } = req.body;
  
      
      const newExpense = new Expense({
        description,
        amount,
        date,
        photo,
        user: userId, 
        selectedroom,
      });
  
     
      await newExpense.save();

      await User.findByIdAndUpdate(userId, {
        $push: { expenses: newExpense._id },
      });
      await Room.findByIdAndUpdate(selectedroom, {
        $push: { expenses: newExpense._id },
      });  
  
      return res.status(201).json(newExpense);
    } catch (error) {
      console.error('Error adding expense:', error);
      return res.status(500).json("Expense creation failed");
    }
  };
  const deleteExpense = async (req, res) => {
    try {
      const userId = req.params.userId; 

      const expenseId = req.params.expenseId; 
  
      
      await Expense.findByIdAndRemove(expenseId);
  
      
      await User.findByIdAndUpdate(userId, {
        $pull: { expenses: expenseId },
      });
  
      return res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
      console.error('Error deleting expense:', error);
      return res.status(500).json("Expense deletion failed");
    }
  };

// Find all expenses where the 'user' field matches the user's ID
  const getUserExpenses = async (req, res) => {
    try {
      const userId = req.params.userId; 
  
      
      const expenses = await Expense.find({ user: userId });
  
      return res.status(200).json(expenses);
    } catch (error) {
      console.error('Error fetching user expenses:', error);
      return res.status(500).json("Error fetching expenses");
    }
  };
  const getUserExpensestotal = async (req, res) => {
    try {
      const userId = req.params.userId;
      const expenses = await Expense.find({ user: userId });
  
      const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
      return res.status(200).json({ totalAmount });
    } catch (error) {
      console.error('Error fetching user expenses:', error);
      return res.status(500).json("Error fetching expenses");
    }
  };

  // Find all expenses for all users
  const getTotalExpenses = async (req, res) => {
    try {
      const  roomId  = req.params.roomId;
     
      const room = await Room.findById(roomId).populate('expenses');
       

  
      
      const totalAmount = room.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
      return res.status(200).json({ totalAmount});
    } catch (error) {
      console.error('Error fetching total expenses:', error);
      return res.status(500).json("Error fetching total expenses");
    }
  };
  // controllers/expenseController.js

const editExpense = async (req, res) => {
  try {
    const userId = req.params.userId;
    const expenseId = req.params.expenseId;
    const { description, amount, date, photo, selectedroom } = req.body;

    
    const expense = await Expense.findById(expenseId);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.description = description;
    expense.amount = amount;
    expense.date = date;
    expense.photo = photo;
    expense.selectedroom = selectedroom;
    

    await expense.save();

    return res.status(200).json(expense);
  } catch (error) {
    console.error('Error editing expense:', error);
    return res.status(500).json("Expense edit failed");
  }
};


  module.exports={addExpense,deleteExpense,getUserExpenses,getUserExpensestotal,getTotalExpenses,editExpense}
  