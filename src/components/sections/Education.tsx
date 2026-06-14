import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { education } from '../../data/experience';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: '8rem 1.5rem',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
            <SectionTitle
              protocol="SYS.PROTOCOL.04 // EDUCATION"
              title="Academic Credentials"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <div
              className="jarvis-card"
              style={{
                padding: '2.5rem',
                background: 'var(--color-elevated)',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1.5rem',
                alignItems: 'start',
              }}
            >
              <div className="corner-tr" />
              <div className="corner-bl" />

              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  border: '1px solid var(--color-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cyan)',
                  background: 'var(--color-cyan-dim)',
                  flexShrink: 0,
                  animation: 'arc-pulse 3s ease infinite',
                }}
              >
                <GraduationCap size={24} />
              </div>

              {/* Content */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--color-cyan)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}
                >
                  DEGREE.ACQUIRED
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    marginBottom: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {education.degree}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--color-cyan)',
                    marginBottom: '12px',
                  }}
                >
                  {education.institution}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={12} style={{ color: 'var(--color-faint)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)' }}>
                      {education.period}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={12} style={{ color: 'var(--color-faint)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-muted)' }}>
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
