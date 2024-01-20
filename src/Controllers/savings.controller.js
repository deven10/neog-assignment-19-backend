const Savings = require("../Models/Savings");

// ----------------------------
// for creating new income
async function addSavings(savingDetails) {
  try {
    const newSavings = new Savings(savingDetails);
    const savedSavings = await newSavings.save();
    return savedSavings;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all incomes
async function findAllSavings() {
  try {
    const savings = await Savings.find();
    return savings;
  } catch (e) {
    throw e;
  }
}

module.exports = { addSavings, findAllSavings };
