import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react'
import { ParticleCanvas } from '../ui/ParticleCanvas'
import { profile } from '../../data/profile'

const container = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      <ParticleCanvas />

      {/* Ambient glow behind the text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '0%',
          width: '55vw',
          height: '55vw',
          maxWidth: 640,
          maxHeight: 640,
          background: 'radial-gradient(circle, rgba(0,194,255,0.055) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content grid */}
      <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Left: text ── */}
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Status badge */}
          <motion.div variants={item}>
            <span className="available-badge">
              <span className="available-dot" aria-hidden="true" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="hero-name">
            <span className="gradient-text">{profile.firstName}</span>
            <br />
            <span style={{ color: 'var(--color-text)' }}>{profile.lastName}</span>
          </motion.h1>

          {/* Role + location row */}
          <motion.div variants={item} className="hero-meta">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-cyan)', letterSpacing: '0.05em' }}>
              {profile.role}
            </span>
            <span style={{ color: 'var(--color-faint)' }}>·</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
              <MapPin size={13} />
              {profile.location}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={item} className="hero-tagline">
            {profile.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              className="btn-primary"
              onClick={() => scrollTo('#experience')}
            >
              View My Work
              <ArrowDown size={14} />
            </button>
            <a href={profile.github}  target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Github   size={14} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Linkedin size={14} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: photo ring ── */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        >
          <PhotoRing />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-faint)' }}>
          scroll
        </span>
        <ArrowDown size={13} className="animate-scroll-bounce" style={{ color: 'var(--color-faint)' }} />
      </motion.div>
    </section>
  )
}

// ── Spinning conic-gradient photo ring ────────────────────────────────────
function PhotoRing() {
  return (
    <div style={{ position: 'relative' }} className="photo-ring-wrapper">
      {/* Spinning colour ring */}
      <div
        className="animate-spin-slow"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: -4,
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, var(--color-cyan), var(--color-orange), var(--color-emerald), var(--color-cyan))',
        }}
      />
      {/* Gap mask — uses the bg colour to create a ring effect */}
      <div
        style={{
          position: 'absolute',
          inset: 2,
          borderRadius: '50%',
          background: 'var(--color-bg)',
        }}
      />
      {/* Photo */}
      <img
        src={profile.photo}
        alt={profile.name}
        style={{
          position: 'relative',
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
        }}
        className="photo-ring-img"
      />
    </div>
  )
}
