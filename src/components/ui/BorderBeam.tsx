import { useEffect, useRef } from 'react';

interface BorderBeamProps {
  color?: string;
  duration?: number;
  size?: number;
}

export default function BorderBeam({
  color = '#00C2FF',
  duration = 3,
  size = 80,
}: BorderBeamProps) {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return;

    let start: number | null = null;
    let animId: number;

    const parent = beam.parentElement;
    if (!parent) return;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const progress = (elapsed / duration) % 1;

      const rect = parent.getBoundingClientRect();
      const perimeter = 2 * (rect.width + rect.height);
      const pos = progress * perimeter;

      let x = 0;
      let y = 0;

      if (pos < rect.width) {
        // Top edge
        x = pos;
        y = 0;
      } else if (pos < rect.width + rect.height) {
        // Right edge
        x = rect.width;
        y = pos - rect.width;
      } else if (pos < 2 * rect.width + rect.height) {
        // Bottom edge (right to left)
        x = rect.width - (pos - rect.width - rect.height);
        y = rect.height;
      } else {
        // Left edge (bottom to top)
        x = 0;
        y = rect.height - (pos - 2 * rect.width - rect.height);
      }

      beam.style.left = `${x - size / 2}px`;
      beam.style.top = `${y - size / 2}px`;

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [duration, size]);

  return (
    <div
      ref={beamRef}
      className="absolute pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}66 0%, transparent 70%)`,
        borderRadius: '50%',
        filter: 'blur(4px)',
        mixBlendMode: 'screen',
        zIndex: 10,
      }}
    />
  );
}
