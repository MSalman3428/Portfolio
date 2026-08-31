"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaAws,
  FaComments,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import ThinkDesignHeading from "../components/ThinkDesignHeading";

const Background3D = dynamic(() => import("../components/Background3D"), {
  ssr: false,
});

const servicesList = [
  {
    icon: <FaCode size={36} />,
    title: "Frontend Engineering",
    subtitle: "React.js • Next.js • Tailwind CSS",
    description:
        "Developing modern, responsive, and accessible user interfaces utilizing React.js, Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion for smooth client experiences.",
    features: [
      "Server Side Rendering (SSR) & Static Generation (SSG)",
      "Responsive, Mobile-First Web Interfaces",
      "Dynamic State Management & Animations",
      "SEO & Core Web Vitals Optimization",
    ],
  },
  {
    icon: <FaServer size={36} />,
    title: "Backend & RESTful APIs",
    subtitle: "Node.js • Express.js • Middleware",
    description:
        "Engineering robust REST APIs, custom routing setups, security middleware layers, and JWT authentication flows built with Node.js and Express.",
    features: [
      "Modular REST API Routing Architecture",
      "Authentication (JWT, OAuth) & Security Standards",
      "Third-Party Service & Payment Gateways",
      "API Documentation & Integration Standards",
    ],
  },
  {
    icon: <FaComments size={36} />,
    title: "Real-Time WebSocket Architecture",
    subtitle: "Socket.IO • WebSockets • Pub/Sub",
    description:
        "Constructing low-latency communication solutions including multi-room chat rooms, live activity monitors, and instant push notifications.",
    features: [
      "Bi-Directional Event Handling via Socket.IO",
      "Presence Detection & Active Status Streams",
      "Real-Time Analytics Dashboards",
      "Scalable Payload Handlers & Message Persistence",
    ],
  },
  {
    icon: <FaDatabase size={36} />,
    title: "Database Engineering & APEX",
    subtitle: "MongoDB • MySQL • Oracle APEX",
    description:
        "Designing structured database schemas, write-optimized indexing, complex relational SQL queries, PL/SQL scripts, and enterprise Oracle APEX modules.",
    features: [
      "Document (MongoDB) & Relational (MySQL/Oracle) Design",
      "Custom Query Optimization & Indexing Procedures",
      "Oracle APEX Form & Interactive Report Customization",
      "Data Migration & Seeding Scripts",
    ],
  },
  {
    icon: <FaAws size={36} />,
    title: "DevOps & Cloud Integration",
    subtitle: "AWS • Docker • CI/CD Pipelines",
    description:
        "Provisioning cloud hosting infrastructure on AWS (EC2, S3), setting up automated deployment pipelines, and building Docker container environments.",
    features: [
      "AWS EC2 Server Provisioning & S3 Storage",
      "Docker Containerization & Multi-stage Builds",
      "GitHub Actions CI/CD Pipeline Configuration",
      "Production SSL Setup & Reverse Proxy (Nginx)",
    ],
  },
  {
    icon: <FaChartLine size={36} />,
    title: "Performance & UI/UX Tuning",
    subtitle: "Lighthouse • Accessibility • UX",
    description:
        "Refining application page load metrics, cross-browser compatibility, light/dark mode systems, and responsive layout styling.",
    features: [
      "Core Web Vitals & Image Asset Compression",
      "Dynamic Code-Splitting & Lazy Loading",
      "Accessibility (a11y) & Cross-Browser Testing",
      "Seamless Light & Dark Theme Support",
    ],
  },
];

export default function ServicesPage() {
  return (
      <div className="relative min-h-screen bg-[#fcfcfd]/90 dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 py-20 px-4 sm:px-6 overflow-hidden backdrop-blur-sm transition-colors duration-500">
        {/* 3D Background */}
        <Background3D />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 backdrop-blur-md">
            What I Deliver
          </span>
            <div className="mt-6 mb-4">
              <ThinkDesignHeading as="h1" className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">
                Services & <span className="text-yellow-500">Solutions</span>
              </ThinkDesignHeading>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans leading-relaxed">
              Full-stack software engineering services covering scalable backend design, interactive frontend execution, database modeling, and cloud deployments.
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 rounded-full mx-auto mt-6"></div>
          </div>

          {/* EXPANDED SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
            {servicesList.map((service, index) => (
                <motion.div
                    key={index}
                    whileHover={{ y: -8, rotateX: 5, rotateY: -3 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="depth-card bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-yellow-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-yellow-500 mb-6 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 inline-block border border-slate-200 dark:border-slate-700 shadow-sm">
                      {service.icon}
                    </div>
                    <span className="block text-xs font-mono text-yellow-500 mb-1 tracking-wide">
                  {service.subtitle}
                </span>
                    <div className="mb-3">
                      <ThinkDesignHeading as="h3" className="text-2xl font-bold group-hover:text-yellow-500 transition-colors font-heading">
                        {service.title}
                      </ThinkDesignHeading>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                    {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <FaCheckCircle className="text-yellow-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>

          {/* CTA CARD */}
          <motion.div
              whileHover={{ scale: 1.01 }}
              className="depth-card bg-gradient-to-r from-yellow-500 via-amber-500 to-amber-600 text-slate-950 rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="max-w-xl text-center md:text-left">
              <ThinkDesignHeading as="h2" className="text-3xl font-extrabold tracking-tight font-heading">
                Need a custom application built?
              </ThinkDesignHeading>
              <p className="mt-2 text-slate-950/90 font-semibold font-sans">
                From full web platforms to backend API architectures, let's bring your technical specifications to life.
              </p>
            </div>
            <Link
                href="/contact"
                className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 transition-all flex-shrink-0 shadow-xl hover:scale-105 active:scale-95"
            >
              Get In Touch <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
  );
}