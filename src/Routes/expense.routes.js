const express = require("express");

const expenseRouter = express.Router();
expenseRouter.use(express.json());

const {
  addExpense,
  findAllExpenses,
} = require("../Controllers/expense.controller");

expenseRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const expense = await addExpense(body);
    res
      .status(201)
      .json({ message: "New Expense added successfully", expense });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

expenseRouter.get("/", async (req, res) => {
  try {
    const expenses = await findAllExpenses();
    if (expenses.length > 0) {
      res
        .status(200)
        .json({ message: "All Expenses fetched successfully", expenses });
    } else {
      res.status(204).json({ message: "No Expense found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = expenseRouter;
