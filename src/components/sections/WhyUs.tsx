"use client";

import { motion } from "motion/react";

const reasons = [
  {
    number: "01",
    title: "Built Around Your Business",
    description:
      "No copy-paste solutions. Every project is shaped around your goals, audience, workflow and the experience you want to create.",
  },
  {
    number: "02",
    title: "Performance First",
    description:
      "We build fast, responsive and reliable digital experiences designed to perform across devices and real-world conditions.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description:
      "We use modern frameworks, scalable architecture and the right tools for each project instead of forcing everything into one stack.",
  },
  {
    number: "04",
    title: "Detail Obsessed",
    description:
      "From spacing and interactions to backend logic and deployment, the small details matter because they shape the final experience.",
  },
];

const brandValues = ["TRUSTED", "PREMIUM", "FAST", "MODERN", "PRECISE"];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#101010] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[700px] w-[700px] rounded-full bg-[#ff1e1e]/[0.04] blur-[190px]" />

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
            {/* <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
              06
            </span> */}

            <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Why VizualZ Tech
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
              Our approach
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              BUILT DIFFERENT.
              <span className="block text-white/35">
                BUILT WITH PURPOSE.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              Good digital products should look great, work beautifully and
              solve real problems. That&apos;s the standard we build around.
            </p>
          </motion.div>
        </div>

        {/* Reasons */}
        <div className="mt-20 border-t border-white/[0.08] md:mt-28">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden border-b border-white/[0.08]"
            >
              {/* Hover background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff1e1e]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Left red line */}
              <div className="absolute bottom-0 left-0 top-0 w-[2px] origin-top scale-y-0 bg-[#ff1e1e] transition-transform duration-500 group-hover:scale-y-100" />

              <div className="relative grid gap-6 py-9 md:grid-cols-[110px_0.9fr_1.1fr] md:items-start md:py-12 lg:grid-cols-[150px_0.85fr_1.15fr] lg:py-14">
                {/* Number */}
                <motion.span
                  whileHover={{ x: 6 }}
                  className="text-5xl font-extrabold tracking-[-0.07em] text-white/[0.10] transition-colors duration-300 group-hover:text-[#ff1e1e]/80 md:text-6xl lg:text-7xl"
                >
                  {reason.number}
                </motion.span>

                {/* Title */}
                <h3 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white/80 transition-colors duration-300 group-hover:text-white sm:text-4xl lg:text-5xl">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-white/40 md:text-base md:leading-8">
                  {reason.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Brand value strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/25">
              What defines us
            </span>

            <span className="h-[1px] flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid grid-cols-2 border-l border-t border-white/[0.07] sm:grid-cols-3 lg:grid-cols-5">
            {brandValues.map((value) => (
              <div
                key={value}
                className="group relative flex min-h-28 items-center justify-center overflow-hidden border-b border-r border-white/[0.07] px-5"
              >
                <div className="absolute inset-0 bg-[#ff1e1e] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff1e1e] shadow-[0_0_10px_rgba(255,30,30,0.65)] transition-colors duration-300 group-hover:bg-white" />

                  <span className="text-xs font-semibold tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/[0.07] pt-12 md:mt-28 md:pt-16"
        >
          <p className="max-w-5xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white/25">
            We don&apos;t build digital products just to make them{" "}
            <span className="text-white">look modern.</span>
            <br />
            We build them to{" "}
            <span className="text-[#ff1e1e]">make an impact.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}