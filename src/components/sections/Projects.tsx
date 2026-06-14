import { motion } from 'framer-motion';
import { Plane, Clock, Code2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import BorderBeam from '../ui/BorderBeam';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function GlitchText({ text }: { text: string }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Main text */}
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--color-cyan)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        {text}
      </span>
      {/* Glitch layer 1 */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--color-orange)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          animation: 'glitch-1 4s steps(1) infinite',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      >
        {text}
      </span>
      {/* Glitch layer 2 */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--color-cyan)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          animation: 'glitch-2 4s steps(1) infinite 0.15s',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '8rem 1.5rem',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,194,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
            <SectionTitle
              protocol="SYS.PROTOCOL.06 // PROJECTS"
              title="Personal Projects"
              subtitle="Side missions and passion builds."
            />
          </motion.div>

          {/* Travel Buddy card */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            style={{ maxWidth: '640px', margin: '0 auto' }}
          >
            <div
              className="jarvis-card"
              style={{
                padding: '3rem 2rem',
                background: 'var(--color-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="corner-tr" />
              <div className="corner-bl" />

              {/* Animated border beam */}
              <BorderBeam color="#00C2FF" duration={3} size={100} />

              {/* Inner scan line */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, var(--color-cyan), transparent)',
                  animation: 'scan-move 3s linear infinite',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  border: '1px solid var(--color-cyan)',
                  background: 'var(--color-cyan-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--color-cyan)',
                  animation: 'arc-pulse 3s ease infinite, float-up 4s ease infinite',
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                }}
              >
                <Plane size={28} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                }}
              >
                Travel Buddy
              </h3>

              <p
                style={{
                  color: 'var(--color-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  maxWidth: '400px',
                  margin: '0 auto 2rem',
                }}
              >
                A travel consultant app for managing clients, budgets, and trips — tracking itineraries and expenses in one unified interface.
              </p>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '2rem',
                }}
              >
                {['React', 'TypeScript', '.NET Core', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      padding: '4px 10px',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-muted)',
                      letterSpacing: '0.05em',
                      borderRadius: '2px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* COMING SOON overlay */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  border: '1px solid rgba(255,107,53,0.4)',
                  background: 'rgba(255,107,53,0.08)',
                  borderRadius: '2px',
                }}
              >
                <Clock size={14} style={{ color: 'var(--color-orange)' }} />
                <GlitchText text="COMING SOON" />
              </div>

              {/* Status info */}
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--color-faint)',
                  letterSpacing: '0.12em',
                }}
              >
                <Code2 size={10} />
                MISSION.STATUS // IN DEVELOPMENT
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
