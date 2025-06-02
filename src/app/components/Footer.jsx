import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Line Above Footer */}
      <div className="h-px w-full bg-gray-700"></div>

      <div className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
            <Link href="/" className="text-lg hover:text-yellow-400 transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-yellow-400 transition-all duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-lg hover:text-yellow-400 transition-all duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-lg hover:text-yellow-400 transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Footer Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-yellow-400 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-yellow-400transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-salman-858247306/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-yellow-400 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-400 hover:text-yellow-400 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
