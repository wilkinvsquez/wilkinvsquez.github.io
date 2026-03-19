
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Projects } from '../components/Projects/Projects';
import { Skills } from '../components/Skills/Skills';
import { Experience } from '../components/Experience/Experience';
import { Education } from '../components/Education/Education';
import { Contact } from '../components/Contact/Contact';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};
