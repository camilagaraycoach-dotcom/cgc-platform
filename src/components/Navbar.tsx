"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BASE_PATH } from "@/lib/basePath";

const WA = `https://wa.me/51954655122?text=${encodeURIComponent("Hola Camila 👋 me interesa saber más sobre sus clases online")}`;

const NAV_PILLS = [
  { id: "powersplit",  label: "PowerSplit",   color: "#F47920", tipo: "curso" },
  { id: "arcos360",   label: "Arcos360",      color: "#E8302A", tipo: "curso" },
  { id: "prepa-fisica", label: "Prep. Física", color: "#7B5EA7", tipo: "curso" },
  { id: "elite",      label: "Elite 1:1 ✦",  color: null,      tipo: "elite" },
  { id: "precios",    label: "💰 Precios",    color: null,      tipo: "precios" },
];

export default function Navbar() {
  const [barVisible, setBarVisible] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = NAV_PILLS.map(p => p.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleClick = (id: string) => setActiveId(id);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.08)",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    }}>
      {/* ── BARRA DE ANUNCIO ── */}
      {barVisible && (
        <div style={{
          background: "linear-gradient(90deg, #E8302A, #F47920, #F9B233, #7B5EA7, #5B6BB5)",
          padding: "0.5rem 1.25rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "0.75rem", position: "relative",
        }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", textAlign: "center", letterSpacing: "0.04em", margin: 0 }}>
            🎁 Paquete 8 clases + <strong>100 grabadas de regalo</strong> por solo $80 USD
            <a href="#precios" style={{ color: "#fff", fontWeight: 800, marginLeft: "0.6rem", textDecoration: "underline", opacity: 0.9 }}>
              Ver precios →
            </a>
          </p>
          <button
            onClick={() => setBarVisible(false)}
            aria-label="Cerrar"
            style={{
              position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)",
              background: "transparent", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1, padding: "0.2rem 0.4rem",
            }}
          >×</button>
        </div>
      )}

      {/* Fila 1: logo + links */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0.6rem 1.25rem",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src={`${BASE_PATH}/img/logo.png`} alt="CGC Method" width={80} height={40} style={{ objectFit: "contain" }} />
        </Link>

        {/* Links desktop */}
        <div className="nav-links nav-desktop" style={{ alignItems: "center", gap: "2rem" }}>
          {[
            { href: "#cursos",  label: "Cursos" },
            { href: "#precios", label: "Precios" },
            { href: "#elite",   label: "Elite 1:1" },
          ].map((item) => (
            <a key={item.href} href={item.href} style={{
              fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", color: "#444", textDecoration: "none",
            }}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="grad-bg" style={{
              fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: "#fff",
              padding: "0.55rem 1.25rem", borderRadius: "100px", textDecoration: "none",
            }}>
            💬 WhatsApp
          </a>
        </div>

        {/* WA móvil */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="grad-bg nav-wa-mobile" style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em",
            textTransform: "uppercase", color: "#fff",
            padding: "0.5rem 0.9rem", borderRadius: "100px", textDecoration: "none",
          }}>
          💬 WA
        </a>
      </div>

      {/* Fila 2: pills de navegación */}
      <div style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "0.45rem 1.25rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
        overflowX: "auto", WebkitOverflowScrolling: "touch",
      }}>
        <span style={{
          fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "#ccc", whiteSpace: "nowrap", marginRight: "0.25rem",
          flexShrink: 0,
        }}>IR A</span>

        {NAV_PILLS.map((pill, i) => {
          const isActive = activeId === pill.id;

          /* Divisor antes de Elite */
          const showDiv = i === 3;

          let background: string, color: string, border: string;

          if (pill.tipo === "elite") {
            background = isActive ? "linear-gradient(90deg,#E8302A,#7B5EA7)" : "transparent";
            color = isActive ? "#fff" : "#555";
            border = isActive ? "none" : "1.5px solid rgba(0,0,0,0.15)";
          } else if (pill.tipo === "precios") {
            background = isActive ? "#111010" : "transparent";
            color = isActive ? "#fff" : "#555";
            border = isActive ? "none" : "1.5px solid rgba(0,0,0,0.15)";
          } else {
            // cursos
            background = isActive ? pill.color! : "transparent";
            color = isActive ? "#fff" : pill.color!;
            border = `1.5px solid ${pill.color}`;
          }

          return (
            <div key={pill.id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
              {showDiv && <div style={{ width: 1, height: 16, background: "rgba(0,0,0,0.12)" }} />}
              <a
                href={`#${pill.id}`}
                onClick={() => handleClick(pill.id)}
                style={{
                  fontSize: "0.68rem", fontWeight: 700, whiteSpace: "nowrap",
                  padding: "0.3rem 0.75rem", borderRadius: "100px",
                  background, color, border,
                  textDecoration: "none",
                  transition: "background 0.25s, color 0.25s, border-color 0.25s",
                  boxShadow: isActive && pill.tipo === "curso" ? `0 2px 10px ${pill.color}55` : "none",
                }}
              >
                {pill.label}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
