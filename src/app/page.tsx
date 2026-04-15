"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaTools,
  FaLightbulb,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

// Animations
const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
  scaleUp: {
    hidden: { scale: 0.95 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  },
};

// Data
const data = {
  technologies: [
    { icon: <FaReact size={50} />, name: "React", color: "text-blue-400" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", color: "text-green-500" },
    { icon: <SiMongodb size={50} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiMysql size={50} />, name: "MySQL", color: "text-blue-500" },
    { icon: <SiJavascript size={50} />, name: "JavaScript", color: "text-yellow-400" },
  ],

  services: [
    {
      icon: <FaReact size={60} />,
      title: "React Development",
      description: "Building fast, scalable, and responsive apps.",
      color: "text-blue-600",
    },
    {
      icon: <FaNodeJs size={60} />,
      title: "Node.js Development",
      description: "Server-side applications with high performance.",
      color: "text-green-600",
    },
    {
      icon: <SiMongodb size={60} />,
      title: "Database Solutions",
      description: "Scalable MongoDB and SQL database systems.",
      color: "text-green-700",
    },
  ],

  projects: [
    {
      title: "E-commerce Platform",
      description: "Fully integrated shopping experience.",
      image: "/images/portfolio1.jpg",
      link: "/portfolio/e-commerce-platform",
    },
    {
      title: "Corporate Website",
      description: "Modern corporate business website.",
      image: "/images/portfolio2.jpg",
      link: "/portfolio/corporate-website",
    },
    {
      title: "Startup Landing Page",
      description: "Minimal startup landing page design.",
      image: "/images/portfolio3.jpg",
      link: "/portfolio/startup-landing-page",
    },
  ],

  features: [
    {
      icon: <FaTools size={24} />,
      title: "Expertise",
      description: "Deep industry knowledge with experience.",
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Innovation",
      description: "Modern and creative solutions.",
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Reliability",
      description: "High-quality and consistent delivery.",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.staggerContainer}
          className="relative text-center px-6"
        >
          <motion.h3
            variants={animations.fadeInUp}
            className="text-yellow-400 text-xl mb-4"
          >
            — Muhammad Salman
          </motion.h3>

          <motion.h1
            variants={animations.fadeInUp}
            className="text-4xl md:text-6xl font-bold max-w-4xl"
          >
            Software Engineer Building Modern Web Applications
          </motion.h1>

          <motion.div variants={animations.fadeInUp} className="mt-8">
            <Link
              href="/contact"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 w-fit mx-auto"
            >
              Contact Me <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.technologies.map((t, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl text-center">
              <div className={`${t.color} mb-2 flex justify-center`}>
                {t.icon}
              </div>
              <h3>{t.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-950 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {data.services.map((s, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl text-center">
              <div className={`${s.color} mb-4`}>{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.projects.map((p, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-400">{p.description}</p>

                <Link
                  href={p.link}
                  className="text-yellow-400 mt-3 inline-block"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-950 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {data.features.map((f, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl">
              <div className="text-yellow-400 mb-2">{f.icon}</div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
