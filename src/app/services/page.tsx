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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Services data
  const services = [
    {
      icon: <FaReact className="text-6xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />,
      title: "React Development",
      description: "Building fast, scalable, and responsive web applications using the latest React ecosystem.",
      bg: "bg-blue-900/30",
      hoverBg: "bg-blue-900/50"
    },
    {
      icon: <FaNodeJs className="text-6xl text-green-500 group-hover:text-green-400 transition-colors duration-300" />,
      title: "Node.js Development",
      description: "Creating high-performance server-side applications with Node.js for real-time solutions.",
      bg: "bg-green-900/30",
      hoverBg: "bg-green-900/50"
    },
    {
      icon: <SiMongodb className="text-6xl text-green-600 group-hover:text-green-500 transition-colors duration-300" />,
      title: "Database Solutions",
      description: "Expertise in MongoDB, PostgreSQL, and SQL databases for optimal data management.",
      bg: "bg-green-800/30",
      hoverBg: "bg-green-800/50"
    }
  ];

  // Features data
  const features = [
    {
      icon: <FaTools />,
      title: "Expertise",
      description: "Our team combines deep industry knowledge with hands-on experience to deliver top-tier digital solutions."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We apply innovative thinking and cutting-edge tools to keep your business ahead in a competitive market."
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliability",
      description: "You can count on us for consistent quality, transparent communication, and on-time project delivery."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gray-900 "
          style={{
            backgroundImage: 'url(/services.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-6 py-12 md:px-12 w-full max-w-6xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight"
          >
            We Craft Digital <span className="text-white">Solutions</span> That Matter
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed"
          >
            Our services are designed to transform your vision into exceptional digital experiences that drive results.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#services" 
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 flex items-center gap-2"
            >
              Explore Services <FaArrowRight />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce w-8 h-14 border-4 border-yellow-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-900 to-[#1e1e1e] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Our Services
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></motion.div>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              We specialize in delivering high-quality software solutions, expert consulting for cutting-edge technologies, 
              and tailored training programs to keep you ahead in the digital landscape.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 lg:gap-12"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative p-8 rounded-xl w-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <div className="absolute inset-0 rounded-xl bg-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex justify-center items-center mb-6">
                  <div className={`p-4 ${service.bg} rounded-full group-hover:${service.hoverBg} transition-colors duration-300`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-[#1e1e1e]  to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Why Choose Us
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 max-w-3xl mx-auto">
              Fast, high-quality results with client satisfaction as our top priority.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <div className="w-full max-w-md rounded-xl shadow-lg overflow-hidden">
                <Image 
                  src="./darkexper.jpg" 
                  alt="Why Choose Us" 
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-8">
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-6 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors duration-300"
                >
                  <div className="text-yellow-400 text-3xl mt-1 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gray-800">
          <Image
            src="./conact.jpg"
            alt="Collaboration Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl"
          >
            <motion.h3 variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 mb-2">
              — Let's Create Something Extraordinary
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Ready to Bring Your Vision to Life?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              I'm passionate about collaborating on innovative projects. Whether you need a complete solution or expert consultation, let's discuss how we can work together to build something remarkable.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="/contact" 
                className="inline-block mt-6 px-8 py-3 rounded-lg text-lg font-semibold border-2 transition-all duration-300 hover:scale-105 bg-transparent text-white border-white hover:bg-white hover:text-gray-900"
              >
                Start a Conversation <FaArrowRight className="inline ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;