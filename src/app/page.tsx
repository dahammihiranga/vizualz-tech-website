import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";

export default function Home() {
  return (
    <main>
      <Hero />

      <Marquee />

      <section
        id="about"
        className="min-h-screen border-t border-white/[0.06] bg-[#0d0d0d]"
      />
    </main>
  );
}