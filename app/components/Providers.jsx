"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <div>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </div>
  );
}
