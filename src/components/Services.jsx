// ─── SERVICES SECTION ────────────────────────────────────────────────────────

import { useState } from "react";
import { useInView } from "../hooks";
import { SERVICES } from "../data/content";

function ServiceCard({ svc, index, sectionInView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#FFFFFF" : "#FAFBFF",
        border: `1.5px solid ${hovered ? svc.color + "40" : "rgba(29,111,216,0.09)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "44px 40px",
        cursor: "default",
        transition: "all 0.35s var(--ease-out)",
        boxShadow: hovered ? `var(--shadow-lg), 0 0 0 1px ${svc.color}18` : "var(--shadow-sm)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        opacity: sectionInView ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Accent corner glow on hover */}
      {hovered && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: 160, height: 160,
            background: `radial-gradient(circle at top right, ${svc.color}20, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Top bar accent */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 40, right: 40,
          height: 3,
          background: `linear-gradient(90deg, ${svc.color}, transparent)`,
          borderRadius: "0 0 4px 4px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Tag label */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: svc.color,
          marginBottom: 16,
        }}
      >
        {svc.tag}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(17px, 2vw, 22px)",
          fontWeight: 800,
          color: "#0A1628",
          margin: "0 0 28px",
          lineHeight: 1.2,
        }}
      >
        {svc.title}
      </h3>

      {/* Bullet list */}
      <ul style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: 36 }}>
        {svc.bullets.map((bullet, bi) => (
          <li
            key={bi}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              fontFamily: "var(--font-body)",
              fontSize: 14.5,
              color: "#475569",
              lineHeight: 1.55,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                color: svc.color,
                marginTop: 5,
                flexShrink: 0,
                fontSize: 8,
              }}
            >
              ◆
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <a
        href="#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-display)",
          fontSize: 12,
          fontWeight: 700,
          padding: "10px 22px",
          borderRadius: "var(--radius-sm)",
          border: `1.5px solid ${svc.color}50`,
          background: `${svc.color}0e`,
          color: svc.color,
          letterSpacing: "0.06em",
          transition: "all 0.2s ease",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${svc.color}1e`;
          e.currentTarget.style.borderColor = svc.color;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `${svc.color}0e`;
          e.currentTarget.style.borderColor = `${svc.color}50`;
        }}
      >
        {svc.cta} →
      </a>
    </div>
  );
}

export default function Services() {
  const [ref, inView] = useInView(0.05);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "var(--section-pad)",
        background: "var(--gray-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(29,111,216,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(29,111,216,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ position: "relative" }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            WHAT WE DO
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#0A1628",
              margin: "0 0 16px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Four Disciplines.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1D6FD8, #29B6F6, #00C853)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero Compromise.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every engagement is delivered at enterprise standard — security and
            performance are non-negotiable from day one.
          </p>
        </div>

        {/* 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
          className="services-grid"
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.id}
              svc={svc}
              index={i}
              sectionInView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
