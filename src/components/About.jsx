// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
// ADD this at the top
import heroImg from "../assets/hero.jpg";
import { useInView } from "../hooks";

const CREDENTIALS = [
  {
    icon: "🎓",
    label: "EDUCATION",
    value: "B.Sc. Software Engineering",
    sub: "SUST — Sudan University for Science & Technology",
  },
  {
    icon: "🔐",
    label: "SECURITY",
    value: "OWASP Top 10 · Burp Suite · Nmap",
    sub: "Offensive security & vulnerability research",
  },
  {
    icon: "🏢",
    label: "ENTERPRISE",
    value: "ERP Systems · Multi-Branch Architecture",
    sub: "Production systems for real businesses",
  },
  {
    icon: "🌍",
    label: "REACH",
    value: "Sudan / Global",
    sub: "Remote-first, on-site when needed",
  },
];

const BIO_PARAGRAPHS = [
  "HadeepLine — Hadeep Office for Software Solutions — is a specialized technical practice based in Sudan, serving startups, mid-to-large enterprises, and government organizations across the region and globally.",
  "Founded by Alhadi Hassan (Hadeep), a Software Engineering graduate of Sudan University for Science and Technology (SUST), the office operates at the intersection of high-performance system development and applied offensive security.",
  "We don't choose between building fast and building secure. Every system we ship is architected with threat modeling from day one — because in enterprise environments, a single unchecked vulnerability isn't a ticket. It's a liability.",
];

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "var(--section-pad)",
        background: "var(--gray-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: "-6%", top: "50%",
          transform: "translateY(-50%)",
          width: 500, height: 500,
          background:
            "radial-gradient(circle, rgba(29,111,216,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", right: "-4%", bottom: "10%",
          width: 380, height: 380,
          background:
            "radial-gradient(circle, rgba(0,200,83,0.06) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* ── Left: Text ── */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-32px)",
              transition: "all 0.8s var(--ease-out)",
            }}
          >
            <div className="section-label">ABOUT THE OFFICE</div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 800,
                color: "#0A1628",
                margin: "0 0 28px",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Not a Freelancer.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #1D6FD8, #29B6F6, #00C853)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                }}
              >
                A Technical Office.
              </span>
            </h2>

            {BIO_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15.5,
                  color: "#475569",
                  lineHeight: 1.8,
                  margin: "0 0 18px",
                  opacity: inView ? 1 : 0,
                  transition: `opacity 0.65s ease ${i * 150 + 300}ms`,
                }}
              >
                {para}
              </p>
            ))}

            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginTop: 12,
                padding: "12px 20px",
                borderRadius: "var(--radius-md)",
                background: "rgba(0,200,83,0.07)",
                border: "1px solid rgba(0,200,83,0.22)",
              }}
            >
              <span
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#00C853",
                  animation: "pulse 2.5s ease-in-out infinite",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11, fontWeight: 700,
                  color: "#00A846",
                  letterSpacing: "0.08em",
                }}
              >
                AVAILABLE FOR NEW ENGAGEMENTS · REMOTE & ON-SITE
              </span>
            </div>
          </div>

          {/* ── Right: Credential cards ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(32px)",
              transition: "all 0.8s var(--ease-out) 200ms",
            }}
          >
            {/* Profile image card */}
            <div
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                background: "#FFFFFF",
                border: "1px solid rgba(29,111,216,0.08)",
                marginBottom: 8,
                position: "relative",
              }}
            >
              <img
                src={heroImg}
                alt="Alhadi Hassan — Hadeep Office founder"
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback */}
              <div
                style={{
                  display: "none",
                  width: "100%", height: 220,
                  background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
                  alignItems: "center", justifyContent: "center",
                  flexDirection: "column", gap: 10,
                }}
              >
                <span style={{ fontSize: 40 }}>👨‍💻</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#1D6FD8" }}>Add logo.png or hero.png</span>
              </div>
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
                background: "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",
              }} />
            </div>

            {/* Credential cards */}
            {CREDENTIALS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "18px 20px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(29,111,216,0.08)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-sm)",
                  opacity: inView ? 1 : 0,
                  transition: `all 0.6s ease ${i * 90 + 400}ms`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = "rgba(29,111,216,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.borderColor = "rgba(29,111,216,0.08)";
                }}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 9, fontWeight: 700,
                      color: "#1D6FD8",
                      letterSpacing: "0.18em",
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14, fontWeight: 600,
                      color: "#0A1628",
                      marginBottom: 3,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12.5,
                      color: "#64748B",
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
