import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] pt-28">
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-14">
        <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#ff1e1e]/[0.05] blur-[180px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#ff1e1e]">
                  08
                </span>

                <span className="h-[1px] w-10 bg-[#ff1e1e]/60" />

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                  Start a Project
                </span>
              </div>

              <h1 className="mt-10 text-[clamp(3.5rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
                LET&apos;S BUILD
                <span className="block text-white/35">SOMETHING</span>
                <span className="block text-[#ff1e1e]">POWERFUL.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                Tell us a little about your idea, business and goals. We&apos;ll
                review your project and get back to you with the best way
                forward.
              </p>

              <div className="mt-12 border-t border-white/[0.08] pt-8">
                <p className="text-xs uppercase tracking-[0.22em] text-white/25">
                  Prefer email?
                </p>

                <a
                  href="mailto:hello@vizualztech.com"
                  className="mt-3 inline-block text-lg font-semibold text-white transition-colors hover:text-[#ff1e1e]"
                >
                  hello@vizualztech.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#121212]/80 p-6 backdrop-blur-xl md:p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}