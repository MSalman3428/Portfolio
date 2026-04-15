"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">

      {/* LINE */}
      <div className="h-px w-full bg-gray-700"></div>

      <div className="py-8 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LINKS */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="px-3 py-1 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* SOCIAL */}
        <div className="flex gap-4 text-xl">
          <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
          <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          <FaLinkedin className="hover:text-yellow-400 cursor-pointer" />
          <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-800">
        © {year} Muhammad Salman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
