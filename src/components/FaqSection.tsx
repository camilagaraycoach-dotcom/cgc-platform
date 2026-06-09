"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Necesito experiencia previa para tomar las clases?",
    a: "No. Nuestros programas están diseñados para todos los niveles — desde principiantes absolutos hasta avanzados. Al inscribirte puedes indicar tu nivel y la profe adapta las correcciones a ti.",
  },
  {
    q: "¿Cómo funcionan las clases en vivo? ¿Me ven a mí?",
    a: "Las clases son por Zoom con cámara encendida. Eso es lo que hace la diferencia: las profes del equipo CGC te ven en tiempo real, te corrigen la postura, te ajustan la técnica. No es un video pregrabado — es una clase real contigo adentro.",
  },
  {
    q: "¿Puedo tomar clases si estoy fuera de Perú?",
    a: "Sí, el 90% de nuestras alumnas son internacionales. Tenemos alumnas en Chile, México, Argentina, España, EE.UU., Colombia y más. Las clases son por Zoom y los horarios están pensados para distintas zonas horarias.",
  },
  {
    q: "¿Qué pasa si no puedo asistir a una clase?",
    a: "Todas las clases en vivo quedan grabadas y están disponibles en tu biblioteca. Además, con cualquier paquete de 4 clases o más recibes acceso a +100 clases grabadas de regalo que puedes ver en cualquier momento.",
  },
  {
    q: "¿Cuánto tiempo necesito por semana?",
    a: "Con 2 a 3 clases por semana (1 hora cada una) ya verás resultados en las primeras 4 semanas. El paquete de 8 clases por mes es el más elegido porque permite esa frecuencia ideal.",
  },
  {
    q: "¿Cuál es la diferencia entre las clases grupales y la clase 1 a 1 con Camila?",
    a: "Las clases grupales son dictadas por el equipo CGC — entrenadores certificados directamente por Camila, con la misma metodología. La clase 1 a 1 es exclusivamente contigo y Camila: ella te hace el diagnóstico, diseña tu plan personalizado y te da correcciones únicas para tu cuerpo y objetivo.",
  },
  {
    q: "¿Cómo pago? ¿Aceptan Yape o transferencia?",
    a: "Puedes pagar con tarjeta de crédito/débito a través de nuestra tienda Shopify (disponible para todo el mundo). Si estás en Perú también puedes pagar por Yape o Plin — solo escríbenos por WhatsApp y te explicamos cómo.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff", padding: "var(--pad-y) var(--pad-x)" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "0.75rem" }}>
            Preguntas frecuentes
          </p>
          <h2 className="bebas anim" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 0.9, color: "#111010" }}>
            Todo lo que <span className="grad-text">necesitas saber</span>
          </h2>
        </div>

        {/* Acordeón */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`anim anim-delay-${(i % 4) + 1}`}
                style={{
                  border: `1.5px solid ${isOpen ? "rgba(232,48,42,0.25)" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: "1rem",
                  overflow: "hidden",
                  background: isOpen ? "rgba(232,48,42,0.02)" : "#fff",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    background: "transparent", border: "none", cursor: "pointer",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#111010", fontSize: "0.92rem", lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: 28, height: 28, borderRadius: "50%",
                    background: isOpen ? "var(--grad)" : "rgba(0,0,0,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? "#fff" : "#666",
                    fontSize: "1rem", fontWeight: 700,
                    transition: "all 0.2s",
                    transform: isOpen ? "rotate(45deg)" : "none",
                  }}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 1.5rem 1.5rem" }}>
                    <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA final */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1rem" }}>
            ¿Tienes otra pregunta? Escríbenos directamente.
          </p>
          <a
            href={`https://wa.me/51954655122?text=${encodeURIComponent("Hola Camila 👋 tengo una pregunta sobre las clases")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#25D366", color: "#fff",
              fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em",
              padding: "0.85rem 2rem", borderRadius: "100px", textDecoration: "none",
            }}
          >
            💬 Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
