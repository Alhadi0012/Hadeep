// ─── APP ROOT ─────────────────────────────────────────────────────────────────
// Hadeep Office for Software Solutions · Light Mode · Modular Architecture

import "./styles/tokens.css";
import "./styles/global.css";

import Header      from "./components/Header";
import Hero        from "./components/Hero";
import StatsBar    from "./components/StatsBar";
import Services    from "./components/Services";
import PortfolioGrid from "./components/PortfolioGrid";
import About       from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <PortfolioGrid />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
