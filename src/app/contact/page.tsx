import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-30"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./contact.jpg')" }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Let's Build Something Together
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Ready to discuss your project? Reach out and let's create something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-[#1c1a1a] border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-[#1c1a1a] border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1c1a1a] border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-300">hello@example.com</p>
                    <p className="text-sm text-gray-500 mt-1">Typically replies within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (123) 456-7890</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 mt-1">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-300">New York, USA</p>
                    <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Why Work With Me?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>4+ years of professional development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Client-focused approach with clear communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>End-to-end project ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">✓</span>
                  <span>Cutting-edge technical solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;