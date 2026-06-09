"use client";

import { useState } from "react";
import { PLANES, type Currency } from "@/lib/plans";

interface PreciosSectionProps {
  shopifyLink?: string;
}

const PLAN_COLORS = [
  { accent: "#5B6BB5", border: "rgba(91,107,181,0.25)",  tint: "rgba(91,107,181,0.06)"  },
  { accent: "#F47920", border: "rgba(244,121,32,0.25)",  tint: "rgba(244,121,32,0.06)"  },
  { accent: "#F9B233", border: "rgba(249,178,51,0.35)",  tint: "rgba(249,178,51,0.07)", destacado: true },
  { accent: "#7B5EA7", border: "rgba(123,94,167,0.25)",  tint: "rgba(123,94,167,0.06)"  },
];

const WA_BASE = "https://wa.me/51954655122";
const WA = `${WA_BASE}?text=${encodeURIComponent("Hola Camila 👋 quiero consultar sobre los paquetes de clases y precios")}`;
const WA_ELITE = `${WA_BASE}?text=${encodeURIComponent("Hola Camila 👋 me interesa tomar una clase 1 a 1 personalizada contigo 🙌")}`;
const SHOPIFY_PAQUETES = "https://camilagaraycoach.com/collections/all";
const SHOPIFY_ELITE = "https://camilagaraycoach.com/products/sesion-estrategica-1-1-con-camila-garay-clase-personalizada-en-vivo-60-min";

export default function PreciosSection({ shopifyLink }: PreciosSectionProps) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const planesVisibles = PLANES.slice(0, 4);

  const precio = (plan: (typeof PLANES)[0]) =>
    currency === "USD" ? `$${plan.precioUSD}` : `S/${plan.precioPEN}`;

  return (
    <section id="precios" style={{ padding: "var(--pad-y) var(--pad-x)", background: "#f7f7f7", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,178,51,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,94,167,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* ══ BLOQUE 1: CLASES GRUPALES ══ */}
        <div style={{ marginBottom: "4rem" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "linear-gradient(90deg,#F47920,#F9B233)",
            borderRadius: "100px", padding: "0.4rem 1rem",
            fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#fff", marginBottom: "1rem",
          }}>
            👥 Clases Grupales · Online
          </div>

          <h2 className="bebas" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#111010", marginBottom: "0.5rem" }}>
            Elige tu <span className="grad-text">paquete</span>
          </h2>
          <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "0.75rem" }}>
            3 cursos en vivo con el equipo CGC · PowerSplit · Arcos360 · Prep. Física
          </p>

          {/* Regalo */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "linear-gradient(90deg, rgba(249,178,51,0.15), rgba(123,94,167,0.15))",
            border: "1.5px solid rgba(249,178,51,0.4)",
            borderRadius: "100px", padding: "0.4rem 1rem",
            fontSize: "0.72rem", fontWeight: 700, color: "#111010",
            marginBottom: "2rem",
          }}>
            🎁 Desde 4 clases: <strong style={{ marginLeft: 4 }}>+100 clases grabadas de REGALO</strong>
          </div>

          {/* Toggle moneda */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              display: "inline-flex", background: "#e4e4e4",
              borderRadius: "100px", padding: "0.25rem",
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
          </div>

          {/* Cards */}
          <div className="precios-grid">
            {planesVisibles.map((plan, i) => {
              const col = PLAN_COLORS[i] || PLAN_COLORS[0];
              const conRegalo = plan.clases >= 4;

              return (
                <div key={plan.id} className={`card-hover anim anim-delay-${i + 1}`} style={{
                  background: plan.destacado ? "#111010" : "#fff",
                  border: `1.5px solid ${plan.destacado ? "transparent" : col.border}`,
                  borderRadius: "1.5rem", padding: "1.75rem",
                  position: "relative", overflow: "hidden",
                  boxShadow: plan.destacado ? "0 8px 40px rgba(0,0,0,0.18)" : "0 2px 16px rgba(0,0,0,0.06)",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: plan.destacado ? "var(--grad)" : col.accent, borderRadius: "1.5rem 1.5rem 0 0" }} />
                  {!plan.destacado && <div style={{ position: "absolute", inset: 0, background: col.tint, borderRadius: "1.5rem", pointerEvents: "none" }} />}

                  {plan.badge && (
                    <div style={{
                      position: "absolute", top: "1rem", right: "1rem",
                      fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "#fff",
                      background: "var(--grad)", padding: "0.25rem 0.65rem", borderRadius: "100px",
                    }}>⭐ {plan.badge}</div>
                  )}

                  <div style={{ position: "relative" }}>
                    {/* N° clases grande */}
                    <div style={{ marginBottom: "0.5rem" }}>
                      <span className="bebas" style={{ fontSize: "clamp(3.5rem,10vw,5rem)", lineHeight: 0.85, color: plan.destacado ? "#fff" : col.accent, display: "block" }}>
                        {plan.clases}
                      </span>
                      <span style={{ fontSize: "0.63rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: plan.destacado ? "rgba(255,255,255,0.45)" : col.accent }}>
                        {plan.clases === 1 ? "clase en vivo / mes" : "clases en vivo / mes"}
                      </span>
                    </div>

                    {/* Precio */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.2rem", marginTop: "0.75rem" }}>
                      <span className="bebas" style={{ fontSize: "2.5rem", lineHeight: 1, color: plan.destacado ? "#fff" : "#111010" }}>
                        {precio(plan)}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: plan.destacado ? "rgba(255,255,255,0.35)" : "#bbb" }}>/ {plan.vigencia}</span>
                    </div>

                    {plan.descuento && (
                      <p style={{ fontSize: "0.72rem", fontWeight: 700, color: plan.destacado ? "#F9B233" : col.accent, marginBottom: "1rem" }}>
                        💰 {plan.descuento}
                      </p>
                    )}

                    {conRegalo && (
                      <div style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        background: "linear-gradient(90deg, rgba(249,178,51,0.12), rgba(123,94,167,0.12))",
                        border: "1px solid rgba(249,178,51,0.35)",
                        borderRadius: "0.75rem", padding: "0.5rem 0.75rem", marginBottom: "1.25rem",
                      }}>
                        <span style={{ fontSize: "1rem" }}>🎁</span>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, color: plan.destacado ? "#F9B233" : "#a07a10", lineHeight: 1.3 }}>
                          +100 clases grabadas<br />
                          <span style={{ fontWeight: 400, opacity: 0.8 }}>incluidas de regalo</span>
                        </span>
                      </div>
                    )}

                    <a href={plan.shopifyLink} target="_blank" rel="noopener noreferrer" style={{
                      display: "block", width: "100%", textAlign: "center",
                      padding: "0.8rem", borderRadius: "100px",
                      fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.06em",
                      textTransform: "uppercase", textDecoration: "none",
                      background: plan.destacado ? "var(--grad)" : col.accent, color: "#fff",
                    }}>
                      Inscríbete ahora →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ver más paquetes */}
          <div style={{
            marginTop: "1.5rem", padding: "1.25rem 1.75rem",
            background: "#fff", border: "1.5px solid rgba(0,0,0,0.08)",
            borderRadius: "1.25rem",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: "0.88rem", color: "#111010", marginBottom: "0.2rem" }}>
                ¿Quieres más clases? Tenemos paquetes de 20 y 32 clases
              </p>
              <p style={{ fontSize: "0.75rem", color: "#888" }}>Hasta 50% de descuento · +100 grabaciones de regalo</p>
            </div>
            <a href={SHOPIFY_PAQUETES} target="_blank" rel="noopener noreferrer" style={{
              fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#fff", background: "var(--grad)", padding: "0.7rem 1.4rem",
              borderRadius: "100px", textDecoration: "none", whiteSpace: "nowrap",
            }}>
              Ver todos →
            </a>
          </div>

          {/* Yape */}
          <div style={{
            marginTop: "1rem", background: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
            border: "1px solid #bbf7d0", borderRadius: "1.25rem", padding: "1rem 1.5rem",
            display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap",
          }}>
            <span style={{ fontSize: "1.2rem" }}>📍</span>
            <div>
              <p style={{ fontWeight: 700, color: "#065f46", fontSize: "0.82rem", margin: 0 }}>¿Estás en Perú? Paga por Yape o Plin</p>
              <p style={{ fontSize: "0.75rem", color: "#047857", margin: 0 }}>Escríbenos por WhatsApp y te indicamos cómo.</p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              marginLeft: "auto", fontSize: "0.72rem", fontWeight: 700,
              color: "#065f46", border: "1px solid #86efac",
              padding: "0.4rem 0.9rem", borderRadius: "100px", textDecoration: "none", background: "#fff",
            }}>💬 WhatsApp</a>
          </div>
        </div>

        {/* ══ DIVISOR ══ */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
          <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ccc" }}>también ofrecemos</span>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.08)" }} />
        </div>

        {/* ══ BLOQUE 2: CLASE 1 A 1 ══ */}
        <div>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "linear-gradient(90deg,#E8302A,#7B5EA7)",
            borderRadius: "100px", padding: "0.4rem 1rem",
            fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#fff", marginBottom: "1rem",
          }}>
            ✦ Clase 1 a 1 · Solo con Camila
          </div>

          <h2 className="bebas" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#111010", marginBottom: "0.5rem" }}>
            Clase <span style={{ WebkitTextStroke: "2px #E8302A", color: "transparent" }}>privada</span><br />con Camila
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#888", marginBottom: "2rem" }}>
            Una hora contigo y Camila — diagnóstico, correcciones y plan personalizado.
          </p>

          {/* Card 1:1 */}
          <div style={{ maxWidth: 420 }}>
            <div className="card-hover" style={{
              background: "#111010", borderRadius: "1.5rem", padding: "2rem",
              position: "relative", overflow: "hidden",
              boxShadow: "0 12px 48px rgba(232,48,42,0.2)",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#E8302A,#7B5EA7)", borderRadius: "1.5rem 1.5rem 0 0" }} />

              <div style={{ position: "relative" }}>
                {/* Duración */}
                <div style={{ marginBottom: "0.75rem" }}>
                  <span className="bebas" style={{ fontSize: "clamp(3.5rem,10vw,5rem)", lineHeight: 0.85, color: "#fff", display: "block" }}>
                    60
                  </span>
                  <span style={{ fontSize: "0.63rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                    minutos · 1 clase en vivo
                  </span>
                </div>

                {/* Precio */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.25rem", marginTop: "0.75rem" }}>
                  <span className="bebas" style={{ fontSize: "3rem", lineHeight: 1, color: "#fff" }}>$60</span>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>USD / sesión</span>
                </div>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", marginBottom: "1.5rem" }}>
                  ≈ S/195 · Pago único
                </p>

                {/* Incluye */}
                <ul style={{ listStyle: "none", marginBottom: "1.75rem" }}>
                  {[
                    "✦ Clase en vivo 1 hora con Camila",
                    "✦ Diagnóstico y correcciones personalizadas",
                    "✦ Plan de entrenamiento a medida",
                    "✦ Online vía Zoom o presencial Lima",
                  ].map(item => (
                    <li key={item} style={{
                      fontSize: "0.8rem", padding: "0.4rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.55)",
                    }}>{item}</li>
                  ))}
                </ul>

                <a href={SHOPIFY_ELITE} target="_blank" rel="noopener noreferrer" style={{
                  display: "block", width: "100%", textAlign: "center",
                  padding: "0.9rem", borderRadius: "100px",
                  fontSize: "0.82rem", fontWeight: 800, letterSpacing: "0.06em",
                  textTransform: "uppercase", textDecoration: "none",
                  background: "linear-gradient(90deg,#E8302A,#7B5EA7)", color: "#fff",
                  boxShadow: "0 6px 24px rgba(232,48,42,0.4)",
                }}>
                  Reservar mi clase →
                </a>

                <p style={{ textAlign: "center", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", marginTop: "0.75rem" }}>
                  💬 ¿Dudas? <a href={WA_ELITE} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Escríbenos por WhatsApp</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
