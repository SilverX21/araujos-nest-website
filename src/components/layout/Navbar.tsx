import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import type { Theme } from '../../App'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Shadow enhancement once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className="navbar"
      style={{ boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.4)' : 'none' }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* ── Logo ── */}
        <LogoMark />

        {/* ── Desktop nav links ── */}
        <nav
          aria-label="Main navigation"
          style={{ alignItems: 'center', gap: '2rem' }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map(link => (
            <NavLink key={link.href} label={link.label} href={link.href} onClick={handleNavClick} />
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="icon-btn"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="icon-btn show-mobile"
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            aria-label="Mobile navigation"
            style={{
              position: 'absolute',
              top: 64,
              left: 0,
              right: 0,
              background: 'var(--color-surface)',
              borderBottom: '1px solid var(--color-border)',
              padding: '1rem 1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--color-border)',
                  transition: 'color 0.2s',
                  width: '100%',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cyan)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// ── Geometric N+A lettermark logo ──────────────────────────────────────
function LogoMark() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        borderColor: hovered ? 'var(--color-cyan)' : 'rgba(0,194,255,0.25)',
        boxShadow: hovered
          ? '0 0 16px rgba(0,194,255,0.3), inset 0 0 12px rgba(0,194,255,0.04)'
          : '0 0 0px rgba(0,194,255,0)',
      }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 34,
        border: '1px solid rgba(0,194,255,0.25)',
        borderRadius: 4,
        background: 'transparent',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 0,
        /* Chamfered top-right corner — the "blueprint" detail */
        clipPath: 'polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%)',
      }}
    >
      {/*
        Geometric lettermark: N and A built from technical strokes.
        ViewBox 30×19 — N occupies x:1–11, A occupies x:14–28.
        StrokeLinecap "square" gives that precise drafting-pen feel.
      */}
      <motion.svg
        viewBox="0 0 30 19"
        width={30}
        height={19}
        stroke="var(--color-cyan)"
        strokeWidth={1.75}
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        aria-hidden="true"
        animate={{ opacity: hovered ? 1 : 0.75 }}
        transition={{ duration: 0.2 }}
      >
        {/* N — left vertical → diagonal → right vertical */}
        <polyline points="1,17 1,1 11,17 11,1" />

        {/* A — two diagonals meeting at apex */}
        <polyline points="14,17 21,1 28,17" />
        {/* A crossbar, positioned at ~60% height */}
        <line x1="18.3" y1="11" x2="23.7" y2="11" />
      </motion.svg>
    </motion.button>
  )
}

// ── Extracted desktop nav link with animated underline ──
function NavLink({
  label,
  href,
  onClick,
}: {
  label: string
  href: string
  onClick: (href: string) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={() => onClick(href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: hovered ? 'var(--color-text)' : 'var(--color-muted)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.25rem 0',
        position: 'relative',
        transition: 'color 0.2s',
      }}
    >
      {label}
      {/* Animated underline */}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'var(--color-cyan)',
          transformOrigin: 'left',
          display: 'block',
        }}
      />
    </button>
  )
}
