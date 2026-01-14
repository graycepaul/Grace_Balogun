"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { contactInfo } from "../data/data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      // Here you would typically send the data to your backend
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getGradientClass = () => {
    return theme === "dark"
      ? "bg-gradient-to-br from-amber-900/20 to-gray-800/50"
      : "bg-gradient-to-br from-green-50 to-blue-50";
  };

  const getAvailabilityGradient = () => {
    return theme === "dark"
      ? "bg-gradient-to-r from-amber-900/50 to-gray-800"
      : "bg-gradient-to-r from-black to-black/50";
  };

  return (
    <section
      id="contact"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I&apos;m always interested in new opportunities, exciting projects,
            and connecting with fellow developers and innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Image/Design Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div
              className={`${getGradientClass()} rounded-2xl p-8 border shadow-lg ${
                theme === "dark" ? "border-gray-700" : "border-gray-100"
              }`}
            >
              {/* Profile Image */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute inset-0 rounded-full blur-xl opacity-20 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-amber-600 to-teal-500"
                      : "bg-gradient-to-r from-amber-800 to-[#09f0c2]"
                  }`}
                />
                <Image
                  src="/grayce03.jpeg"
                  alt="Grace Balogun"
                  width={192}
                  height={192}
                  className={`rounded-full object-cover relative z-10 border-4 shadow-2xl w-full h-full ${
                    theme === "dark" ? "border-gray-800" : "border-white"
                  }`}
                  priority
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute -inset-4 border-2 rounded-full ${
                    theme === "dark" ? "border-amber-600" : "border-amber-700"
                  }`}
                />
              </div>

              {/* Personal Message */}
              <div className="text-center">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Let&apos;s Build Something Amazing
                </h3>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  With 3+ years of experience building enterprise-grade React
                  applications, I bring proven expertise in performance
                  optimization, clean architecture, and delivering exceptional
                  user experiences.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: "3+", label: "Years Exp" },
                    { value: "30+", label: "Projects" },
                    { value: "35%", label: "Faster" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`text-center p-3 rounded-xl ${
                        theme === "dark" ? "bg-gray-800/50" : "bg-white/50"
                      }`}
                    >
                      <div
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-amber-400" : "text-green-800"
                        }`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Connect Prompt */}
              <div
                className={`text-center p-4 rounded-xl mt-6 ${
                  theme === "dark"
                    ? "bg-gray-800/30 border border-gray-700"
                    : "bg-white/50 border border-gray-200"
                }`}
              >
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  👋 Don&apos;t hesitate to reach out! Whether it&apos;s for
                  collaboration, consultation, or just to chat about frontend
                  development.
                </p>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className={`${getAvailabilityGradient()} rounded-2xl p-6 text-white text-center`}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                <span className="font-semibold">Currently Available</span>
              </div>
              <p className="text-white/90 text-sm">
                Open to new opportunities and collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className={`rounded-2xl p-8 shadow-lg border ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Send Me a Message
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Let&apos;s discuss your next project
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-gray-300 ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-900 text-white focus:ring-amber-500 hover:border-gray-600"
                      : "border-gray-200 bg-white text-gray-900 focus:ring-[#0066ff] hover:border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-gray-300 ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-900 text-white focus:ring-amber-500 hover:border-gray-600"
                      : "border-gray-200 bg-white text-gray-900 focus:ring-[#0066ff] hover:border-gray-300"
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 hover:border-gray-300 resize-none ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-900 text-white focus:ring-amber-500 hover:border-gray-600"
                      : "border-gray-200 bg-white text-gray-900 focus:ring-[#0066ff] hover:border-gray-300"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "bg-green-950 hover:bg-green-900"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>

            {/* Response Time Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className={`text-center mt-6 p-4 rounded-xl ${
                theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"
              }`}
            >
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                💫 I typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className={`text-center mt-16 pt-8 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} Grace Balogun. All rights reserved.
          </p>
          <p
            className={`text-sm mt-2 ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
