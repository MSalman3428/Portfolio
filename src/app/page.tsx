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
    { icon: <FaReact size={45} />, name: "React", color: "text-blue-500" },
    { icon: <FaNodeJs size={45} />, name: "Node.js", color: "text-emerald-500" },
    { icon: <SiMongodb size={45} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiMysql size={45} />, name: "MySQL", color: "text-sky-600" },
    { icon: <SiJavascript size={45} />, name: "JavaScript", color: "text-amber-400" },
  ],
  services: [
    { icon: <FaReact size={50} />, title: "React Development", description: "Building fast, scalable, and responsive web applications with modern hooks.", color: "text-blue-600 dark:text-blue-400" },
    { icon: <FaNodeJs size={50} />, title: "Node.js Development", description: "High-performance server-side logic and robust API development.", color: "text-emerald-600 dark:text-emerald-400" },
    { icon: <SiMongodb size={50} />, title: "Database Solutions", description: "Architecting scalable data structures with MongoDB and SQL.", color: "text-green-600 dark:text-green-400" },
  ],
  projects: [
    { title: "E-commerce Platform", description: "A seamless, secure, and fully integrated digital shopping experience.", image: "./hero.jpg", link: "/portfolio/e-commerce-platform" },
  ],
};

export default function Home() {
  return (
    <div className="bg-[#fcfcfd] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image src="./hero.jpg" alt="hero" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        
        <motion.div initial="hidden" animate="visible" variants={animations.staggerContainer} className="relative text-center px-6 text-white max-w-5xl">
          <motion.h3 variants={animations.fadeInUp} className="text-yellow-400 font-medium tracking-[0.3em] uppercase text-sm mb-6">— Muhammad Salman —</motion.h3>
          <motion.h1 variants={animations.fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Software Engineer Building <span className="text-yellow-400">Modern</span> Web Applications
          </motion.h1>
          <motion.div variants={animations.fadeInUp} className="mt-10">
            <Link href="/contact" className="group bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold flex items-center gap-3 w-fit mx-auto transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-95">
              Contact Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
          <div className="h-1.5 w-20 bg-yellow-500 rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {data.technologies.map((t, i) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={i} 
              className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:border-yellow-500/50 transition-all"
            >
              <div className={`${t.color} mb-4 flex justify-center opacity-90`}>{t.icon}</div>
              <h3 className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-xs">{t.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 px-6 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {data.services.map((s, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 p-10 rounded-3xl text-left shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
              <div className={`${s.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
            <p className="text-slate-500 mt-2">Selection of recent digital creations</p>
          </div>
          <Link href="/portfolio" className="text-yellow-600 dark:text-yellow-500 font-bold hover:underline hidden md:block">View All Projects</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.projects.map((p, i) => (
            <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">{p.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-3 line-clamp-2">{p.description}</p>
                <Link href={p.link} className="mt-6 inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
                  Explore Case Study <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}