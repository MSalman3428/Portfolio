"use client";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaNodeJs, FaTools, FaLightbulb, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';

// Animation configurations
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  scaleUp: {
    hidden: { scale: 0.95 },
    visible: { scale: 1, transition: { duration: 0.5 } }
  }
};

// Data configurations
const data = {
  technologies: [
    { icon: <FaReact size={50} />, name: "React", color: "text-blue-400" },
    { icon: <FaNodeJs size={50} />, name: "Node.js", color: "text-green-500" },
    { icon: <SiMongodb size={50} />, name: "MongoDB", color: "text-green-600" },
    { icon: <SiMysql size={50} />, name: "MySQL", color: "text-blue-500" },
    { icon: <SiJavascript size={50} />, name: "JavaScript", color: "text-yellow-400" }
  ],
  services: [
    { 
      icon: <FaReact size={60} />, 
      title: "React Development", 
      description: "Building fast, scalable, and responsive web applications using React.", 
      color: "text-blue-600" 
    },
    { 
      icon: <FaNodeJs size={60} />, 
      title: "Node.js Development", 
      description: "Creating server-side applications with Node.js for real-time performance.", 
      color: "text-green-600" 
    },
    { 
      icon: <SiMongodb size={60} />, 
      title: "Database Solutions", 
      description: "Expertise in MongoDB and SQL databases for scalable data management.", 
      color: "text-green-700" 
    }
  ],
  blogs: [
    { 
      title: "Power of E-Gaming", 
      description: "Exploring the social and economic impact of gaming and how it's shaping modern entertainment.", 
      link: "/blog/power-of-e-gaming" 
    },
    { 
      title: "AI in Modern Software Development", 
      description: "How artificial intelligence is streamlining development processes.", 
      link: "/blog/ai-in-software-development" 
    },
    { 
      title: "The Future of Web Design", 
      description: "Upcoming trends in web design and how it will impact user experience.", 
      link: "/blog/future-of-web-design" 
    }
  ],
  projects: [
    { 
      title: "E-commerce Platform", 
      description: "A fully integrated e-commerce platform with seamless shopping experience.", 
      image: "/images/portfolio1.jpg", 
      link: "/portfolio/e-commerce-platform" 
    },
    { 
      title: "Corporate Website", 
      description: "Modern, responsive corporate website showcasing company vision.", 
      image: "/images/portfolio2.jpg", 
      link: "/portfolio/corporate-website" 
    },
    { 
      title: "Startup Landing Page", 
      description: "Sleek, minimalist landing page for new startup introduction.", 
      image: "/images/portfolio3.jpg", 
      link: "/portfolio/startup-landing-page" 
    }
  ],
  features: [
    { 
      icon: <FaTools size={24} />, 
      title: "Expertise", 
      description: "Deep industry knowledge with hands-on experience." 
    },
    { 
      icon: <FaLightbulb size={24} />, 
      title: "Innovation", 
      description: "Cutting-edge tools to keep your business ahead." 
    },
    { 
      icon: <FaShieldAlt size={24} />, 
      title: "Reliability", 
      description: "Consistent quality and on-time delivery." 
    }
  ]
};

import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <motion.h2 
    variants={animations.fadeInUp}
    className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
  >
    {children}
  </motion.h2>
);

interface SectionSubtitleProps {
  children: ReactNode;
}

const SectionSubtitle = ({ children }: SectionSubtitleProps) => (
  <motion.p 
    variants={animations.fadeInUp}
    className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
  >
    {children}
  </motion.p>
);

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
}

const PrimaryButton = ({ href, children }: PrimaryButtonProps) => (
  <Link href={href}>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center"
    >
      {children} <FaArrowRight className="ml-2" />
    </motion.button>
  </Link>
);


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-[#lelele] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="./hero.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={animations.staggerContainer}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center"
        >
          <motion.h3 
            variants={animations.fadeInUp} 
            className="text-xl md:text-2xl font-medium text-yellow-400 mb-4"
          >
            — Muhammad Salman
          </motion.h3>
          
          <motion.h1 
            variants={animations.fadeInUp} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl"
          >
            Hi, I'm <span className="text-yellow-400">Muhammad Salman</span> — a passionate <span className="text-yellow-400">Software Engineer</span> creating efficient, scalable digital solutions.
          </motion.h1>
          
          <motion.div variants={animations.fadeInUp} className="mt-8">
            <PrimaryButton href="/contact">
              Contact Me
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-[#lelele] to-gray-900">
        <div className="text-center mb-16">
          <SectionTitle>Technologies I Work With</SectionTitle>
          <SectionSubtitle>
            Cutting-edge tools to build modern, performant applications
          </SectionSubtitle>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {data.technologies.map((tech, index) => (
            <motion.div 
              key={index}
              variants={animations.fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-gray-800 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <div className={`${tech.color} mb-4 flex justify-center`}>
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#lelele] to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>What I Do</SectionTitle>
            <SectionSubtitle>
              High-quality software solutions tailored to your business needs
            </SectionSubtitle>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {data.services.map((service, index) => (
              <motion.div 
                key={index}
                variants={animations.fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 p-8 rounded-xl shadow-lg"
              >
                <div className={`${service.color} mb-6 flex justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionTitle>What I Write</SectionTitle>
          <SectionSubtitle>
            Insights on technology trends and software development
          </SectionSubtitle>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {data.blogs.map((blog, index) => (
            <motion.div 
              key={index}
              variants={animations.fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-4">
                  {blog.title}
                </h4>
                <p className="text-gray-400 mb-6">
                  {blog.description}
                </p>
                <Link href={blog.link}>
                  <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    Read More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 px-4 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="./contactus.jpg"
            alt="Background"
            fill
            className="object-cover opacity-40"
          />
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.fadeIn}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={animations.fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experienced Software Engineer
          </motion.h2>
          
          <motion.p 
            variants={animations.fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            With over 4 years of experience crafting high-performance applications, I specialize in building efficient, scalable, and user-friendly solutions.
          </motion.p>
          
          <motion.div variants={animations.fadeInUp}>
            <PrimaryButton href="/contact">
              Get In Touch
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-[#lelele]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Why Choose Me</SectionTitle>
            <SectionSubtitle>
            Quality, innovation, and reliability at the core of everything I do, driving me to continuously improve and deliver exceptional results that exceed expectations.
            </SectionSubtitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.scaleUp}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl aspect-square">
                <Image 
                  src="./darkexper.jpg" 
                  alt="Why Choose Us"
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.staggerContainer}
              className="space-y-6"
            >
              {data.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={animations.fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-6 p-6 bg-gray-900 rounded-xl transition-all duration-300"
                >
                  <div className="text-yellow-400 text-2xl mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-yellow-400 hover:text-yellow-100">{feature.title}</h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-[#lelele] to-gray-900">
        <div className="text-center mb-16">
          <SectionTitle>My Portfolio</SectionTitle>
          <SectionSubtitle>
            A selection of my most impactful projects and work
          </SectionSubtitle>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animations.staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {data.projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={animations.fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <Link href={project.link}>
                  <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    View Project <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}