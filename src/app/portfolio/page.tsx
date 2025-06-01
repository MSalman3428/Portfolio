import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FiMail as EnvelopeIcon } from 'react-icons/fi';
import { FaLinkedin as LinkedInIcon, FaGithub as GitHubIcon } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <>
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(./portfolio1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-6 py-16 md:px-12 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Full-Stack Development & E-Commerce Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            I deliver cutting-edge web solutions that combine technical excellence with strategic business insights, serving clients globally across diverse industries.
          </p>
          
          <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">
              Web Development Specializations
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-left">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> Custom full-stack development (HTML/CSS/JS/PHP)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> WordPress/WooCommerce architecture
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> Premium theme implementation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> Legacy system modernization
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> Performance optimization
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span> Ongoing maintenance & support
              </li>
            </ul>
          </div>

          <Link href="/portfolio" className="inline-block mt-12 px-10 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 text-xl font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
            View Case Studies
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0c0b0b]  text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Showcase</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Highlighted projects where innovative solutions met business excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Portfolio Card 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="./ecommerce-project.jpg"
                  alt="E-Commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-yellow-400 font-medium">E-Commerce Development</span>
                <h3 className="text-2xl font-bold my-3">Luxury Fashion Marketplace</h3>
                <p className="text-gray-300 mb-4">
                  Built a high-conversion WooCommerce platform with custom payment integrations and AR product previews.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">WooCommerce</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">Node.js</span>
                </div>
                <Link href="/portfolio/ecommerce-project" className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                  View Case Study <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Portfolio Card 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/webapp-project.jpg"
                  alt="Web Application"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-yellow-400 font-medium">Web Application</span>
                <h3 className="text-2xl font-bold my-3">Enterprise SaaS Platform</h3>
                <p className="text-gray-300 mb-4">
                  Developed a scalable business management solution with real-time analytics and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">MERN Stack</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">GraphQL</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">AWS</span>
                </div>
                <Link href="/portfolio/saas-project" className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                  View Case Study <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Portfolio Card 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/wordpress-project.jpg"
                  alt="WordPress Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-yellow-400 font-medium">WordPress Development</span>
                <h3 className="text-2xl font-bold my-3">News Media Portal</h3>
                <p className="text-gray-300 mb-4">
                  Created a high-performance news website with custom plugins for content distribution and monetization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">WordPress</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">PHP</span>
                  <span className="px-3 py-1 bg-[#333] rounded-full text-sm">MySQL</span>
                </div>
                <Link href="/portfolio/news-portal" className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center">
                  View Case Study <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/portfolio" className="inline-block px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300">
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24  overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-yellow-400">Exceptional</span> Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              I'm currently taking on select new projects. Whether you need a complete solution, 
              expert consultation, or technical partnership, let's start a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get In Touch
              </Link>
              <Link href="/portfolio" className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-lg">
                View My Work
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-medium text-gray-400 mb-6">Other Ways To Connect</h3>
              <div className="flex justify-center gap-6">
                <a href="mailto:hello@example.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <span className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    Email Me
                  </span>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <span className="flex items-center">
                    <LinkedInIcon className="w-5 h-5 mr-2" />
                    LinkedIn
                  </span>
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <span className="flex items-center">
                    <GitHubIcon className="w-5 h-5 mr-2" />
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;