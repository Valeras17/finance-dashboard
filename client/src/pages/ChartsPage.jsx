import React from "react";
import { useTransactions } from "../hooks/useTransactions";
import IncomeExpenseChart from "../charts/IncomeExpenseChart";
import CategoryPieChart from "../charts/CategoryPieChart";
import IncomeExpenseTrendChart from "../charts/IncomeExpenseTrendChart"; 
import BalanceOverview from "../components/BalanceOverview";

function ChartsPage() {
  const { transactions, loading } = useTransactions();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading charts...</p>
      </div>
    );
  }

  return (
    
  <div className="max-w-7xl mx-auto py-6 px-4">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">📊 Charts</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        <BalanceOverview transactions={transactions} />
      </div>

      <IncomeExpenseChart transactions={transactions} />
      <CategoryPieChart transactions={transactions} />
      <IncomeExpenseTrendChart transactions={transactions} period="month" />
      <IncomeExpenseTrendChart transactions={transactions} period="year" />
    </div>
  </div>
);

}

export default ChartsPage;
