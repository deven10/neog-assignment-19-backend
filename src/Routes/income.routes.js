const express = require("express");

const incomeRouter = express.Router();
incomeRouter.use(express.json());

const {
  addIncome,
  findAllIncomes,
} = require("../Controllers/income.controller");

incomeRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const income = await addIncome(body);
    res.status(201).json({ message: "New Income added successfully", income });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

incomeRouter.get("/", async (req, res) => {
  try {
    const incomes = await findAllIncomes();
    if (incomes.length > 0) {
      res
        .status(200)
        .json({ message: "All Incomes fetched successfully", incomes });
    } else {
      res.status(204).json({ message: "No Income found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = incomeRouter;
