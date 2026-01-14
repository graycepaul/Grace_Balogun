"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`flex items-center my-12 md:my-20 lg:pt-0 max-h-fit ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-700"
          : "bg-white"
      }`}
    >
      <div className="mx-auto px-6 py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-5xl lg:text-6xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Hi, I&apos;m
              <span className="text-amber-600 pl-3">Grace Balogun</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`text-base max-w-2xl ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              3+ years of experience building enterprise-grade React
              applications. Proven record in improving user experience metrics
              and streamlining deployment workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`px-8 py-3 rounded-lg font-semibold text-center transition-colors ${
                  theme === "dark"
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-green-950 text-white hover:bg-[#286034]"
                }`}
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`px-8 py-3 rounded-lg font-semibold text-center transition-colors border-2 ${
                  theme === "dark"
                    ? "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                    : "border-green-800 text-green-700 hover:bg-[#326b44] hover:text-white"
                }`}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
                    ? "bg-gradient-to-r from-amber-700 to-teal-500"
                    : "bg-gradient-to-r from-amber-800 to-[#09f0c2]"
                }`}
              />
              <Image
                src="/grayce03.jpeg"
                alt="Grace Balogun"
                width={384}
                height={384}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
