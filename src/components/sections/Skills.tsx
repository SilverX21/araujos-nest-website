import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skillGroups } from '../../data/skills';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const colorMap = {
  cyan: {
    tag: { background: 'var(--color-cyan-dim)', color: 'var(--color-cyan)', border: '1px solid rgba(0,194,255,0.25)' },
    header: 'var(--color-cyan)',
    glow: 'rgba(0,194,255,0.3)',
  },
  orange: {
    tag: { background: 'var(--color-orange-dim)', color: 'var(--color-orange)', border: '1px solid rgba(255,107,53,0.25)' },
    header: 'var(--color-orange)',
    glow: 'rgba(255,107,53,0.3)',
  },
  emerald: {
    tag: { background: 'var(--color-emerald-dim)', color: 'var(--color-emerald)', border: '1px solid rgba(0,214,143,0.25)' },
    header: 'var(--color-emerald)',
    glow: 'rgba(0,214,143,0.3)',
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '8rem 1.5rem',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(0,194,255,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
            <SectionTitle
              protocol="SYS.PROTOCOL.02 // SKILL MATRIX"
              title="Technical Arsenal"
              subtitle="7+ years of battle-tested expertise across the full software engineering stack."
            />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
              gap: '1.25rem',
            }}
          >
            {skillGroups.map((group, i) => {
              const colors = colorMap[group.color];
              return (
                <motion.div
                  key={group.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.65, delay: i * 0.08 }}
                  className="jarvis-card"
                  style={{
                    padding: '1.75rem',
                    background: 'var(--color-elevated)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  whileHover={{
                    boxShadow: `0 0 20px ${colors.glow}`,
                  }}
                >
                  <div className="corner-tr" />
                  <div className="corner-bl" />

                  {/* Category header */}
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: colors.header,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                        opacity: 0.7,
                      }}
                    >
                      MODULE.{String(i + 1).padStart(2, '0')}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: 'var(--color-text)',
                      }}
                    >
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', flex: 1 }}>
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: '4px 12px',
                          borderRadius: '2px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          letterSpacing: '0.05em',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                          ...colors.tag,
                        }}
                        className="hover:shadow-[0_0_10px_var(--glow)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom status bar */}
                  <div
                    style={{
                      borderTop: `1px solid ${colors.header}22`,
                      paddingTop: '10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: colors.header,
                      letterSpacing: '0.15em',
                      opacity: 0.6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: colors.header,
                        animation: 'status-pulse 2.5s ease infinite',
                      }}
                    />
                    {group.statusLabel}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
