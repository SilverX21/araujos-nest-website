import { motion } from 'framer-motion';
import { User, Globe, Heart, Compass } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { profile } from '../../data/profile';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '8rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
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
            protocol="SYS.PROTOCOL.01 // ABOUT ME"
            title="System Profile"
            subtitle="Engineer by trade, builder by nature — turning complexity into clean, scalable systems."
          />
        </motion.div>

        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Bio card */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="jarvis-card md:col-span-2"
            style={{
              padding: '2rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
            }}
          >
            <div className="corner-tr" />
            <div className="corner-bl" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--color-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cyan)',
                  flexShrink: 0,
                }}
              >
                <User size={14} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-cyan)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                PROFILE.BIO
              </span>
            </div>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
              {profile.bio}
            </p>
            <p
              style={{
                color: 'var(--color-muted)',
                lineHeight: 1.8,
                fontSize: '1rem',
                marginTop: '1rem',
              }}
            >
              With experience spanning IoT smart buildings, banking platforms, insurance sector APIs, and full-stack web portals, I bring a versatile engineering perspective backed by continuous learning — 20 certifications and growing.
            </p>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="jarvis-card"
            style={{
              padding: '2rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
            }}
          >
            <div className="corner-tr" />
            <div className="corner-bl" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--color-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-orange)',
                  flexShrink: 0,
                }}
              >
                <Compass size={14} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-orange)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                SOFT.SKILLS
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {profile.softSkills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    padding: '6px 14px',
                    border: '1px solid rgba(255,107,53,0.25)',
                    background: 'var(--color-orange-dim)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-orange)',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  className="hover:shadow-[0_0_12px_rgba(255,107,53,0.3)] hover:border-[rgba(255,107,53,0.5)]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="jarvis-card"
            style={{
              padding: '2rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
            }}
          >
            <div className="corner-tr" />
            <div className="corner-bl" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--color-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-emerald)',
                  flexShrink: 0,
                }}
              >
                <Globe size={14} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-emerald)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                LANGUAGE.PACK
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{lang.name}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-emerald)',
                      letterSpacing: '0.1em',
                      padding: '2px 10px',
                      border: '1px solid rgba(0,214,143,0.25)',
                      background: 'var(--color-emerald-dim)',
                      borderRadius: '2px',
                    }}
                  >
                    {lang.level.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="jarvis-card"
            style={{
              padding: '2rem',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
            }}
          >
            <div className="corner-tr" />
            <div className="corner-bl" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--color-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-cyan)',
                  flexShrink: 0,
                }}
              >
                <Heart size={14} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-cyan)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                INTERESTS.DAT
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {profile.interests.map((interest) => (
                <div
                  key={interest}
                  style={{
                    padding: '6px 14px',
                    border: '1px solid var(--color-border)',
                    background: 'var(--color-elevated)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-muted)',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
                >
                  {interest}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
