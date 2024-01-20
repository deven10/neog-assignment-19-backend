require("./db");

const incomeRouter = require("./src/Routes/income.routes");
const expenseRouter = require("./src/Routes/expense.routes");
const savingsRouter = require("./src/Routes/savings.routes");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/savings", savingsRouter);

app.get("/", (req, res) => {
  res.send("<h1> Assignment 19 neoG </h1>");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ error: "No route found!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
