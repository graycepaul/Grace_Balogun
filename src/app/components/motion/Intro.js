"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, animate, useReducedMotion } from "framer-motion";

const IntroContext = createContext({ ready: true });
export const useIntro = () => useContext(IntroContext);

const EASE = [0.76, 0, 0.24, 1];

export function IntroProvider({ children }) {
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("gb-intro") === "1";
    } catch {}
    if (seen || reduce) {
      setPlaying(false);
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.3,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        try {
          sessionStorage.setItem("gb-intro", "1");
        } catch {}
        setTimeout(() => setPlaying(false), 180);
      },
    });
    return () => controls.stop();
  }, [reduce]);

  useEffect(() => {
    document.documentElement.style.overflow = playing ? "hidden" : "";
  }, [playing]);

  return (
    <IntroContext.Provider value={{ ready: !playing }}>
      <AnimatePresence>
        {playing && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-8 md:p-12"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            initial={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, ease: EASE }}
            aria-hidden="true"
          >
            <div className="flex justify-between text-sm text-muted">
              <span>Grace Balogun</span>
              <span>Portfolio ©2026</span>
            </div>
            <div className="flex items-end justify-between gap-6">
              <div className="overflow-hidden">
                <motion.p
                  className="font-display text-5xl font-bold tracking-tight md:text-7xl"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  Engineer <span className="text-amber">&amp;</span> founder
                </motion.p>
              </div>
              <span className="font-display text-7xl font-bold tabular-nums tracking-tighter text-amber md:text-[10rem] md:leading-none">
                {count}
              </span>
            </div>
            <div className="h-px w-full bg-line">
              <div className="h-px bg-amber" style={{ width: `${count}%` }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </IntroContext.Provider>
  );
}
