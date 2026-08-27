import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#0d0d0d] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-28 lg:px-14 lg:pt-44">
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#ff1e1e]/[0.05] blur-[180px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff1e1e]">
                {project.category}
              </p>

              <h1 className="mt-5 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.07em]">
                {project.title}
              </h1>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                {project.description}
              </p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Visit Live Website
                  <ArrowUpRight
                    size={17}
                    className="text-[#ff1e1e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Project metadata */}
          <div className="mt-14 grid gap-6 border-y border-white/[0.08] py-7 sm:grid-cols-2 lg:grid-cols-4">
            <MetaItem label="Client" value={project.client || project.title} />
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Category" value={project.category} />
            <MetaItem
              label="Services"
              value={project.services?.slice(0, 2).join(" · ") || "Digital"}
            />
          </div>
        </div>
      </section>

      {/* Main visual */}
      <section className="px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#151515]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionLabel number="01" title="The Challenge" />

            <div>
              <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">
                BUILDING A DIGITAL
                <span className="block text-white/35">
                  PRESENCE THAT FEELS PREMIUM.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
                {project.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#101010] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionLabel number="02" title="The Solution" />

            <div>
              <h2 className="max-w-4xl text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">
                DESIGNED FOR
                <span className="block text-[#ff1e1e]">
                  TRUST & CONVERSION.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionLabel number="03" title="Key Features" />

            <div>
              <div className="border-t border-white/[0.08]">
                {project.features?.map((feature, index) => (
                  <div
                    key={feature}
                    className="grid gap-4 border-b border-white/[0.08] py-7 sm:grid-cols-[70px_1fr] sm:items-center"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#ff1e1e]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xl font-semibold tracking-[-0.03em] text-white/75 sm:text-2xl">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-[#101010] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionLabel number="04" title="Technology" />

            <div>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-extrabold tracking-[-0.055em]">
                BUILT WITH A
                <span className="block text-white/35">MODERN STACK.</span>
              </h2>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.09] bg-white/[0.025] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel number="05" title="Project Gallery" />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {project.gallery.map((image, index) => {
                const isMobileScreenshot = image.includes("mobile");

                return (
                  <div
                    key={image}
                    className={`relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#151515] ${
                      index === 0
                        ? "aspect-[16/10] lg:col-span-2"
                        : isMobileScreenshot
                          ? "flex min-h-[650px] items-center justify-center p-6 md:min-h-[800px] md:p-10"
                          : "aspect-[4/3]"
                    }`}
                  >
                    {isMobileScreenshot ? (
                      <Image
                        src={image}
                        alt={`${project.title} mobile website`}
                        width={430}
                        height={932}
                        sizes="(max-width: 768px) 80vw, 430px"
                        className="h-auto max-h-[760px] w-auto max-w-full rounded-[1.5rem] object-contain shadow-2xl"
                      />
                    ) : (
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="border-t border-white/[0.07] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff1e1e]">
            Have a project in mind?
          </p>

          <h2 className="mt-6 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.065em]">
            LET&apos;S BUILD YOUR
            <span className="block text-[#ff1e1e]">
              NEXT DIGITAL EXPERIENCE.
            </span>
          </h2>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#ff1e1e] px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#e31717] hover:shadow-[0_0_40px_rgba(255,30,30,0.3)]"
          >
            Start a Project
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-2 text-sm font-medium text-white/65">{value}</p>
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
        {number}
      </span>

      <span className="mt-[7px] h-[1px] w-10 bg-[#ff1e1e]/60" />

      <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
        {title}
      </span>
    </div>
  );
}
