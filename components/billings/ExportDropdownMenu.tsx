import React, { useState } from "react";

export function ExportDropdownMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="bg-primary text-white rounded px-3 py-1"
        onClick={() => setOpen((o) => !o)}
      >
        Export
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            PDF
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            EXCEL
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            CSV
          </button>
        </div>
      )}
    </div>
  );
}
