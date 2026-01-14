"use client";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { useTheme } from "./hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

function Body({ children }) {
  const { theme } = useTheme(); // ✅ now inside provider

  return (
    <body className={theme === "dark" ? "dark" : ""}>
      <div
        className={`${inter.className} bg-white text-gray-900 min-h-screen transition-colors duration-300`}
      >
        {children}
      </div>
    </body>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <Body>{children}</Body>
      </ThemeProvider>
    </html>
  );
}
