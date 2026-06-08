"use client";

import { useState } from "react";
import { PLANES, type Currency } from "@/lib/plans";

interface PreciosSectionProps {
  cursoId?: string;
  shopifyLink?: string;
}

// Color palette per plan (accent, bg tint, text)
const PLAN_COLORS = [
  { accent: "#5B6BB5", tint: "rgba(91,107,181,0.07)", border: "rgba(91,107,181,0.2)", label: "#5B6BB5" },   // 1 clase — blue
  { accent: "#F47920", tint: "rgba(244,121,32,0.07)",  border: "rgba(244,121,32,0.2)",  label: "#F47920" },  // 4 clases — orange
  { accent: "var(--grad)", tint: "rgba(248,179,51,0.08)", border: "rgba(248,179,51,0.3)", label: "#F9B233", destacado: true }, // 8 — gold/rainbow
  { accent: "#7B5EA7", tint: "rgba(123,94,167,0.07)", border: "rgba(123,94,167,0.2)",  label: "#7B5EA7" },  // 12 — purple
  { accent: "var(--grad)", tint: "rgba(232,48,42,0.06)", border: "rgba(232,48,42,0.25)", label: "#E8302A", destacado: true }, // 20 — red/rainbow
  { accent: "#111010", tint: "rgba(17,10,10,0.04)",   border: "rgba(17,10,10,0.12)",   label: "#111010" },  // 32 — dark
];

export default function PreciosSection({ shopifyLink }: PreciosSectionProps) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const precio = (plan: (typeof PLANES)[0]) =>
    currency === "USD" ? `$${plan.precioUSD}` : `S/${plan.precioPEN}`;

  const porClase = (plan: (typeof PLANES)[0]) =>
    currency === "USD"
      ? `$${plan.precioPorClaseUSD.toFixed(2)}`
      : `S/${plan.precioPorClasePEN.toFixed(2)}`;

  return (
    <section id="precios" style={{ padding: "6rem 2.5rem", background: "#f7f7f7", position: "relative", overflow: "hidden" }}>
      {/* Decorative orbs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,178,51,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,94,167,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "0.75rem" }}>
            Clases grupales en vivo con Camila y su equipo
          </p>
          <h2 className="bebas" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 0.9, color: "#111010", marginBottom: "0.5rem" }}>
            Elige tu <span className="grad-text">paquete</span>
          </h2>
          <p style={{ color: "#888", fontSize: "0.95rem" }}>
            Acceso a los 3 cursos · +100 grabaciones incluidas · Pago seguro
          </p>
        </div>

        {/* Toggle */}
        <div style={{
          display: "inline-flex", background: "#e4e4e4",
          borderRadius: "100px", padding: "0.25rem", marginBottom: "3rem",
        }}>
          {(["USD", "PEN"] as Currency[]).map((c) => (
            <button key={c} onClick={() => setCurrency(c)} style={{
              padding: "0.5rem 1.5rem", borderRadius: "100px", border: "none",
              cursor: "pointer", fontSize: "0.8rem", fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
              transition: "all 0.2s",
              background: currency === c ? "#fff" : "transparent",
              color: currency === c ? "#111010" : "#999",
              boxShadow: currency === c ? "0 1px 8px rgba(0,0,0,0.12)" : "none",
            }}>
              {c === "USD" ? "💵 USD ($)" : "🇵🇪 Soles (S/)"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {PLANES.map((plan, i) => {
            const col = PLAN_COLORS[i] || PLAN_COLORS[0];
            const isGrad = col.accent === "var(--grad)";

            return (
              <div key={plan.id} className="card-hover" style={{
                background: plan.destacado ? "#111010" : "#fff",
                border: `1.5px solid ${plan.destacado ? "transparent" : col.border}`,
                borderRadius: "1.5rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: plan.destacado
                  ? "0 8px 40px rgba(0,0,0,0.18)"
                  : `0 2px 16px ${col.tint.replace("0.07", "0.18").replace("0.06", "0.18")}`,
              }}>

                {/* Top color bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: isGrad ? "var(--grad)" : col.accent,
                  borderRadius: "1.5rem 1.5rem 0 0",
                }} />

                {/* Background tint for non-highlighted */}
                {!plan.destacado && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: col.tint,
                    borderRadius: "1.5rem",
                    pointerEvents: "none",
                  }} />
                )}

                {plan.badge && (
                  <div style={{
                    position: "absolute", top: "1.25rem", right: "1.25rem",
                    fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "#fff",
                    background: "var(--grad)", padding: "0.3rem 0.75rem", borderRadius: "100px",
                  }}>
                    ⭐ {plan.badge}
                  </div>
                )}

                <div style={{ position: "relative" }}>
                  {/* Clases label */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em",
                    textTransform: "uppercase", marginBottom: "0.75rem",
                    color: plan.destacado ? "rgba(255,255,255,0.5)" : col.label,
                  }}>
                    <span style={{
                      display: "inline-block", width: 6, height: 6, borderRadius: "50%",
                      background: isGrad ? "var(--grad)" : col.accent,
                    }} />
                    {plan.clases} {plan.clases === 1 ? "clase" : "clases"} en vivo / mes
                  </div>

                  {/* Price */}
                  <div style={{ marginBottom: "0.25rem" }}>
                    <span className="bebas" style={{
                      fontSize: "3.75rem", lineHeight: 1,
                      color: plan.destacado ? "#fff" : "#111010",
                    }}>
                      {precio(plan)}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.78rem", color: plan.destacado ? "rgba(255,255,255,0.4)" : "#aaa", marginBottom: "1.25rem" }}>
                    {porClase(plan)} por clase · {plan.vigencia}
                  </p>

                  {plan.descuento && (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      fontSize: "0.73rem", fontWeight: 700,
                      color: plan.destacado ? "#F9B233" : col.label,
                      background: plan.destacado ? "rgba(249,178,51,0.12)" : col.tint,
                      border: `1px solid ${plan.destacado ? "rgba(249,178,51,0.3)" : col.border}`,
                      padding: "0.35rem 0.9rem", borderRadius: "100px", marginBottom: "1.25rem",
                    }}>
                      💰 {plan.descuento}
                    </div>
                  )}

                  <ul style={{ listStyle: "none", marginBottom: "1.75rem" }}>
                    {[
                      "✓ Acceso a los 3 cursos",
                      "🎁 +100 grabaciones incluidas",
                      ...(plan.renovacion ? [`⚡ ${plan.renovacion}`] : []),
                    ].map((item) => (
                      <li key={item} style={{
                        fontSize: "0.82rem", padding: "0.35rem 0",
                        borderBottom: `1px solid ${plan.destacado ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}`,
                        color: plan.destacado ? "rgba(255,255,255,0.55)" : "#666",
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href={shopifyLink || "#"} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "block", width: "100%", textAlign: "center",
                      padding: "0.85rem", borderRadius: "100px",
                      fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.08em",
                      textTransform: "uppercase", textDecoration: "none",
                      transition: "opacity 0.2s",
                      ...(plan.destacado
                        ? { background: "var(--grad)", color: "#fff", border: "none" }
                        : isGrad
                          ? { background: "var(--grad)", color: "#fff", border: "none" }
                          : { background: col.accent, color: "#fff", border: "none" }
                      ),
                    }}>
                    Inscríbete ahora →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Yape */}
        <div style={{
          marginTop: "2.5rem",
          background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
          border: "1px solid #bbf7d0",
          borderRadius: "1.25rem", padding: "1.25rem 2rem",
          maxWidth: 480, textAlign: "center",
        }}>
          <p style={{ fontWeight: 700, color: "#065f46", fontSize: "0.85rem", marginBottom: "0.25rem" }}>
            📍 ¿Estás en Perú?
          </p>
          <p style={{ fontSize: "0.8rem", color: "#047857" }}>
            También puedes pagar por <strong>Yape o Plin</strong>. Escríbenos por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
