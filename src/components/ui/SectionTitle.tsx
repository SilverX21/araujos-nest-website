import { motion } from 'framer-motion'

interface SectionTitleProps {
  number: string
  label: string
  heading: string
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as number[] } },
}

export function SectionTitle({ number, label, heading }: SectionTitleProps) {
  return (
    <div style={{ position: 'relative', marginBottom: '3rem' }}>
      <span className="section-number" aria-hidden="true">{number}</span>

      <motion.p
        className="section-label"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {label}
      </motion.p>

      <motion.h2
        className="section-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ delay: 0.1 }}
      >
        {heading}
      </motion.h2>
    </div>
  )
}
