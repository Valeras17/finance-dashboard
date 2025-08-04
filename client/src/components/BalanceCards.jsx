import React from "react";

function BalanceCards({ income, expense, balance }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-gray-600">Total Income</h4>
        <p className="text-2xl font-bold text-green-600">
          ${income.toFixed(2)}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-gray-600">Total Expense</h4>
        <p className="text-2xl font-bold text-red-500">
          ${expense.toFixed(2)}
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h4 className="text-gray-600">Balance</h4>
        <p className="text-2xl font-bold text-blue-600">
          ${balance.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default BalanceCards;
