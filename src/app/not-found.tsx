"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full text-center"
            >
                {/* 404 Large Glow Badge */}
                <div className="relative inline-block">
                    <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-8xl sm:text-9xl font-extrabold font-black-ops tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 drop-shadow-[0_10px_20px_rgba(234,179,8,0.3)]"
                    >
                        404
                    </motion.span>
                </div>

                {/* Error Details */}
                <h1 className="scope-heading text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-6">
                    Page Not Found
                </h1>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed font-sans">
                    The requested path doesn't exist or has been moved. Check the URL or navigate back to safety.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto group bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-7 py-3.5 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 text-sm"
                    >
                        <FaHome size={16} /> Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto border border-slate-300 dark:border-slate-800 hover:border-yellow-500 px-7 py-3.5 rounded-full font-bold transition-all hover:scale-105 backdrop-blur-md bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 text-sm"
                    >
                        <FaArrowLeft size={14} /> Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}