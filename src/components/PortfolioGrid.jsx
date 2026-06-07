// ─── PORTFOLIO GRID · OUR WORK ───────────────────────────────────────────────

import { useState } from "react";
import { useInView } from "../hooks";
import { PROJECTS, PROJECT_TAGS, TAG_COLORS } from "../data/content";

/* ── Project Detail Modal ── */
function ProjectModal({ project, onClose }) {
  const tc = TAG_COLORS[project.tag] || "#1D6FD8";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(10,22,40,0.55)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FFFFFF",
          borderRadius: "var(--radius-xl)",
          padding: "44px",
          maxWidth: 580,
          width: "100%",
          position: "relative",
          boxShadow: "var(--shadow-xl)",
          border: "1px solid rgba(29,111,216,0.08)",
          animation: "fadeUp 0.3s var(--ease-out)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 18, right: 18,
            background: "var(--gray-50)",
            border: "1px solid var(--gray-100)",
            borderRadius: "50%",
            width: 34, height: 34,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#64748B", cursor: "pointer",
            fontSize: 18, fontWeight: 300,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#FEE2E2"; e.currentTarget.style.color = "#EF4444"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gray-50)"; e.currentTarget.style.color = "#64748B"; }}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Tag badge */}
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-display)",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.12em",
            padding: "5px 12px",
            borderRadius: 99,
            background: `${tc}15`,
            color: tc,
            border: `1px solid ${tc}35`,
            marginBottom: 20,
          }}
        >
          {project.tag}
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 2.5vw, 22px)",
            fontWeight: 800,
            color: "#0A1628",
            margin: "0 0 18px",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "#475569",
            lineHeight: 1.8,
            margin: "0 0 24px",
          }}
        >
          {project.detail}
        </p>

        {/* Metric */}
        <div
          style={{
            padding: "13px 18px",
            borderRadius: "var(--radius-sm)",
            background: `${project.metricColor}0f`,
            border: `1px solid ${project.metricColor}28`,
            fontFamily: "var(--font-display)",
            fontSize: 13,
            fontWeight: 700,
            color: project.metricColor,
            marginBottom: 24,
          }}
        >
          ↗ {project.metric}
        </div>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 600,
                color: tc,
                padding: "5px 13px",
                borderRadius: "var(--radius-sm)",
                background: `${tc}0f`,
                border: `1px solid ${tc}28`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Single Project Card ── */
function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const tc = TAG_COLORS[project.tag] || "#1D6FD8";

  return (
    <>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded(true)}
        style={{
          background: hovered ? "#FFFFFF" : "#FAFBFF",
          border: `1.5px solid ${hovered ? tc + "45" : "rgba(29,111,216,0.09)"}`,
          borderRadius: "var(--radius-lg)",
          padding: "28px",
          cursor: "pointer",
          transition: "all 0.3s var(--ease-out)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          boxShadow: hovered ? `var(--shadow-lg), 0 0 0 1px ${tc}20` : "var(--shadow-sm)",
          opacity: inView ? 1 : 0,
          transitionDelay: `${index * 70}ms`,
          position: "relative",
          overflow: "hidden",
        }}
        aria-label={`View details for ${project.title}`}
      >
        {/* Hover glow */}
        {hovered && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: 0, right: 0,
              width: 180, height: 180,
              background: `radial-gradient(circle at top right, ${tc}12, transparent 65%)`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Top accent line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${tc}, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "4px 12px",
              borderRadius: 99,
              background: `${tc}12`,
              color: tc,
              border: `1px solid ${tc}30`,
            }}
          >
            {project.tag}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 10, fontWeight: 600,
              color: "#94A3B8",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            fontWeight: 800,
            color: "#0A1628",
            margin: "0 0 10px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13.5,
            color: "#64748B",
            lineHeight: 1.65,
            margin: "0 0 20px",
          }}
        >
          {project.summary}
        </p>

        {/* Metric pill */}
        <div
          style={{
            padding: "9px 14px",
            borderRadius: "var(--radius-sm)",
            background: `${project.metricColor}0f`,
            border: `1px solid ${project.metricColor}28`,
            fontFamily: "var(--font-display)",
            fontSize: 12,
            fontWeight: 700,
            color: project.metricColor,
            marginBottom: 18,
            display: "inline-block",
          }}
        >
          ↗ {project.metric}
        </div>

        {/* Stack chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                fontWeight: 600,
                color: "#64748B",
                padding: "3px 9px",
                borderRadius: 4,
                background: "var(--gray-100)",
                border: "1px solid var(--gray-200)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* "View Details" hint */}
        <div
          style={{
            position: "absolute", bottom: 16, right: 18,
            fontFamily: "var(--font-display)",
            fontSize: 10, fontWeight: 700,
            color: tc,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(6px)",
            transition: "all 0.25s ease",
          }}
        >
          View Details →
        </div>
      </article>

      {expanded && (
        <ProjectModal project={project} onClose={() => setExpanded(false)} />
      )}
    </>
  );
}

/* ── Main Section ── */
export default function PortfolioGrid() {
  const [ref, inView] = useInView(0.05);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === filter);

  return (
    <section
      id="work"
      ref={ref}
      style={{
        padding: "var(--section-pad)",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            OUR WORK
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
            Real Clients.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #1D6FD8, #29B6F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Measurable Results.
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
            Every project in this gallery was delivered under real business
            constraints — with security built in from day one.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 52,
          }}
        >
          {PROJECT_TAGS.map((tag) => {
            const active = filter === tag;
            const tc = TAG_COLORS[tag];
            return (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "8px 22px",
                  borderRadius: 99,
                  border: active
                    ? `1.5px solid ${tc}`
                    : "1.5px solid var(--gray-200)",
                  background: active ? `${tc}12` : "transparent",
                  color: active ? tc : "#64748B",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: active ? `0 4px 16px ${tc}22` : "none",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = tc;
                    e.currentTarget.style.color = tc;
                    e.currentTarget.style.background = `${tc}08`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                    e.currentTarget.style.color = "#64748B";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CMS note callout */}
        <div
          style={{
            marginTop: 56,
            padding: "24px 32px",
            background: "var(--gray-50)",
            border: "1px solid rgba(29,111,216,0.1)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            gap: 18,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: 36, height: 36, flexShrink: 0,
              background: "linear-gradient(135deg, #1D6FD8, #29B6F6)",
              borderRadius: "var(--radius-sm)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16,
            }}
          >
            ⚡
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11, fontWeight: 700,
                color: "#1D6FD8",
                letterSpacing: "0.1em",
                marginBottom: 6,
              }}
            >
              CONTENT MANAGEMENT READY
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13.5,
                color: "#64748B",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              The project grid renders dynamically from the{" "}
              <code
                style={{
                  fontFamily: "monospace",
                  color: "#1D6FD8",
                  background: "#EFF6FF",
                  padding: "1px 6px",
                  borderRadius: 3,
                  fontSize: 12,
                }}
              >
                PROJECTS
              </code>{" "}
              array in <code style={{ fontFamily: "monospace", color: "#1D6FD8", background: "#EFF6FF", padding: "1px 6px", borderRadius: 3, fontSize: 12 }}>src/data/content.js</code>.
              Add or remove a project object and the grid and filter tabs update instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
