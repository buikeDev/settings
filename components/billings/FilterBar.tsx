import React from "react";

export function FilterBar() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Status Dropdown */}
      <select className="border rounded px-2 py-1">
        <option>Status</option>
        <option>Successful</option>
        <option>Failed</option>
      </select>
      {/* Date Range Pickers */}
      <input
        type="date"
        className="border rounded px-2 py-1"
        placeholder="From"
      />
      <input
        type="date"
        className="border rounded px-2 py-1"
        placeholder="To"
      />
      {/* Apply/Clear Buttons */}
      <button className="bg-primary text-white rounded px-3 py-1">
        Apply filter
      </button>
      <button className="border rounded px-3 py-1">Clear filter</button>
      {/* Search Bar */}
      <input
        type="text"
        className="border rounded px-2 py-1 ml-2"
        placeholder="Search"
      />
    </div>
  );
}
