const Transaction = require("../models/Transaction");

// 👉 Get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching transactions" });
  }
};

// 👉 Create a transaction
const createTransaction = async (req, res) => {
  try {
    const { title, amount, type, category, date } = req.body;

    // 💬 Покажем, что прилетает
    console.log("📩 Body received:", req.body);

    const newTransaction = new Transaction({
      title,
      amount,
      type,
      category,
      date,
    });

    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    // 🔥 Выводим подробную ошибку в консоль
    console.error("❌ Ошибка создания:", error.message);
    res.status(400).json({ message: "Failed to create transaction", error: error.message });
  }
};


// 👉 Update a transaction
const updateTransaction = async (req, res) => {
  try {
    const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update failed", error });
  }
};

// 👉 Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed", error });
  }
};

module.exports = {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};
