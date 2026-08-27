"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { technologies } from "@/data/technologies";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

export default function TechStack() {
  const [activeTechnology, setActiveTechnology] = useState(0);

  const techIcons = {
    nextjs: SiNextdotjs,
    react: SiReact,
    typescript: SiTypescript,
    tailwind: SiTailwindcss,
    nodejs: SiNodedotjs,
    python: SiPython,
    fastapi: SiFastapi,
    laravel: SiLaravel,
    mysql: SiMysql,
    postgresql: SiPostgresql,
    aws: FaAws,
    docker: SiDocker,
    vercel: SiVercel,
    github: SiGithub,
  };

  const ActiveIcon =
    techIcons[technologies[activeTechnology].icon as keyof typeof techIcons];

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Background grid */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: 0.65,
          scale: 1.05,
        }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-1/2 top-[45%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/[0.04] blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
              05
            </span>

            <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Our Toolkit
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#ff1e1e]">
              Technology
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              POWERED BY MODERN
              <span className="block text-white/35">TECHNOLOGY.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              We use modern technologies and proven tools to build digital
              products that are fast, scalable, maintainable and ready to
              evolve.
            </p>
          </motion.div>
        </div>

        {/* Technology command center */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 md:mt-28"
        >
          {/* Top system bar */}
          <div className="flex flex-col gap-4 border-y border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1e1e] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff1e1e]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                VizualZ Technology Core
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20">
              <span>
                {String(activeTechnology + 1).padStart(2, "0")}
                {" / "}
                {String(technologies.length).padStart(2, "0")}
              </span>

              <span className="h-3 w-[1px] bg-white/10" />

              <span>System Online</span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            {/* Active technology display */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111111] md:min-h-[620px]">
              {/* Background technical grid */}
              <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

              {/* Red ambient glow */}
              <motion.div
                key={`glow-${activeTechnology}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/10 blur-[110px]"
              />

              {/* Giant faded index */}
              <div className="pointer-events-none absolute right-6 top-2 select-none text-[7rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[10rem] lg:right-10 lg:text-[13rem]">
                {String(activeTechnology + 1).padStart(2, "0")}
              </div>

              {/* Corner decorations */}
              <span className="absolute left-6 top-6 h-7 w-7 border-l border-t border-[#ff1e1e]/40" />

              <span className="absolute bottom-6 right-6 h-7 w-7 border-b border-r border-[#ff1e1e]/40" />

              {/* Rotating system */}
              <div className="absolute left-1/2 top-[46%] flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[430px] md:w-[430px]">
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-white/[0.06]"
                >
                  <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#ff1e1e] shadow-[0_0_20px_rgba(255,30,30,1)]" />

                  <span className="absolute bottom-[12%] right-[10%] h-1.5 w-1.5 rounded-full bg-white/30" />
                </motion.div>

                {/* Reverse ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[11%] rounded-full border border-dashed border-white/[0.08]"
                />

                {/* Inner red ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.35, 0.7, 0.35],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[24%] rounded-full border border-[#ff1e1e]/25"
                />

                {/* Crosshair */}
                <div className="absolute left-1/2 top-[8%] h-[84%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

                <div className="absolute left-[8%] top-1/2 h-[1px] w-[84%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Active technology logo */}
                <motion.div
                  key={technologies[activeTechnology].icon}
                  initial={{
                    opacity: 0,
                    scale: 0.65,
                    rotate: -10,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-10 flex items-center justify-center"
                >
                  {/* Logo glow */}
                  <div className="pointer-events-none absolute h-36 w-36 rounded-full bg-[#ff1e1e]/15 blur-[55px] sm:h-44 sm:w-44 md:h-52 md:w-52" />

                  <ActiveIcon
                    aria-hidden="true"
                    className="relative z-10 h-24 w-24 text-white drop-shadow-[0_0_30px_rgba(255,30,30,0.25)] sm:h-32 sm:w-32 md:h-40 md:w-40"
                  />
                </motion.div>
              </div>

              {/* Active technology info */}
              <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
                <motion.div
                  key={technologies[activeTechnology].name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-[#ff1e1e]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ff1e1e]">
                      {technologies[activeTechnology].category}
                    </span>
                  </div>

                  <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                    {technologies[activeTechnology].name}
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Technology selector */}
            <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101010]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5 sm:px-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                    Select Technology
                  </p>

                  <p className="mt-1 text-sm text-white/45">
                    Explore our development stack
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff1e1e]/20 bg-[#ff1e1e]/[0.05]">
                  <span className="h-2 w-2 rounded-full bg-[#ff1e1e] shadow-[0_0_14px_rgba(255,30,30,0.9)]" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-2">
                {technologies.map((technology, index) => {
                  const isActive = activeTechnology === index;

                  return (
                    <button
                      key={technology.name}
                      type="button"
                      onMouseEnter={() => setActiveTechnology(index)}
                      onClick={() => setActiveTechnology(index)}
                      className={`group relative min-h-[112px] overflow-hidden border-b border-r border-white/[0.07] px-4 py-5 text-left transition-all duration-300 sm:px-5 ${
                        isActive
                          ? "bg-[#ff1e1e]"
                          : "bg-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      {/* Active glow */}
                      {isActive && (
                        <motion.div
                          layoutId="active-tech"
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 30,
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent"
                        />
                      )}

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`text-[10px] font-semibold tracking-[0.16em] ${
                              isActive ? "text-white/65" : "text-white/20"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`text-xl font-extrabold tracking-[-0.05em] transition-all duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-white/15 group-hover:text-[#ff1e1e]"
                            }`}
                          >
                            {technology.short}
                          </span>
                        </div>

                        <div className="mt-6">
                          <p
                            className={`text-sm font-semibold tracking-[-0.02em] transition-colors duration-300 ${
                              isActive
                                ? "text-white"
                                : "text-white/60 group-hover:text-white"
                            }`}
                          >
                            {technology.name}
                          </p>

                          <p
                            className={`mt-1 text-[9px] uppercase tracking-[0.16em] ${
                              isActive ? "text-white/55" : "text-white/20"
                            }`}
                          >
                            {technology.category}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom philosophy */}
          <div className="mt-12 grid gap-8 border-t border-white/[0.07] pt-10 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-sm leading-7 text-white/35 md:text-base">
              The best technology isn&apos;t the one with the most hype.
              It&apos;s the one that solves the problem correctly. We choose
              each stack around the product, performance requirements and
              long-term goals.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#ff1e1e]/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                Built to evolve
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
