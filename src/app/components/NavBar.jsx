"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
      <nav className="sticky top-0 z-50 w-full transition-colors duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          {/* LOGO WITH SCOPE ZOOM & GLOW */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg shadow-yellow-500/20 bg-slate-900 shrink-0">
                <Image src="/salman.jpg" alt="Muhammad Salman" fill sizes="44px" className="object-cover" priority />
              </div>
              <span className="scope-heading animate-glow-text font-bold text-slate-900 dark:text-white tracking-tight text-lg sm:text-xl font-heading">
              Muhammad <span className="text-yellow-500">Salman</span>
            </span>
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                  <Link
                      key={link.path}
                      href={link.path}
                      className={`relative text-sm font-semibold transition-colors duration-200 scope-heading ${
                          pathname === link.path ? "text-yellow-500" : "text-slate-600 dark:text-slate-300 hover:text-yellow-500"
                      }`}
                  >
                    {link.label}
                    {pathname === link.path && (
                        <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500" />
                    )}
                  </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

            {/* THEME TOGGLE */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-yellow-500 hover:ring-2 hover:ring-yellow-400/50 transition-all active:scale-90"
                aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} className="text-slate-700" />)}
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center gap-3">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-yellow-500"
                aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} className="text-slate-700" />)}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white p-1" aria-label="Toggle Navigation">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <div className="flex flex-col px-6 py-6 gap-4">
                  {navLinks.map((link) => (
                      <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium transition-colors scope-heading ${
                              pathname === link.path ? "text-yellow-500" : "text-slate-600 dark:text-slate-300"
                          }`}
                      >
                        {link.label}
                      </Link>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default NavBar;