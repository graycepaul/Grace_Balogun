"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-200 "
    >
      <nav className="container mx-auto p-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6 mx-auto">
            <div className="flex gap-4 md:gap-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-800  hover:text-amber-600 transition-colors font-medium text-xs md:text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
