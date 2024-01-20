const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
