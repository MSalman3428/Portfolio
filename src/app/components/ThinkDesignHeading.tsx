"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ThinkDesignHeadingProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
    lensSize?: number;
}

export default function ThinkDesignHeading({
                                               children,
                                               className = "",
                                               as: Tag = "h2",
                                               lensSize = 130,
                                           }: ThinkDesignHeadingProps) {
    const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!headingRef.current || isTouchDevice) return;
        const rect = headingRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={headingRef}
            onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
            onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className={`relative inline-block cursor-default select-none ${className}`}
        >
            {/* Base Text Layer */}
            <Tag className="relative z-0 leading-tight">{children}</Tag>

            {/* Spotlight Inversion Mask Layer */}
            {!isTouchDevice && (
                <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={{
                        clipPath: isHovered
                            ? `circle(${lensSize / 2}px at ${mousePos.x}px ${mousePos.y}px)`
                            : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 30,
                        mass: 0.1,
                    }}
                    className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-yellow-500 dark:bg-yellow-400 select-none shadow-2xl rounded-sm"
                >
                    <Tag className="relative leading-tight text-white dark:text-slate-950 [&_span]:text-blue-400 dark:[&_span]:text-blue-400 px-0.5">
                        {children}
                    </Tag>
                </motion.div>
            )}

            {/* Ambient Glow */}
            {!isTouchDevice && (
                <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={{
                        x: mousePos.x - lensSize / 2,
                        y: mousePos.y - lensSize / 2,
                        scale: isHovered ? 1 : 0,
                        opacity: isHovered ? 0.35 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                        mass: 0.1,
                    }}
                    style={{ width: lensSize, height: lensSize }}
                    className="pointer-events-none absolute top-0 left-0 rounded-full bg-yellow-400/50 dark:bg-yellow-400/40 blur-xl z-10"
                />
            )}
        </div>
    );
}