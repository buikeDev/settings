"use client";

import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" closeButton richColors />
      {children}
    </>
  );
}
