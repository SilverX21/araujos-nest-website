import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { experience } from '../../data/experience';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
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
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
          <SectionTitle
            protocol="SYS.PROTOCOL.03 // WORK EXPERIENCE"
            title="Mission Log"
            subtitle="A chronological record of deployments, from junior to senior command."
          />
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, var(--color-cyan) 10%, var(--color-cyan) 90%, transparent)',
              transform: 'translateX(-50%)',
              opacity: 0.3,
            }}
            className="hidden md:block"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem',
                  position: 'relative',
                }}
                className="md:grid-cols-[1fr_40px_1fr]"
              >
                {/* Left side (even) or right side (odd) on desktop */}
                <div
                  className={`md:col-start-${i % 2 === 0 ? '1' : '3'} md:col-end-${i % 2 === 0 ? '2' : '4'}`}
                  style={{ order: i % 2 === 0 ? 0 : 2 }}
                >
                  {/* Only show content on the correct side on desktop */}
                  <div
                    className="jarvis-card"
                    style={{
                      padding: '1.75rem',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                  >
                    <div className="corner-tr" />
                    <div className="corner-bl" />

                    {/* Header */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            color: 'var(--color-text)',
                          }}
                        >
                          {item.role}
                        </h3>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            color: item.type === 'Internship' ? 'var(--color-orange)' : 'var(--color-emerald)',
                            border: `1px solid ${item.type === 'Internship' ? 'rgba(255,107,53,0.3)' : 'rgba(0,214,143,0.3)'}`,
                            background: item.type === 'Internship' ? 'var(--color-orange-dim)' : 'var(--color-emerald-dim)',
                            padding: '2px 8px',
                            letterSpacing: '0.1em',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                          }}
                        >
                          {item.type.toUpperCase()}
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '4px',
                        }}
                      >
                        <Briefcase size={12} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            color: 'var(--color-cyan)',
                          }}
                        >
                          {item.company}
                        </span>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Calendar size={10} style={{ color: 'var(--color-faint)' }} />
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                            {item.period}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={10} style={{ color: 'var(--color-faint)' }} />
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1.25rem' }}>
                      {item.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          style={{
                            display: 'flex',
                            gap: '8px',
                            color: 'var(--color-muted)',
                            fontSize: '0.875rem',
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: 'var(--color-cyan)', opacity: 0.6, flexShrink: 0, marginTop: '2px' }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Stack tags */}
                    <div
                      style={{
                        borderTop: '1px solid var(--color-border)',
                        paddingTop: '1rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                      }}
                    >
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            padding: '3px 8px',
                            background: 'var(--color-elevated)',
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
                  </div>
                </div>

                {/* Timeline dot — center column (desktop only) */}
                <div
                  className="hidden md:flex"
                  style={{
                    gridColumn: '2',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: '1.75rem',
                    order: 1,
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'var(--color-cyan)',
                      boxShadow: '0 0 12px rgba(0,194,255,0.6), 0 0 24px rgba(0,194,255,0.3)',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </div>

                {/* Empty space for the other column */}
                <div className="hidden md:block" style={{ order: i % 2 === 0 ? 2 : 0 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
