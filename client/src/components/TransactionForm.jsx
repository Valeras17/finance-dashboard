import React, { useEffect, useState } from "react";

function TransactionForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  // 👇 Populate fields when editing
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title ?? "");
      setAmount(String(initialData.amount ?? ""));
      setType(initialData.type ?? "income");
      setCategory(initialData.category ?? "");
      setDate(initialData.date?.substring(0, 10) ?? "");
    } else {
      // 👇 Reset fields if switching to add mode
      setTitle("");
      setAmount("");
      setType("income");
      setCategory("");
      setDate("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const txData = {
      _id: initialData?._id, // pass _id only if editing
      title,
      amount: parseFloat(amount),
      type,
      category,
      date,
    };

    onSubmit(txData); // 💡 let Dashboard handle save logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-700">
        {initialData ? "Edit Transaction" : "Add Transaction"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Save
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TransactionForm;
