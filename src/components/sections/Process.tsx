"use client";

import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, goals and the problem we need to solve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We transform ideas into clear, modern and user-focused digital experiences.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build fast, scalable and reliable products using modern technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, optimize and carefully prepare everything for a smooth release.",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "We continue improving the product as your business, users and requirements grow.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#101010] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      <div className="pointer-events-none absolute right-[-15%] top-[15%] h-[650px] w-[650px] rounded-full bg-[#ff1e1e]/[0.04] blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
              04
            </span>

            <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              How We Work
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
              Our process
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              FROM IDEA TO
              <span className="block text-white/35">DIGITAL REALITY.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              A clear process keeps every project focused, efficient and built
              around the right goals from the beginning.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-20 md:mt-28">
          {/* Vertical timeline */}
          <div className="absolute left-[19px] top-0 hidden h-full w-[1px] bg-white/[0.07] md:block lg:left-[27px]" />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-[19px] top-0 hidden h-full w-[1px] origin-top bg-gradient-to-b from-[#ff1e1e] via-[#ff1e1e]/60 to-transparent md:block lg:left-[27px]"
          />

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative grid gap-6 border-b border-white/[0.07] py-9 md:grid-cols-[55px_0.8fr_1.2fr] md:items-start lg:grid-cols-[70px_0.8fr_1.2fr] lg:py-12"
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden md:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-[#101010] text-[10px] font-semibold tracking-[0.12em] text-white/35 transition-all duration-300 group-hover:border-[#ff1e1e] group-hover:text-[#ff1e1e] lg:h-14 lg:w-14">
                    {step.number}
                  </span>
                </div>

                {/* Mobile number */}
                <span className="text-xs font-semibold tracking-[0.2em] text-[#ff1e1e] md:hidden">
                  / {step.number}
                </span>

                <motion.h3
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-semibold tracking-[-0.045em] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-5xl lg:text-6xl"
                >
                  {step.title}
                </motion.h3>

                <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base md:leading-8">
                  {step.description}
                </p>

                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#ff1e1e]/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}