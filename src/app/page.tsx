import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <FeaturedWork />
      <Process />
      <TechStack />
      <WhyUs />
    </main>
  );
}