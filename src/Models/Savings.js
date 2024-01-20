const mongoose = require("mongoose");

const SavingsSchema = new mongoose.Schema(
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

const Savings = mongoose.model("Savings", SavingsSchema);

module.exports = Savings;
