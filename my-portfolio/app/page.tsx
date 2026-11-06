import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { Expertise } from '@/components/sections/service';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Expertise />
    </main>
  );
}
