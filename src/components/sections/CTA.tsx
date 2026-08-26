"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Large red glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.42, 0.22],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/10 blur-[180px]"
      />

      {/* Subtle grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.12]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
            07
          </span>

          <span className="h-[1px] w-10 bg-[#ff1e1e]/60" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Let&apos;s Work Together
          </span>
        </motion.div>

        <div className="mt-16 md:mt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-[#ff1e1e]"
          >
            Have an idea?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[1200px] text-[clamp(4rem,10vw,10rem)] font-extrabold leading-[0.86] tracking-[-0.07em]"
          >
            LET&apos;S BUILD
            <span className="block text-white/35">SOMETHING</span>
            <span className="block text-[#ff1e1e]">POWERFUL.</span>
          </motion.h2>

          <div className="mt-12 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                Whether you&apos;re starting with a new idea or improving an
                existing digital product, we&apos;d love to hear what you&apos;re
                working on.
              </p>

              <a
                href="mailto:hello@vizualztech.com"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] transition-all duration-300 group-hover:border-[#ff1e1e]/60 group-hover:bg-[#ff1e1e]/10">
                  <Mail size={16} className="text-[#ff1e1e]" />
                </span>

                hello@vizualztech.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button
                href="/contact"
                showArrow
                className="min-h-16 px-8 text-base sm:min-w-[210px]"
              >
                Start a Project
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom micro statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center md:mt-32"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/20">
            Design · Development · Technology
          </p>

          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1e1e] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff1e1e]" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
              Open to new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}