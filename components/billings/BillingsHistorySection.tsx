import React from "react";
import { ExportDropdownMenu } from "./ExportDropdownMenu";
import { FilterBar } from "./FilterBar";
import { BillingsCard } from "./BillingsCard";

export function BillingsHistorySection() {
  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4">
        <FilterBar />
        <ExportDropdownMenu />
      </div>
      {/* List of billing cards (replace with table for desktop if needed) */}
      <BillingsCard />
      <BillingsCard />
      <BillingsCard />
    </section>
  );
}
