import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { certifications } from '../../data/certifications';
import type { Certification } from '../../data/certifications';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function getPlatformClass(platform: Certification['platform']) {
  const map: Record<Certification['platform'], string> = {
    Udemy: 'badge-udemy',
    Dometrain: 'badge-dometrain',
    Mosh: 'badge-mosh',
    Rumos: 'badge-rumos',
  };
  return map[platform];
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 8);

  return (
    <section
      id="certifications"
      style={{
        padding: '8rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.06 }}
      >
        <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
          <SectionTitle
            protocol="SYS.PROTOCOL.05 // CERTIFICATIONS"
            title="Training Modules"
            subtitle={`${certifications.length} verified certifications — continuous learning is the mission.`}
          />
        </motion.div>

        {/* Count display */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.65 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 20px',
              border: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
            }}
          >
            <Award size={14} style={{ color: 'var(--color-cyan)' }} />
            <span style={{ color: 'var(--color-muted)' }}>TOTAL.CERTS:</span>
            <span
              style={{
                color: 'var(--color-cyan)',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              {certifications.length}
            </span>
            <span style={{ color: 'var(--color-faint)' }}>// LOADING.COMPLETE</span>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {visible.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={fadeInUp}
              transition={{ duration: 0.45, delay: (i % 8) * 0.04 }}
              className="jarvis-card"
              style={{
                padding: '1.25rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <div className="corner-tr" />
              <div className="corner-bl" />

              {/* Platform badge + year */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span
                  className={getPlatformClass(cert.platform)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    padding: '2px 8px',
                    borderRadius: '2px',
                    fontWeight: 600,
                  }}
                >
                  {cert.platform.toUpperCase()}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--color-faint)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {cert.year}
                </span>
              </div>

              {/* Title */}
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: 'var(--color-text)',
                  lineHeight: 1.4,
                  flex: 1,
                }}
              >
                {cert.title}
              </h4>

              {/* Date */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--color-faint)',
                  letterSpacing: '0.1em',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{cert.date.toUpperCase()}</span>
                <ExternalLink size={10} style={{ opacity: 0.3 }} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less */}
        {certifications.length > 8 && (
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            style={{ textAlign: 'center', marginTop: '2.5rem' }}
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 24px',
                border: '1px solid var(--color-cyan)',
                background: 'transparent',
                color: 'var(--color-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderRadius: '2px',
              }}
              className="hover:bg-[var(--color-cyan-dim)]"
            >
              {showAll
                ? `COLLAPSE.CERTS ↑`
                : `LOAD.MORE.CERTS (${certifications.length - 8} remaining) ↓`}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
