import { Navbar } from '@/components/layout/navbar';
import { About } from '@/components/sections/about';
import { Comparison } from '@/components/sections/comparison';
import { Hero } from '@/components/sections/hero';
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
    </main>
  );
}
