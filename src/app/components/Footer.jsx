"use client";

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-slate-50/90 dark:bg-slate-950/90 text-slate-700 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 backdrop-blur-md">
            <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

                {/* BRAND / TITLE */}
                <div className="flex items-center gap-3 text-center md:text-left">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg shadow-yellow-500/20 bg-slate-900 shrink-0">
                        <NextImage
                            src="/salman.jpg"
                            alt="Muhammad Salman"
                            fill
                            sizes="44px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h2 className="scope-heading animate-glow-text text-xl font-bold text-slate-900 dark:text-white font-heading">
                            Muhammad <span className="text-yellow-500">Salman</span>
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                            Full-Stack Software Engineer
                        </p>
                    </div>
                </div>

                {/* NAV LINKS */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-medium text-sm text-slate-800 dark:text-slate-200">
                    <Link href="/" className="scope-heading hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="scope-heading hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="scope-heading hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
                        Services
                    </Link>
                    <Link href="/portfolio" className="scope-heading hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="scope-heading hover:text-yellow-500 dark:hover:text-yellow-500 transition-colors">
                        Contact
                    </Link>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-4 text-xl">
                    <a
                        href="https://linkedin.com/in/muhammad-salman-sheikhan-858247306"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 transition-all shadow-sm"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/MSalman3428"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 transition-all shadow-sm"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:msalman3428@gmail.com"
                        aria-label="Email"
                        className="p-2.5 rounded-full bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 transition-all shadow-sm"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* COPYRIGHT & CREDITS */}
            <div className="text-center py-4 text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200/60 dark:border-slate-900 font-mono px-4">
                © {year} Muhammad Salman. Built with Next.js, Three.js & Tailwind CSS.
            </div>
        </footer>
    );
};

export default Footer;