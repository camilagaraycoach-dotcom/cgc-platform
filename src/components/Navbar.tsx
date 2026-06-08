"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0.75rem 1.25rem",
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 1px 20px rgba(0,0,0,0.06)",
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Image src="/img/logo.png" alt="CGC Method" width={90} height={45} style={{ objectFit: "contain" }} />
      </Link>

      {/* Links — ocultos en móvil via CSS */}
      <div className="nav-links">
        {[
          { href: "#cursos", label: "Cursos" },
          { href: "#precios", label: "Precios" },
          { href: "#elite", label: "Elite 1:1" },
        ].map((item) => (
          <a key={item.href} href={item.href} style={{
            fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em",
            textTransform: "uppercase", color: "#444",
            textDecoration: "none",
          }}>
            {item.label}
          </a>
        ))}
        <a href="https://wa.me/51954655122" target="_blank" rel="noopener noreferrer"
          className="grad-bg" style={{
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: "#fff",
            padding: "0.6rem 1.4rem", borderRadius: "100px", textDecoration: "none",
          }}>
          💬 WhatsApp
        </a>
      </div>

      {/* Botón WhatsApp solo en móvil */}
      <a href="https://wa.me/51954655122" target="_blank" rel="noopener noreferrer"
        className="grad-bg nav-wa-mobile" style={{
          fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
          textTransform: "uppercase", color: "#fff",
          padding: "0.55rem 1rem", borderRadius: "100px", textDecoration: "none",
        }}>
        💬 WA
      </a>
    </nav>
  );
}
