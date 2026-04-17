"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e1e1e" }}>
        <span style={{ fontWeight: 800, fontSize: 20, color: "#0ea5e9" }}>TrivAir</span>
        <Link href="/privacy" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>Privacy</Link>
      </nav>
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <div style={{ fontSize: 80, marginBottom: 24 }}>✈️</div>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            How Well Do You<br />
            <span style={{ color: "#0ea5e9" }}>Know Aviation?</span>
          </h1>
          <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 40 }}>
            Async multiplayer trivia for aviation enthusiasts. Airport codes, aircraft types, airline logos, routes — 6 categories, thousands of questions.
          </p>
          <a
            href="https://trivair.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: "#0ea5e9", color: "#fff", fontWeight: 700,
              padding: "16px 36px", borderRadius: 50, fontSize: 17,
              textDecoration: "none",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}
        >
          {[
            { emoji: "🛫", title: "6 Categories", desc: "Airports, aircraft, airlines & more" },
            { emoji: "⚔️", title: "Multiplayer", desc: "Challenge friends async" },
            { emoji: "🧠", title: "1000+ Questions", desc: "Always something new" },
            { emoji: "🏆", title: "Leaderboards", desc: "Climb the rankings" },
          ].map((f) => (
            <div key={f.title} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 16, padding: 20 }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{f.emoji}</div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 4 }}>{f.title}</div>
              <div style={{ color: "#64748b", fontSize: 13 }}>{f.desc}</div>
            </div>
          ))}
        </motion.div>
      </main>
      <footer style={{ textAlign: "center", padding: "40px 32px", color: "#475569", fontSize: 13, borderTop: "1px solid #1e1e1e" }}>
        <p>© 2026 Uğur Demiröz · <Link href="/privacy" style={{ color: "#64748b", textDecoration: "none" }}>Privacy Policy</Link></p>
      </footer>
    </div>
  );
}
