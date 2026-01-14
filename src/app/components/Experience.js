"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences, techMapping } from "../data/data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Experience() {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className={`py-20 ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
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
            Professional Experience
          </h2>
          <p
            className={`text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Building enterprise-grade applications with measurable impact on
            performance and user experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden lg:block ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-200"
            }`}
          />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 lg:left-1/2 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 -translate-y-2 z-10 hidden lg:block ${
                    theme === "dark"
                      ? "bg-amber-600 border-gray-900"
                      : "bg-green-800 border-white"
                  }`}
                />

                <div
                  className={`lg:flex ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-start gap-8`}
                >
                  {/* Content Card */}
                  <div className="lg:w-1/2 lg:pt-0 pt-8">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-100"
                      }`}
                    >
                      {/* Header */}
                      <div
                        className={`flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 pb-6 border-b ${
                          theme === "dark"
                            ? "border-gray-700"
                            : "border-gray-100"
                        }`}
                      >
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-bold mb-2 ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {exp.company}
                          </h3>
                          <p
                            className={`text-lg font-semibold mb-1 ${
                              theme === "dark"
                                ? "text-amber-400"
                                : "text-green-800"
                            }`}
                          >
                            {exp.project}
                          </p>
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {exp.period}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                          {Object.entries(exp.links).map(([key, value]) => (
                            <motion.a
                              key={key}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                                theme === "dark"
                                  ? "bg-amber-600 text-white hover:bg-amber-700"
                                  : "bg-green-900 text-white hover:bg-[#0052cc]"
                              }`}
                            >
                              {key}
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className={`flex items-start space-x-4 group ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform ${
                                theme === "dark"
                                  ? "bg-amber-500"
                                  : "bg-amber-600"
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
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div
                        className={`flex flex-wrap gap-2 mt-6 pt-6 border-t ${
                          theme === "dark"
                            ? "border-gray-700"
                            : "border-gray-100"
                        }`}
                      >
                        {Object.entries(techMapping).map(([key, tech]) => {
                          const shouldShow = exp.achievements.some(
                            (achievement) =>
                              tech.keywords.some((keyword) =>
                                achievement
                                  .toLowerCase()
                                  .includes(keyword.toLowerCase())
                              )
                          );

                          if (!shouldShow) return null;

                          return (
                            <span
                              key={key}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                theme === "dark"
                                  ? tech.darkClass
                                  : tech.lightClass
                              }`}
                            >
                              {tech.label}
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-1/2 hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { number: "35%+", label: "Performance Improvement", icon: "⚡" },
            { number: "40%", label: "Faster Deployment", icon: "🚀" },
            { number: "30+", label: "Components Built", icon: "🛠️" },
            { number: "5", label: "Team Members Led", icon: "👥" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl border text-center group transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:border-amber-500"
                  : "bg-white border-gray-100 hover:border-green-600"
              }`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div
                className={`text-2xl lg:text-3xl font-bold mb-1 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
