"use client";

import { motion } from "motion/react";

const items = [
  "WEB DEVELOPMENT",
  "SOFTWARE",
  "UI / UX",
  "E-COMMERCE",
  "WEB APPS",
  "DIGITAL SOLUTIONS",
];

export default function Marquee() {
  const repeatedItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#111111] py-5">
      {/* Side fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent md:w-40" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 24,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center"
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/65 sm:px-8 sm:text-base lg:px-10">
              {item}
            </span>

            <span className="text-lg text-[#ff1e1e]">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}