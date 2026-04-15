"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  // Wait until mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}