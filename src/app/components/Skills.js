"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: "💻",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "JavaScript (ES6+)", level: 95, icon: "🟨" },
      { name: "Redux", level: 88, icon: "🔄" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "HTML5", level: 98, icon: "🌐" },
      { name: "CSS3/SASS", level: 90, icon: "🎯" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, icon: "📚" },
      { name: "REST APIs", level: 88, icon: "🔗" },
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "Web Performance", level: 92, icon: "⚡" },
      { name: "Microfrontends", level: 80, icon: "🧩" },
      { name: "Responsive Design", level: 95, icon: "📱" },
      { name: "Chrome DevTools", level: 88, icon: "🔍" },
      { name: "Framer Motion", level: 75, icon: "✨" },
    ],
  },
  {
    title: "Professional Skills",
    icon: "🌟",
    skills: [
      { name: "Team Leadership", level: 85, icon: "👥" },
      { name: "Code Review", level: 90, icon: "🔍" },
      { name: "Performance Optimization", level: 92, icon: "🚀" },
      { name: "Technical Architecture", level: 80, icon: "🏗️" },
      { name: "Agile Methodology", level: 88, icon: "🔄" },
      { name: "UI/UX Collaboration", level: 85, icon: "🎨" },
      { name: "Mentoring", level: 82, icon: "💡" },
      { name: "Project Management", level: 78, icon: "📊" },
    ],
  },
];

export default function Skills() {
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

  const categoryVariants = {
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "from-green-950 to-green-800"; // Green
    if (level >= 80) return "from-green-600 to-green-400"; // Blue
    return "from-green-500 to-green-200"; // Purple
  };

  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black  mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base text-gray-600  max-w-2xl mx-auto">
            Comprehensive skill set focused on modern frontend development,
            performance optimization, and technical leadership
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-black to-green-900  rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-black ">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-gray-700 group-hover:text-black  transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-green-800  bg-green-800/10  px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: "⚡",
              title: "Performance",
              desc: "35%+ load time improvement",
              color: "from-[#00d4aa] to-[#10b981]",
            },
            {
              icon: "🚀",
              title: "Deployment",
              desc: "40% faster deployment",
              color: "from-[#0066ff] to-[#3b82f6]",
            },
            {
              icon: "🛠️",
              title: "Components",
              desc: "30+ reusable components",
              color: "from-[#8b5cf6] to-[#a78bfa]",
            },
            {
              icon: "👥",
              title: "Leadership",
              desc: "Team of 5 developers",
              color: "from-[#0066ff] to-[#00d4aa]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-white/90 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
