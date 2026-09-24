import { GitFork, Link } from "lucide-react";
import { profile } from "../../data/profile";

// With the 3D choreography on, `.cinematic` makes this section tall and mostly empty:
// the reactor close-up plays in that space, then the suit hovers over the title.
export default function Finale() {
  return (
    <section id="contact" className="flex min-h-svh items-end px-6 pb-24">
      <div className="mx-auto w-full max-w-[1200px] text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Open to new challenges</p>
        <h2 className="finale-title mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight">
          Let's build the future!
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notch inline-flex items-center gap-2 bg-cyan px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-90"
          >
            <Link size={14} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-notch inline-flex items-center gap-2 border border-cyan px-6 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cyan transition-colors hover:bg-(--color-cyan-dim)"
          >
            <GitFork size={14} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
