import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
];

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '64px',
        background: theme === 'dark'
          ? (scrolled ? 'rgba(7, 9, 15, 0.95)' : 'rgba(7, 9, 15, 0.8)')
          : (scrolled ? 'rgba(238, 242, 247, 0.97)' : 'rgba(238, 242, 247, 0.88)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--color-border)',
        transition: 'background 0.3s ease',
      }}
    >
      <nav
        className="flex items-center justify-between h-full"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}
      >
        {/* Logo */}
        <a
          href="#"
          aria-label="Nuno Araújo — Home"
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: '1.5px solid var(--color-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'box-shadow 0.3s ease',
            }}
            className="hover:shadow-[0_0_16px_rgba(0,194,255,0.5)]"
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: 'var(--color-cyan)',
                letterSpacing: '0.05em',
              }}
            >
              NA
            </span>
            {/* Corner dots */}
            <span style={{ position: 'absolute', top: '-2px', left: '-2px', width: '4px', height: '4px', background: 'var(--color-orange)', borderRadius: '50%' }} />
            <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '4px', height: '4px', background: 'var(--color-orange)', borderRadius: '50%' }} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--color-text)',
            }}
          >
            Nuno Araújo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-muted)',
                textDecoration: 'none',
                position: 'relative',
                padding: '2px 0',
                transition: 'color 0.2s ease',
              }}
              className="group hover:text-[var(--color-text)]"
            >
              {link.label}
              {/* Cyan underline slide-in */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  right: '100%',
                  height: '1px',
                  background: 'var(--color-cyan)',
                  transition: 'right 0.25s ease',
                }}
                className="group-hover:right-0"
              />
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              border: '1px solid var(--color-border)',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--color-muted)',
              transition: 'color 0.2s ease, border-color 0.2s ease',
              borderRadius: '2px',
            }}
            className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              border: '1px solid var(--color-border)',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--color-muted)',
              borderRadius: '2px',
            }}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              border: '1px solid var(--color-border)',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--color-text)',
              borderRadius: '2px',
            }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              background: theme === 'dark' ? 'rgba(7, 9, 15, 0.98)' : 'rgba(238, 242, 247, 0.99)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--color-border)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--color-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <span style={{ color: 'var(--color-cyan)', opacity: 0.5 }}>
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
