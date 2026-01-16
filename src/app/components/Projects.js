"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/data";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getImpactColor = (impact) => {
    if (theme === "dark") {
      switch (impact) {
        case "high":
          return "text-amber-400 border-amber-500";
        case "medium":
          return "text-emerald-400 border-emerald-500";
        default:
          return "text-green-400 border-green-500";
      }
    } else {
      switch (impact) {
        case "high":
          return "text-green-600 border-green-600";
        case "medium":
          return "text-amber-600 border-amber-600";
        default:
          return "text-orange-600 border-orange-600";
      }
    }
  };

  const getCardBackground = () => {
    return theme === "dark"
      ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700"
      : "bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-200";
  };

  return (
    <section
      id="projects"
      className={`py-20 relative ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            theme === "dark" ? "bg-cyan-500/10" : "bg-cyan-400/20"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            theme === "dark" ? "bg-emerald-500/10" : "bg-emerald-400/20"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${
                theme === "dark"
                  ? "bg-gray-800/50 text-gray-300 border border-gray-700"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Featured Work
            </span>
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${
              theme === "dark"
                ? "from-gray-200 via-gray-100 to-gray-300"
                : "from-gray-800 via-gray-900 to-black"
            } bg-clip-text text-transparent`}
          >
            Projects & Case Studies
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Enterprise-grade applications delivering measurable performance
            improvements and exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div
                className={`h-full rounded-2xl ${getCardBackground()} shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden relative`}
              >
                {/* Minimalist Accent Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    theme === "dark"
                      ? "from-amber-500 via-amber-600 to-amber-700"
                      : "from-green-400 via-green-600 to-green-700"
                  }`}
                />

                {/* Card Header - Clean Design */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            theme === "dark" ? "bg-amber-600" : "bg-green-600"
                          } animate-pulse`}
                        />{" "}
                        <h3
                          className={`text-xl font-bold  ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* External Link Icon */}
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      className={`p-2 rounded-lg ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-400 hover:text-cyan-400"
                          : "bg-gray-100 text-gray-600 hover:text-cyan-600"
                      } transition-colors`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies - Modern Chip Style */}
                <div className="px-6 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${
                          theme === "dark"
                            ? "bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-500/50"
                            : "bg-white/50 text-gray-700 border-gray-200 hover:border-cyan-400/50"
                        } transition-colors`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievements - Clean List */}
                <div className="px-6 mb-6 flex-1">
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                      theme === "dark" ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {project.achievements.map(
                      (achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start space-x-3"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              theme === "dark" ? "bg-cyan-500" : "bg-cyan-400"
                            }`}
                          />
                          <span
                            className={`text-sm leading-relaxed ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {achievement}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Links - Modern Button Group */}
                <div
                  className={`px-6 pt-6 pb-6 border-t ${
                    theme === "dark" ? "border-gray-800" : "border-gray-100"
                  }`}
                >
                  <div className="flex gap-3">
                    {Object.entries(project.links).map(([key, value]) => (
                      <motion.a
                        key={key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                          key === "live"
                            ? theme === "dark"
                              ? "bg-gradient-to-r from-amber-600 to-amber-900 text-white hover:shadow-lg hover:shadow-green-900/25"
                              : "bg-green-900 text-white hover:shadow-lg hover:shadow-green-900/25"
                            : theme === "dark"
                            ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {key === "github" ? (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Code</span>
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Live Demo</span>
                          </>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* GitHub CTA - Modern Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-20 relative z-10"
      >
        <div
          className={`relative overflow-hidden rounded-3xl p-8 mx-6 backdrop-blur-sm border ${
            theme === "dark"
              ? "bg-gray-900/30 border-gray-800"
              : "bg-white/30 border-gray-200"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative">
            <h3
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Explore More Projects
            </h3>
            <p
              className={`text-lg mb-8 max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Discover more of my work, including open-source contributions,
              side projects, and experimental builds on GitHub.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/graycepaul"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-xl hover:shadow-cyan-500/10 border border-gray-700"
                  : "bg-gradient-to-r from-gray-900 to-black text-white hover:shadow-xl hover:shadow-cyan-400/10"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>View GitHub Portfolio</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
