const express = require("express");
const router = express.Router();
const {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

// 📌 GET all transactions
router.get("/", getAllTransactions);

// 📌 POST create a new transaction
router.post("/", createTransaction);

// 📌 PUT update a transaction
router.put("/:id", updateTransaction);

// 📌 DELETE a transaction
router.delete("/:id", deleteTransaction);

module.exports = router;
