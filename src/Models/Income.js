const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
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

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;
