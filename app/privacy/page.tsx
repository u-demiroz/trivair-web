"use client";
import Link from "next/link";

export default function Privacy() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <nav style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e1e1e" }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 20, color: "#0ea5e9", textDecoration: "none" }}>TrivAir</Link>
        <Link href="/" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none" }}>← Home</Link>
      </nav>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 32px" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "#64748b", marginBottom: 40, fontSize: 14 }}>Last updated: April 2026</p>
        {[
          { title: "1. Information We Collect", text: "TrivAir collects basic account information (username, email) when you sign up. Game progress and scores are stored to enable multiplayer features and leaderboards." },
          { title: "2. How We Use Your Data", text: "Your data is used to provide the core features of TrivAir: multiplayer trivia, leaderboards, and game history. We do not sell your personal data to third parties." },
          { title: "3. Third-Party Services", text: "TrivAir uses Google AdMob for advertising, which may collect device identifiers for ad personalization. Please refer to Google's privacy policy for more details." },
          { title: "4. Data Security", text: "Your data is stored securely with industry-standard encryption. We take reasonable measures to protect your information from unauthorized access." },
          { title: "5. Children's Privacy", text: "TrivAir is not directed to children under 13. We do not knowingly collect personal information from children under 13." },
          { title: "6. Contact", text: "For privacy-related questions: ugur@ugurdemiroz.com" },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0ea5e9", marginBottom: 10 }}>{s.title}</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>{s.text}</p>
          </div>
        ))}
      </main>
      <footer style={{ textAlign: "center", padding: "40px 32px", color: "#475569", fontSize: 13, borderTop: "1px solid #1e1e1e" }}>
        <p>© 2026 Uğur Demiröz</p>
      </footer>
    </div>
  );
}
