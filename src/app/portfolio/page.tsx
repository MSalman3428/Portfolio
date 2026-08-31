"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import ThinkDesignHeading from "../components/ThinkDesignHeading";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiSocketdotio,
} from "react-icons/si";

const Background3D = dynamic(() => import("../components/Background3D"), {
  ssr: false,
});

interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Enterprise" | "Freelance" | "Cloud & DevOps";
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techIcons: React.ReactNode[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  duration: string;
}

const projectsData: Project[] = [
  {
    id: "adeverywhere",
    title: "AdEverywhere Platform",
    category: "Full Stack",
    subtitle: "University Final Year Project (FYP)",
    description:
        "A comprehensive digital advertising platform facilitating real-time ad placements, campaign analytics, and dynamic content scheduling.",
    longDescription:
        "AdEverywhere simplifies outdoor and digital ad asset management. Built with a robust MERN stack backend, it exposes modular REST APIs for ad publishing, dynamic geo-targeting, and schedule verification. Integrates automated CI/CD pipelines to streamline deployment workflows.",
    image: "/Projects/AdEverywherverProject.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AWS", "CI/CD"],
    techIcons: [
      <SiReact key="react" className="text-cyan-400" />,
      <SiNodedotjs key="node" className="text-emerald-500" />,
      <SiExpress key="express" className="text-slate-300" />,
      <SiMongodb key="mongo" className="text-green-500" />,
    ],
    features: [
      "Role-based authorization for advertisers and display publishers",
      "Real-time ad scheduling engine with collision prevention",
      "Automated CI/CD pipeline integrated with GitHub Actions",
      "Dynamic reporting dashboard with graphical analytics",
    ],
    githubUrl: "https://github.com/MSalman3428",
    role: "Lead Full-Stack Developer",
    duration: "4 Months",
  },
  {
    id: "xrun",
    title: "XRun Fitness & Tracking Platform",
    category: "Freelance",
    subtitle: "Freelance Web Application",
    description:
        "High-performance client dashboard and activity monitor built for real-time fitness metrics and user progress tracking.",
    longDescription:
        "XRun provides athletes and trainers with intuitive web tools to monitor performance. Designed with modern UI/UX principles, Next.js App Router, dynamic data fetching, and high-speed MongoDB indexing for scalable activity logging.",
    image: "/Projects/xrunProject.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
    techIcons: [
      <SiNextdotjs key="next" className="text-white" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />,
      <SiNodedotjs key="node" className="text-emerald-500" />,
      <SiMongodb key="mongo" className="text-green-500" />,
    ],
    features: [
      "Responsive metric visualization with interactive charts",
      "Custom RESTful APIs for route optimization & duration analytics",
      "Secure JWT authentication with refresh token rotation",
      "Dark mode first design system using Tailwind CSS",
    ],
    githubUrl: "https://github.com/MSalman3428",
    role: "Full-Stack Developer",
    duration: "2 Months",
  },
  {
    id: "chatapp-sehat",
    title: "Sehat Sahulat Real-Time Chat System",
    category: "Enterprise",
    subtitle: "Sehat Sahulat Program Infrastructure",
    description:
        "Enterprise real-time communication platform supporting multi-department healthcare coordination and instant file sharing.",
    longDescription:
        "Developed during internship work at Sehat Sahulat Program. This enterprise system ensures instant exchange of information between hospital administrators and field supervisors using Socket.IO, backed by Oracle/MySQL database procedures.",
    image: "/light.jpg",
    tags: ["Node.js", "Socket.IO", "MySQL", "Oracle APEX", "Express"],
    techIcons: [
      <SiNodedotjs key="node" className="text-emerald-500" />,
      <SiSocketdotio key="socket" className="text-slate-200" />,
      <SiMysql key="mysql" className="text-sky-500" />,
      <SiExpress key="express" className="text-slate-300" />,
    ],
    features: [
      "Low-latency bi-directional messaging powered by Socket.IO websockets",
      "Department-level group rooms with active presence detection",
      "Message persistence linked with SQL relational schemas",
      "Optimized payload streaming for media attachments",
    ],
    role: "Backend & Web Intern Developer",
    duration: "3 Months",
  },
  {
    id: "rent-braker",
    title: "Rent Braker Portal",
    category: "Freelance",
    subtitle: "Property & Rental Management System",
    description:
        "Automated tenant ledger, payment processing UI, and lease tracking portal built for property operators.",
    longDescription:
        "Rent Braker replaces manual property spreadsheets with a cohesive dashboard interface. Handles lease schedules, maintenance ticketing, and revenue aggregation through customized REST endpoints and database routines.",
    image: "/light.jpg",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    techIcons: [
      <SiReact key="react" className="text-cyan-400" />,
      <SiNodedotjs key="node" className="text-emerald-500" />,
      <SiMysql key="mysql" className="text-sky-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-400" />,
    ],
    features: [
      "Automated rent invoice calculation and ledger tracking",
      "Tenant issue resolution ticketing interface",
      "Relational database design normalized for financial history",
      "Responsive interface optimized for tablet and desktop views",
    ],
    githubUrl: "https://github.com/MSalman3428",
    role: "Full-Stack Developer",
    duration: "2 Months",
  },
];

const categories = ["All", "Full Stack", "Enterprise", "Freelance"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
      activeCategory === "All"
          ? projectsData
          : projectsData.filter((p) => p.category === activeCategory);

  return (
      <div className="relative min-h-screen bg-[#fcfcfd]/90 dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 transition-colors duration-500 py-20 px-4 sm:px-6 overflow-hidden backdrop-blur-sm">
        <Background3D />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 backdrop-blur-md">
              Selected Work
            </span>
            <ThinkDesignHeading as="h1" className="text-4xl sm:text-5xl font-extrabold mt-6 mb-4 tracking-tight font-heading">
              Projects & <span className="text-yellow-500">Case Studies</span>
            </ThinkDesignHeading>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans leading-relaxed">
              A showcase of web applications, microservices, enterprise systems, and database engineering solutions built across full-stack contracts and university initiatives.
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 rounded-full mx-auto mt-6"></div>
          </div>

          {/* CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        activeCategory === cat
                            ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20 scale-105"
                            : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:border-yellow-500/50 border border-slate-200 dark:border-slate-800 backdrop-blur-md"
                    }`}
                >
                  {cat}
                </button>
            ))}
          </div>

          {/* PROJECTS GRID */}
          <motion.div layout className="grid md:grid-cols-2 gap-8 [perspective:1000px]">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                  <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -8, rotateX: 3 }}
                      transition={{ duration: 0.4 }}
                      key={project.id}
                      className="depth-card group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-yellow-500/50 shadow-lg transition-all flex flex-col"
                  >
                    {/* Image & Overlay */}
                    <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                      <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-slate-950/80 backdrop-blur-md text-yellow-400 border border-yellow-500/30 text-xs px-3 py-1 rounded-full font-mono uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-yellow-500 font-mono tracking-wide">{project.subtitle}</span>
                        <ThinkDesignHeading as="h3" className="text-2xl font-bold mt-1 mb-3 text-slate-900 dark:text-white group-hover:text-yellow-500 transition-colors font-heading">
                          {project.title}
                        </ThinkDesignHeading>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                              <span
                                  key={i}
                                  className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-medium"
                              >
                                {tag}
                              </span>
                          ))}
                        </div>

                        {/* Card Footer Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                          <button
                              onClick={() => setSelectedProject(project)}
                              className="text-xs font-bold uppercase tracking-wider text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-2"
                          >
                            Read Case Study <FaExternalLinkAlt size={10} />
                          </button>
                          {project.githubUrl && (
                              <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                  aria-label="View Source Code"
                              >
                                <FaGithub size={20} />
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CASE STUDY MODAL */}
          <AnimatePresence>
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSelectedProject(null)}
                      className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                  />
                  <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 z-10 text-slate-900 dark:text-white"
                  >
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 text-slate-400 hover:text-white w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold"
                    >
                      ✕
                    </button>

                    <span className="text-xs font-mono uppercase tracking-widest text-yellow-500">
                      {selectedProject.category} • {selectedProject.role}
                    </span>
                    <ThinkDesignHeading as="h2" className="text-3xl font-extrabold mt-2 mb-4 font-heading">
                      {selectedProject.title}
                    </ThinkDesignHeading>

                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6 font-sans">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mb-6">
                      <ThinkDesignHeading as="h4" className="font-bold text-sm uppercase text-yellow-500 tracking-wider mb-3 font-heading">
                        Key Features & Implementations
                      </ThinkDesignHeading>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                              <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                      {selectedProject.githubUrl && (
                          <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-colors"
                          >
                            <FaGithub size={16} /> GitHub Repository
                          </a>
                      )}
                      <button
                          onClick={() => setSelectedProject(null)}
                          className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 py-3 rounded-full font-bold text-sm transition-colors"
                      >
                        Close Project
                      </button>
                    </div>
                  </motion.div>
                </div>
            )}
          </AnimatePresence>
        </div>
      </div>
  );
}