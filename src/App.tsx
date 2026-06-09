import { useState, useEffect } from 'react'

// ── Layout (added in steps 5 & 14) ──────────────────────────────────────
import { Navbar } from './components/layout/Navbar'
// import { Footer } from './components/layout/Footer'

// ── Sections (added one per step, 6 → 13) ───────────────────────────────
import { Hero }            from './components/sections/Hero'
import { About }           from './components/sections/About'
// import { Skills }          from './components/sections/Skills'
// import { Experience }      from './components/sections/Experience'
// import { Education }       from './components/sections/Education'
// import { Certifications }  from './components/sections/Certifications'
// import { Projects }        from './components/sections/Projects'
// import { Extracurricular } from './components/sections/Extracurricular'

export type Theme = 'dark' | 'light'

/** Read saved preference from localStorage, fall back to OS preference. */
function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        {/* Step 8  → <Skills /> */}
        {/* Step 9  → <Experience /> */}
        {/* Step 10 → <Education /> */}
        {/* Step 11 → <Certifications /> */}
        {/* Step 12 → <Projects /> */}
        {/* Step 13 → <Extracurricular /> */}
      </main>

      {/* Step 14 → <Footer /> */}
    </>
  )
}
