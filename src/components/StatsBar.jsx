// ─── STATS BAR ────────────────────────────────────────────────────────────────

import { useInView, useCounter } from "../hooks";
import { STATS } from "../data/content";

function StatItem({ stat, active, index }) {
  const count = useCounter(stat.value, active);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "32px 24px",
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s var(--ease-out) ${index * 100}ms, transform 0.6s var(--ease-out) ${index * 100}ms`,
        borderRight: index < STATS.length - 1 ? "1px solid rgba(29,111,216,0.08)" : "none",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 4.5vw, 52px)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #1D6FD8 0%, #29B6F6 50%, #00C853 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {count}{stat.suffix}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 500,
          color: "#64748B",
          letterSpacing: "0.04em",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [ref, inView] = useInView(0.3);

  return (
    <section
      ref={ref}
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid rgba(29,111,216,0.07)",
        borderBottom: "1px solid rgba(29,111,216,0.07)",
        padding: "0 clamp(20px, 6vw, 88px)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
        }}
        className="stats-grid"
      >
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} active={inView} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
