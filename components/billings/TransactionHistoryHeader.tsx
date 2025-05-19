import React from "react";
import { ArrowUpFromLine } from "lucide-react";

export const TransactionHistoryHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-lg font-bold">BILLING HISTORY: TRANSACTIONS</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
        <ArrowUpFromLine size={18} />
        Export
      </button>
    </div>
  );
};
