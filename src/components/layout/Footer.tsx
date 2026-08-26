import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Technology", href: "#technology" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#090909] px-6 pb-8 pt-16 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex">
              <span className="text-2xl font-extrabold tracking-[-0.045em]">
                <span className="text-[#ff1e1e]">VIZUALZ</span>
                <span className="ml-1 text-white">TECH</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/35">
              Ideas Made Visual. Technology Made Powerful.
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/25">
              Modern websites, software and digital experiences built with
              design, performance and purpose.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Navigate
            </p>

            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Connect
            </p>

            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {social.label}

                  <ArrowUpRight
                    size={13}
                    className="text-[#ff1e1e] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Huge footer wordmark */}
        <div className="mt-20 overflow-hidden border-t border-white/[0.07] pt-10">
          <p className="select-none whitespace-nowrap text-[clamp(4rem,13vw,13rem)] font-extrabold leading-[0.8] tracking-[-0.08em] text-white/[0.025]">
            VIZUALZ TECH
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-[10px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center">
          <p>© 2026 VizualZ Tech. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors duration-300 hover:text-white/50"
            >
              Privacy
            </Link>

            <Link
              href="/contact"
              className="transition-colors duration-300 hover:text-white/50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}