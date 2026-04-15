"use client";

import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaTools, FaLightbulb, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
};

const data = {
  technologies: [
    { icon: <FaReact size={50} />, name: "React", color: "text-blue-400" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", color: "text-green-500" },
    { icon: <SiMongodb size={50} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiMysql size={50} />, name: "MySQL", color: "text-blue-500" },
    { icon: <SiJavascript size={50} />, name: "JavaScript", color: "text-yellow-400" },
  ],
  services: [
    { icon: <FaReact size={60} />, title: "React Development", description: "Building fast, scalable, and responsive apps.", color: "text-blue-600" },
    { icon: <FaNodeJs size={60} />, title: "Node.js Development", description: "Server-side applications with high performance.", color: "text-green-600" },
    { icon: <SiMongodb size={60} />, title: "Database Solutions", description: "Scalable MongoDB and SQL database systems.", color: "text-green-700" },
  ],
  projects: [
    { title: "E-commerce Platform", description: "Fully integrated shopping experience.", image: "/hero.jpg", link: "/portfolio/e-commerce-platform" },
  ],
  features: [
    { icon: <FaTools size={24} />, title: "Expertise", description: "Deep industry knowledge with experience." },
    { icon: <FaLightbulb size={24} />, title: "Innovation", description: "Modern and creative solutions." },
    { icon: <FaShieldAlt size={24} />, title: "Reliability", description: "High-quality and consistent delivery." },
  ],
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      
      {/* HERO - Hardcoded dark overlay is fine for hero images */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image src="./hero.jpg" alt="hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div initial="hidden" animate="visible" variants={animations.staggerContainer} className="relative text-center px-6 text-white">
          <motion.h3 variants={animations.fadeInUp} className="text-yellow-400 text-xl mb-4">— Muhammad Salman</motion.h3>
          <motion.h1 variants={animations.fadeInUp} className="text-4xl md:text-6xl font-bold max-w-4xl">Software Engineer Building Modern Web Applications</motion.h1>
          <motion.div variants={animations.fadeInUp} className="mt-8">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-bold flex items-center gap-2 w-fit mx-auto transition-transform hover:scale-105">
              Contact Me <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-10">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.technologies.map((t, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl text-center shadow-sm">
              <div className={`${t.color} mb-2 flex justify-center`}>{t.icon}</div>
              <h3 className="font-semibold">{t.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {data.services.map((s, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg border border-gray-100 dark:border-gray-800">
              <div className={`${s.color} mb-4 flex justify-center`}>{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-yellow-500 mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.projects.map((p, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="relative h-48 w-full">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{p.description}</p>
                <Link href={p.link} className="text-yellow-600 dark:text-yellow-400 font-bold mt-4 inline-block hover:underline">View Project →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}