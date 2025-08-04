import React from "react";

function TransactionCard({ title, amount, type, category, createdAt }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">
            {category} • {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className={`text-right font-semibold ${type === "income" ? "text-green-600" : "text-red-500"}`}>
          {type === "income" ? "+" : "-"}${amount}
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;
