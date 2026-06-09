interface BorderBeamProps {
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
}

/**
 * Animated light beam that travels around the border of its parent.
 * Parent must have: position: relative; overflow: hidden; border-radius.
 */
export function BorderBeam({
  duration = 6,
  colorFrom = '#00C2FF',
  colorTo = '#00D68F',
  borderWidth = 1,
}: BorderBeamProps) {
  return (
    <span
      aria-hidden="true"
      className="border-beam-element"
      style={{
        '--beam-duration': `${duration}s`,
        '--beam-from':     colorFrom,
        '--beam-to':       colorTo,
        '--beam-width':    `${borderWidth}px`,
      } as React.CSSProperties}
    />
  )
}
