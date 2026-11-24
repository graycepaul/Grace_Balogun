import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { IntroProvider } from "./components/motion/Intro";
import SmoothScroll from "./components/motion/SmoothScroll";
import Cursor from "./components/motion/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

const title = "Grace Balogun · Frontend & Mobile Engineer, Founder of Arbinx";
const description =
  "Frontend and mobile engineer with 4+ years in React, Next.js and React Native. Cut Hawkeye's load time by 35%. Building Arbinx end to end.";

export const metadata = {
  title: { default: title, template: "%s | Grace Balogun" },
  description,
  metadataBase: new URL("https://grace-balogun.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Grace Balogun",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0B0B0C" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <IntroProvider>
          <SmoothScroll />
          <Cursor />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}
