import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { groupTransactionsByPeriod } from "../utils/groupTransactionsByPeriod";

function IncomeExpenseTrendChart({ transactions, period = "month" }) {
  const data = groupTransactionsByPeriod(transactions, period);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 animate-fade-in transition-transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        {period === "month" ? "Daily Trends (This Month)" : "Monthly Trends (This Year)"}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#16a34a" name="Income" />
          <Line type="monotone" dataKey="expense" stroke="#dc2626" name="Expense" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeExpenseTrendChart;
