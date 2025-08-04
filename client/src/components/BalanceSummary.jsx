import React from "react";

function BalanceSummary({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-sm text-gray-500">Total Income</p>
        <p className="text-2xl font-bold text-green-600">${income.toFixed(2)}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-sm text-gray-500">Total Expense</p>
        <p className="text-2xl font-bold text-red-500">${expense.toFixed(2)}</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-sm text-gray-500">Balance</p>
        <p className="text-2xl font-bold text-blue-600">${balance.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default BalanceSummary;
