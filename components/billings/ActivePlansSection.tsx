import React, { useState } from "react";
import { Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialTiers = [
  {
    plan: "Freemium",
    currency: "NGN",
    monthly: "₦0",
    annual: "₦0",
    updated: "Apr 10, 2025; 10:00 PM",
    features: "Basic access, Basic access, Basic access",
    users: "1,203",
  },
  {
    plan: "Essentials",
    currency: "NGN",
    monthly: "₦2,000",
    annual: "₦100,000",
    updated: "Apr 10, 2025; 10:00 PM",
    features: "Basic access, Basic access, Basic access",
    users: "1,203",
  },
  {
    plan: "Advanced",
    currency: "NGN",
    monthly: "₦5,000",
    annual: "₦150,000",
    updated: "Apr 10, 2025; 10:00 PM",
    features: "Basic access, Basic access, Basic access",
    users: "1,203",
  },
  {
    plan: "Professional",
    currency: "NGN",
    monthly: "₦10,000",
    annual: "₦200,000",
    updated: "Apr 10, 2025; 10:00 PM",
    features: "Basic access, Basic access, Basic access",
    users: "1,203",
  },
];

export function ActivePlansSection() {
  const [country, setCountry] = useState("NGN");
  const [tiers, setTiers] = useState(initialTiers);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpenIdx, setMenuOpenIdx] = useState<number | null>(null);

  // Placeholder for form state
  const [form, setForm] = useState({
    plan: "",
    currency: country,
    monthly: "",
    annual: "",
    updated: new Date().toLocaleString(),
    features: "",
    users: "0",
  });

  const handleAddTier = () => {
    setTiers([...tiers, { ...form }]);
    setModalOpen(false);
    setForm({
      plan: "",
      currency: country,
      monthly: "",
      annual: "",
      updated: new Date().toLocaleString(),
      features: "",
      users: "0",
    });
  };

  const handleDelete = (idx: number) => {
    setTiers(tiers.filter((_, i) => i !== idx));
    setMenuOpenIdx(null);
  };

  return (
    <section className="my-8 text-[12px]">
      <div className="flex justify-between items-center mb-4">
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger className="w-[160px] h-[48px] rounded-[12px] border-2 border-white shadow bg-white flex items-center gap-2">
            {/* Add flag icon here if desired */}
            <span className="w-6 h-6 bg-green-100 rounded mr-2 inline-block" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NGN">Nigeria</SelectItem>
            <SelectItem value="GH">Ghana</SelectItem>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="KA">Kenya</SelectItem>
          </SelectContent>
        </Select>
        <Button
          className="bg-[#0967D2] text-white rounded-[12px] px-6 py-3 flex items-center gap-2 text-base font-semibold shadow"
          onClick={() => setModalOpen(true)}
        >
          <Plus className="w-5 h-5 mr-2" /> Add new tier
        </Button>
      </div>
      <div className="bg-white rounded-[24px] shadow p-6 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-muted-foreground text-[15px] font-semibold">
              <th className="text-left py-2 px-4">PLAN TIERS</th>
              <th className="text-left py-2 px-4">CURRENCY</th>
              <th className="text-left py-2 px-4">MONTHLY PRICE</th>
              <th className="text-left py-2 px-4">ANNUAL PRICE</th>
              <th className="text-left py-2 px-4">LAST UPDATED</th>
              <th className="text-left py-2 px-4">FEATURES</th>
              <th className="text-left py-2 px-4">ACTIVE USERS</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-3 px-4 font-medium">{tier.plan}</td>
                <td className="py-3 px-4">{tier.currency}</td>
                <td className="py-3 px-4">{tier.monthly}</td>
                <td className="py-3 px-4">{tier.annual}</td>
                <td className="py-3 px-4">{tier.updated}</td>
                <td className="py-3 px-4">
                  {tier.features}{" "}
                  <span className="text-blue-600 cursor-pointer">see more</span>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-green-50 text-green-600 rounded-[8px] px-4 py-1 font-semibold shadow text-base inline-block border border-green-100">
                    {tier.users}
                  </span>
                </td>
                <td className="py-3 px-4 relative">
                  <button
                    onClick={() => setMenuOpenIdx(idx)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {menuOpenIdx === idx && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => setModalOpen(true)}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                        onClick={() => handleDelete(idx)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for Add/Edit Tier */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] p-8 w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Add New Tier</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTier();
              }}
              className="flex flex-col gap-4"
            >
              <input
                className="border rounded px-3 py-2"
                placeholder="Plan Tiers"
                value={form.plan}
                onChange={(e) => setForm({ ...form, plan: e.target.value })}
                required
              />
              <Select
                value={form.currency}
                onValueChange={(val) => setForm({ ...form, currency: val })}
              >
                <SelectTrigger className="border rounded px-3 py-2">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NGN">NGN</SelectItem>
                  <SelectItem value="GH">GH</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="KA">KA</SelectItem>
                </SelectContent>
              </Select>
              <input
                className="border rounded px-3 py-2"
                placeholder="Monthly Price"
                value={form.monthly}
                onChange={(e) => setForm({ ...form, monthly: e.target.value })}
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Annual Price"
                value={form.annual}
                onChange={(e) => setForm({ ...form, annual: e.target.value })}
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Last Updated"
                value={form.updated}
                onChange={(e) => setForm({ ...form, updated: e.target.value })}
                required
              />
              <textarea
                className="border rounded px-3 py-2"
                placeholder="Features"
                value={form.features}
                onChange={(e) => setForm({ ...form, features: e.target.value })}
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Active Users"
                value={form.users}
                onChange={(e) => setForm({ ...form, users: e.target.value })}
                required
              />
              <Button
                type="submit"
                className="bg-primary text-white rounded px-4 py-2 mt-2"
              >
                Add Tier
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
