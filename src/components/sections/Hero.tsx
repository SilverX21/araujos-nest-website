import { ArrowDown, GitFork, Link } from "lucide-react";
import { profile } from "../../data/profile";

const iconLink =
  "flex h-9 w-9 items-center justify-center border border-(--color-border) text-muted transition-colors hover:border-cyan hover:text-cyan";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-end overflow-hidden md:items-center"
    >
      {/* Reactor glow behind the suit; also the whole visual when WebGL is off */}
      <div aria-hidden className="hero-glow" />
      <p aria-hidden className="hero-backword">
        Backend
      </p>

      <div className="relative z-2 mx-auto w-full max-w-[1200px] px-6 pb-16 md:pb-0 md:pt-16">
        <div className="md:max-w-[55%]">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight">
            Nuno
            <br />
            Araújo
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="btn-notch bg-cyan px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-notch border border-cyan px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cyan transition-colors hover:bg-(--color-cyan-dim)"
            >
              Get in touch
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <GitFork size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <Link size={16} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[0.6rem] tracking-[0.2em] text-faint transition-colors hover:text-cyan md:flex"
      >
        SCROLL
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
