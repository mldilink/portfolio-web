import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Comparison } from '@/components/sections/comparison';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Portfolio } from '@/components/sections/portfolio';
import { Expertise } from '@/components/sections/service';
import { Skills } from '@/components/sections/skills';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
      <About />
      <Skills />
      <Comparison />
      <Portfolio />
      <Experience />
    </main>
  );
}
