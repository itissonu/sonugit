const express=require('express');
const { addExpense,deleteExpense,getUserExpenses,getUserExpensestotal,getTotalExpenses, editExpense} = require('../controler/expenfun');

const router=express.Router()

//add a expen..
router.post('/add-expense/:userId', addExpense);

//  a route to delete an expense
router.delete('/delete-expense/:userId/:expenseId', deleteExpense);
// a route to update an expenses
router.put('/edit/:userId/:expenseId',editExpense);
//  a route to fetch all expenses for a user
router.get('/user-expenses/:userId', getUserExpenses);

// a route to fetch total user expenses
router.get('/user-expenses-total/:userId', getUserExpensestotal);

//  a route to fetch the total expenses for all users
router.get('/total-expenses/:roomId', getTotalExpenses);






module.exports = router; 