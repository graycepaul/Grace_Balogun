"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { useTheme } from "../hooks/useTheme";

function Body({ children }) {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-white text-gray-900 min-h-screen transition-colors duration-300">
        {children}
      </div>
    </div>
  );
}

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <Body>{children}</Body>
    </ThemeProvider>
  );
}
