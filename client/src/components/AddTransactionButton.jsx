import React from "react";
import { Plus } from "lucide-react";

function AddTransactionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
    >
      <Plus size={18} />
      Add Transaction
    </button>
  );
}

export default AddTransactionButton;
