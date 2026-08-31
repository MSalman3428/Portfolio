"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-11 h-11"></div>;

  return (
      <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800/80 text-yellow-500 dark:text-yellow-400
                 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 shadow-md active:scale-95 backdrop-blur-md"
          aria-label="Toggle Theme"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          {theme === "dark" ? (
              <FaSun className="text-xl animate-in zoom-in duration-300" />
          ) : (
              <FaMoon className="text-xl animate-in zoom-in duration-300 text-slate-700" />
          )}
        </div>
      </button>
  );
}