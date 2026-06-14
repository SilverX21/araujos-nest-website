interface SectionTitleProps {
  protocol: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ protocol, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      {/* JARVIS readout label */}
      <div
        className="inline-flex items-center gap-3 mb-4"
        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.2em' }}
      >
        <span style={{ color: 'var(--color-faint)' }}>──</span>
        <span style={{ color: 'var(--color-cyan)' }}>{protocol}</span>
        <span style={{ color: 'var(--color-faint)' }}>──</span>
      </div>

      {/* Section heading */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--color-text)',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="mt-3 max-w-xl mx-auto"
          style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative line */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <div style={{ height: '1px', width: '48px', background: 'var(--color-faint)' }} />
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--color-cyan)',
            boxShadow: '0 0 8px var(--color-cyan)',
          }}
        />
        <div style={{ height: '1px', width: '48px', background: 'var(--color-faint)' }} />
      </div>
    </div>
  );
}
