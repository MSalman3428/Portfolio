"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaArrowRight,
  FaDownload,
  FaHandPointer,
} from "react-icons/fa";
import ThinkDesignHeading from "../components/ThinkDesignHeading";

export default function AboutPage() {
  const [isBroken, setIsBroken] = useState(false);
  const [isHanging, setIsHanging] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();

  // Double click trigger: Freely oscillate/swing the frame on the nail
  const handleDoubleClick = () => {
    if (!isHanging) return;
    controls.start({
      rotate: [0, -18, 15, -10, 6, -3, 0],
      transition: {
        duration: 2.2,
        ease: "easeInOut",
      },
    });
  };

  // Drag logic: If stretched beyond 150px threshold, break the string and fall
  const handleDragEnd = (_: any, info: { offset: { x: number; y: number } }) => {
    setIsDragging(false);
    if (!isHanging) return;

    const distance = Math.hypot(info.offset.x, info.offset.y);

    if (distance > 150) {
      // Break string and trigger fall animation
      setIsHanging(false);
      setIsBroken(true);
      controls.start({
        y: 280,
        x: info.offset.x * 0.4,
        rotate: info.offset.x > 0 ? 45 : -45,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 1.2,
        },
      });
    } else {
      // Return smoothly to nail rest position
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 12,
        },
      });
    }
  };

  // Reset frame back to nail
  const resetFrame = () => {
    setIsBroken(false);
    setIsHanging(true);
    controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.5 },
    });
  };

  return (
      <div className="min-h-screen bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors duration-300 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* HERO INTRO */}
          <section className="grid md:grid-cols-12 gap-12 items-center">
            {/* SINGLE NAIL HANGING FRAME CONTAINER */}
            <div className="md:col-span-5 relative flex flex-col items-center justify-start pt-8 pb-4 min-h-[480px] z-30 overflow-visible">

              {/* TOOLTIP INSTRUCTION */}
              <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 z-40 flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-xs font-mono px-3.5 py-1.5 rounded-full shadow-sm pointer-events-none text-center"
              >
                <FaHandPointer className="animate-bounce text-yellow-500 flex-shrink-0" />
                <span>
                {isHanging
                    ? "Double-click to swing • Drag hard to break string"
                    : "Frame fallen! Tap to hang again"}
              </span>
              </motion.div>

              {/* SINGLE WALL NAIL / MOUNT */}
              <div className="absolute top-8 z-30 flex flex-col items-center">
                {/* Metallic Nail Head */}
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-slate-800 via-slate-500 to-slate-200 shadow-lg border border-slate-700 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 shadow-inner" />
                </div>
                {/* Shadow underneath */}
                <div className="w-3 h-1.5 bg-black/50 rounded-full blur-[1px] mt-0.5" />
              </div>

              {/* DRAGGABLE & SWINGING FRAME WRAPPER */}
              <motion.div
                  drag={isHanging}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragElastic={0.8}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  onDoubleClick={handleDoubleClick}
                  animate={controls}
                  className="relative flex flex-col items-center origin-top cursor-grab active:cursor-grabbing z-20 mt-10 overflow-visible"
              >
                {/* HANGING STRING (BREAKS WHEN DROPPED) */}
                <AnimatePresence>
                  {isHanging && (
                      <motion.svg
                          initial={{ opacity: 1, scaleY: 1 }}
                          exit={{ opacity: 0, scaleY: 0 }}
                          className="w-48 h-16 -mt-1 z-10 overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none"
                          viewBox="0 0 200 60"
                          fill="none"
                      >
                        {/* Outer String Line to single nail point (100, 10) */}
                        <path
                            d="M 100 10 L 22 55 M 100 10 L 178 55"
                            stroke="#475569"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                        />
                        {/* Inner Highlight Thread */}
                        <path
                            d="M 100 10 L 22 55 M 100 10 L 178 55"
                            stroke="#f8fafc"
                            strokeWidth="1.2"
                            strokeDasharray="4 2"
                            strokeLinecap="round"
                        />
                      </motion.svg>
                  )}
                </AnimatePresence>

                {/* PICTURE FRAME */}
                <div
                    onClick={!isHanging ? resetFrame : undefined}
                    className={`relative -mt-1 p-3 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-slate-300 dark:border-slate-700 shadow-[0_25px_35px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_35px_-5px_rgba(0,0,0,0.7)] transition-transform ${
                        !isHanging ? "cursor-pointer hover:scale-105" : ""
                    }`}
                >
                  {/* TOP MOUNTING HOLE FOR STRING */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-400 dark:border-slate-600 shadow-inner z-30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-950" />
                  </div>

                  {/* RIVETS / CORNER BRACKETS */}
                  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shadow-inner" />
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shadow-inner" />

                  {/* INNER IMAGE CONTAINER */}
                  <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-300/60 dark:border-slate-800 pointer-events-none">
                    <Image
                        src="/salman-both.png"
                        alt="Muhammad Salman"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-bottom filter contrast-105"
                        priority
                    />

                    {/* MIRROR GLASS BREAK OVERLAY (STAYS INSIDE FRAME ONLY) */}
                    {isBroken && (
                        <svg
                            className="absolute inset-0 w-full h-full z-20 pointer-events-none mix-blend-overlay opacity-90"
                            viewBox="0 0 300 350"
                            fill="none"
                        >
                          {/* CRACK LINES */}
                          <path
                              d="M 150 175 L 30 20 M 150 175 L 280 60 M 150 175 L 260 310 M 150 175 L 40 320 M 150 175 L 10 160 M 150 175 L 290 190"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                          />
                          <path
                              d="M 90 90 L 170 60 L 220 140 L 190 230 L 100 240 L 70 150 Z"
                              stroke="rgba(255,255,255,0.8)"
                              strokeWidth="1.5"
                              fill="rgba(255,255,255,0.08)"
                          />
                          <path
                              d="M 120 140 L 180 130 L 160 190 L 110 180 Z"
                              stroke="white"
                              strokeWidth="2"
                              fill="rgba(255,255,255,0.18)"
                          />
                        </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
              About Me
            </span>

              <div>
                <ThinkDesignHeading as="h1" className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">
                  Software Engineer & <span className="text-yellow-500">Full-Stack Developer</span>
                </ThinkDesignHeading>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-sans">
                I am a Software Engineering graduate based in Islamabad, Pakistan. My focus spans web application architecture, real-time messaging services, relational and NoSQL databases, and cloud-assisted deployments.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-sans">
                With hands-on experience at the Sehat Sahulat Program and multiple freelance contracts, I construct scalable web applications using React, Next.js, Node.js, Express, MongoDB, MySQL, and Oracle APEX systems.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                    href="/contact"
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-yellow-500/20 active:scale-95"
                >
                  Get In Touch <FaArrowRight size={14} />
                </Link>
                <a
                    href="/M_Salman_Software_Engineer.pdf"
                    download
                    className="border border-slate-300 dark:border-slate-800 hover:border-yellow-500 px-7 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all backdrop-blur-md bg-white/40 dark:bg-slate-900/40"
                >
                  Download CV <FaDownload size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* SKILLS BREAKDOWN GRID */}
          <section className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <ThinkDesignHeading as="h2" className="text-3xl font-bold font-heading">
                Core Competencies
              </ThinkDesignHeading>
              <p className="text-slate-500 dark:text-slate-400 mt-2">
                Structured overview of technology domains and technical execution capabilities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1000px]">
              <motion.div whileHover={{ y: -6, rotateX: 5 }} className="depth-card bg-slate-50/90 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <FaCode className="text-yellow-500 text-3xl mb-4" />
                <ThinkDesignHeading as="h3" className="font-bold text-xl mb-2 font-heading">Frontend</ThinkDesignHeading>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  React.js, Next.js (App Router), JavaScript (ES6+), Tailwind CSS, Framer Motion, Responsive UI design.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -6, rotateX: 5 }} className="depth-card bg-slate-50/90 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <FaServer className="text-yellow-500 text-3xl mb-4" />
                <ThinkDesignHeading as="h3" className="font-bold text-xl mb-2 font-heading">Backend & APIs</ThinkDesignHeading>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  Node.js, Express.js, RESTful API Design, Socket.IO WebSockets, Middleware Architecture, Auth (JWT).
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -6, rotateX: 5 }} className="depth-card bg-slate-50/90 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <FaDatabase className="text-yellow-500 text-3xl mb-4" />
                <ThinkDesignHeading as="h3" className="font-bold text-xl mb-2 font-heading">Databases & APEX</ThinkDesignHeading>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  MongoDB, MySQL, Oracle APEX Applications, PL/SQL scripts, Schema Design & Indexing.
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -6, rotateX: 5 }} className="depth-card bg-slate-50/90 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 backdrop-blur-md">
                <FaCloud className="text-yellow-500 text-3xl mb-4" />
                <ThinkDesignHeading as="h3" className="font-bold text-xl mb-2 font-heading">Cloud & DevOps</ThinkDesignHeading>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  AWS (EC2, S3), Docker Containers, Kubernetes basics, GitHub Actions CI/CD pipelines, Git workflows.
                </p>
              </motion.div>
            </div>
          </section>

          {/* TIMELINE SECTION (EXPERIENCE & EDUCATION) */}
          <section className="grid md:grid-cols-2 gap-12">
            {/* Work History */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-yellow-500 text-2xl" />
                <ThinkDesignHeading as="h2" className="text-2xl font-bold font-heading">
                  Experience
                </ThinkDesignHeading>
              </div>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-slate-950" />
                  <span className="text-xs font-mono text-yellow-500">Jul 2025 - Present</span>
                  <ThinkDesignHeading as="h3" className="text-xl font-bold mt-1">Oracle APEX & Web Intern</ThinkDesignHeading>
                  <p className="text-sm text-slate-500 font-medium">Sehat Sahulat Program • Islamabad</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Building full-stack web platforms using MERN stack & Socket.IO. Responsible for API performance tuning and database module synchronization.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-950" />
                  <span className="text-xs font-mono text-slate-500">2024 - Present</span>
                  <ThinkDesignHeading as="h3" className="text-xl font-bold mt-1">Freelance Software Engineer</ThinkDesignHeading>
                  <p className="text-sm text-slate-500 font-medium">Remote Contracts</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Delivered web applications (XRun, Rent Braker) focusing on responsive React/Next.js dynamic interfaces, Express server setups, and database integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-yellow-500 text-2xl" />
                <ThinkDesignHeading as="h2" className="text-2xl font-bold font-heading">
                  Education & Certifications
                </ThinkDesignHeading>
              </div>

              <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-yellow-500 border-4 border-white dark:border-slate-950" />
                  <span className="text-xs font-mono text-yellow-500">Graduated 2025</span>
                  <ThinkDesignHeading as="h3" className="text-xl font-bold mt-1">BS Software Engineering</ThinkDesignHeading>
                  <p className="text-sm text-slate-500 font-medium">City University of Science & IT, Peshawar</p>
                  <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                    CGPA: 3.16 / 4.00
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 border-4 border-white dark:border-slate-950" />
                  <span className="text-xs font-mono text-slate-500">2025 - 2026</span>
                  <ThinkDesignHeading as="h3" className="text-xl font-bold mt-1">Industry Certifications</ThinkDesignHeading>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <FaAward className="text-yellow-500 flex-shrink-0" />
                      AWS DevOps & AI Cloud Specialization (2026)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaAward className="text-yellow-500 flex-shrink-0" />
                      Oracle APEX Cloud Developer Certified (2025)
                    </li>
                    <li className="flex items-center gap-2">
                      <FaAward className="text-yellow-500 flex-shrink-0" />
                      MERN Stack Web Development Specialization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}