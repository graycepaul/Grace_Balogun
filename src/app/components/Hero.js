"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { arbinx, site, stack } from "../data/data";
import { Magnetic, Reveal, SplitReveal, Spotlight } from "./motion/primitives";
import { GitHubIcon, LinkedInIcon } from "./icons";

function PhotoTile() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 20 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 20 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <Reveal
      onLoad
      delay={0.25}
      className="relative min-h-[460px] flex-[5_1_340px] overflow-hidden rounded-[28px] border border-line"
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div className="absolute -inset-6" style={{ x, y }}>
        <Image
          src="/grayce.jpeg"
          alt="Grace Balogun, arms crossed, in a black blazer"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover object-[50%_26%]"
        />
      </motion.div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-[18px] bg-ink/90 px-[18px] py-4 backdrop-blur">
        <div className="flex flex-col">
          <span className="text-[15px] font-semibold">Grace Balogun</span>
          <span className="text-[13px] text-muted">{site.location}</span>
        </div>
        <div className="flex gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-line transition-colors hover:bg-amber hover:text-ink"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-line transition-colors hover:bg-amber hover:text-ink"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function ArbinxScreen() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.88, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["8%", "0%"]);

  return (
    <div ref={ref} className="flex-[7_1_520px] [perspective:1400px]">
      <motion.div
        style={{ rotateX, scale, transformOrigin: "50% 100%" }}
        className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-line bg-panel px-5 pt-5"
        data-cursor="Arbinx"
      >
        <div className="flex items-center gap-2 px-1 pb-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="h-2.5 w-2.5 rounded-full bg-line2" />
          <span className="ml-2.5 rounded-full bg-ink px-3.5 py-1 text-xs text-muted">app.arbinx.com</span>
        </div>
        <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-t-[14px]">
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <Image
              src={arbinx.image}
              alt="Arbinx dashboard showing active projects, pending tasks and budget utilization"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-left-top"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-[1280px] flex-wrap gap-4 px-4 pt-36 md:px-8 md:pt-32">
      <Reveal
        onLoad
        className="flex min-h-[460px] flex-[7_1_520px] flex-col justify-between gap-8 rounded-[28px] border border-line bg-panel p-8 md:p-12"
      >
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-line px-3.5 py-2 text-[13px] text-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          Open to senior frontend &amp; mobile roles
        </span>

        <SplitReveal
          as="h1"
          onLoad
          delay={0.2}
          className="font-display text-[44px] font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[72px]"
          parts={[
            { text: "I build products that " },
            { text: "feel fast,", className: "text-amber" },
            { text: " front to back." },
          ]}
        />

        <Reveal onLoad delay={0.7} as="p" y={16} className="max-w-[540px] text-lg leading-relaxed text-soft">
          Frontend and mobile engineer with 4+ years in React, Next.js and React Native. I cut Hawkeye&apos;s
          load time by 35%, and I&apos;m building Arbinx end to end as a solo founder.
        </Reveal>

        <Reveal onLoad delay={0.85} y={16} className="flex flex-wrap gap-3">
          <Magnetic>
            <a
              href="#work"
              className="block rounded-[14px] bg-amber px-6 py-4 font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Explore case studies
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[14px] border border-line2 px-6 py-4 font-semibold transition-colors hover:border-fg"
            >
              Download CV
            </a>
          </Magnetic>
        </Reveal>
      </Reveal>

      <PhotoTile />

      <Reveal className="flex-[5_1_380px]">
        <Spotlight className="flex h-full flex-col justify-between gap-5 rounded-[28px] bg-amber p-9 text-ink [--spot:rgba(255,255,255,0.35)]">
          <div className="flex items-center justify-between text-[13px] font-semibold">
            <span>NOW BUILDING</span>
            <span className="rounded-full bg-ink px-3 py-1.5 text-amber">{arbinx.period}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[56px] font-bold leading-none tracking-[-0.04em]">{arbinx.name}</h2>
            <p className="max-w-[420px] leading-relaxed">{arbinx.summary}</p>
          </div>
          <ul className="flex flex-wrap gap-2 text-[13px] font-semibold">
            {arbinx.tags.map((t) => (
              <li key={t} className="rounded-full border-[1.5px] border-ink px-3 py-1.5">
                {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="group inline-flex items-center gap-2 font-semibold">
            Ask me how I built it
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Spotlight>
      </Reveal>

      <ArbinxScreen />

      <Reveal className="w-full overflow-hidden rounded-[28px] border border-line bg-panel py-6">
        <div className="flex items-center">
          <span className="z-10 shrink-0 bg-panel pl-8 pr-6 text-[13px] font-semibold text-muted">STACK</span>
          <div className="marquee-mask flex overflow-hidden">
            <div className="marquee flex shrink-0 items-center gap-7 pr-7 font-display text-lg font-semibold text-soft">
              {[...stack, ...stack].map((s, i) => (
                <span key={i} className="flex items-center gap-7 whitespace-nowrap" aria-hidden={i >= stack.length}>
                  {s}
                  <span className="text-line2">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
