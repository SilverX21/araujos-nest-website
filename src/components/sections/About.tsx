import { useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { MessageSquare, Globe, Heart, Dumbbell, Camera, Plane, Swords } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { BorderBeam } from '../ui/BorderBeam'
import { profile } from '../../data/profile'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

// ISO country codes for flag images (flagcdn.com)
const FLAG_CODES: Record<string, string> = {
  'Portuguese': 'pt',
  'English':    'gb',
  'Spanish':    'es',
}

// Number of signal bars lit per proficiency level (out of 5)
const LEVEL_BARS: Record<string, number> = {
  'Native':        5,
  'Professional':  4,
  'Conversational':3,
}

// One-liner descriptor revealed on chip hover
const SKILL_DESCRIPTORS: Record<string, string> = {
  'Teamwork':         'Collaborative by default',
  'Critical Thinking':'Questions first, solutions second',
  'Creativity':       'Finds the angle others miss',
  'Problem Solving':  'Thrives under ambiguity',
  'Determined':       'Always finishes what gets started',
}

const INTEREST_ICONS: Record<string, React.ReactNode> = {
  'Gym':         <Dumbbell  size={15} />,
  'Travelling':  <Plane     size={15} />,
  'Photography': <Camera    size={15} />,
  'Football':    <Swords    size={15} />,
}

// ── Cyber-Glass Magnetic Chip ─────────────────────────────────────────────
function MagneticChip({ skill, descriptor, delay = 0 }: { skill: string; descriptor: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 18 })
  const sy = useSpring(y, { stiffness: 280, damping: 18 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    x.set((e.clientX - (left + width / 2)) * 0.3)
    y.set((e.clientY - (top  + height / 2)) * 0.3)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={`soft-chip${hovered ? ' soft-chip--hovered' : ''}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, scale: 0.82 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="soft-chip-label">{skill}</span>

      <AnimatePresence>
        {hovered && (
          <motion.span
            className="soft-chip-desc"
            initial={{ maxWidth: 0, opacity: 0 }}
            animate={{ maxWidth: 260, opacity: 1 }}
            exit={{ maxWidth: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            — {descriptor}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────
export function About() {
  return (
    <section id="about" className="section-container">
      <SectionTitle number="01" label="who i am" heading="About Me" />

      <div className="about-grid">

        {/* ── Left: bio + languages ── */}
        <div className="about-left">

          <motion.p
            className="about-bio"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {profile.about}
          </motion.p>

          {/* Languages */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
          >
            <p className="about-block-label">
              <Globe size={13} />
              Languages
            </p>

            <div className="about-lang-list">
              {profile.languages.map(lang => (
                <Tilt
                  key={lang.name}
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable={true}
                  glareMaxOpacity={0.12}
                  glareColor="#00C2FF"
                  glarePosition="all"
                  scale={1.03}
                  transitionSpeed={500}
                  perspective={800}
                  gyroscope={false}
                  className="about-lang-tilt"
                >
                  <div className="lang-card">
                    <div className="lang-card-body">
                      <p className="lang-name">{lang.name}</p>
                      <p className="lang-level-text">{lang.level}</p>
                      <div className="lang-signal" aria-label={`${LEVEL_BARS[lang.level]} of 5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`lang-signal-bar ${i < LEVEL_BARS[lang.level] ? 'active' : ''}`}
                            style={{ height: `${5 + i * 4}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="lang-flag-ring" aria-hidden="true">
                      <img
                        src={`https://flagcdn.com/w80/${FLAG_CODES[lang.name]}.jpg`}
                        alt=""
                        className="lang-flag-img"
                      />
                    </div>

                    <BorderBeam duration={5} />
                  </div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right: soft skills + interests ── */}
        <div className="about-right">

          {/* Soft skills — Cyber-Glass Magnetic Chips */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="about-block-label">
              <MessageSquare size={13} />
              Soft Skills
            </p>

            <div className="soft-chips-container">
              {profile.softSkills.map((skill, i) => (
                <MagneticChip
                  key={skill}
                  skill={skill}
                  descriptor={SKILL_DESCRIPTORS[skill] ?? ''}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 }}
          >
            <p className="about-block-label">
              <Heart size={13} />
              Interests
            </p>
            <div className="about-interests">
              {profile.interests.map(interest => (
                <span key={interest} className="about-interest-tag">
                  {INTEREST_ICONS[interest] ?? null}
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
