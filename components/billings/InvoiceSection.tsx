import React from "react";

export function InvoiceSection() {
  return (
    <section className="my-8 p-6 border rounded shadow-sm">
      <h3 className="font-semibold mb-4">Invoice Settings</h3>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          Auto-generate invoice after payment
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          Include tax details
        </label>
        <div>
          <label className="block text-sm mb-1">Default sender email</label>
          <input
            type="email"
            className="border rounded px-2 py-1 w-full"
            defaultValue="billing@talentrah.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Company name</label>
          <input
            type="text"
            className="border rounded px-2 py-1 w-full"
            defaultValue="Talentrah"
          />
        </div>
      </div>
    </section>
  );
}
