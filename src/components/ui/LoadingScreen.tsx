"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const steps = [
  "> initializing vizualz core...",
  "> loading interface...",
  "> compiling components...",
  "> establishing connection...",
  "> system ready.",
];

export default function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const audio = new Audio("/sounds/boot.mp3");

  audio.preload = "auto";
  audio.volume = 0.18;

  let soundPlayed = false;

  const playSound = async () => {
    if (soundPlayed) return;

    try {
      audio.currentTime = 0;

      await audio.play();

      soundPlayed = true;

      removeInteractionListeners();
    } catch {
      // Browser blocked autoplay.
      // Sound will be triggered by the first valid interaction instead.
    }
  };

  const playAfterInteraction = () => {
    void playSound();
  };

  const removeInteractionListeners = () => {
    window.removeEventListener("pointerdown", playAfterInteraction);
    window.removeEventListener("keydown", playAfterInteraction);
    window.removeEventListener("touchstart", playAfterInteraction);
  };

  // Try immediately on every full reload.
  void playSound();

  // Fallback if autoplay is blocked.
  window.addEventListener("pointerdown", playAfterInteraction, {
    once: true,
  });

  window.addEventListener("keydown", playAfterInteraction, {
    once: true,
  });

  window.addEventListener("touchstart", playAfterInteraction, {
    once: true,
  });

    const interval = window.setInterval(() => {
      setCurrentStep((current) => {
        if (current >= steps.length - 1) {
          window.clearInterval(interval);

          window.setTimeout(() => {
            setFinished(true);
          }, 900);

          return current;
        }

        return current + 1;
      });
    }, 750);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808]"
        >
          {/* Background grid */}
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-[#ff1e1e]/10 blur-[140px]"
          />

          <div className="relative z-10 w-full max-w-xl px-6">
            {/* Terminal top bar */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/90 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff1e1e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/25">
                  vizualz.boot
                </span>
              </div>

              {/* Terminal content */}
              <div className="min-h-[260px] p-6 font-mono sm:p-8">
                <div className="space-y-3">
                  {steps.slice(0, currentStep + 1).map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`text-sm ${
                        index === currentStep
                          ? "text-[#ff1e1e]"
                          : "text-white/35"
                      }`}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>

                {/* Blinking terminal cursor */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-sm text-[#ff1e1e]">&gt;</span>

                  <motion.span
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="h-4 w-2 bg-[#ff1e1e]"
                  />
                </div>
              </div>

              {/* Progress bar */}
              <div className="border-t border-white/[0.07] px-6 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                    system initialization
                  </span>

                  <span className="font-mono text-[9px] text-[#ff1e1e]">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}%
                  </span>
                </div>

                <div className="h-[2px] overflow-hidden bg-white/[0.07]">
                  <motion.div
                    animate={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                    transition={{
                      duration: 5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full bg-[#ff1e1e] shadow-[0_0_12px_rgba(255,30,30,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom brand */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/20">
                VizualZ Tech
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
