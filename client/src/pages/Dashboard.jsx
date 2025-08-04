import React, { useState, useEffect } from "react";
import { useTransactions } from "../hooks/useTransactions";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import BalanceCards from "../components/BalanceCards";
import AddTransactionButton from "../components/AddTransactionButton";
import IncomeExpenseChart from "../charts/IncomeExpenseChart";
import CategoryPieChart from "../charts/CategoryPieChart";
import {
  createTransaction,
  updateTransaction,
  deleteTransaction
} from "../services/api/transactionService";

function Dashboard() {
  const { transactions, loading } = useTransactions();
  const [localTx, setLocalTx] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTx, setEditingTx] = useState(null);

  // 💡 Один раз загружаем данные с сервера
  useEffect(() => {
    if (Array.isArray(transactions) && transactions.length > 0) {
      setLocalTx(transactions);
    }
  }, [transactions]);

  // 💰 Подсчёты
  const totalIncome = localTx
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = localTx
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = totalIncome - totalExpense;

  // ✅ Добавление / обновление
  const handleSave = async (tx) => {
    try {
      if (tx._id) {
        const updated = await updateTransaction(tx._id, tx);
        setLocalTx((prev) =>
          prev.map((item) => (item._id === tx._id ? updated : item))
        );
      } else {
        const created = await createTransaction(tx);
        setLocalTx((prev) => [created, ...prev]);
      }

      setShowForm(false);
      setEditingTx(null);
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
      alert("Ошибка при сохранении транзакции");
    }
  };

  // ✅ Удаление
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Ты точно хочешь удалить?");
    if (!confirmDelete) return;

    try {
      await deleteTransaction(id);
      setLocalTx((prev) => prev.filter((tx) => tx._id !== id));
    } catch (error) {
      console.error("Ошибка при удалении:", error);
      alert("Ошибка при удалении транзакции");
    }
  };

  const handleEdit = (tx) => {
    setEditingTx(tx);
    setShowForm(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
            💰 Financial Dashboard
          </h1>
          <AddTransactionButton
            onClick={() => {
              setEditingTx(null);
              setShowForm(true);
            }}
          />
        </div>

        {/* Form */}
        {showForm && (
          <TransactionForm
            initialData={editingTx}
            onSubmit={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingTx(null);
            }}
          />
        )}

        {/* Balance Cards */}
        <BalanceCards
          income={totalIncome}
          expense={totalExpense}
          balance={balance}
        />

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-white shadow-md rounded-lg p-4">
            <IncomeExpenseChart transactions={localTx} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <CategoryPieChart transactions={localTx} />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <TransactionTable
            transactions={localTx}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
