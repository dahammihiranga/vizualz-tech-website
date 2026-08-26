"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/ui/Button";

const rotatingWords = ["STAND OUT.", "PERFORM.", "CONVERT.", "GROW."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 30,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen overflow-hidden bg-[#0d0d0d] pt-20"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-70 lg:block"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(255, 30, 30, 0.13),
            transparent 42%
          )`,
        }}
      />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -right-[10%] top-[5%] h-[550px] w-[550px] rounded-full bg-[#ff1e1e]/10 blur-[160px]" />

      <div className="pointer-events-none absolute -left-[15%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[#b30d0d]/10 blur-[160px]" />

      {/* Grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.18]" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      {/* Large background VZ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -14, 0],
        }}
        transition={{
          opacity: { duration: 1.4, delay: 0.4 },
          scale: { duration: 1.4, delay: 0.4 },
          rotate: { duration: 1.4, delay: 0.4 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden -translate-y-1/2 select-none xl:block"
      >
        <div className="relative">
          <div className="absolute inset-0 scale-110 bg-[#ff1e1e]/10 blur-[80px]" />

          <span
            className="relative block text-[clamp(15rem,25vw,30rem)] font-extrabold leading-none tracking-[-0.12em] text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.07)",
            }}
          >
            VZ
          </span>

          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#ff1e1e]/5 to-[#ff1e1e]/20 blur-3xl" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1440px] items-center px-6 py-20 md:px-10 lg:px-14">
        <div className="w-full min-w-0 max-w-[1050px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-[#ff1e1e]" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff1e1e] sm:text-sm">
              Welcome to VizualZ Tech
            </p>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-[clamp(3rem,13vw,8rem)] font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-[clamp(3.4rem,8.2vw,8rem)]">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              WE BUILD
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.38,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block text-white/90"
            >
              DIGITAL
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.51,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="block"
            >
              EXPERIENCES
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.64,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 block min-h-[1.9em] text-[#ff1e1e] sm:flex sm:min-h-[0.95em] sm:items-center"
            >
              <span className="block text-white sm:mr-[0.22em]">THAT</span>

              <span className="relative block min-h-[0.95em] overflow-hidden sm:inline-flex sm:min-w-[5.6em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block whitespace-nowrap"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.span>
          </h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 w-full max-w-xl text-[15px] leading-7 text-white/50 sm:text-base md:max-w-2xl md:text-lg md:leading-8"
          >
            We design and develop modern websites, software and digital
            experiences that transform ideas into powerful products.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center"
          >
            <Button href="/contact" showArrow className="w-full sm:w-auto">
              Start a Project
            </Button>

            <Button href="#work" variant="outline" className="w-full sm:w-auto">
              Explore Our Work
              <ArrowDown
                size={16}
                className="ml-1 transition-transform duration-300 group-hover:translate-y-1"
              />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Side label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 xl:flex"
      >
        <div className="flex items-center gap-3 [writing-mode:vertical-rl]">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/25">
            Design · Develop · Innovate
          </span>

          <span className="h-10 w-[1px] bg-white/15" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
          Scroll to explore
        </span>

        <span className="relative h-12 w-[1px] overflow-hidden bg-white/10">
          <motion.span
            animate={{
              y: [-48, 48],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-6 w-full bg-[#ff1e1e]"
          />
        </span>
      </motion.a>

      {/* Small corner detail */}
      <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20 lg:flex lg:left-14">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff1e1e] shadow-[0_0_10px_rgba(255,30,30,0.8)]" />
        Digital experiences / 2026
      </div>
    </section>
  );
}
