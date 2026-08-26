"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FiMail as EnvelopeIcon } from 'react-icons/fi';
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HeroDepth, TiltCard } from '../components/DepthEffects';

const Portfolio = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/portfolio1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75"></div>
        <HeroDepth />
        
        <div className="relative z-10 text-center text-white px-6 py-16 md:px-12 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight"
          >
            Full-Stack Development & <br/>
            <span className="text-yellow-400">E-Commerce Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-slate-200 max-w-4xl mx-auto leading-relaxed"
          >
            I deliver cutting-edge web solutions that combine technical excellence with strategic business insights.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 dark:bg-black/40 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/20 max-w-4xl mx-auto shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-400 uppercase tracking-widest text-sm">
              Specializations
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-lg text-left">
              {[
                "Custom full-stack development",
                "WordPress/WooCommerce architecture",
                "Premium theme implementation",
                "Legacy system modernization",
                "Performance optimization",
                "Ongoing maintenance & support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full shrink-0" />
                  <span className="text-slate-100 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="mt-12">
            <Link href="#showcase" className="inline-flex items-center gap-2 px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-xl font-bold rounded-full transition-all shadow-lg hover:shadow-yellow-500/20 active:scale-95">
              View Case Studies <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="showcase" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Portfolio <span className="text-yellow-600 dark:text-yellow-500">Showcase</span></h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Full-stack applications and web solutions built with modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                  title: "ChatApp",
                  cat: "Real-Time Web Application",
                  img: "/portfolio1.jpg",
                  desc: "Developed a real-time communication application with responsive UI, messaging functionality, database operations, JavaScript, Node.js, and Socket.IO. Worked on application enhancements, debugging, testing, and performance improvements.",
                  tags: ["Oracle APEX", "Node.js", "Socket.IO", "JavaScript", "SQL", "PL/SQL"],
                  links: [{ label: "GitHub", href: "https://github.com/MSalman3428/chatApp" }]
                },
                {
                  title: "AdEverywhere",
                  cat: "Full-Stack Web Application / University Final Year Project",
                  img: "/portfolio1.jpg",
                  desc: "Worked as a Full-Stack Developer, developing frontend and backend features, REST APIs, authentication, database operations, deployment, Git/GitHub, and CI/CD. Contributed to responsive, scalable, and reliable application functionality.",
                  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "CI/CD"],
                  links: [{ label: "Live Demo", href: "https://ad-everywhere.vercel.app/" }]
                },
                {
                  title: "RentBraker",
                  cat: "Full-Stack Rental Management Application",
                  img: "/portfolio1.jpg",
                  desc: "Developed a full-stack rental management web application with responsive UI, backend APIs, authentication, database integration, testing, debugging, Git/GitHub, and deployment.",
                  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git/GitHub"],
                  links: []
                },
                {
                  title: "XRun",
                  cat: "Freelance Full-Stack Development",
                  img: "/portfolio1.jpg",
                  desc: "Developed responsive frontend interfaces, backend APIs, authentication, database integration, application functionality, testing, debugging, deployment, and performance improvements based on client requirements.",
                  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
                  links: [{ label: "Live Website", href: "https://www.xrun.se/" }]
                },
                {
                  title: "NotificationSimple",
                  cat: "Oracle APEX Application",
                  img: "/portfolio1.jpg",
                  desc: "Developed and customized an Oracle APEX application using Oracle Database, SQL, PL/SQL, and JavaScript. Worked on pages, forms, reports, validations, dynamic actions, application processes, database operations, debugging, testing, and UI enhancements.",
                  tags: ["Oracle APEX", "Oracle Database", "SQL", "PL/SQL", "JavaScript"],
                  links: [{ label: "GitHub", href: "https://github.com/MSalman3428/notificationSimple" }]
                },
                {
                  title: "Personal Portfolio",
                  cat: "MERN Stack",
                  img: "/portfolio1.jpg",
                  desc: "Developed a full-stack personal portfolio using React.js, Node.js, Express.js, and MongoDB with responsive UI, backend APIs, database integration, Git/GitHub, deployment, testing, and performance optimization.",
                  tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Git/GitHub"],
                  links: [{ label: "Live Portfolio", href: "https://msalman3428.github.io/Portfolio/" }]
                }
            ].map((proj, idx) => (
              <TiltCard key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <Image src={proj.img} alt={proj.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-yellow-600 dark:text-yellow-500 font-bold uppercase tracking-tighter text-xs">{proj.cat}</span>
                  <h3 className="text-2xl font-bold my-3 group-hover:text-yellow-600 transition-colors">{proj.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 italic">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {proj.links.length > 0 && proj.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-white font-bold inline-flex items-center gap-2 mr-5 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors">
                      {link.label} <ArrowRight size={18} />
                    </a>
                  ))}
                  {proj.links.length === 0 && <span className="text-slate-500 dark:text-slate-400 font-semibold">Private Project</span>}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Let's Build Something <span className="text-yellow-600 dark:text-yellow-500">Exceptional</span> Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Whether you need a complete solution or expert consultation, 
              let's start a conversation about your next big idea.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-10 py-4 bg-slate-900 dark:bg-yellow-500 text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-all shadow-xl">
                Get In Touch
              </Link>
              <Link href="/portfolio" className="px-10 py-4 border-2 border-slate-900 dark:border-yellow-500 text-slate-900 dark:text-yellow-500 font-bold rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-slate-900 transition-all">
                View My Work
              </Link>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <a href="mailto:msalman3428@gmail.com" className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all">
                  <EnvelopeIcon className="w-6 h-6" />
                  <span className="font-bold">Email</span>
                </a>
                <a href="https://linkedin.com/in/muhammad-salman-858247306" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  <LinkedInIcon className="w-6 h-6" />
                  <span className="font-bold">LinkedIn</span>
                </a>
                <a href="https://github.com/MSalman3428" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
                  <GitHubIcon className="w-6 h-6" />
                  <span className="font-bold">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;