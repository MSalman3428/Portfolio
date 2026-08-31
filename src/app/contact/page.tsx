"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ThinkDesignHeading from "../components/ThinkDesignHeading";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const Background3D = dynamic(() => import("../components/Background3D"), {
  ssr: false,
});

export default function ContactPage() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");
    setIsSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "59029774-2812-4d1a-bfae-921d359a4172");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully!");
        setIsSuccess(true);
        form.reset();
      } else {
        setStatus("Error sending message. Please try again.");
        setIsSuccess(false);
      }
    } catch {
      setStatus("Something went wrong. Check your connection.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <div className="relative min-h-screen bg-[#fcfcfd]/90 dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 transition-colors duration-500 py-20 px-4 sm:px-6 overflow-hidden backdrop-blur-sm">
        <Background3D />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-yellow-500 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20 backdrop-blur-md">
              Get In Touch
            </span>
            <ThinkDesignHeading as="h1" className="text-4xl sm:text-5xl font-extrabold mt-6 mb-4 tracking-tight font-heading">
              Let's Build <span className="text-yellow-500">Something Together</span>
            </ThinkDesignHeading>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-sans leading-relaxed">
              Have a project, engineering query, or job opening? Fill out the form or reach out directly using any of my contact details below.
            </p>
            <div className="h-1.5 w-20 bg-yellow-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start [perspective:1000px]">
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="depth-card lg:col-span-7 bg-white/80 dark:bg-slate-900/80 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md"
            >
              <ThinkDesignHeading as="h2" className="text-2xl font-bold mb-6 text-slate-900 dark:text-white font-heading">
                Send Me a Message
              </ThinkDesignHeading>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Your Name
                  </label>
                  <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-slate-900 dark:text-white font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-slate-900 dark:text-white font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-slate-900 dark:text-white font-sans text-sm resize-none"
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 active:scale-95"
                >
                  <FiSend /> {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {status && (
                    <div
                        className={`p-4 rounded-xl text-sm font-semibold flex items-center gap-3 ${
                            isSuccess
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                                : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30"
                        }`}
                    >
                      {isSuccess ? <FiCheckCircle size={18} /> : <FiAlertCircle size={18} />}
                      <span>{status}</span>
                    </div>
                )}
              </form>
            </motion.div>

            <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="depth-card lg:col-span-5 bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md"
            >
              <ThinkDesignHeading as="h2" className="text-2xl font-bold mb-6 text-slate-900 dark:text-white font-heading">
                Direct Contact Details
              </ThinkDesignHeading>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20 flex-shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <a
                        href="mailto:msalman3428@gmail.com"
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors break-all"
                    >
                      msalman3428@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20 flex-shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Phone Number
                    </p>
                    <a
                        href="tel:+923225132468"
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                    >
                      +92 322 5132468
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20 flex-shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Current Location
                    </p>
                    <p className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20 flex-shrink-0">
                    <FiLinkedin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      LinkedIn Profile
                    </p>
                    <a
                        href="https://linkedin.com/in/muhammad-salman-sheikhan-858247306"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors break-all"
                    >
                      linkedin.com/in/muhammad-salman-sheikhan-858247306
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-500/10 text-yellow-500 rounded-xl border border-yellow-500/20 flex-shrink-0">
                    <FiGithub className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      GitHub Repositories
                    </p>
                    <a
                        href="https://github.com/MSalman3428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors break-all"
                    >
                      github.com/MSalman3428
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}