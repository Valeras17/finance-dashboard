import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend ,ResponsiveContainer} from "recharts";

// Predefined colors for pie slices
const COLORS = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff8042",
  "#a4de6c", "#d0ed57", "#8dd1e1", "#83a6ed"
];

function CategoryPieChart({ transactions }) {
  // Grouping transactions by category
  const categoryMap = {};

  transactions.forEach((tx) => {
    const category = tx.category || "Uncategorized";
    categoryMap[category] = (categoryMap[category] || 0) + tx.amount;
  });

  const data = Object.entries(categoryMap).map(([name, value]) => ({ name, value }));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    
    <div className="bg-white rounded-2xl shadow-lg p-4 animate-fade-in transition-transform hover:scale-105">
  <h2 className="text-lg font-semibold text-gray-700 mb-4">Category Breakdown</h2>

  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label={({ name, value }) => {
          const percent = ((value / total) * 100).toFixed(0);
          return `${name}: ${percent}%`;
        }}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="horizontal" verticalAlign="bottom" align="center" />
    </PieChart>
  </ResponsiveContainer>
</div>


    
  );
}

export default CategoryPieChart;
