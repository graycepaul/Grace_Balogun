"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "../data/data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Skills() {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-500 to-gray-900"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Skills & Expertise
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Comprehensive skill set focused on modern frontend development,
            performance optimization, and technical leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-1"
            >
              {/* Category Title with subtle bottom border */}
              <div className="pb-3 mb-4 border-b border-gray-200">
                <h3
                  className={`text-xl font-semibold text-center ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Simple, clean list of skills - no icons, no percentages */}
              <ul className="flex flex-col items-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className={`pb-3 border-b ${
                      theme === "dark"
                        ? "border-gray-800 text-gray-300"
                        : "border-gray-100 text-gray-700"
                    }`}
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
