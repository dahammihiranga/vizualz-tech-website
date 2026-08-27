"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Particle = {
  id: number;
  x: number;
  y: number;
  text: string;
  rotate: number;
};

type ClickEffect = {
  id: number;
  x: number;
  y: number;
};

const codeTokens = [
  "</>",
  "{ }",
  "=>",
  "const",
  "01",
  "[]",
  "()",
  "//",
  "API",
  "git",
  "npm",
  "#",
];

export default function CursorGlow() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [cursor, setCursor] = useState({
    x: -100,
    y: -100,
  });

  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const clickIdRef = useRef(0);

  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const idRef = useRef(0);
  const lastParticleRef = useRef(0);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!canHover) return;

    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target = event.target as HTMLElement;

      const isInteractive = Boolean(
        target.closest("a, button, [role='button'], input, textarea, select"),
      );

      setInteractive(isInteractive);

      const now = Date.now();

      // Controls how frequently particles are created
      if (now - lastParticleRef.current < 65) return;

      lastParticleRef.current = now;

      const token = codeTokens[Math.floor(Math.random() * codeTokens.length)];

      const id = idRef.current++;

      const particle: Particle = {
        id,
        x: event.clientX + (Math.random() - 0.5) * 20,
        y: event.clientY + (Math.random() - 0.5) * 20,
        text: token,
        rotate: (Math.random() - 0.5) * 18,
      };

      setParticles((current) => [...current.slice(-12), particle]);

      window.setTimeout(() => {
        setParticles((current) => current.filter((item) => item.id !== id));
      }, 1000);
    };

    const handleClick = (event: MouseEvent) => {
      const id = clickIdRef.current++;

      const effect: ClickEffect = {
        id,
        x: event.clientX,
        y: event.clientY,
      };

      setClickEffects((current) => [...current, effect]);

      window.setTimeout(() => {
        setClickEffects((current) => current.filter((item) => item.id !== id));
      }, 700);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* ============================= */}
      {/* CODE PARTICLE TRAIL */}
      {/* ============================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[40] hidden overflow-hidden lg:block"
      >
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{
                opacity: 0.8,
                scale: 1,
                x: particle.x,
                y: particle.y,
                rotate: particle.rotate,
              }}
              animate={{
                opacity: 0,
                scale: 0.65,
                y: particle.y - 35,
                rotate: particle.rotate + 5,
                filter: "blur(2px)",
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="absolute left-0 top-0 select-none whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.08em] text-[#ff1e1e]/55"
            >
              {particle.text}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* ============================= */}
      {/* CLICK / EXECUTION EFFECT */}
      {/* ============================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9998] hidden overflow-hidden lg:block"
      >
        <AnimatePresence>
          {clickEffects.map((effect) => (
            <div
              key={effect.id}
              className="absolute left-0 top-0"
              style={{
                transform: `translate(${effect.x}px, ${effect.y}px)`,
              }}
            >
              {/* Main shockwave */}
              <motion.div
                initial={{
                  scale: 0.2,
                  opacity: 0.9,
                }}
                animate={{
                  scale: 2.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff1e1e]"
              />

              {/* Second inner ring */}
              <motion.div
                initial={{
                  scale: 0.2,
                  opacity: 1,
                }}
                animate={{
                  scale: 1.7,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff1e1e]/70"
              />

              {/* Center flash */}
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: 3,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e] shadow-[0_0_20px_rgba(255,30,30,1)]"
              />

              {/* EXEC text */}
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 4,
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.7, 1, 1, 0.9],
                  y: -22,
                }}
                transition={{
                  duration: 0.6,
                  times: [0, 0.2, 0.6, 1],
                }}
                className="absolute left-0 top-0 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] font-semibold tracking-[0.18em] text-[#ff1e1e]"
              >
                EXEC
              </motion.span>

              {/* TOP — { } */}
              <motion.span
                initial={{
                  opacity: 1,
                  x: "-50%",
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  y: -55,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 whitespace-nowrap font-mono text-[9px] text-[#ff1e1e]/70"
              >
                {"{ }"}
              </motion.span>

              {/* RIGHT — => */}
              <motion.span
                initial={{
                  opacity: 1,
                  x: 0,
                  y: "-50%",
                }}
                animate={{
                  opacity: 0,
                  x: 60,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 whitespace-nowrap font-mono text-[9px] text-[#ff1e1e]/70"
              >
                =&gt;
              </motion.span>

              {/* BOTTOM — 01 */}
              <motion.span
                initial={{
                  opacity: 1,
                  x: "-50%",
                  y: 0,
                }}
                animate={{
                  opacity: 0,
                  y: 55,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 whitespace-nowrap font-mono text-[8px] text-white/40"
              >
                01
              </motion.span>

              {/* LEFT — </> */}
              <motion.span
                initial={{
                  opacity: 1,
                  x: 0,
                  y: "-50%",
                }}
                animate={{
                  opacity: 0,
                  x: -60,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="absolute left-0 top-0 whitespace-nowrap font-mono text-[8px] text-white/40"
              >
                {"</>"}
              </motion.span>
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* ============================= */}
      {/* MAIN CUSTOM CURSOR */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: cursor.x,
          y: cursor.y,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          x: { duration: 0.05 },
          y: { duration: 0.05 },
          opacity: { duration: 0.2 },
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden lg:block"
      >
        {/* Soft glow */}
        <motion.div
          animate={{
            scale: interactive ? 1.4 : 1,
            opacity: interactive ? 0.75 : 0.35,
          }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff1e1e]/10 blur-[24px]"
        />

        {/* Terminal cursor */}
        <motion.div
          animate={{
            scale: interactive ? 1.2 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 22,
          }}
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-[2px] font-mono text-[12px] font-bold text-[#ff1e1e] drop-shadow-[0_0_8px_rgba(255,30,30,0.9)]">
            <span>&gt;</span>

            <motion.span
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
              }}
              className="inline-block h-[11px] w-[5px] bg-[#ff1e1e]"
            />
          </div>
        </motion.div>

        {/* Hover text */}
        <AnimatePresence>
          {interactive && (
            <motion.span
              initial={{
                opacity: 0,
                x: 8,
                y: 4,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                x: 8,
              }}
              className="absolute left-5 top-3 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.16em] text-[#ff1e1e]/65"
            >
              execute()
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
