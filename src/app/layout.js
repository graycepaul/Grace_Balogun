import { Providers } from "./components/providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Grace Balogun — Frontend Developer",
    template: "%s | Grace Balogun",
  },
  description:
    "Frontend developer building high-performance React/Next.js applications. Portfolio, projects, experience, and contact.",
  metadataBase: new URL("https://grace-balogun.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Grace Balogun — Frontend Developer",
    description:
      "Frontend developer building high-performance React/Next.js applications. Portfolio, projects, experience, and contact.",
    siteName: "Grace Balogun",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grace Balogun — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Balogun — Frontend Developer",
    description:
      "Frontend developer building high-performance React/Next.js applications. Portfolio, projects, experience, and contact.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
