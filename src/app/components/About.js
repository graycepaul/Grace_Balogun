"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { number: "35%+", label: "Page Load Speed", icon: "⚡" },
  { number: "40%", label: "Faster Deployment", icon: "🚀" },
  { number: "30+", label: "Components Built", icon: "🛠️" },
  { number: "50%", label: "UI Responsiveness", icon: "📱" },
];

const education = [
  {
    institution: "Tech4Dev Women Techsters Fellowship",
    period: "2023 – 2024",
    degree: "Software Development Certification",
    achievement: "Graduated among top 10% out of 1000+ fellows",
    icon: "🎓",
  },
  {
    institution: "FreeCodeCamp",
    period: "2023",
    degree: "JavaScript Algorithms & Data Structures",
    achievement: "",
    icon: "💻",
  },
  {
    institution: "FreeCodeCamp",
    period: "2023",
    degree: "Responsive Web Design Certification",
    achievement: "",
    icon: "💻",
  },
  {
    institution: "Kaduna State University",
    period: "2015 – 2019",
    degree: "B.Sc. Microbiology",
    achievement: "",
    icon: "🔬",
  },
];

export default function About() {
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
    <section id="about" className="pb-20 -mt-0 lg:-mt-10 ">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black  mb-4">
            About Me
          </h2>
          <p className="text-base text-gray-600  max-w-2xl mx-auto">
            Passionate frontend engineer crafting exceptional digital
            experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Professional Summary */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white  rounded-2xl p-8 border border-gray-100  shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-900  rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GE</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black ">
                    Grace Balogun
                  </h3>
                  <p className="text-green-800 font-medium">
                    Frontend Engineering Specialist
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700  leading-relaxed mb-6">
                With 2+ years of experience building enterprise-grade React
                applications, I specialize in creating high-performance,
                scalable frontend architectures. My expertise includes
                performance optimization, microfrontend architecture, and
                leading development teams to deliver exceptional user
                experiences.
              </p>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-black  mb-4">
                  Core Expertise
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React & Next.js",
                    "TypeScript",
                    "Performance",
                    "Team Leadership",
                    "Architecture",
                    "UI/UX",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 text-gray-700 "
                    >
                      <div className="w-2 h-2 bg-amber-600  rounded-full" />
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* What I Bring */}
            <motion.div
              variants={itemVariants}
              className="bg-black/80 rounded-2xl p-8 text-white shadow-lg shadow-black/20"
            >
              <h4 className="text-xl font-semibold mb-6">What I Bring</h4>
              <div className="space-y-4">
                {[
                  "Proven track record in improving core web vitals and user experience metrics",
                  "Expertise in modern frontend technologies including React, Next.js, and TypeScript",
                  "Strong leadership skills with experience mentoring and leading development teams",
                  "Focus on clean code, testing, and maintainable architecture",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <span className="text-white/90 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats & Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <motion.div variants={itemVariants}>
              <div className="bg-white  rounded-2xl p-8 border border-gray-100  shadow-lg">
                <h4 className="text-2xl font-bold text-black  mb-8 text-center">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-black  mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600  font-medium">
                        {stat.label}
                      </div>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-700 to-[#00d4aa] transition-all duration-300 mt-2 mx-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100  shadow-lg">
                <h4 className="text-2xl font-bold text-black  mb-8 text-center">
                  Education & Certifications
                </h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-gray-100  hover:border-green-600 transition-colors group"
                    >
                      <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h5 className="font-bold text-black text-lg">
                            {edu.institution}
                          </h5>
                          <span className="text-sm text-green-600  bg-green-900/10  px-3 py-1 rounded-full font-medium mt-1 lg:mt-0 min-w-28 text-center">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gray-700  font-medium mb-1">
                          {edu.degree}
                        </p>
                        {edu.achievement && (
                          <p className="text-sm text-gray-600  bg-gray-50  px-3 py-2 rounded-lg mt-2">
                            {edu.achievement}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-900 to-black/80 p-8 text-white rounded-2xl">
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
