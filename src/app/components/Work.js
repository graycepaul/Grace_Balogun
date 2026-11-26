"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hawkeye, projects } from "../data/data";
import { CountUp, EASE, Reveal, SplitReveal, Spotlight } from "./motion/primitives";
import { ArrowUpRight } from "./icons";

function LoadBars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="flex min-w-[200px] flex-1 flex-col gap-2 text-xs text-muted">
      <div className="flex items-center gap-2">
        <span className="w-[52px]">before</span>
        <motion.div
          className="h-2 flex-1 origin-left rounded bg-line2"
          initial={{ scaleX: reduce ? 1 : 0 }}
          animate={inView ? { scaleX: 1 } : undefined}
          transition={{ duration: 0.9, ease: EASE }}
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-[52px]">after</span>
        <div className="flex-1">
          <motion.div
            className="h-2 origin-left rounded bg-amber"
            style={{ width: "65%" }}
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={inView ? { scaleX: 1 } : undefined}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label, big = false }) {
  return (
    <span className="flex flex-col gap-1.5">
      {big && <span className="text-[13px] font-semibold text-muted">{label.toUpperCase()}</span>}
      <span
        className={`font-display font-bold tracking-[-0.05em] ${
          big ? "text-7xl leading-[0.9] md:text-[80px]" : "text-[40px] leading-none"
        }`}
      >
        −<CountUp to={value} />
        <span className="text-amber">%</span>
      </span>
      {!big && <span className="text-[13px] text-muted">{label}</span>}
    </span>
  );
}

function ProjectVisual({ mark, index, image, name }) {
  if (image) {
    return (
      <div className="relative h-[200px] overflow-hidden rounded-[18px] bg-deep">
        <Image
          src={image}
          alt={`${name} app screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
    );
  }
  return (
    <div className="project-visual relative flex h-[200px] items-end justify-between overflow-hidden rounded-[18px] bg-deep p-5">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
      <span className="relative font-display text-[96px] font-bold leading-[0.8] tracking-[-0.06em] text-line2 transition-colors duration-500 group-hover:text-amber">
        {mark}
      </span>
      <span className="relative text-xs font-semibold text-muted">0{index + 2}</span>
    </div>
  );
}

function HawkeyeShot() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], reduce ? [1, 1] : [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <div ref={ref} className="w-full border-b border-line bg-deep px-5 pt-5 md:px-8 md:pt-8">
      <div className="flex items-center gap-2 px-1 pb-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="h-2.5 w-2.5 rounded-full bg-line2" />
        <span className="ml-2.5 rounded-full bg-ink px-3.5 py-1 text-xs text-muted">hawkeyevisiontek.com</span>
      </div>
      <div className="relative aspect-[2000/1081] overflow-hidden rounded-t-[14px] bg-ink">
        <motion.div className="absolute inset-0" style={{ scale, y }}>
          <Image
            src={hawkeye.image}
            alt="Hawkeye VisionTek homepage with its AI agent panel and live venue map"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 pt-32 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SplitReveal
          className="font-display text-5xl font-bold tracking-[-0.04em] md:text-[56px]"
          parts={[{ text: "Case studies" }]}
        />
        <Reveal as="span" y={12} className="text-[15px] text-muted">
          Problem → decision → result
        </Reveal>
      </div>

      <Reveal>
        <Spotlight
          as="a"
          href={hawkeye.link}
          target="_blank"
          rel="noreferrer"
          data-cursor="Visit"
          className="group flex flex-wrap overflow-hidden rounded-[28px] border border-line bg-panel transition-colors hover:border-line2"
        >
          <HawkeyeShot />
          <div className="flex flex-[1_1_420px] flex-col gap-5 p-8 md:p-12">
            <span className="text-[13px] font-semibold uppercase text-muted">{hawkeye.eyebrow}</span>
            <h3 className="font-display text-3xl font-bold tracking-[-0.03em] md:text-[40px] md:leading-[1.05]">
              {hawkeye.title}
            </h3>
            <p className="leading-relaxed text-soft">{hawkeye.summary}</p>
            <ul className="flex flex-wrap gap-2 text-[13px] text-soft">
              {hawkeye.tags.map((t) => (
                <li key={t} className="rounded-full border border-line2 px-3 py-1.5">
                  {t}
                </li>
              ))}
            </ul>
            <span className="mt-2 inline-flex items-center gap-2 font-semibold">
              Visit Hawkeye
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight />
              </span>
            </span>
          </div>

          <div className="flex flex-[1_1_460px] flex-wrap content-stretch gap-3 bg-deep p-5">
            <div className="flex w-full flex-wrap items-end justify-between gap-5 rounded-[20px] border border-line bg-panel p-7">
              <Stat big value={hawkeye.headline.value} label={hawkeye.headline.label} />
              <LoadBars />
            </div>
            {hawkeye.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={0.1 + i * 0.08}
                y={20}
                className="flex flex-[1_1_40%] flex-col gap-1.5 rounded-[20px] border border-line bg-panel p-[22px]"
              >
                <Stat value={s.value} label={s.label} />
              </Reveal>
            ))}
          </div>
        </Spotlight>
      </Reveal>

      <div className="flex flex-wrap gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className="flex flex-[1_1_300px]">
            <Spotlight
              as="a"
              href={p.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="Visit"
              className="group flex w-full flex-col gap-3.5 rounded-[28px] border border-line bg-panel p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-line2"
            >
              <ProjectVisual mark={p.mark} index={i} image={p.image} name={p.name} />
              <span className="text-xs font-semibold uppercase text-muted">{p.kind}</span>
              <span className="flex items-center justify-between font-display text-[26px] font-bold">
                {p.name}
                <span className="text-muted transition-colors group-hover:text-amber">
                  <ArrowUpRight />
                </span>
              </span>
              <span className="text-[15px] leading-normal text-soft">{p.summary}</span>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
