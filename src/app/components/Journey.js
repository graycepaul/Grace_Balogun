"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { journey } from "../data/data";
import { Reveal, SplitReveal } from "./motion/primitives";

export default function Journey() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <section id="journey" className="mx-auto flex max-w-[1280px] flex-wrap gap-12 px-4 pt-32 md:px-8">
      <div className="flex-[1_1_280px]">
        <div className="md:sticky md:top-32">
          <SplitReveal
            className="font-display text-5xl font-bold tracking-[-0.04em] md:text-[56px]"
            parts={[{ text: "Journey" }]}
          />
          <Reveal as="p" y={12} className="mt-4 max-w-[280px] text-soft">
            From a microbiology degree to leading frontend teams and founding my own product.
          </Reveal>
        </div>
      </div>

      <ol ref={ref} className="relative flex min-w-0 flex-[999_1_600px] flex-col gap-3 pl-8">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-line" aria-hidden="true" />
        <motion.span
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-amber"
          style={{ scaleY }}
          aria-hidden="true"
        />
        {journey.map((j, i) => (
          <Reveal as="li" key={j.role + j.period} delay={i * 0.05} y={20} className="relative">
            <span
              className={`absolute -left-[31px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-ink ${
                i < 2 ? "bg-amber" : "bg-line2"
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-line bg-panel px-7 py-6 transition-colors duration-300 hover:border-line2 hover:bg-deep">
              <span className="text-[17px] font-semibold">
                {j.role} <span className="text-muted">· {j.org}</span>
              </span>
              <span className="text-[15px] text-muted">{j.period}</span>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
