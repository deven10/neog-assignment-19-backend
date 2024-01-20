const Income = require("../Models/Income");

// ----------------------------
// for creating new income
async function addIncome(incomeDetails) {
  try {
    const newIncome = new Income(incomeDetails);
    const savedIncome = await newIncome.save();
    return savedIncome;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all incomes
async function findAllIncomes() {
  try {
    const incomes = await Income.find();
    return incomes;
  } catch (e) {
    throw e;
  }
}

module.exports = { addIncome, findAllIncomes };
