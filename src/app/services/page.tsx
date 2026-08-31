"use client";
import { FaReact, FaNodeJs, FaTools, FaLightbulb, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const ServicesPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const services = [
    {
      icon: <FaReact className="text-5xl text-blue-500 group-hover:text-blue-400 transition-colors" />,
      title: "React Development",
      description: "Building fast, scalable, and responsive web applications using the latest React ecosystem and Next.js.",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <FaNodeJs className="text-5xl text-emerald-500 group-hover:text-emerald-400 transition-colors" />,
      title: "Node.js Development",
      description: "Creating high-performance server-side applications with Node.js for real-time, scalable solutions.",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      icon: <SiMongodb className="text-5xl text-green-600 group-hover:text-green-500 transition-colors" />,
      title: "Database Solutions",
      description: "Expertise in MongoDB and SQL databases designed for high availability and optimal data management.",
      bg: "bg-green-50 dark:bg-green-900/20",
    }
  ];

  const features = [
    {
      icon: <FaTools />,
      title: "Expertise",
      description: "Deep industry knowledge combined with hands-on experience to deliver top-tier digital solutions."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Applying innovative thinking and modern tools to keep your business ahead of the competition."
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliability",
      description: "Consistent quality, transparent communication, and strict adherence to project deadlines."
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/services.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay that works for both modes visually */}
          <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-50"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight"
          >
            We Craft <span className="text-yellow-500">Digital Solutions</span> That Matter
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-200 mb-10 leading-relaxed"
          >
            Transforming your vision into exceptional digital experiences that drive real-world results.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#services" className="px-8 py-4 bg-yellow-500 text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-2">
              Explore Services <FaArrowRight />
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2">
              Contact Us <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-600 dark:text-yellow-500">Expertise</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mb-8"></motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className={`w-20 h-20 flex items-center justify-center mb-8 rounded-3xl ${service.bg} transition-transform group-hover:scale-110`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40 px-6 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="relative">
             <div className="absolute -inset-4 bg-yellow-500/20 rounded-[2rem] blur-2xl"></div>
             <Image 
                src="/darkexper.jpg" 
                alt="Expertise" 
                width={600}
                height={600}
                className="relative rounded-[2rem] shadow-2xl object-cover"
              />
          </motion.div>

          <div className="space-y-10">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
              <h2 className="text-4xl font-bold mb-4">Why Work <span className="text-yellow-600 dark:text-yellow-500">With Me</span></h2>
              <p className="text-slate-600 dark:text-slate-400">Fast, high-quality results with your satisfaction as the top priority.</p>
            </motion.div>

            <div className="space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="text-yellow-600 dark:text-yellow-500 text-3xl p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/conact.jpg" alt="Contact" fill className="object-cover scale-110 brightness-50" />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto">
            I'm passionate about collaborating on innovative projects. Let's build something remarkable together.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
             Start a Conversation <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;