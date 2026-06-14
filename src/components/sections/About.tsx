import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, type Variants } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Tilt from 'react-parallax-tilt'
import { MessageSquare, Globe, Heart, Dumbbell, Camera, Plane, Swords, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionTitle } from '../ui/SectionTitle'
import { BorderBeam } from '../ui/BorderBeam'
import { profile } from '../../data/profile'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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

// Skills split across two orbit rings
const INNER_SKILLS = [profile.softSkills[0], profile.softSkills[1]]
const OUTER_SKILLS = [profile.softSkills[2], profile.softSkills[3], profile.softSkills[4]]
const INNER_DUR    = 14
const OUTER_DUR    = 22

// ── Orbital Skill Rings — desktop only ───────────────────────────────────
function SkillOrbit() {
  return (
    <div className="skill-orbit" aria-label="Soft skills">
      <div className="skill-orbit-path skill-orbit-path--inner" aria-hidden="true" />
      <div className="skill-orbit-path skill-orbit-path--outer" aria-hidden="true" />

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

      {INNER_SKILLS.map((skill, i) => (
        <div key={skill} className="orbit-point orbit-point--inner"
          style={{ animationDelay: `${-(i / INNER_SKILLS.length) * INNER_DUR}s` }}>
          <div className="orbit-badge orbit-badge--inner"
            style={{ animationDelay: `${-(i / INNER_SKILLS.length) * INNER_DUR}s` }}
            title={skill}>{skill}</div>
        </div>
      ))}

      {OUTER_SKILLS.map((skill, i) => (
        <div key={skill} className="orbit-point orbit-point--outer"
          style={{ animationDelay: `${-(i / OUTER_SKILLS.length) * OUTER_DUR}s` }}>
          <div className="orbit-badge orbit-badge--outer"
            style={{ animationDelay: `${-(i / OUTER_SKILLS.length) * OUTER_DUR}s` }}
            title={skill}>{skill}</div>
        </div>
      ))}
    </div>
  )
}

// ── Cyber-Glass Magnetic Chip — mobile/tablet ─────────────────────────────
function MagneticChip({ skill, descriptor, delay = 0 }: {
  skill: string; descriptor: string; delay?: number
}) {
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

  const onLeave = () => { x.set(0); y.set(0); setHovered(false) }

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
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <span className="soft-chip-label">{skill}</span>
      <AnimatePresence>
        {hovered && (
          <motion.span className="soft-chip-desc"
            initial={{ maxWidth: 0, opacity: 0 }}
            animate={{ maxWidth: 260, opacity: 1 }}
            exit={{ maxWidth: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >— {descriptor}</motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Language Cards — embla carousel on mobile, grid on tablet+ ───────────
function LangCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [activeIdx, setActiveIdx]   = useState(0)
  const [canPrev,   setCanPrev]     = useState(false)
  const [canNext,   setCanNext]     = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIdx(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => { emblaApi.off('select', onSelect); emblaApi.off('reInit', onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div className="lang-carousel-wrapper">
      <div className="lang-embla__viewport" ref={emblaRef}>
        <div className="lang-embla__container">
          {profile.languages.map(lang => (
            <div key={lang.name} className="lang-embla__slide">
              <Tilt
                tiltMaxAngleX={7} tiltMaxAngleY={7}
                glareEnable glareMaxOpacity={0.12} glareColor="#00C2FF"
                glarePosition="all" scale={1.03} transitionSpeed={500}
                perspective={800} gyroscope={false} className="about-lang-tilt"
              >
                <div className="lang-card">
                  <div className="lang-flag-banner" aria-hidden="true">
                    <img src={`https://flagcdn.com/w160/${FLAG_CODES[lang.name]}.jpg`}
                      alt="" className="lang-flag-img" />
                  </div>
                  <div className="lang-card-body">
                    <p className="lang-name">{lang.name}</p>
                    <div className="lang-level-row">
                      <span className="lang-level-text">{lang.level}</span>
                      <div className="lang-signal" aria-label={`${LEVEL_BARS[lang.level]} of 5`}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i}
                            className={`lang-signal-bar ${i < LEVEL_BARS[lang.level] ? 'active' : ''}`}
                            style={{ height: `${5 + i * 4}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <BorderBeam duration={5} />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows + dots — hidden on tablet+ via CSS */}
      <div className="lang-controls">
        <button className="lang-arrow" onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev} aria-label="Previous language">
          <ChevronLeft size={16} />
        </button>
        <div className="lang-dots" aria-hidden="true">
          {profile.languages.map((_, i) => (
            <span key={i}
              className={`lang-dot${i === activeIdx ? ' lang-dot--active' : ''}`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
        <button className="lang-arrow" onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext} aria-label="Next language">
          <ChevronRight size={16} />
        </button>
      </div>
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
          <motion.p className="about-bio"
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {profile.about}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.1 }}
          >
            <p className="about-block-label"><Globe size={13} />Languages</p>
            <LangCards />
          </motion.div>
        </div>

        {/* ── Right: soft skills + interests ── */}
        <div className="about-right">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="about-block-label"><MessageSquare size={13} />Soft Skills</p>

            {/* Desktop: orbital rings */}
            <div className="skills-desktop-only">
              <SkillOrbit />
            </div>

            {/* Mobile + tablet: magnetic chips */}
            <div className="soft-chips-container skills-mobile-only">
              {profile.softSkills.map((skill, i) => (
                <MagneticChip key={skill} skill={skill}
                  descriptor={SKILL_DESCRIPTORS[skill] ?? ''} delay={i * 0.07} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.15 }}
          >
            <p className="about-block-label"><Heart size={13} />Interests</p>
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
