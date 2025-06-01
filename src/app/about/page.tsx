import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <>
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900  to-[#lelele]">
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 px-6 py-16 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Profile  */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl hover:shadow-yellow-400/30 transition-all duration-500">
            <Image
              src="./about.jpg"
              alt=""
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="w-full md:w-2/3 text-white">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-300 mb-2">
            Meet Your Developer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Muhammad Salman
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-gray-400">
            Crafting Digital Excellence Through Code
          </h3>
          
          <div className="bg-black bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-gray-800">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              As a seasoned <span className="text-yellow-400">Software Engineer</span>, I architect transformative web solutions that drive business growth. My specialized expertise in <span className="text-yellow-400">Reactjs & Nextjs development</span> has empowered global brands to achieve their digital potential through technically sophisticated yet user-centric platforms.
            </p>
            
            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-400">
              Technical Value Proposition:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li className="flex items-start space-x-2">
                <CodeIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Full-cycle web development from concept to deployment</span>
              </li>
              <li className="flex items-start space-x-2">
                <LayoutIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Custom WordPress/WooCommerce architecture</span>
              </li>
              <li className="flex items-start space-x-2">
                <PerformanceIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Performance optimization & scalability engineering</span>
              </li>
              <li className="flex items-start space-x-2">
                <ShieldIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Enterprise-grade security hardening</span>
              </li>
              <li className="flex items-start space-x-2">
                <MobileIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Responsive, mobile-first implementations</span>
              </li>
              <li className="flex items-start space-x-2">
                <MaintenanceIcon className="flex-shrink-0 text-yellow-400 mt-1" size={20} />
                <span>Ongoing technical stewardship</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/portfolio" className="group relative px-8 py-4 font-bold rounded-lg overflow-hidden bg-yellow-400 text-black hover:text-white transition-all duration-300">
              <span className="relative z-10">Explore My Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link href="/contact" className="group relative px-8 py-4 font-bold rounded-lg border-2 border-yellow-400 text-yellow-400 hover:text-black overflow-hidden transition-all duration-300">
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute inset-0 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-b from-[#lelele] to-gray-900 text-white">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Technical Mastery & Professional Journey
        </span>
      </h2>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
        Delivering exceptional digital solutions through specialized expertise and proven methodologies
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Professional Timeline */}
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1"></div>
            <div className="w-px h-full bg-gray-600"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Proven Industry Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              For over four years, I've partnered with businesses and entrepreneurs to craft compelling digital experiences that drive measurable results across diverse market sectors.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mt-1"></div>
            <div className="w-px h-full bg-gray-600"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Technical Specializations</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond core development, I've mastered the full digital ecosystem including advanced web hosting configurations, performance optimization strategies, and enterprise-grade security protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-6 text-yellow-400">Core Competencies</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span>Web Development</span>
              <span className="text-yellow-400">Expert</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '95%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span>Performance Optimization</span>
              <span className="text-yellow-400">Advanced</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '90%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span>Security Hardening</span>
              <span className="text-yellow-400">Advanced</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '88%'}}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span>Infrastructure Management</span>
              <span className="text-yellow-400">Proficient</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <Link href="/about" className="inline-block px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 text-lg font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-300">
        Explore My Professional Journey
      </Link>
    </div>
  </div>
</section>


<section className="py-20 bg-gradient-to-b from-gray-900 to-[#lelele] text-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          My Technical Stack
        </span>
      </h2>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
        Cutting-edge technologies powering exceptional digital experiences
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
      {[
        { 
          icon: <FaReact className="text-6xl mx-auto" />, 
          name: "React", 
          color: "text-blue-400",
          hover: "hover:text-blue-400"
        },
        { 
          icon: <FaNodeJs className="text-6xl mx-auto" />, 
          name: "Node.js", 
          color: "text-green-500",
          hover: "hover:text-green-500"
        },
        { 
          icon: <SiMongodb className="text-6xl mx-auto" />, 
          name: "MongoDB", 
          color: "text-green-600",
          hover: "hover:text-green-600"
        },
        { 
          icon: <SiMysql className="text-6xl mx-auto" />, 
          name: "MySQL", 
          color: "text-blue-500",
          hover: "hover:text-blue-500"
        },
        { 
          icon: <SiJavascript className="text-6xl mx-auto" />, 
          name: "JavaScript", 
          color: "text-yellow-400",
          hover: "hover:text-yellow-400"
        }
      ].map((tech, index) => (
        <div 
          key={index}
          className="bg-[#2a2a2a] p-8 rounded-xl text-center transition-all duration-500 hover:bg-[#333] hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2 group"
        >
          <div className={`${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {tech.icon}
          </div>
          <h3 className={`text-xl font-semibold ${tech.hover} transition-colors duration-300`}>
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Enhanced Contact CTA Section */}
<section className="relative py-28 bg-[#1a1a1a] overflow-hidden">
  <div className="absolute inset-0 bg-[url('/contactus.jpg')] bg-cover bg-center opacity-40"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black"></div>
  
  <div className="relative z-10 container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let's <span className="text-yellow-400">Collaborate</span> on Your Next Project
      </h2>
      <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-300">
        With over 4 years of crafting high-performance digital experiences, I combine technical excellence with creative vision to deliver solutions that drive real business impact.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link 
          href="/contact" 
          className="relative px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg overflow-hidden group transition-all duration-300"
        >
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
        <Link 
          href="/portfolio" 
          className="relative px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg overflow-hidden group transition-all duration-300"
        >
          <span className="relative z-10">View My Work</span>
          <span className="absolute inset-0 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"></span>
        </Link>
      </div>
    </div>
  </div>
</section>
        
    </>
  );
};

export default About;