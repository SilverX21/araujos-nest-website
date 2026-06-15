import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitFork, Link, ChevronDown, MapPin, Wifi } from "lucide-react";
import ParticleCanvas from "../ui/ParticleCanvas";
import { profile } from "../../data/profile";

const ROLES = [
  "Software Developer",
  "Backend Engineer",
  ".NET Specialist",
  "Cloud Enthusiast",
  "API Designer",
];

function TypewriterText({ words }: { words: string[] }) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span>
      {display}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--color-cyan)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink-cursor 1s ease infinite",
        }}
      />
    </span>
  );
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Radial gradient accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(0,194,255,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* HUD corner decorations */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "80px",
          left: "24px",
          borderLeft: "1px solid rgba(0,194,255,0.2)",
          borderTop: "1px solid rgba(0,194,255,0.2)",
          width: "48px",
          height: "48px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "80px",
          right: "24px",
          borderRight: "1px solid rgba(0,194,255,0.2)",
          borderTop: "1px solid rgba(0,194,255,0.2)",
          width: "48px",
          height: "48px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "40px",
          left: "24px",
          borderLeft: "1px solid rgba(0,194,255,0.2)",
          borderBottom: "1px solid rgba(0,194,255,0.2)",
          width: "48px",
          height: "48px",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "40px",
          right: "24px",
          borderRight: "1px solid rgba(0,194,255,0.2)",
          borderBottom: "1px solid rgba(0,194,255,0.2)",
          width: "48px",
          height: "48px",
          pointerEvents: "none",
        }}
      />

      {/* Scan line readout */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "rgba(0,194,255,0.3)",
          letterSpacing: "0.25em",
          textAlign: "center",
          lineHeight: 1.8,
          width: "calc(100vw - 3rem)",
        }}
      >
        <div style={{ whiteSpace: "nowrap" }}>SYSTEM.ONLINE // INITIALIZING PORTFOLIO</div>
        <div style={{ whiteSpace: "nowrap" }}>v2.0 // STARK.INDUSTRIES</div>
      </div>

      {/* HUD coordinates */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "80px",
          left: "32px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          color: "rgba(0,194,255,0.25)",
          letterSpacing: "0.1em",
          lineHeight: 1.8,
        }}
      >
        <div>LAT: 41.1579° N</div>
        <div>LON: 8.6291° W</div>
        <div>ALT: 104m</div>
      </div>
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "80px",
          right: "32px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          color: "rgba(0,194,255,0.25)",
          letterSpacing: "0.1em",
          lineHeight: 1.8,
          textAlign: "right",
        }}
      >
        <div>SYS: ACTIVE</div>
        <div>NET: CONNECTED</div>
        <div>SEC: NOMINAL</div>
      </div>

      {/* Main content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "132px 1.5rem 0",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Text column */}
        <div className="text-center md:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                border: "1px solid rgba(0, 214, 143, 0.3)",
                background: "rgba(0, 214, 143, 0.08)",
                borderRadius: "2px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-emerald)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-emerald)",
                  animation: "status-pulse 2s ease infinite",
                  flexShrink: 0,
                }}
              />
              <Wifi size={10} />
              Hello World! I'm online.
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              color: "var(--color-muted)",
              marginBottom: "1.5rem",
              minHeight: "2rem",
            }}
          >
            <TypewriterText words={ROLES} />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-center md:justify-start"
            style={{
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
            }}
          >
            <MapPin size={12} style={{ color: "var(--color-cyan)" }} />
            {profile.location}
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto md:mx-0"
            style={{
              color: "var(--color-muted)",
              fontSize: "1rem",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            {profile.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start"
            style={{
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href="#experience"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                background: "var(--color-cyan)",
                color: "#07090F",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 600,
                transition: "all 0.2s ease",
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
              className="hover:opacity-90"
            >
              VIEW MY WORK
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                border: "1px solid var(--color-cyan)",
                color: "var(--color-cyan)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.2s ease",
                background: "transparent",
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center md:justify-start"
            style={{ gap: "12px" }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
                transition: "all 0.2s ease",
                textDecoration: "none",
                borderRadius: "2px",
              }}
              className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            >
              <GitFork size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
                transition: "all 0.2s ease",
                textDecoration: "none",
                borderRadius: "2px",
              }}
              className="hover:border-[var(--color-cyan)] hover:text-[var(--color-cyan)]"
            >
              <Link size={16} />
            </a>
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* Outer spinning ring */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent 0%, var(--color-cyan) 20%, transparent 40%, var(--color-orange) 60%, transparent 80%, var(--color-cyan) 100%)",
                animation: "spin-slow 12s linear infinite",
                opacity: 0.6,
              }}
            />
            {/* Inner spinning ring (counter) */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 180deg, transparent 0%, var(--color-orange) 15%, transparent 35%, var(--color-cyan) 55%, transparent 75%, var(--color-orange) 95%)",
                animation: "spin-reverse 8s linear infinite",
                opacity: 0.4,
              }}
            />
            {/* Glow ring */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                animation: "arc-pulse 3s ease infinite",
              }}
            />
            {/* Photo container */}
            <div
              style={{
                width: "clamp(220px, 28vw, 320px)",
                height: "clamp(220px, 28vw, 320px)",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(0,194,255,0.3)",
                position: "relative",
                background: "var(--color-elevated)",
              }}
            >
              {!imgError ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  onError={() => setImgError(true)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(3rem, 8vw, 5rem)",
                      background:
                        "linear-gradient(135deg, var(--color-cyan), var(--color-orange))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    NA
                  </span>
                </div>
              )}
              {/* Scan overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,194,255,0.03) 3px, rgba(0,194,255,0.03) 4px)",
                  pointerEvents: "none",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* PROFILE.IMG label below circle */}
            {imgError && (
              <div
                aria-hidden
                style={{
                  textAlign: "center",
                  marginTop: "16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--color-faint)",
                  letterSpacing: "0.2em",
                }}
              >
                PROFILE.IMG
              </div>
            )}

            {/* HUD data overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "8px",
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                color: "rgba(0,194,255,0.5)",
                letterSpacing: "0.2em",
                whiteSpace: "nowrap",
                background: "var(--color-bg)",
                padding: "2px 8px",
                border: "1px solid var(--color-border)",
              }}
            >
              ID: NA-001 // VERIFIED
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            color: "var(--color-faint)",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
        <ChevronDown
          size={16}
          style={{
            color: "var(--color-cyan)",
            animation: "bounce-y 2s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
