"use client";

const TESTIMONIOS = [
  {
    nombre: "Valentina Ríos",
    pais: "🇨🇱 Chile",
    curso: "PowerSplit",
    cursoColor: "#F47920",
    quote: "Llegué sin poder tocar el piso y en 3 meses logré mi split sagital completo. Nunca pensé que a mis 28 años lo iba a conseguir. Las profes te corrigen en vivo, te ven, te ajustan. Vale mil veces lo que cuesta.",
    resultado: "Split sagital en 3 meses",
    avatar: "V",
    bg: "linear-gradient(135deg, #F47920, #F9B233)",
  },
  {
    nombre: "Sofía Mendoza",
    pais: "🇲🇽 México",
    curso: "Arcos360",
    cursoColor: "#E8302A",
    quote: "Tenía años intentando mejorar mi backbend sin resultados. Con Arcos360 entendí por qué no avanzaba: falta de técnica. El método de CGC es diferente a todo lo que había probado. Mi arco nunca se había visto tan bien.",
    resultado: "Backbend técnico en 6 semanas",
    avatar: "S",
    bg: "linear-gradient(135deg, #E8302A, #F47920)",
  },
  {
    nombre: "Isabella Torres",
    pais: "🇪🇸 España",
    curso: "Preparación Física",
    cursoColor: "#7B5EA7",
    quote: "Soy bailarina clásica y siempre me faltaba esa base atlética. Desde que empecé con CGC mis elevaciones mejoraron, mis saltos tienen más altura y siento el cuerpo más fuerte. Las clases en vivo con corrección en tiempo real hacen toda la diferencia.",
    resultado: "Elevaciones y saltos mejorados",
    avatar: "I",
    bg: "linear-gradient(135deg, #7B5EA7, #5B6BB5)",
  },
  {
    nombre: "María José Vega",
    pais: "🇺🇸 EE.UU.",
    curso: "PowerSplit",
    cursoColor: "#F47920",
    quote: "Llevo 4 meses en CGC Method y ya voy por mi tercer paquete. La comunidad es increíble, las profes son exigentes pero súper cariñosas. Cada semana veo mi progreso y eso me mantiene motivada. No lo cambio por nada.",
    resultado: "4 meses · 3er paquete renovado",
    avatar: "M",
    bg: "linear-gradient(135deg, #F9B233, #F47920)",
  },
  {
    nombre: "Camila Bertoni",
    pais: "🇦🇷 Argentina",
    curso: "Arcos360",
    cursoColor: "#E8302A",
    quote: "Al principio dudé porque era online. Pero la clase es tan completa, te ven y te corrigen tanto que me olvidé que no era presencial. Incluso me sirvió más que clases presenciales que tomé antes. Recomendado al 100%.",
    resultado: "Mejor experiencia que presencial",
    avatar: "C",
    bg: "linear-gradient(135deg, #E8302A, #7B5EA7)",
  },
  {
    nombre: "Luciana Paredes",
    pais: "🇵🇪 Perú",
    curso: "Preparación Física",
    cursoColor: "#7B5EA7",
    quote: "Empecé con el paquete de 8 clases por probar y me enamoré. Ahora voy por las 20 clases. El nivel sube progresivo, nunca sientes que es demasiado ni muy fácil. Mi cuerpo cambió visualmente en pocas semanas.",
    resultado: "Cambio visible en pocas semanas",
    avatar: "L",
    bg: "linear-gradient(135deg, #5B6BB5, #7B5EA7)",
  },
];

export default function TestimoniosSection() {
  return (
    <section style={{ background: "#111010", padding: "var(--pad-y) var(--pad-x)", overflow: "hidden", position: "relative" }}>
      {/* Orbs decorativos */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,48,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(91,107,181,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "1.25rem",
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
          }}>
            ⭐⭐⭐⭐⭐ &nbsp; +500 alumnas lo confirman
          </div>
          <h2 className="bebas anim" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#fff", marginBottom: "0.75rem" }}>
            Ellas ya lo <span className="grad-text">lograron</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem", maxWidth: 480 }}>
            Más de 500 alumnas en 10 países han transformado su cuerpo con el método CGC. Aquí van sus palabras.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div style={{ gap: "1.25rem" }} className="testimonios-grid">
          {TESTIMONIOS.map((t, i) => (
            <div key={i} className={`anim anim-delay-${(i % 3) + 1}`} style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.25rem",
              padding: "1.75rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Comillas decorativas */}
              <div style={{
                position: "absolute", top: "1rem", right: "1.25rem",
                fontSize: "4rem", lineHeight: 1, color: "rgba(255,255,255,0.04)",
                fontFamily: "Georgia, serif", userSelect: "none",
              }}>"</div>

              {/* Avatar + nombre */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: t.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", fontWeight: 800, color: "#fff",
                  flexShrink: 0,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.88rem", marginBottom: "0.1rem" }}>{t.nombre}</p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{t.pais}</p>
                </div>
                {/* Estrellas */}
                <div style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#F9B233", letterSpacing: "0.05em" }}>★★★★★</div>
              </div>

              {/* Quote */}
              <p style={{
                fontSize: "0.83rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                position: "relative",
              }}>
                "{t.quote}"
              </p>

              {/* Resultado + curso */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{
                  fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.12em",
                  textTransform: "uppercase", color: t.cursoColor,
                  background: `${t.cursoColor}18`,
                  border: `1px solid ${t.cursoColor}35`,
                  padding: "0.3rem 0.7rem", borderRadius: "100px",
                }}>
                  {t.curso}
                </div>
                <div style={{
                  fontSize: "0.68rem", fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                }}>
                  ✓ {t.resultado}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div style={{
          marginTop: "3rem",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "1.25rem",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}>
          <div>
            <p className="bebas" style={{ fontSize: "1.6rem", color: "#fff", lineHeight: 1, marginBottom: "0.4rem" }}>
              ¿Serás la próxima en <span className="grad-text">transformarse</span>?
            </p>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
              Únete a más de 500 alumnas de todo el mundo
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="#cursos"
              className="grad-bg"
              style={{
                fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: "#fff",
                padding: "0.85rem 1.75rem", borderRadius: "100px",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              Empezar ahora →
            </a>
            <a
              href={`https://wa.me/51954655122?text=${encodeURIComponent("Hola Camila 👋 me interesa saber más sobre sus clases online")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.78rem", fontWeight: 600,
                color: "#25D366", border: "1.5px solid #25D366",
                padding: "0.85rem 1.5rem", borderRadius: "100px",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              💬 Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
