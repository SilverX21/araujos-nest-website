import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
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
import { canRender3D, prefersReducedMotion } from './stage/support';

const Stage = lazy(() => import('./stage/Stage'));

// A failed model load or WebGL crash drops the 3D layer; the DOM site stays intact.
class StageBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function App() {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [show3D] = useState(canRender3D);

  useEffect(() => {
    if (reducedMotion) return;
    let stop: (() => void) | undefined;
    let cancelled = false;
    import('./stage/smoothScroll').then(({ startSmoothScroll }) => {
      if (!cancelled) stop = startSmoothScroll();
    });
    return () => {
      cancelled = true;
      stop?.();
    };
  }, [reducedMotion]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {show3D && (
        <StageBoundary>
          <Suspense fallback={null}>
            <Stage reducedMotion={reducedMotion} />
          </Suspense>
        </StageBoundary>
      )}
      <Navbar />
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
