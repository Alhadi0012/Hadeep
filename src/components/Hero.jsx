// ─── HERO SECTION ────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
// ADD this at the top (after the React import)
import heroImg from "../assets/hero.jpg";

/* ── Decorative dot-grid background ── */
function DotGrid() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `radial-gradient(circle, rgba(29,111,216,0.12) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}
    />
  );
}

/* ── Floating geometry ── */
function FloatShape({ top, left, size, color, delay = 0, rotate = 0 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top, left,
        width: size, height: size,
        border: `1.5px solid ${color}`,
        borderRadius: "4px",
        opacity: 0.35,
        transform: `rotate(${rotate}deg)`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    />
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const show = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.65s var(--ease-out) ${delay}ms, transform 0.65s var(--ease-out) ${delay}ms`,
  });

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--grad-hero)",
        paddingTop: 68,
      }}
    >
      {/* Background layers */}
      <DotGrid />

      {/* Ambient color blobs */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 560, height: 560,
        background: "radial-gradient(circle, rgba(41,182,246,0.15) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "5%", left: "-8%",
        width: 480, height: 480,
        background: "radial-gradient(circle, rgba(0,200,83,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating decorative shapes */}
      <FloatShape top="15%" left="8%"  size={44} color="#1D6FD8" delay={0}   rotate={15} />
      <FloatShape top="65%" left="5%"  size={24} color="#00C853" delay={1.5} rotate={45} />
      <FloatShape top="25%" left="88%" size={36} color="#29B6F6" delay={0.8} rotate={20} />
      <FloatShape top="72%" left="85%" size={52} color="#1D6FD8" delay={2.2} rotate={-12} />

      {/* Content */}
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          width: "100%",
          padding: "0 clamp(20px, 6vw, 88px)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* ── LEFT: Text ── */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(29,111,216,0.08)",
              border: "1px solid rgba(29,111,216,0.18)",
              borderRadius: 99,
              padding: "6px 16px",
              marginBottom: 28,
              ...show(200),
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00C853",
              animation: "pulse 2.5s ease-in-out infinite",
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 11, fontWeight: 700,
              color: "#1D6FD8", letterSpacing: "0.12em",
            }}>
              AVAILABLE FOR NEW ENGAGEMENTS
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0A1628",
              marginBottom: 24,
              letterSpacing: "-0.025em",
              ...show(350),
            }}
          >
            We Build{" "}
            <span style={{
              background: "linear-gradient(135deg, #1D6FD8 0%, #29B6F6 50%, #00C853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Secure
            </span>
            <br />
            Enterprise{" "}
            <span style={{
              background: "linear-gradient(135deg, #29B6F6 0%, #00C853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Software
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              color: "#475569",
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 44,
              ...show(500),
            }}
          >
            Hadeep Office architects high-performance systems that enterprises stake
            their operations on — and security infrastructure that attackers can't break.
            From multi-branch ERPs to penetration-tested APIs, we deliver without compromise.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              ...show(650),
            }}
          >
            <a
              href="#work"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14, fontWeight: 700,
                padding: "14px 34px",
                borderRadius: "var(--radius-md)",
                background: "linear-gradient(135deg, #1D6FD8 0%, #29B6F6 100%)",
                color: "#FFFFFF",
                letterSpacing: "0.04em",
                boxShadow: "var(--shadow-blue)",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 16px 48px rgba(29,111,216,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-blue)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              View Our Work <span>→</span>
            </a>

            <a
              href="#contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14, fontWeight: 600,
                padding: "14px 34px",
                borderRadius: "var(--radius-md)",
                background: "transparent",
                border: "1.5px solid rgba(29,111,216,0.3)",
                color: "#1D6FD8",
                letterSpacing: "0.04em",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(29,111,216,0.06)"; e.currentTarget.style.borderColor = "rgba(29,111,216,0.6)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(29,111,216,0.3)"; }}
            >
              Start a Project
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 48,
              flexWrap: "wrap",
              ...show(800),
            }}
          >
            {[
              { icon: "🔐", text: "OWASP Compliant" },
              { icon: "🏢", text: "Enterprise Grade" },
              { icon: "⚡", text: "Production Ready" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  fontFamily: "var(--font-display)",
                  fontSize: 11, fontWeight: 700,
                  color: "#64748B",
                  letterSpacing: "0.06em",
                }}
              >
                <span>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Hero Image / Visual Card ── */}
        <div
          style={{
            position: "relative",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0) scale(1)" : "translateX(32px) scale(0.96)",
            transition: "all 0.8s var(--ease-out) 400ms",
          }}
          className="hide-mobile"
        >
          {/* Main image card */}
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-xl), 0 0 0 1px rgba(29,111,216,0.08)",
              background: "var(--white)",
              position: "relative",
            }}
          >
            {/* Hero image — replace src with your actual image path */}
            <img
              src={heroImg}
              alt="Hadeep Office — Professional workspace"
              style={{
                width: "100%",
                height: 420,
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                // Fallback placeholder if image not found
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback gradient placeholder */}
            <div
              style={{
                display: "none",
                width: "100%",
                height: 420,
                background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 40%, #DCFCE7 100%)",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{
                width: 80, height: 80,
                background: "linear-gradient(135deg, #1D6FD8, #29B6F6)",
                borderRadius: "var(--radius-xl)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 32,
              }}>
                💻
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#1D6FD8" }}>
                Add hero.png to src/assets/
              </span>
            </div>

            {/* Overlay gradient at bottom */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 100,
              background: "linear-gradient(to top, rgba(255,255,255,0.95), transparent)",
            }} />
          </div>

          {/* Floating stat chip — top-left */}
          <div style={{
            position: "absolute",
            top: -18, left: -24,
            background: "#FFFFFF",
            borderRadius: "var(--radius-md)",
            padding: "12px 18px",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid rgba(29,111,216,0.1)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 22 }}>🏆</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "#0F2557", lineHeight: 1 }}>40+</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#64748B" }}>Projects</div>
            </div>
          </div>

          {/* Floating tag chip — bottom-right */}
          <div style={{
            position: "absolute",
            bottom: -18, right: -20,
            background: "linear-gradient(135deg, #0F2557, #1D6FD8)",
            borderRadius: "var(--radius-md)",
            padding: "14px 20px",
            boxShadow: "var(--shadow-blue)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00C853", animation: "pulse 2.5s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.08em" }}>AVAILABLE NOW</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 6,
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
        aria-hidden="true"
      >
        <div style={{
          width: 22, height: 34,
          border: "1.5px solid rgba(29,111,216,0.4)",
          borderRadius: 99,
          display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8,
            background: "#1D6FD8",
            borderRadius: 99,
            animation: "scrollPulse 1.8s ease-in-out infinite",
          }} />
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 9, color: "#94A3B8", letterSpacing: "0.2em" }}>SCROLL</span>
      </div>

      {/* Bottom wave divider */}
      <div style={{
        position: "absolute", bottom: -2, left: 0, right: 0,
        lineHeight: 0, pointerEvents: "none",
      }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
