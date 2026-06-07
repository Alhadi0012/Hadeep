// ─── FOOTER ──────────────────────────────────────────────────────────────────

import { NAV_LINKS, CONTACT_EMAIL, WHATSAPP_LINK, TELEGRAM_LINK } from "../data/content";
// ADD this with the other imports at the top
import logoImg from "../assets/logo.png";

const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Penetration Testing",
      "Management Systems",
      "Mobile Apps",
    ],
  },
  {
    title: "Office",
    links: ["About Us", "Our Work", "Contact", "Get a Quote"],
  },
];



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0A1628",
        borderTop: "1px solid rgba(29,111,216,0.12)",
        padding: "64px clamp(20px, 6vw, 88px) 32px",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 44,
          }}
        >
          {/* Brand block */}
          <div style={{ maxWidth: 300 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 18,
              }}
            >
              <img
  src={logoImg}
  alt="Hadeep Office Logo"
  style={{ width: 44, height: 44, objectFit: "contain" }}
/>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 15,
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                  }}
                >
                  HADEEP OFFICE
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 8,
                    color: "#29B6F6",
                    letterSpacing: "0.22em",
                  }}
                >
                  FOR SOFTWARE SOLUTIONS
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13.5,
                color: "#475569",
                lineHeight: 1.75,
                margin: "0 0 20px",
              }}
            >
              Architecting secure, high-performance software for enterprises
              that can't afford to fail.
            </p>

            {/* Social / contact mini-links */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { icon: "✉️", href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
                { icon: "💬", href: WHATSAPP_LINK, label: "WhatsApp" },
                { icon: "✈️", href: TELEGRAM_LINK, label: "Telegram" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  style={{
                    width: 38, height: 38,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(29,111,216,0.2)";
                    e.currentTarget.style.borderColor = "rgba(29,111,216,0.5)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10, fontWeight: 700,
                    color: "#29B6F6",
                    letterSpacing: "0.18em",
                    marginBottom: 18,
                  }}
                >
                  {col.title.toUpperCase()}
                </div>
                {col.links.map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "#475569",
                      marginBottom: 11,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#CBD5E1")}
                    onMouseLeave={(e) => (e.target.style.color = "#475569")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}

            {/* Get a quote CTA */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 10, fontWeight: 700,
                  color: "#29B6F6",
                  letterSpacing: "0.18em",
                  marginBottom: 18,
                }}
              >
                READY TO START?
              </div>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  fontFamily: "var(--font-display)",
                  fontSize: 12, fontWeight: 700,
                  padding: "12px 22px",
                  borderRadius: "var(--radius-sm)",
                  background: "linear-gradient(135deg, #1D6FD8, #29B6F6)",
                  color: "#FFFFFF",
                  letterSpacing: "0.06em",
                  boxShadow: "var(--shadow-blue)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(29,111,216,0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-blue)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get a Free Quote →
              </a>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12, color: "#334155",
                  marginTop: 10, lineHeight: 1.6,
                }}
              >
                Free consultation included.<br />NDA available on request.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(29,111,216,0.2), transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10, fontWeight: 600,
              color: "#1E293B",
              letterSpacing: "0.06em",
            }}
          >
            © {currentYear} HADEEP OFFICE FOR SOFTWARE SOLUTIONS · ALL RIGHTS RESERVED
          </span>
          <div
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 6, height: 6,
                borderRadius: "50%",
                background: "#00C853",
                animation: "pulse 2.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 9, fontWeight: 700,
                color: "#1E293B",
                letterSpacing: "0.12em",
              }}
            >
              SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
