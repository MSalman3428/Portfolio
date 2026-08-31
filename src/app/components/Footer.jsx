"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-slate-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="py-12 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex gap-8 font-medium">
          <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-yellow-500 transition-colors">About</Link>
          <Link href="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="https://linkedin.com/in/muhammad-salman-858247306" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-500 transition-colors"><FaLinkedin /></a>
          <a href="https://github.com/MSalman3428" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-yellow-500 transition-colors"><FaGithub /></a>
        </div>
      </div>

      <div className="text-center pb-8 text-sm opacity-70">
        © {year} Muhammad Salman. Built with Next.js & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;