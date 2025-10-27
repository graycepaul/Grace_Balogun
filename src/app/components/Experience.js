"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "MavenCode – Frontend Developer",
    project: "Hawkeye VisionTek Project",
    period: "2024 – Present",
    links: {
      dashboard: "https://app.hawkeyevisiontek.com/",
      website: "https://hawkeyevisiontek.com/",
    },
    achievements: [
      "Re-architected the core frontend using React, Next.js, and TypeScript, boosting page load speed by over 35%",
      "Spearheaded migration from monolithic to microfrontend architecture across three applications",
      "Reduced deployment time by 40% and build errors by 70%",
      "Built and maintained over 30 reusable components with Redux integration",
      "Led a team of 5 developers in code quality and sprint delivery",
    ],
  },
  {
    company: "MavenCode – Frontend Developer",
    project: "Legislative AI Platform (Coterie AI)",
    period: "2024",
    links: {
      website: "https://coterie.ai",
    },
    achievements: [
      "Implemented fully responsive user interface for legislative intelligence platform",
      "Enhanced UI performance and layout consistency with 50% improvement in responsiveness",
      "Integrated frontend components with backend API endpoints for real-time data display",
    ],
  },
  {
    company: "Tech4Dev – Frontend Developer",
    project: "Mindful Therapy Platform",
    period: "2024",
    links: {
      github: "https://github.com/gravcepaul/mindful-app",
      demo: "https://mindful-app.vercel.app/",
    },
    achievements: [
      "Developed therapy-focused web application with multi-language support",
      "Integrated Firebase authentication and session management",
      "Achieved 99.8% system uptime and improved user engagement by 45%",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black  mb-4">
            Professional Experience
          </h2>
          <p className="text-base text-gray-600  max-w-2xl mx-auto">
            Building enterprise-grade applications with measurable impact on
            performance and user experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200  transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-green-800  rounded-full border-4 border-white  transform -translate-x-1/2 -translate-y-2 z-10 hidden lg:block" />

                <div
                  className={`lg:flex ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-start gap-8`}
                >
                  {/* Content Card */}
                  <div className="lg:w-1/2 lg:pt-0 pt-8">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white  rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 "
                    >
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 pb-6 border-b border-gray-100 ">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-black  mb-2">
                            {exp.company}
                          </h3>
                          <p className="text-lg text-green-800 font-semibold mb-1">
                            {exp.project}
                          </p>
                          <p className="text-gray-500  text-sm">{exp.period}</p>
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
                              className="bg-green-900  text-white px-4 py-2 rounded-lg text-sm font-medium capitalize hover:bg-[#0052cc] transition-colors"
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
                            className="flex items-start space-x-4 text-gray-700  group"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-amber-600  rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
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
                      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100 ">
                        {exp.achievements.some((a) => a.includes("React")) && (
                          <span className="px-3 py-1 bg-green-50 border border-green-600  text-green-800  rounded-full text-sm font-medium">
                            React
                          </span>
                        )}
                        {exp.achievements.some((a) =>
                          a.includes("Next.js")
                        ) && (
                          <span className="px-3 py-1 bg-black  text-white  rounded-full text-sm font-medium">
                            Next.js
                          </span>
                        )}
                        {exp.achievements.some((a) =>
                          a.includes("TypeScript")
                        ) && (
                          <span className="px-3 py-1 bg-green-800 text-white rounded-full text-sm font-medium">
                            TypeScript
                          </span>
                        )}
                        {exp.achievements.some((a) =>
                          a.includes("Firebase")
                        ) && (
                          <span className="px-3 py-1 bg-orange-100  text-orange-600  rounded-full text-sm font-medium">
                            Firebase
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-1/2 hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              whileHover={{ scale: 1.05 }}
              className="bg-white  p-6 rounded-2xl border border-gray-100  text-center group hover:border-green-600 transition-colors"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-black  mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 ">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
