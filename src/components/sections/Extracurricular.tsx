import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "../../data/profile";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Extracurricular() {
  return (
    <section
      id="extracurricular"
      style={{
        padding: "8rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.div variants={fadeInUp} transition={{ duration: 0.65 }}>
          <SectionTitle
            protocol="SYS.PROTOCOL.07 // EXTRACURRICULAR"
            title="Beyond The Code"
            subtitle="Leadership, community, and adventure outside the terminal."
          />
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "1.5rem",
          }}
        >
          {profile.extracurricular.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.65 }}
              className="jarvis-card"
              style={{
                padding: "2rem",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: "2px",
              }}
            >
              <div className="corner-tr" />
              <div className="corner-bl" />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid var(--color-orange)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-orange)",
                    background: "var(--color-orange-dim)",
                    flexShrink: 0,
                  }}
                >
                  <Flame size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--color-text)",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: "var(--color-muted)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>

              <ul
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {item.items.map((entry, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      color: "var(--color-muted)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Star
                      size={10}
                      style={{
                        color: "var(--color-orange)",
                        flexShrink: 0,
                        marginTop: "4px",
                      }}
                    />
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Stats tile */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.65 }}
            className="jarvis-card"
            style={{
              padding: "2rem",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "2px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div className="corner-tr" />
            <div className="corner-bl" />

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--color-emerald)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              SCOUT.STATS
            </div>

            {[
              { label: "Years Scouting", value: "24+", note: "Since 2001" },
              { label: "Role", value: "Chief", note: "Since 2023" },
              { label: "Events Led", value: "4+", note: "National Events" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: "10px 14px",
                  background: "var(--color-elevated)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: "2px",
                }}
              >
                <div>
                  <div
                    style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "var(--color-faint)",
                    }}
                  >
                    {stat.note}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "var(--color-emerald)",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
