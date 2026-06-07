// ─── CONTACT FORM ────────────────────────────────────────────────────────────

import { useState } from "react";
import { useInView } from "../hooks";
import { CONTACT_EMAIL, WHATSAPP_LINK, TELEGRAM_LINK } from "../data/content";

const SERVICE_OPTIONS = [
  "Full-Stack Web Development",
  "Mobile App Development",
  "Penetration Testing",
  "Enterprise Management System",
  "Security Code Review",
  "System Integration",
  "Other / Not Sure Yet",
];

const CONTACT_CHANNELS = [
  {
    icon: "✉️",
    label: "EMAIL",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "💬",
    label: "WHATSAPP",
    value: "+249 920 200 205",
    href: WHATSAPP_LINK,
  },
  {
    icon: "✈️",
    label: "TELEGRAM",
    value: "@hadiHusien",
    href: TELEGRAM_LINK,
  },
];

export default function ContactForm() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });
  const [focused, setFocused] = useState(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  /* ── Shared input style ── */
  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    background: focused === field ? "#FFFFFF" : "var(--gray-50)",
    border: `1.5px solid ${
      errors[field]
        ? "#EF4444"
        : focused === field
        ? "#1D6FD8"
        : "var(--gray-200)"
    }`,
    borderRadius: "var(--radius-sm)",
    color: "#0A1628",
    fontSize: 14,
    fontFamily: "var(--font-body)",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
    boxShadow:
      focused === field
        ? "0 0 0 3px rgba(29,111,216,0.08)"
        : "none",
  });

  /* ── Validate ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ── Submit: open mailto link + show success ── */
  const handleSubmit = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(
      `[Hadeep Office] ${form.service || "Project Inquiry"} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\nService: ${form.service || "Not specified"}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "var(--section-pad)",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot-grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(29,111,216,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            LET'S WORK
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#0A1628",
              margin: "0 0 14px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Start a Conversation.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1D6FD8, #29B6F6, #00C853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              We Respond Within 24h.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16, color: "#64748B",
              maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            Whether you need a full build, a security audit, or just want to
            explore what's possible — let's talk.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 44,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s var(--ease-out)",
          }}
          className="contact-grid"
        >
          {/* ── LEFT: Form ── */}
          <div
            style={{
              background: "#FAFBFF",
              border: "1.5px solid rgba(29,111,216,0.1)",
              borderRadius: "var(--radius-xl)",
              padding: "44px",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {sent ? (
              /* Success state */
              <div
                style={{
                  textAlign: "center",
                  padding: "56px 0",
                  animation: "fadeUp 0.4s var(--ease-out)",
                }}
              >
                <div
                  style={{
                    width: 72, height: 72,
                    background: "linear-gradient(135deg, #DCFCE7, #BBF7D0)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 32, margin: "0 auto 24px",
                    boxShadow: "0 8px 24px rgba(0,200,83,0.2)",
                  }}
                >
                  ✅
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22, fontWeight: 800,
                    color: "#00A846",
                    margin: "0 0 10px",
                  }}
                >
                  Message Sent
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15, color: "#64748B",
                    lineHeight: 1.7,
                  }}
                >
                  Your email client should have opened. Expect a reply within
                  24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                  style={{
                    marginTop: 28,
                    fontFamily: "var(--font-display)",
                    fontSize: 12, fontWeight: 700,
                    padding: "10px 24px",
                    borderRadius: "var(--radius-sm)",
                    background: "transparent",
                    border: "1.5px solid rgba(29,111,216,0.25)",
                    color: "#1D6FD8",
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    transition: "all 0.2s",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form fields */
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16, fontWeight: 800,
                    color: "#0A1628",
                    margin: "0 0 8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Send a Message
                </h3>

                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { key: "name",  ph: "Full Name *",      type: "text" },
                    { key: "email", ph: "Email Address *",  type: "email" },
                  ].map(({ key, ph, type }) => (
                    <div key={key}>
                      <input
                        type={type}
                        placeholder={ph}
                        value={form[key]}
                        onChange={(e) => {
                          setForm({ ...form, [key]: e.target.value });
                          if (errors[key]) setErrors({ ...errors, [key]: false });
                        }}
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        style={inputStyle(key)}
                      />
                      {errors[key] && (
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#EF4444", marginTop: 4 }}>
                          Required{key === "email" ? " — enter a valid email" : ""}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Company */}
                <input
                  type="text"
                  placeholder="Company / Organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("company")}
                />

                {/* Service select */}
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  style={{
                    ...inputStyle("service"),
                    color: form.service ? "#0A1628" : "#94A3B8",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                    paddingRight: 40,
                  }}
                >
                  <option value="" disabled>Service Required</option>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Describe your project or engagement *"
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: false });
                    }}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    rows={5}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 120 }}
                  />
                  {errors.message && (
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "#EF4444", marginTop: 4 }}>
                      Please describe your project
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  onClick={handleSubmit}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14, fontWeight: 800,
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    background: "linear-gradient(135deg, #1D6FD8 0%, #29B6F6 50%, #00C853 100%)",
                    color: "#FFFFFF",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.06em",
                    boxShadow: "var(--shadow-blue)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(29,111,216,0.35)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-blue)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  SEND MESSAGE →
                </button>

                {/* Trust note */}
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10, fontWeight: 700,
                    color: "#94A3B8",
                    textAlign: "center",
                    margin: 0,
                    letterSpacing: "0.08em",
                  }}
                >
                  🔒 YOUR INFORMATION IS NEVER SHARED OR SOLD
                </p>
              </div>
            )}
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {/* Availability card */}
            <div
              style={{
                padding: "24px",
                background: "linear-gradient(135deg, rgba(0,200,83,0.05), rgba(0,200,83,0.02))",
                border: "1.5px solid rgba(0,200,83,0.2)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 9, height: 9,
                    borderRadius: "50%",
                    background: "#00C853",
                    animation: "pulse 2.5s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 11, fontWeight: 700,
                    color: "#00A846",
                    letterSpacing: "0.1em",
                  }}
                >
                  CURRENTLY AVAILABLE
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14, color: "#475569",
                  margin: 0, lineHeight: 1.65,
                }}
              >
                Open to new enterprise contracts, security audit engagements,
                and long-term partnerships.
              </p>
            </div>

            {/* Contact channels */}
            {CONTACT_CHANNELS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    padding: "18px 20px",
                    background: "#FAFBFF",
                    border: "1.5px solid rgba(29,111,216,0.09)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "all 0.25s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(29,111,216,0.3)";
                    e.currentTarget.style.background = "#EFF6FF";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(29,111,216,0.09)";
                    e.currentTarget.style.background = "#FAFBFF";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: 22 }}>{icon}</span>
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
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 14, fontWeight: 600,
                        color: "#0A1628",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                  <div style={{ marginLeft: "auto", color: "#CBD5E1", fontSize: 16 }}>→</div>
                </div>
              </a>
            ))}

            {/* Why us box */}
            <div
              style={{
                padding: "24px",
                background: "linear-gradient(135deg, #0F2557 0%, #1D6FD8 100%)",
                borderRadius: "var(--radius-md)",
                marginTop: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11, fontWeight: 700,
                  color: "#7DD3FC",
                  letterSpacing: "0.12em",
                  marginBottom: 14,
                }}
              >
                TYPICAL RESPONSE
              </div>
              {[
                { icon: "⚡", text: "Reply within 24 hours" },
                { icon: "📋", text: "Free initial consultation" },
                { icon: "🔐", text: "NDA available on request" },
                { icon: "💰", text: "Transparent project pricing" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    fontFamily: "var(--font-body)",
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: 10,
                  }}
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .contact-grid > div:first-child { padding: 28px 20px !important; }
          .contact-grid > div:first-child > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
