// src/components/TransactionTable.jsx
import React from "react";

function TransactionTable({ transactions, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="text-left px-6 py-3">Title</th>
            <th className="text-left px-6 py-3">Category</th>
            <th className="text-left px-6 py-3">Type</th>
            <th className="text-right px-6 py-3">Amount</th>
            <th className="text-left px-6 py-3">Date</th>
            <th className="text-center px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx._id}
              className="border-t hover:bg-gray-50 transition duration-150"
            >
              <td className="px-6 py-4 font-medium">{tx.title}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{tx.category}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    tx.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {tx.type}
                </span>
              </td>
              <td
                className={`px-6 py-4 text-right font-semibold ${
                  tx.type === "income" ? "text-green-600" : "text-red-500"
                }`}
              >
                {tx.type === "income" ? "+" : "-"}${tx.amount}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {new Date(tx.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 text-center space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  onClick={() => onEdit(tx)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => onDelete(tx._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
