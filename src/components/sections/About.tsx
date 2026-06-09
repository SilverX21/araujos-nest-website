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

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
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

const INTEREST_ICONS: Record<string, React.ReactNode> = {
  'Gym':         <Dumbbell  size={15} />,
  'Travelling':  <Plane     size={15} />,
  'Photography': <Camera    size={15} />,
  'Football':    <Swords    size={15} />,
}

export function About() {
  return (
    <section id="about" className="section-container">
      <SectionTitle number="01" label="who i am" heading="About Me" />

      <div className="about-grid">

        {/* ── Left: bio + languages ── */}
        <div className="about-left">

          {/* Bio paragraph */}
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

                    {/* ── Left: name + level + signal bars ── */}
                    <div className="lang-card-body">
                      <p className="lang-name">{lang.name}</p>
                      <p className="lang-level-text">{lang.level}</p>

                      {/* Signal-strength bars */}
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

                    {/* ── Right: circular flag ── */}
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

          {/* Soft skills */}
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
            <motion.ul
              className="about-skills-list"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {profile.softSkills.map(skill => (
                <motion.li key={skill} variants={fadeUp} className="about-skill-item">
                  <span className="about-skill-dot" aria-hidden="true" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
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
