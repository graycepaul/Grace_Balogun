"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education, stats } from "../data/data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className={`py-36 -mt-20 lg:-mt-20 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-700 to-gray-950"
          : "bg-white"
      }`}
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
            About Me
          </h2>
          <p
            className={`text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate frontend engineer crafting exceptional digital
            experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Professional Summary */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className={`rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-shadow ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-100"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-amber-600" : "bg-green-900"
                  }`}
                >
                  <span className="text-white font-bold text-lg">GB</span>
                </div>
                <div>
                  <h3
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Grace Balogun
                  </h3>
                  <p
                    className={`font-medium ${
                      theme === "dark" ? "text-amber-400" : "text-green-800"
                    }`}
                  >
                    Frontend Developer
                  </p>
                </div>
              </div>

              <p
                className={`text-base leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                With 3+ years of experience building enterprise-grade React
                applications, I specialize in creating high-performance,
                scalable frontend architectures. My expertise includes
                performance optimization, microfrontend architecture, and
                leading development teams to deliver exceptional user
                experiences.
              </p>

              <div
                className={`rounded-xl p-6 ${
                  theme === "dark" ? "bg-gray-700/50" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`text-xl font-semibold mb-4 ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Core Expertise
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React & Next.js",
                    "React Native",
                    "TypeScript",
                    "Performance",
                    "Team Leadership",
                    "Architecture",
                    "UI/UX",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          theme === "dark" ? "bg-amber-500" : "bg-amber-600"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* What I Bring */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`rounded-2xl p-8 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-800 text-white shadow-black/40"
                  : "bg-black/80 text-white shadow-black/20"
              }`}
            >
              <h4 className="text-xl font-semibold mb-6">What I Bring</h4>
              <div className="space-y-4">
                {[
                  "Proven track record in improving core web vitals and user experience metrics",
                  "Expertise in modern frontend technologies including React, Next.js, and TypeScript",
                  "Strong leadership skills with experience mentoring and leading development teams",
                  "Focus on clean code, user experience, testing, and maintainable architecture",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        theme === "dark" ? "bg-amber-600/30" : "bg-white/20"
                      }`}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-white/90"
                      }`}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats & Education */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <div
                className={`rounded-2xl p-8 border shadow-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <h4
                  className={`text-2xl font-bold mb-8 text-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Key Achievements
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div
                        className={`text-2xl lg:text-3xl font-bold mb-2 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {stat.number}
                      </div>
                      <div
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {stat.label}
                      </div>
                      <div
                        className={`w-0 group-hover:w-full h-0.5 transition-all duration-300 mt-2 mx-auto ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-amber-500 to-amber-600"
                            : "bg-gradient-to-r from-green-700 to-[#00d4aa]"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div
                className={`rounded-2xl p-8 border shadow-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                <h4
                  className={`text-2xl font-bold mb-8 text-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Education & Certifications
                </h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-colors group ${
                        theme === "dark"
                          ? "border-gray-700 hover:border-amber-500"
                          : "border-gray-100 hover:border-green-600"
                      }`}
                    >
                      <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h5
                            className={`font-bold text-lg ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {edu.institution}
                          </h5>
                          <span
                            className={`text-sm px-3 py-1 rounded-full font-medium mt-1 lg:mt-0 min-w-28 text-center ${
                              theme === "dark"
                                ? "text-amber-400 bg-amber-900/20"
                                : "text-green-600 bg-green-900/10"
                            }`}
                          >
                            {edu.period}
                          </span>
                        </div>
                        <p
                          className={`font-medium mb-1 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {edu.degree}
                        </p>
                        {edu.achievement && (
                          <p
                            className={`text-sm px-3 py-2 rounded-lg mt-2 ${
                              theme === "dark"
                                ? "text-gray-400 bg-gray-700/50"
                                : "text-gray-600 bg-gray-50"
                            }`}
                          >
                            {edu.achievement}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className={`p-8 text-white rounded-2xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-amber-900/80 to-gray-800"
                : "bg-gradient-to-r from-green-900 to-black/80"
            }`}
          >
            <h4 className="text-2xl font-bold mb-4">Beyond Code</h4>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              When I&apos;m not crafting beautiful interfaces, you can find me
              exploring new technologies, contributing to open source, or
              mentoring aspiring developers in the tech community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
