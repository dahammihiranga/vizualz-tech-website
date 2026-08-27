"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const values = ["MODERN", "PRECISE", "CREATIVE", "POWERFUL"];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#ff1e1e]/[0.035] blur-[160px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-4 md:mb-24"
        >
          {/* <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
            01
          </span> */}

          <span className="h-[1px] w-10 bg-[#ff1e1e]/60" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Who We Are
          </span>
        </motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-4xl text-[clamp(3rem,6.3vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]"
            >
              IDEAS MADE
              <span className="block text-[#ff1e1e]">VISUAL.</span>

              <span className="mt-3 block text-white/35">
                TECHNOLOGY MADE
              </span>

              <span className="block">POWERFUL.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-2"
            >
              <p className="max-w-md text-base leading-7 text-white/50">
                VizualZ Tech is a digital technology company focused on
                creating modern websites, software and digital experiences
                that combine thoughtful design with powerful technology.
              </p>

              <div className="flex flex-col justify-between gap-8">
                <p className="max-w-md text-base leading-7 text-white/50">
                  We turn ideas into fast, scalable and engaging digital
                  products designed to help businesses stand out and move
                  forward.
                </p>

                <a
                  href="#services"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-white"
                >
                  Discover what we do

                  <ArrowUpRight
                    size={17}
                    className="text-[#ff1e1e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto aspect-square w-full max-w-[540px]"
          >
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[3%] rounded-full border border-white/[0.06]"
            >
              <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#ff1e1e] shadow-[0_0_18px_rgba(255,30,30,0.9)]" />

              <span className="absolute bottom-[10%] right-[9%] h-1.5 w-1.5 rounded-full bg-white/30" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[13%] rounded-full border border-dashed border-white/[0.08]"
            />

            <div className="absolute inset-[23%] rounded-full border border-[#ff1e1e]/20 shadow-[inset_0_0_80px_rgba(255,30,30,0.03)]" />

            {/* Crosshair */}
            <div className="absolute left-1/2 top-[8%] h-[84%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" />

            <div className="absolute left-[8%] top-1/2 h-[1px] w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

            {/* Center glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/10 blur-[60px]"
            />

            {/* VZ */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="select-none text-[clamp(6rem,14vw,11rem)] font-extrabold leading-none tracking-[-0.12em] text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(255,30,30,0.65)",
                  filter: "drop-shadow(0 0 25px rgba(255,30,30,0.12))",
                }}
              >
                VZ
              </span>
            </motion.div>

            {/* Technical labels */}
            <span className="absolute left-[4%] top-[20%] text-[9px] uppercase tracking-[0.25em] text-white/20">
              Design
            </span>

            <span className="absolute right-[2%] top-[34%] text-[9px] uppercase tracking-[0.25em] text-white/20">
              Technology
            </span>

            <span className="absolute bottom-[15%] left-[10%] text-[9px] uppercase tracking-[0.25em] text-white/20">
              Digital
            </span>

            <span className="absolute bottom-[7%] right-[13%] text-[9px] uppercase tracking-[0.25em] text-white/20">
              Innovation
            </span>
          </motion.div>
        </div>

        {/* Brand values */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-y border-white/[0.07] md:mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value}
                className={`flex items-center justify-center py-7 ${
                  index % 2 !== 0 ? "border-l border-white/[0.07]" : ""
                } ${
                  index >= 2 ? "border-t border-white/[0.07] md:border-t-0" : ""
                } ${
                  index > 0 ? "md:border-l md:border-white/[0.07]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff1e1e] shadow-[0_0_10px_rgba(255,30,30,0.65)]" />

                  <span className="text-xs font-semibold tracking-[0.2em] text-white/45 sm:text-sm">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}