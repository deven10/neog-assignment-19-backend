const Expense = require("../Models/Expense");

// ----------------------------
// for creating new income
async function addExpense(expenseDetails) {
  try {
    const newExpense = new Expense(expenseDetails);
    const savedExpense = await newExpense.save();
    return savedExpense;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all incomes
async function findAllExpenses() {
  try {
    const expenses = await Expense.find();
    return expenses;
  } catch (e) {
    throw e;
  }
}

module.exports = { addExpense, findAllExpenses };

// ----
// addSale({
//   name: "Football Shoes",
//   price: 750,
//   quantity: 5,
// });

// findAllSales();
