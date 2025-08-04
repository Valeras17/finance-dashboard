import { useEffect, useState } from "react";
import { getTransactions } from "../services/api/transactionService";
import TransactionForm from "../components/TransactionForm";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const loadTransactions = async () => {
    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } catch (err) {
      console.error("Error loading transactions:", err);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">📋 Transactions</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition mb-4"
        >
          {showForm ? "Close Form" : "➕ Add Transaction"}
        </button>

        {showForm && (
          <TransactionForm
            onSuccess={() => {
              loadTransactions();
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}

        <ul className="space-y-2">
          {Array.isArray(transactions) && transactions.map((tx) => (
            <li
              key={tx._id}
              className={`flex items-center justify-between px-4 py-2 rounded-md shadow-sm ${
                tx.type === "income" ? "bg-green-50 border-l-4 border-green-400" : "bg-red-50 border-l-4 border-red-400"
              }`}
            >
              <span className="font-medium text-gray-800">{tx.title}</span>
              <span className="font-mono text-sm text-gray-700">
                {tx.amount} {tx.type === "income" ? "🟢" : "🔴"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
