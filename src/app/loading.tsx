"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 relative z-20">
            <div className="relative flex items-center justify-center">
                {/* Outer Pulsing Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute w-32 h-32 rounded-full bg-yellow-500/20 blur-xl"
                />

                {/* Rotating Spinner Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-20 h-20 rounded-full border-4 border-transparent border-t-yellow-500 border-r-yellow-500/40"
                />

                {/* Inner Initial / Core */}
                <div className="absolute font-mono font-bold text-lg text-slate-900 dark:text-white">
                    MS
                </div>
            </div>

            {/* Loading Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
            >
                <p className="scope-heading animate-glow-text font-bold text-lg tracking-wider font-heading">
                    Loading <span className="text-yellow-500">Experience...</span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                    Preparing 3D environment & components
                </p>
            </motion.div>
        </div>
    );
}