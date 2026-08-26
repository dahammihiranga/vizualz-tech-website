"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { technologies } from "@/data/technologies";

export default function TechStack() {
  const [activeTechnology, setActiveTechnology] = useState<number | null>(null);

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
          opacity: activeTechnology !== null ? 0.8 : 0.3,
          scale: activeTechnology !== null ? 1.1 : 1,
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

        {/* System status bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 flex flex-col gap-4 border-y border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between md:mt-28"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff1e1e] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff1e1e]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Technology Stack
            </span>
          </div>

          <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.2em] text-white/20">
            <span>{technologies.length} Technologies</span>

            <span className="h-3 w-[1px] bg-white/10" />

            <span>Modern Stack</span>
          </div>
        </motion.div>

        {/* Technology grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 grid grid-cols-2 border-l border-t border-white/[0.07] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {technologies.map((technology, index) => {
            const isActive = activeTechnology === index;

            return (
              <motion.div
                key={technology.name}
                onMouseEnter={() => setActiveTechnology(index)}
                onMouseLeave={() => setActiveTechnology(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative min-h-[190px] overflow-hidden border-b border-r border-white/[0.07] bg-[#0d0d0d]/70 p-5 sm:min-h-[220px] sm:p-6"
              >
                {/* Hover background */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff1e1e]/[0.10] via-[#ff1e1e]/[0.025] to-transparent"
                />

                {/* Top scan line */}
                <motion.div
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute left-0 top-0 h-[1px] w-full origin-left bg-[#ff1e1e]"
                />

                {/* Corner details */}
                <span className="absolute right-4 top-4 text-[9px] font-medium tracking-[0.15em] text-white/15">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`absolute left-0 top-0 h-2 w-2 border-l border-t transition-colors duration-300 ${
                    isActive
                      ? "border-[#ff1e1e]"
                      : "border-white/[0.12]"
                  }`}
                />

                <div className="relative flex h-full flex-col justify-between">
                  {/* Technology symbol */}
                  <motion.div
                    animate={{
                      color: isActive
                        ? "rgba(255,30,30,1)"
                        : "rgba(255,255,255,0.18)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-extrabold tracking-[-0.07em] sm:text-5xl"
                  >
                    {technology.short}
                  </motion.div>

                  <div>
                    <p
                      className={`text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/65"
                      }`}
                    >
                      {technology.name}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`h-[1px] transition-all duration-300 ${
                          isActive
                            ? "w-6 bg-[#ff1e1e]"
                            : "w-3 bg-white/15"
                        }`}
                      />

                      <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/25">
                        {technology.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom glow */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#ff1e1e]/15 blur-[35px]"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom copy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 grid gap-8 border-t border-white/[0.07] pt-10 md:grid-cols-2"
        >
          <p className="max-w-lg text-sm leading-7 text-white/35">
            The right technology depends on the problem. We choose tools based
            on what each project actually needs rather than forcing every
            project into the same stack.
          </p>

          <p className="max-w-lg text-sm leading-7 text-white/35 md:justify-self-end">
            Our focus stays the same regardless of the stack: performance,
            reliability, scalability and a great user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}