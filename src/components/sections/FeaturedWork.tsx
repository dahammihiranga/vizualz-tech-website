"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function FeaturedWork() {
    const [currentProject, setCurrentProject] = useState(0);

const project = projects[currentProject];

const nextProject = () => {
  setCurrentProject((current) =>
    current === projects.length - 1 ? 0 : current + 1
  );
};

const previousProject = () => {
  setCurrentProject((current) =>
    current === 0 ? projects.length - 1 : current - 1
  );
};
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-[#ff1e1e]/[0.035] blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            {/* <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
              03
            </span> */}

            <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Selected Work
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
              Our work
            </p>

            <h2 className="max-w-4xl text-[clamp(3rem,5.8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.06em]">
              WORK WE&apos;RE
              <span className="block text-white/35">PROUD OF.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              Selected digital experiences built with a focus on visual
              identity, performance and real business goals.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-28">
  {/* Slider controls */}
  <div className="mb-8 flex items-center justify-between border-y border-white/[0.07] py-5">
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-[0.2em] text-[#ff1e1e]">
        {String(currentProject + 1).padStart(2, "0")}
      </span>

      <span className="text-white/15">/</span>

      <span className="text-xs font-semibold tracking-[0.2em] text-white/25">
        {String(projects.length).padStart(2, "0")}
      </span>
    </div>

    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={previousProject}
        aria-label="Previous project"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-white/60 transition-all duration-300 hover:border-[#ff1e1e] hover:bg-[#ff1e1e] hover:text-white"
      >
        <ArrowLeft
          size={17}
          className="transition-transform duration-300 group-hover:-translate-x-0.5"
        />
      </button>

      <button
        type="button"
        onClick={nextProject}
        aria-label="Next project"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] text-white/60 transition-all duration-300 hover:border-[#ff1e1e] hover:bg-[#ff1e1e] hover:text-white"
      >
        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>
    </div>
  </div>

  <AnimatePresence mode="wait">
    <motion.article
      key={project.slug}
      initial={{
        opacity: 0,
        x: 70,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        x: -70,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
        {/* Project visual */}
        <div className="relative">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#151515]"
          >
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative h-full w-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-all duration-700 group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* Project number */}
            <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
              <span className="text-xs font-semibold text-white/70">
                {String(currentProject + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Hover CTA */}
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  scale: 0.75,
                },
                hover: {
                  opacity: 1,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex"
            >
              <Link
                href={`/work/${project.slug}`}
                className="pointer-events-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ff1e1e]/95 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(255,30,30,0.28)] transition-transform duration-300 hover:scale-105"
              >
                View
                <br />
                Project
              </Link>
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-10 right-[10%] h-32 w-32 rounded-full bg-[#ff1e1e]/10 blur-[70px]" />
        </div>

        {/* Project information */}
        <div className="flex flex-col justify-between lg:py-4">
          <div>
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#ff1e1e]">
                {project.category}
              </span>

              <span className="text-xs tracking-[0.15em] text-white/25">
                {project.year}
              </span>
            </div>

            <h3 className="mt-8 text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {project.title}
            </h3>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/45 md:text-base">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              View Case Study

              <ArrowUpRight
                size={17}
                className="text-[#ff1e1e] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-white/35 transition-colors duration-300 hover:text-white"
              >
                Live Website ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  </AnimatePresence>
</div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-t border-white/[0.07] pt-10 md:mt-32"
        >
          <p className="max-w-xl text-sm leading-6 text-white/35">
            More projects are currently in development. Every project is built
            around a different challenge, audience and visual identity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
