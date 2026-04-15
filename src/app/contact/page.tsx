"use client";

import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    // Get a free access key from https://web3forms.com/
    formData.append("access_key", "59029774-2812-4d1a-bfae-921d359a4172"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Message Sent Successfully!");
      e.target.reset();
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-30 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/contact.jpg')" }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Let's Build Something Together
            </span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Ready to discuss your project? Reach out today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input name="name" type="text" required className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input name="email" type="email" required className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                <FiSend /> {status || "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FiMail className="text-2xl text-yellow-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">msalman3428@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FiPhone className="text-2xl text-yellow-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">03225132468</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin className="text-2xl text-yellow-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;