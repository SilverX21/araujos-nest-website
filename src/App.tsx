import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Extracurricular from './components/sections/Extracurricular';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.add('light');
    } else {
      html.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Extracurricular />
      </main>
      <Footer />
    </div>
  );
}
