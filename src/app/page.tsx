"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import ThinkDesignHeading from "./components/ThinkDesignHeading";
import {
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiKubernetes,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const Background3D = dynamic(() => import("./components/Background3D"), { ssr: false });

const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  },
};

const data = {
  technologies: [
    { icon: <FaReact size={36} />, name: "React.js", color: "text-blue-500" },
    { icon: <SiNextdotjs size={36} />, name: "Next.js", color: "text-slate-900 dark:text-white" },
    { icon: <FaNodeJs size={36} />, name: "Node.js", color: "text-emerald-500" },
    { icon: <SiExpress size={36} />, name: "Express.js", color: "text-slate-700 dark:text-slate-300" },
    { icon: <SiMongodb size={36} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiMysql size={36} />, name: "MySQL", color: "text-sky-600" },
    { icon: <FaDatabase size={36} />, name: "Oracle APEX", color: "text-red-500" },
    { icon: <SiJavascript size={36} />, name: "JavaScript", color: "text-amber-400" },
    { icon: <SiTailwindcss size={36} />, name: "Tailwind CSS", color: "text-cyan-400" },
    { icon: <SiSocketdotio size={36} />, name: "Socket.IO", color: "text-slate-800 dark:text-white" },
    { icon: <FaAws size={36} />, name: "AWS (EC2/S3)", color: "text-orange-500" },
    { icon: <FaDocker size={36} />, name: "Docker", color: "text-blue-400" },
    { icon: <SiKubernetes size={36} />, name: "Kubernetes", color: "text-blue-600" },
    { icon: <FaGitAlt size={36} />, name: "Git / CI/CD", color: "text-red-500" },
  ],
  services: [
    {
      icon: <FaCode size={36} />,
      title: "Frontend Engineering",
      description: "Building responsive, modern user interfaces using React.js, Next.js, JavaScript, Tailwind CSS, and Framer Motion.",
      color: "text-blue-500",
    },
    {
      icon: <FaServer size={36} />,
      title: "Backend & Real-Time APIs",
      description: "Architecting scalable RESTful APIs and real-time messaging services using Node.js, Express.js, and Socket.IO.",
      color: "text-emerald-500",
    },
    {
      icon: <FaDatabase size={36} />,
      title: "Database & APEX Solutions",
      description: "Designing efficient database schemas and PL/SQL operations across MongoDB, MySQL, and Oracle APEX Applications.",
      color: "text-amber-500",
    },
  ],
  projects: [
    {
      title: "AdEverywhere Platform",
      category: "University FYP Project",
      description: "Full-Stack web application featuring scalable REST APIs, authentication, CI/CD pipelines, and cloud deployment.",
      image: "/Projects/AdEverywherverProject.png",
      link: "/portfolio",
    },
    {
      title: "XRun Platform",
      category: "Freelance Project",
      description: "Full-stack application delivering high-performance UI components, backend APIs, authentication, and database operations.",
      image: "/Projects/xrunProject.png",
      link: "/portfolio",
    },
    {
      title: "ChatApp Sehat Sahulat",
      category: "Enterprise System",
      description: "Real-time communication app built with Node.js, Express, Socket.IO, SQL/PLSQL, and a responsive frontend UI.",
      image: "/light.jpg",
      link: "/portfolio",
    },
    {
      title: "Rent Braker",
      category: "Freelance Project",
      description: "Rental management system with full authentication, DB operations, backend REST services, and seamless deployment.",
      image: "/light.jpg",
      link: "/portfolio",
    },
  ],
  experience: {
    role: "Oracle APEX & Web Application Development Intern",
    company: "Sehat Sahulat Program, Islamabad",
    period: "Jul 2025 - Current",
    highlights: [
      "Developing and maintaining enterprise MERN web applications using MongoDB, Express.js, React.js, Node.js, and Socket.IO.",
      "Integrated REST APIs, optimized backend microservices, and designed responsive web modules for stable application execution.",
      "Built real-time messaging and notification systems with Socket.IO and Node.js for instant user communication.",
      "Collaborated with cross-functional teams to debug, test, and ship secure and scalable solutions.",
    ],
  },
  certifications: [
    { title: "DevOps and AI on AWS (CI/CD & App Upgrades)", issuer: "AWS / Coursera", year: "2026" },
    { title: "Oracle APEX Cloud Developer Certified", issuer: "Oracle Academy", year: "2025" },
    { title: "MERN Stack Web Development", issuer: "Coursera / Udemy", year: "2023" },
  ],
};

export default function Home() {
  return (
      <div className="relative bg-[#fcfcfd]/90 dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-hidden min-h-screen backdrop-blur-sm">

        {/* HERO SECTION CONTAINER */}
        <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

          {/* LAYER 10: CUTOUT HERO SUBJECT */}
          <div className="pointer-events-none absolute inset-0 m-auto z-10 flex items-end justify-center overflow-hidden w-full max-w-5xl h-[75vh] sm:h-[85vh] md:h-[92vh]">
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 1.05 }}
                animate={{ opacity: 1, y: 0, scale: 1.15 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative h-full w-full pointer-events-auto flex items-end justify-center -translate-y-6 sm:-translate-y-10 md:-translate-y-12"
            >
              <Image
                  src="/salman-both.png"
                  alt="Muhammad Salman"
                  fill
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-contain object-bottom filter contrast-105  drop-shadow-[0_20px_40px_rgba(1,1,1,1.1)] dark:drop-shadow-[0_25px_60px_rgba(1,1,1,1.25)]"
                  priority
              />
            </motion.div>
          </div>

          {/* LAYER 20: 3D CANVAS BACKGROUND (PLACED ABOVE THE IMAGE) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <Background3D />
          </div>

          {/* LAYER 30: FOREGROUND CONTENT OVERLAY (LEFT-ALIGNED TEXT & HEADING) */}
          <section className="relative w-full max-w-7xl mx-auto flex items-center pt-12 pb-20 px-4 sm:px-6 z-30 pointer-events-auto">
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <motion.div initial="hidden" animate="visible" variants={animations.staggerContainer} className="max-w-xl">
                <motion.div
                    variants={animations.fadeInUp}
                    className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 font-mono text-xs uppercase tracking-widest mb-6 backdrop-blur-md"
                >
                  Software Engineer & MERN Stack Developer
                </motion.div>

                {/* HEADING LEFT ALIGNED */}
                <motion.div variants={animations.fadeInUp} className="w-full flex justify-start text-left">
                  <ThinkDesignHeading
                      as="h1"
                      className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight font-heading text-left"
                  >
                    Hi, I'm <span className="text-yellow-500">Muhammad Salman</span>
                  </ThinkDesignHeading>
                </motion.div>

                <motion.p
                    variants={animations.fadeInUp}
                    className="mt-6 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-lg font-sans backdrop-blur-md bg-white/40 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200/40 dark:border-slate-800/40 shadow-sm text-left"
                >
                  Recently graduated Software Engineer specializing in full-stack web applications, RESTful APIs, real-time systems, Oracle APEX, and cloud deployments with AWS & CI/CD.
                </motion.p>

                <motion.div variants={animations.fadeInUp} className="mt-8 flex flex-wrap justify-start gap-4">
                  <Link
                      href="/contact"
                      className="group bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95"
                  >
                    Contact Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                      href="/portfolio"
                      className="border border-slate-300 dark:border-slate-800 hover:border-yellow-500 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 backdrop-blur-md bg-white/40 dark:bg-slate-900/40"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>

        {/* TECH STACK */}
        <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 z-30">
          <div className="flex flex-col items-center mb-16 text-center">
            <ThinkDesignHeading as="h2" className="text-3xl md:text-4xl font-bold font-heading">
              Technical Skills
            </ThinkDesignHeading>
            <div className="h-1.5 w-20 bg-yellow-500 rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-5 [perspective:1000px]">
            {data.technologies.map((t, i) => (
                <motion.div
                    whileHover={{ y: -8, rotateX: 10, rotateY: -5, scale: 1.05 }}
                    key={i}
                    className="depth-card bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-5 rounded-2xl text-center shadow-md hover:shadow-yellow-500/20 hover:border-yellow-500/50 transition-all flex flex-col items-center justify-center gap-3"
                >
                  <div className={`${t.color}`}>{t.icon}</div>
                  <h3 className="font-bold text-slate-700 dark:text-slate-300 tracking-wider text-xs">{t.name}</h3>
                </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="relative py-20 bg-slate-50/50 dark:bg-slate-900/40 px-4 sm:px-6 border-y border-slate-200 dark:border-slate-800 z-30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <ThinkDesignHeading as="h2" className="text-3xl font-bold mb-6 font-heading">
                Work Experience
              </ThinkDesignHeading>
              <div className="depth-card bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
                <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest">{data.experience.period}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{data.experience.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{data.experience.company}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
                  {data.experience.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <ThinkDesignHeading as="h2" className="text-3xl font-bold mb-6 font-heading">
                Education & Certifications
              </ThinkDesignHeading>
              <div className="depth-card bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg mb-6">
                <span className="text-xs font-mono text-yellow-500 uppercase tracking-widest">Graduated</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">Bachelor of Software Engineering</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">City University of Science & IT, Peshawar</p>
                <p className="mt-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400">CGPA: 3.16 / 4.00</p>
              </div>

              <div className="depth-card bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-3">
                <h4 className="font-bold text-lg mb-2">Certifications</h4>
                {data.certifications.map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                      <div>
                        <p className="font-semibold">{c.title}</p>
                        <p className="text-xs text-slate-500">{c.issuer}</p>
                      </div>
                      <span className="text-xs font-mono text-yellow-500">{c.year}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-20 px-4 sm:px-6 z-30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 [perspective:1000px]">
            {data.services.map((s, i) => (
                <motion.div
                    whileHover={{ y: -10, rotateX: 5 }}
                    key={i}
                    className="depth-card bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl text-left shadow-lg border border-slate-200 dark:border-slate-800 hover:border-yellow-500/50 transition-all"
                >
                  <div className={`${s.color} mb-6`}>{s.icon}</div>
                  <ThinkDesignHeading as="h3" className="text-xl font-bold mb-3 font-heading">
                    {s.title}
                  </ThinkDesignHeading>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.description}</p>
                </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="relative py-20 max-w-7xl mx-auto px-4 sm:px-6 z-30">
          <div className="flex justify-between items-end mb-16">
            <div>
              <ThinkDesignHeading as="h2" className="text-3xl md:text-4xl font-bold font-heading">
                Featured Projects
              </ThinkDesignHeading>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Enterprise, FYP, and freelance software solutions</p>
            </div>
            <Link href="/portfolio" className="text-yellow-500 font-bold hover:underline hidden md:block">
              View All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 [perspective:1000px]">
            {data.projects.map((p, i) => (
                <motion.div
                    whileHover={{ y: -8, rotateX: 3 }}
                    key={i}
                    className="depth-card group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:border-yellow-500/50 transition-all"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-yellow-400 border border-yellow-500/30 text-xs px-3 py-1 rounded-full font-mono uppercase">
                  {p.category}
                </span>
                  </div>
                  <div className="p-8">
                    <ThinkDesignHeading as="h3" className="text-2xl font-bold group-hover:text-yellow-500 transition-colors font-heading">
                      {p.title}
                    </ThinkDesignHeading>
                    <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">{p.description}</p>
                    <Link href={p.link} className="mt-6 inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-yellow-500 hover:text-yellow-400 transition-colors">
                      Explore Details <FaExternalLinkAlt size={11} />
                    </Link>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>
      </div>
  );
}