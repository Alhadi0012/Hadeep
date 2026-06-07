// ─── HEADER · NAVBAR ─────────────────────────────────────────────────────────

import { useState } from "react";
import { useScrollY } from "../hooks";
import { NAV_LINKS } from "../data/content";
import logoImg from "../assets/logo.png";

/* ── SVG Logo Mark ── */


function LogoMark({ size = 38 }) {
  return (
    <img
      src={logoImg}
      alt="Hadeep Office Logo"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export default function Header() {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 48;

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 200,
    height: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 clamp(20px, 5vw, 72px)",
    background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(29,111,216,0.08)" : "1px solid transparent",
    boxShadow: scrolled ? "0 2px 24px rgba(10,22,40,0.06)" : "none",
    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
  };

  return (
    <>
      <nav style={navStyle} role="navigation" aria-label="Main navigation">
        {/* Brand */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
          aria-label="Hadeep Office — Home"
        >
          <LogoMark size={38} />
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800, fontSize: 14,
              color: "#0F2557",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}>
              HADEEP
            </div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 8,
              color: "#1D6FD8",
              letterSpacing: "0.22em",
              lineHeight: 1,
            }}>
              OFFICE · SOFTWARE
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div
          className="hide-mobile"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13, fontWeight: 600,
                color: "#334155",
                padding: "8px 16px",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "0.03em",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#1D6FD8"; e.target.style.background = "#EFF6FF"; }}
              onMouseLeave={(e) => { e.target.style.color = "#334155"; e.target.style.background = "transparent"; }}
            >
              {link}
            </a>
          ))}

          <div style={{ width: 1, height: 20, background: "#E2E8F0", margin: "0 10px" }} />

          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13, fontWeight: 700,
              padding: "10px 24px",
              borderRadius: "var(--radius-md)",
              background: "linear-gradient(135deg, #1D6FD8 0%, #29B6F6 100%)",
              color: "#FFFFFF",
              letterSpacing: "0.04em",
              boxShadow: "var(--shadow-blue)",
              transition: "all 0.25s ease",
              border: "none",
            }}
            onMouseEnter={(e) => { e.target.style.boxShadow = "0 12px 36px rgba(29,111,216,0.35)"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = "var(--shadow-blue)"; e.target.style.transform = "translateY(0)"; }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="show-mobile"
          style={{
            display: "none",
            background: "none",
            border: "1px solid #E2E8F0",
            borderRadius: "var(--radius-sm)",
            padding: "8px 12px",
            color: "#334155",
            fontSize: 18,
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 199,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute", top: 20, right: 24,
              background: "none", border: "none",
              color: "#64748B", fontSize: 28, cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ×
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <LogoMark size={42} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "#0F2557" }}>HADEEP OFFICE</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 9, color: "#1D6FD8", letterSpacing: "0.2em" }}>FOR SOFTWARE SOLUTIONS</div>
            </div>
          </div>

          {[...NAV_LINKS, "Get a Quote"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26, fontWeight: 700,
                color: link === "Get a Quote" ? "#1D6FD8" : "#0F2557",
                letterSpacing: "0.04em",
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
