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
          return "from-amber-700 to-amber-500";
        case "medium":
          return "from-amber-600 to-amber-400";
        default:
          return "from-amber-500 to-amber-300";
      }
    } else {
      switch (impact) {
        case "high":
          return "from-green-900 to-green-700";
        case "medium":
          return "from-green-800 to-green-600";
        default:
          return "from-amber-700 to-amber-500";
      }
    }
  };

  const getImpactBadgeColor = () => {
    return theme === "dark"
      ? "bg-gray-800/90 text-gray-200"
      : "bg-white/90 text-gray-900";
  };

  return (
    <section
      id="projects"
      className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-500"
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
            Featured Projects
          </h2>
          <p
            className={`text-base max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border h-full flex flex-col ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-100"
                }`}
              >
                {/* Project Header with Gradient */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${getImpactColor(
                    project.impact
                  )} overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 ${
                      theme === "dark" ? "bg-black/20" : "bg-black/10"
                    } group-hover:${
                      theme === "dark" ? "bg-black/10" : "bg-black/5"
                    } transition-colors`}
                  />

                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`${getImpactBadgeColor()} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}
                    >
                      {project.impact} Impact
                    </div>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                    >
                      <svg
                        className="w-6 h-6 text-white"
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
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p
                    className={`mb-4 leading-relaxed flex-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300 border-gray-600"
                            : "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {project.achievements.map(
                      (achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center space-x-3 group/achievement"
                        >
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 group-hover/achievement:scale-150 transition-transform ${
                              theme === "dark" ? "bg-amber-500" : "bg-amber-600"
                            }`}
                          />
                          <span
                            className={`text-sm transition-colors ${
                              theme === "dark"
                                ? "text-gray-400 group-hover/achievement:text-gray-300"
                                : "text-gray-600 group-hover/achievement:text-gray-700"
                            }`}
                          >
                            {achievement}
                          </span>
                        </div>
                      )
                    )}
                  </div>

                  {/* Links */}
                  <div
                    className={`flex space-x-3 pt-4 border-t mt-auto ${
                      theme === "dark" ? "border-gray-700" : "border-gray-100"
                    }`}
                  >
                    {Object.entries(project.links).map(([key, value]) => (
                      <motion.a
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 text-center py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                          key === "live"
                            ? theme === "dark"
                              ? "bg-amber-600 text-white hover:bg-amber-700"
                              : "bg-green-950 text-white hover:bg-green-800"
                            : theme === "dark"
                            ? "bg-gray-700 text-amber-400 hover:bg-gray-600 border border-amber-500"
                            : "bg-gray-100 text-green-800 hover:bg-gray-200 border border-green-700"
                        }`}
                      >
                        {key === "github" ? (
                          <div className="flex items-center justify-center space-x-2">
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
                            <span>GitHub</span>
                          </div>
                        ) : (
                          key
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

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-8 text-white rounded-xl mx-6 ${
            theme === "dark"
              ? "bg-gradient-to-r from-amber-900/80 to-gray-800"
              : "bg-gradient-to-r from-black/80 to-green-900"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Discover more of my work, including open-source contributions, side
            projects, and experimental builds on GitHub.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/graycepaul"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-colors ${
              theme === "dark"
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">View More on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
