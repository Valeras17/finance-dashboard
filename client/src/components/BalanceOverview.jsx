import React from "react";

// Принимаем массив транзакций
function BalanceOverview({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expense;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">💰 Balance Overview</h2>

      <div className="flex flex-col sm:flex-row justify-around items-center gap-4">
        <div className="text-green-600">
          <p className="text-lg font-medium">Income</p>
          <p className="text-xl font-bold">${income.toFixed(2)}</p>
        </div>

        <div className="text-red-600">
          <p className="text-lg font-medium">Expenses</p>
          <p className="text-xl font-bold">${expense.toFixed(2)}</p>
        </div>

        <div className="text-gray-800">
          <p className="text-lg font-medium">Balance</p>
          <p className="text-xl font-bold">${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
