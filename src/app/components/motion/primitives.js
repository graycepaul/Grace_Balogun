"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useIntro } from "./Intro";

export const EASE = [0.22, 1, 0.36, 1];

/**
 * Splits text into words that rise out of a mask.
 * Pass `parts` as an array of { text, className } to style individual phrases.
 */
export function SplitReveal({ parts, as: Tag = "h2", className = "", delay = 0, onLoad = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const { ready } = useIntro();
  const reduce = useReducedMotion();
  const show = reduce || (onLoad ? ready : inView);

  let i = 0;
  const MotionTag = motion[Tag] ?? motion.h2;
  const label = parts.map((p) => (p.br ? " " : p.text)).join("");

  return (
    <MotionTag ref={ref} className={className} aria-label={label}>
      {parts.map((part, pi) =>
        part.br ? (
          <br key={pi} />
        ) : part.text.split(/(\s+)/).map((word, wi) => {
          if (word === "") return null;
          if (/^\s+$/.test(word)) return " ";
          const idx = i++;
          return (
            <span
              key={`${pi}-${wi}`}
              aria-hidden="true"
              className="inline-block overflow-hidden pb-[0.08em] align-bottom"
            >
              <motion.span
                className={`inline-block ${part.className ?? ""}`}
                initial={{ y: reduce ? 0 : "110%", rotate: reduce ? 0 : 4 }}
                animate={show ? { y: 0, rotate: 0 } : undefined}
                transition={{ duration: 0.9, ease: EASE, delay: delay + idx * 0.06 }}
              >
                {word}
              </motion.span>
            </span>
          );
        })
      )}
    </MotionTag>
  );
}

/** Fades and lifts children into view. */
export function Reveal({ children, className = "", delay = 0, y = 32, onLoad = false, as = "div", ...rest }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const { ready } = useIntro();
  const reduce = useReducedMotion();
  const show = reduce || (onLoad ? ready : inView);
  const M = motion[as] ?? motion.div;
  return (
    <M
      ref={ref}
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : y, filter: reduce ? "none" : "blur(6px)" }}
      animate={show ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Pulls its child gently towards the pointer. */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.3 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to `to` once visible. */
export function CountUp({ to, duration = 1.6, prefix = "", suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/** Card with a soft amber light that follows the pointer. */
export function Spotlight({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag ref={ref} onPointerMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
