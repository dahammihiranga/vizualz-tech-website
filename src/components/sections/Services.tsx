"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { services } from "@/data/services";

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#101010] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      {/* Ambient red glow */}
      <motion.div
        animate={{
          opacity: activeService !== null ? 1 : 0.35,
          scale: activeService !== null ? 1 : 0.85,
        }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute right-[-15%] top-[20%] h-[700px] w-[700px] rounded-full bg-[#ff1e1e]/[0.045] blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
              02
            </span>

            <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              What We Do
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
              Our capabilities
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              WE TURN IDEAS INTO
              <span className="block text-white/35">DIGITAL PRODUCTS.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              From the first idea to the final launch, we combine design,
              development and technology to create digital products built
              around your business.
            </p>
          </motion.div>
        </div>

        {/* Service rows */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/[0.09] md:mt-28"
        >
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <article
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group relative overflow-hidden border-b border-white/[0.09]"
              >
                {/* Hover background */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#ff1e1e]/[0.08] via-[#ff1e1e]/[0.025] to-transparent"
                />

                {/* Animated red line */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute bottom-0 left-0 h-[1px] w-full origin-left bg-[#ff1e1e]"
                />

                <div className="relative grid gap-6 py-8 md:grid-cols-[70px_1fr_auto] md:items-center md:py-10 lg:grid-cols-[90px_0.9fr_1.1fr_auto] lg:gap-10">
                  {/* Number */}
                  <span
                    className={`text-xs font-semibold tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-[#ff1e1e]" : "text-white/25"
                    }`}
                  >
                    / {service.number}
                  </span>

                  {/* Title */}
                  <motion.h3
                    animate={{
                      x: isActive ? 8 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`text-3xl font-semibold tracking-[-0.04em] transition-colors duration-300 sm:text-4xl lg:text-5xl ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Desktop description */}
                  <div className="hidden lg:block">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.div
                          key="active"
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="max-w-lg text-sm leading-6 text-white/50">
                            {service.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="inactive"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-xs font-medium uppercase tracking-[0.18em] text-white/20"
                        >
                          {service.shortTitle}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                      backgroundColor: isActive
                        ? "rgba(255, 30, 30, 1)"
                        : "rgba(255, 255, 255, 0.03)",
                      borderColor: isActive
                        ? "rgba(255, 30, 30, 1)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 top-7 flex h-11 w-11 items-center justify-center rounded-full border md:static md:h-12 md:w-12"
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>

                  {/* Mobile/tablet description */}
                  <div className="md:col-start-2 md:col-end-4 lg:hidden">
                    <p className="max-w-2xl text-sm leading-6 text-white/45">
                      {service.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-center"
        >
          <p className="max-w-lg text-sm leading-6 text-white/35">
            Have something different in mind? We&apos;re always interested in
            solving new problems and building something unique.
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
          >
            Tell us about your idea

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff1e1e]">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}