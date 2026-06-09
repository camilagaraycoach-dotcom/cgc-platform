import Image from "next/image";
import { BASE_PATH } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer style={{
      background: "#111010",
      padding: "3.5rem 2.5rem",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <Image src={`${BASE_PATH}/img/logo.png`} alt="CGC Method" width={120} height={60}
            style={{ objectFit: "contain", mixBlendMode: "screen" }} />
        </div>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Flexibility · Acro · Dance Technique
        </p>
        <a href="https://wa.me/51954655122" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "#25D366", color: "#fff",
          fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em",
          padding: "0.65rem 1.6rem", borderRadius: "100px",
          textDecoration: "none", marginBottom: "2rem",
        }}>
          💬 ¿Dudas? Escríbenos por WhatsApp
        </a>
        <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.72rem" }}>
          © 2026 CGC Method · camilagaraycoach.com
        </p>
      </div>
    </footer>
  );
}
