// ─── HADEEP OFFICE · DATA MODEL ──────────────────────────────────────────────
// Edit these arrays to update the site content instantly.

export const PROJECTS = [
  {
    id: "p001",
    title: "MultiStore Pro — Retail Chain ERP",
    tag: "Systems",
    year: "2024",
    summary: "Centralized inventory, sales, and staff management across 5 retail branches.",
    detail:
      "Replaced a patchwork of spreadsheets with a real-time dashboard. Role-based access, immutable audit logs on every transaction, and automated daily reconciliation reports cut accounting time by 80%.",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "JWT"],
    metric: "80% ↓ reconciliation time",
    metricColor: "#00C853",
    live: "#",
  },
  {
    id: "p002",
    title: "SecureCart — B2B E-Commerce Platform",
    tag: "Web",
    year: "2024",
    summary: "OWASP Top 10 compliant B2B platform rebuilt from a compromised codebase.",
    detail:
      "Previous vendor left SQL injection vulnerabilities and zero input validation. Rebuilt with parameterized queries, CSP headers, rate limiting, and encrypted data at rest. Zero critical findings on third-party audit.",
    stack: ["Next.js", "Express", "PostgreSQL", "Stripe", "Helmet.js"],
    metric: "0 critical audit findings",
    metricColor: "#1D6FD8",
    live: "#",
  },
  {
    id: "p003",
    title: "FieldForce — Offline-First Sales App",
    tag: "Mobile",
    year: "2023",
    summary: "Cross-platform mobile app for field sales reps with full offline capability.",
    detail:
      "Field reps check stock, place orders, and print receipts with or without internet. SQLite offline sync reconciles with PostgreSQL server on reconnect. Secure JWT token refresh prevents session hijacking.",
    stack: ["React Native", "Expo", "SQLite", "Node.js", "PostgreSQL"],
    metric: "100% field uptime",
    metricColor: "#00C853",
    live: "#",
  },
  {
    id: "p004",
    title: "Enterprise Infrastructure Pentest",
    tag: "Security",
    year: "2024",
    summary: "Full-scope penetration test exposing 3 high-severity vulnerabilities pre-audit.",
    detail:
      "External recon (Nmap, OSINT), web app testing (Burp Suite), API security review (JWT abuse, CORS misconfiguration), and internal network assessment. 40-page executive report with CVSS scores and remediation roadmap delivered before compliance deadline.",
    stack: ["Burp Suite", "Nmap", "Wireshark", "OWASP ZAP", "Postman"],
    metric: "3 high-severity CVEs found",
    metricColor: "#EF4444",
    live: "#",
  },
  {
    id: "p005",
    title: "AuditChain — Warehouse Tracking System",
    tag: "Systems",
    year: "2023",
    summary: "Immutable event-sourced audit logs for full item traceability at a warehouse.",
    detail:
      "Every item movement is logged, timestamped, and tied to a staff member. Event sourcing pattern ensures logs are tamper-evident. Audit trail survived a staff accountability review and held up as legal evidence.",
    stack: ["Node.js", "PostgreSQL", "Prisma", "Event Sourcing", "React"],
    metric: "100% transaction traceability",
    metricColor: "#00C853",
    live: "#",
  },
  {
    id: "p006",
    title: "API Security Hardening — FinTech Client",
    tag: "Security",
    year: "2023",
    summary: "Comprehensive API audit and remediation for a payment processing company.",
    detail:
      "Identified JWT algorithm confusion, BOLA vulnerabilities, and insecure direct object references across 40+ endpoints. Delivered endpoint-level fix recommendations and verified all patches post-remediation.",
    stack: ["Postman", "Burp Suite", "SonarQube", "Node.js"],
    metric: "40+ endpoints secured",
    metricColor: "#EF4444",
    live: "#",
  },
];

export const PROJECT_TAGS = ["All", "Web", "Mobile", "Security", "Systems"];

export const TAG_COLORS = {
  All:      "#1D6FD8",
  Web:      "#29B6F6",
  Mobile:   "#00C853",
  Security: "#EF4444",
  Systems:  "#7C3AED",
};

export const SERVICES = [
  {
    id: "web",
    color: "#1D6FD8",
    glow: "rgba(29,111,216,0.12)",
    tag: "01 — WEB",
    title: "Full-Stack Web Engineering",
    icon: "◈",
    bullets: [
      "High-performance MERN/PERN stack applications",
      "Scalable e-commerce & transactional platforms",
      "REST & GraphQL API design with auth hardening",
      "CI/CD pipelines, containerized deployments",
      "SEO-optimized, accessible, production-ready",
    ],
    cta: "Start a Web Project",
  },
  {
    id: "security",
    color: "#00C853",
    glow: "rgba(0,200,83,0.12)",
    tag: "02 — SECURITY",
    title: "Penetration Testing & AppSec",
    icon: "◈",
    bullets: [
      "OWASP Top 10 web application testing",
      "Offensive recon: Nmap, Shodan, OSINT frameworks",
      "API & JWT security: Burp Suite, Postman",
      "Static code analysis via SonarQube",
      "Executive-grade reports with CVSS scoring",
    ],
    cta: "Schedule a Security Audit",
  },
  {
    id: "systems",
    color: "#29B6F6",
    glow: "rgba(41,182,246,0.12)",
    tag: "03 — SYSTEMS",
    title: "Enterprise Management Systems",
    icon: "◈",
    bullets: [
      "Multi-branch ERP: inventory, sales, HR access",
      "Immutable audit trails & compliance logging",
      "Real-time dashboards with role-based access",
      "Legacy system migration & data integrity",
      "Secure database architecture & optimization",
    ],
    cta: "Design Your System",
  },
  {
    id: "mobile",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.1)",
    tag: "04 — MOBILE",
    title: "Mobile Application Development",
    icon: "◈",
    bullets: [
      "Cross-platform iOS & Android with React Native",
      "Offline-first architecture with sync engines",
      "Secure biometric auth & encrypted local storage",
      "Backend-integrated with REST/WebSocket APIs",
      "Push notifications, analytics, & app store deploy",
    ],
    cta: "Build Your App",
  },
];

export const STATS = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 5,  suffix: "+", label: "Enterprise Clients" },
  { value: 3,  suffix: "yrs", label: "In Operation" },
  { value: 100, suffix: "%", label: "OWASP Compliant" },
];

export const NAV_LINKS = ["Services", "Work", "About", "Contact"];

export const CONTACT_EMAIL = "hadeepline@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/249920200205";
export const TELEGRAM_LINK = "https://t.me/hadiHusien";
