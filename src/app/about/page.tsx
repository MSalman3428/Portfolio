"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import ThinkDesignHeading from "../components/ThinkDesignHeading";

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm text-slate-900 dark:text-slate-100 transition-colors duration-300 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* HERO INTRO */}
          <section className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative flex justify-center [perspective:1000px]">
              <motion.div
                  whileHover={{ rotateY: 10, rotateX: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="depth-card relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/10 bg-slate-100 dark:bg-slate-900"
              >
                {/* Light Mode Cutout Image */}
                <Image
                    src="/salman-lightbg.png"
                    alt="Muhammad Salman"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-bottom block dark:hidden filter contrast-105"
                    priority
                />
                {/* Dark Mode Cutout Image */}
                <Image
                    src="/salman-darkbg.png"
                    alt="Muhammad Salman"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-bottom hidden dark:block filter contrast-110"
                    priority
                />
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