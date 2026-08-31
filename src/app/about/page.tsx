"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  RiCodeLine as CodeIcon,
  RiLayoutMasonryLine as LayoutIcon,
  RiDashboardLine as PerformanceIcon,
  RiShieldKeyholeLine as ShieldIcon,
  RiSmartphoneLine as MobileIcon,
  RiToolsLine as MaintenanceIcon
} from 'react-icons/ri';

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiJavascript } from 'react-icons/si';

const About = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Hero / Meet the Developer Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-10 dark:opacity-20"></div>
        
        <div className="relative z-10 px-6 py-16 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Profile Image with Decorative Ring */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-2xl group-hover:bg-yellow-500/40 transition-all duration-500"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl">
                <Image
                  src="/myimg.png"
                  alt="Muhammad Salman"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full lg:w-2/3">
            <motion.h2 initial={{opacity:0}} animate={{opacity:1}} className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-2 uppercase tracking-[0.2em]">
              Meet Your Developer
            </motion.h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Muhammad <span className="text-yellow-500">Salman</span>
            </h1>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm">
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                MERN Stack Developer with hands-on experience building responsive full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL. Experienced in REST APIs, real-time applications, Oracle APEX, Git/GitHub, deployment, and AWS/DevOps concepts including CI/CD.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                Based in Islamabad, Pakistan, I build reliable web applications with a focus on responsive interfaces, maintainable backend services, and practical delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <CodeIcon />, text: "Full-cycle web development" },
                  { icon: <LayoutIcon />, text: "Custom WordPress/WooCommerce" },
                  { icon: <PerformanceIcon />, text: "Optimization & Scalability" },
                  { icon: <ShieldIcon />, text: "Enterprise-grade Security" },
                  { icon: <MobileIcon />, text: "Mobile-first implementations" },
                  { icon: <MaintenanceIcon />, text: "Technical Stewardship" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="text-yellow-500">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/portfolio" className="px-10 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg active:scale-95">
                Explore My Portfolio
              </Link>
              <Link href="/contact" className="px-10 py-4 border-2 border-slate-900 dark:border-yellow-500 text-slate-900 dark:text-yellow-500 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey & Skills */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 px-6 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 italic">Professional <span className="text-yellow-500">Journey</span></h2>
              <div className="h-1.5 w-20 bg-yellow-500 rounded-full mb-10"></div>
            </div>

            {[
              {
                title: "Oracle APEX & Web Application Development Intern",
                desc: "Sehat Sahulat Program, Islamabad | Jul 2025 – Current"
              },
              {
                title: "Experience",
                desc: "Worked as a MERN Stack Developer developing and maintaining enterprise web applications using MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS, and Socket.IO."
              },
              {
                title: "Delivery & Collaboration",
                desc: "Developed responsive web modules, integrated REST APIs, implemented dynamic frontend functionality, and optimized backend services for reliable application performance. Built real-time chatting and notification features using Socket.IO and Node.js, enabling instant communication and updates. Collaborated with developers and business teams on troubleshooting, testing, debugging, and delivering secure, responsive, and scalable solutions."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-8 text-yellow-600 dark:text-yellow-500 uppercase tracking-widest text-sm text-center">Technical Skills</h3>
            <div className="space-y-6">
              {[
                ["Frontend", "React.js, Next.js, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS"],
                ["Backend", "Node.js, Express.js, REST APIs, Socket.IO, Oracle APEX"],
                ["Databases", "MongoDB, MySQL, Oracle Database, SQL, PL/SQL"],
                ["Tools", "Git, GitHub, Postman"],
                ["Cloud & DevOps", "AWS (EC2, S3, IAM), Docker (Basic), Kubernetes (Basic), CI/CD"],
              ].map(([label, skills]) => (
                <div key={label}>
                  <h4 className="font-bold text-yellow-600 dark:text-yellow-500 mb-1">{label}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-500">Bachelor of Software Engineering</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">City University of Science & Information Technology, Peshawar</p>
            <p className="mt-4 font-semibold">CGPA: 3.16/4.00</p>
          </div>
          <div className="p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-bold mb-6">Certifications</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>MERN Stack Web Development — Coursera/Udemy (2023)</li>
              <li>Oracle APEX Cloud Developer Certified — Oracle Academy (2025)</li>
              <li>DevOps and AI on AWS — AWS/Coursera (2026)</li>
              <li>DevOps and AI on AWS: CI/CD for Generative AI Applications — AWS/Coursera (2026)</li>
              <li>DevOps and AI on AWS: Upgrading Apps with Generative AI — AWS/Coursera (2026)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 italic">Technical <span className="text-yellow-500">Stack</span></h2>
          <p className="text-slate-500 dark:text-slate-400">Powering exceptional digital experiences</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { icon: <FaReact size={50} />, name: "React", color: "text-blue-500" },
            { icon: <FaNodeJs size={50} />, name: "Node.js", color: "text-emerald-500" },
            { icon: <SiMongodb size={50} />, name: "MongoDB", color: "text-green-600" },
            { icon: <SiMysql size={50} />, name: "MySQL", color: "text-sky-600" },
            { icon: <SiJavascript size={50} />, name: "JavaScript", color: "text-amber-400" },
          ].map((tech, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className={`${tech.color} mb-4 flex justify-center`}>{tech.icon}</div>
              <h3 className="font-bold text-sm uppercase tracking-widest">{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="relative py-32 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/contactus.jpg" alt="Contact" fill className="object-cover brightness-[0.3]" />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
            Let's <span className="text-yellow-500">Collaborate</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed">
            Ready to combine technical excellence with creative vision? Let's deliver solutions that drive real impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-10 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-xl">
              Get In Touch
            </Link>
            <Link href="/portfolio" className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;