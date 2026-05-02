import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectHighlight from '@/components/ProjectHighlight';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectHighlight />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
