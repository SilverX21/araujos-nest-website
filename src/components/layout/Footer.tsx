import { GitFork, Link, Heart } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '3rem 1.5rem',
        background: 'var(--color-surface)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'var(--color-text)',
                marginBottom: '4px',
              }}
            >
              <span style={{ color: 'var(--color-cyan)' }}>N</span>uno{' '}
              <span style={{ color: 'var(--color-cyan)' }}>A</span>raújo
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.1em',
              }}
            >
              SYS.STATUS // ONLINE · PORTO, PORTUGAL
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-faint)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className="hover:text-[var(--color-cyan)]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
              className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] hover:shadow-[0_0_12px_rgba(0,194,255,0.3)]"
            >
              <GitFork size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                border: '1px solid var(--color-border)',
                color: 'var(--color-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                borderRadius: '2px',
              }}
              className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)] hover:shadow-[0_0_12px_rgba(0,194,255,0.3)]"
            >
              <Link size={15} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex items-center justify-center mt-8 gap-2"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--color-faint)',
            letterSpacing: '0.08em',
          }}
        >
          <span>© {new Date().getFullYear()} NUNO ARAÚJO</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            BUILT WITH <Heart size={10} style={{ color: 'var(--color-orange)' }} className="mx-1" /> AND REACT
          </span>
          <span>·</span>
          <span style={{ color: 'var(--color-cyan)', opacity: 0.6 }}>J.A.R.V.I.S FRAMEWORK v2.0</span>
        </div>
      </div>
    </footer>
  );
}
