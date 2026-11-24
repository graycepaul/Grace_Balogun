"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems } from "../data/data";
import { Magnetic, EASE } from "./motion/primitives";
import { useIntro } from "./motion/Intro";

export default function Nav() {
  const { ready } = useIntro();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240);
    setScrolled(y > 24);
  });

  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: !ready || hidden ? -100 : 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: ready && !scrolled ? 0.5 : 0 }}
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-display text-lg font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-amber text-[15px] text-ink">
              GB
            </span>
            <span className="hidden sm:inline">Grace Balogun</span>
          </a>

          <nav
            aria-label="Sections"
            className="order-3 flex w-full justify-center gap-1 rounded-full border border-line bg-panel/80 p-1.5 text-sm font-medium sm:order-none sm:w-auto"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative rounded-full px-4 py-2"
                aria-current={active === item.id ? "true" : undefined}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-line"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <Magnetic>
            <a
              href="#contact"
              className="block rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber"
            >
              Hire me
            </a>
          </Magnetic>
        </div>
        <motion.div className="h-px origin-left bg-amber" style={{ scaleX: scrollYProgress }} />
      </div>
    </motion.header>
  );
}
