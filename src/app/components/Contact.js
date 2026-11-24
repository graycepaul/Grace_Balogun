"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../data/data";
import { Magnetic, Reveal, SplitReveal } from "./motion/primitives";

const field =
  "w-full rounded-2xl border-[1.5px] border-ink/20 bg-amber-light px-4 py-3.5 text-ink placeholder:text-ink/55 outline-none transition-colors focus:border-ink";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-4 pb-12 pt-32 md:px-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-10 rounded-[32px] bg-amber p-8 text-ink md:p-14">
        <div className="flex flex-[1_1_420px] flex-col gap-8">
          <SplitReveal
            className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.05em] md:text-7xl"
            parts={[{ text: "Have a product" }, { br: true }, { text: "worth building?" }]}
          />
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className="block rounded-2xl bg-ink px-7 py-[18px] text-[17px] font-semibold text-fg transition-transform hover:scale-[1.03]"
              >
                Start a conversation →
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={copy}
              className="relative rounded-2xl border-[1.5px] border-ink px-5 py-[16px] font-semibold"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "c" : "e"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {copied ? "Copied ✓" : "Copy email"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <form onSubmit={submit} className="flex flex-[1_1_360px] flex-col gap-3" aria-label="Contact form">
          <label className="sr-only" htmlFor="c-name">Name</label>
          <input id="c-name" required placeholder="Your name" value={form.name} onChange={update("name")} className={field} />
          <label className="sr-only" htmlFor="c-email">Email</label>
          <input
            id="c-email"
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
            className={field}
          />
          <label className="sr-only" htmlFor="c-msg">Message</label>
          <textarea
            id="c-msg"
            required
            rows={4}
            placeholder="What are you building?"
            value={form.message}
            onChange={update("message")}
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-2xl bg-ink px-6 py-4 font-semibold text-fg transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent. I'll reply soon ✓" : "Send message"}
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm font-medium">
              That didn&apos;t send. Email me directly at {site.email}.
            </p>
          )}
        </form>
      </Reveal>

      <footer className="flex flex-wrap justify-between gap-3 pt-8 text-[13px] text-muted">
        <span>© 2026 Grace Balogun</span>
        <span className="flex gap-6">
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-fg">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">LinkedIn</a>
          <a href={site.resume} target="_blank" rel="noreferrer" className="hover:text-fg">Résumé</a>
        </span>
        <span>Designed &amp; built by me with Next.js and Framer Motion</span>
      </footer>
    </section>
  );
}
