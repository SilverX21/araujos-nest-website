import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { MessageSquare, Globe, Heart, Dumbbell, Camera, Plane, Swords } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { BorderBeam } from '../ui/BorderBeam'
import { profile } from '../../data/profile'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as number[] } },
}

const FLAG_CODES: Record<string, string> = {
  'Portuguese': 'pt',
  'English':    'gb',
  'Spanish':    'es',
}

const LEVEL_BARS: Record<string, number> = {
  'Native':        5,
  'Professional':  4,
  'Conversational':3,
}

const INTEREST_ICONS: Record<string, React.ReactNode> = {
  'Gym':         <Dumbbell  size={15} />,
  'Travelling':  <Plane     size={15} />,
  'Photography': <Camera    size={15} />,
  'Football':    <Swords    size={15} />,
}

// Skills split across two orbit rings
const INNER_SKILLS = [profile.softSkills[0], profile.softSkills[1]]              // Teamwork, Critical Thinking
const OUTER_SKILLS = [profile.softSkills[2], profile.softSkills[3], profile.softSkills[4]] // Creativity, Problem Solving, Determined
const INNER_DUR    = 14  // seconds — inner ring
const OUTER_DUR    = 22  // seconds — outer ring (slower)

// ── Orbital Skill Rings ───────────────────────────────────────────────────
function SkillOrbit() {
  return (
    <div className="skill-orbit" aria-label="Soft skills">
      {/* Dashed orbit path indicators */}
      <div className="skill-orbit-path skill-orbit-path--inner" aria-hidden="true" />
      <div className="skill-orbit-path skill-orbit-path--outer" aria-hidden="true" />

      {/* Central hub */}
      <div className="skill-orbit-hub" aria-hidden="true">
        <div className="skill-orbit-hub-gem">
          <svg viewBox="0 0 30 19" width={26} height={17}
            stroke="var(--color-cyan)" strokeWidth={1.75}
            strokeLinecap="square" fill="none"
          >
            <polyline points="1,17 1,1 11,17 11,1" />
            <polyline points="14,17 21,1 28,17" />
            <line x1="18.3" y1="11" x2="23.7" y2="11" />
          </svg>
        </div>
        <span className="skill-orbit-hub-label">soft skills</span>
      </div>

      {/* Inner orbit — 2 skills, 180° apart */}
      {INNER_SKILLS.map((skill, i) => (
        <div
          key={skill}
          className="orbit-point orbit-point--inner"
          style={{ animationDelay: `${-(i / INNER_SKILLS.length) * INNER_DUR}s` }}
        >
          <div
            className="orbit-badge orbit-badge--inner"
            style={{ animationDelay: `${-(i / INNER_SKILLS.length) * INNER_DUR}s` }}
            title={skill}
          >
            {skill}
          </div>
        </div>
      ))}

      {/* Outer orbit — 3 skills, 120° apart */}
      {OUTER_SKILLS.map((skill, i) => (
        <div
          key={skill}
          className="orbit-point orbit-point--outer"
          style={{ animationDelay: `${-(i / OUTER_SKILLS.length) * OUTER_DUR}s` }}
        >
          <div
            className="orbit-badge orbit-badge--outer"
            style={{ animationDelay: `${-(i / OUTER_SKILLS.length) * OUTER_DUR}s` }}
            title={skill}
          >
            {skill}
          </div>
        </div>
      ))}
    </div>
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

        {/* ── Right: orbital skills + interests ── */}
        <div className="about-right">

          {/* Soft skills — Orbital Rings */}
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
            <SkillOrbit />
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
