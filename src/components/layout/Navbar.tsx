"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-[#0d0d0d]/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-[60] flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/branding/vizualz-tech-logo-horizontal.png"
              alt="VizualZ Tech"
              width={1000}
              height={1000}
              priority
              className="h-auto w-[320px] transition-all duration-500 ease-out group-hover:scale-[1.035] group-hover:drop-shadow-[0_0_14px_rgba(255,30,30,0.35)] md:w-[450px] lg:w-[300px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-white/60 transition-all duration-300 hover:-translate-y-[2px] hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>

                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#ff1e1e] transition-transform duration-300 ease-out group-hover:scale-x-100" />

                {/* Small glow */}
                <span className="absolute -bottom-[2px] left-1/2 h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-[#ff1e1e] opacity-0 shadow-[0_0_12px_#ff1e1e] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="outline" showArrow>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
            className="group relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:scale-105 hover:border-[#ff1e1e]/50 hover:bg-[#ff1e1e]/10 hover:text-[#ff1e1e] hover:shadow-[0_0_25px_rgba(255,30,30,0.18)] active:scale-95 lg:hidden"
          >
            <span className="transition-transform duration-300 group-hover:rotate-6">
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] lg:hidden"
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute right-[-150px] top-[10%] h-[400px] w-[400px] rounded-full bg-[#ff1e1e]/10 blur-[120px]" />

            <div className="flex min-h-screen flex-col justify-between px-6 pb-10 pt-32">
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center border-b border-white/[0.08] py-5"
                    >
                      <span className="mr-4 text-xs text-[#ff1e1e]">
                        0{index + 1}
                      </span>

                      <span className="text-4xl font-semibold tracking-[-0.04em] text-white transition-colors group-hover:text-[#ff1e1e]">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div>
                <Button href="/contact" showArrow className="w-full">
                  Start a Project
                </Button>

                <p className="mt-7 text-center text-xs uppercase tracking-[0.25em] text-white/30">
                  Ideas Made Visual. Technology Made Powerful.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
