const express = require("express");

const savingsRouter = express.Router();
savingsRouter.use(express.json());

const {
  addSavings,
  findAllSavings,
} = require("../Controllers/savings.controller");

savingsRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const saving = await addSavings(body);
    res.status(201).json({ message: "New Saving added successfully", saving });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

savingsRouter.get("/", async (req, res) => {
  try {
    const savings = await findAllSavings();
    if (savings.length > 0) {
      res
        .status(200)
        .json({ message: "All Savings fetched successfully", savings });
    } else {
      res.status(204).json({ message: "No Savings found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = savingsRouter;
