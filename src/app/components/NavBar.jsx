"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

        {/* LOGO */}
        <motion.div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500">
            <Image
              src="./darklogo.png"
              alt="logo"
              fill
              className="object-cover"
            />
          </div>

          <span className="font-bold text-yellow-400">
            Muhammad Salman
          </span>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* DARK MODE BUTTON */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="ml-4 px-3 py-1 border border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-3">

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="px-2 py-1 border border-yellow-400 text-yellow-400 rounded"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
