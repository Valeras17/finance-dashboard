export function groupTransactionsByPeriod(transactions, period = "month") {
  const grouped = {};

  transactions.forEach((tx) => {
    const date = new Date(tx.createdAt);
    let key;

    if (period === "month") {
      key = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } else if (period === "year") {
      key = date.toLocaleDateString("en-US", { month: "short" });
    } else {
      key = date.toLocaleDateString(); // fallback
    }

    if (!grouped[key]) {
      grouped[key] = { income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      grouped[key].income += tx.amount;
    } else if (tx.type === "expense") {
      grouped[key].expense += tx.amount;
    }
  });

  return Object.entries(grouped).map(([date, values]) => ({
    date,
    ...values,
  }));
}
