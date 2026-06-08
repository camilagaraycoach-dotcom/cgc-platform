"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreciosSection from "@/components/PreciosSection";
import Image from "next/image";
import { useState, useRef } from "react";

const WA = "https://wa.me/51954655122";
const SHOPIFY = {
  powersplit: "https://camilagaraycoach.com/products/powersplit",
  arcos360:   "https://camilagaraycoach.com/products/arcos360",
  prepa:      "https://camilagaraycoach.com/products/prepa-fisica",
  elite:      "https://camilagaraycoach.com/products/elite",
  paquetes:   "https://camilagaraycoach.com/collections/paquetes",
};
const LANDING = {
  powersplit: "https://camilagaraycoach-dotcom.github.io/cgcmethod/powersplit.html",
  arcos360:   "https://camilagaraycoach-dotcom.github.io/cgcmethod/arcos360.html",
  prepa:      "https://camilagaraycoach-dotcom.github.io/cgcmethod/cgc-prep-fisica.html",
  elite:      "https://camilagaraycoach-dotcom.github.io/cgcmethod/cgc-1on1.html",
};

const CURSOS = [
  {
    num: "01", id: "powersplit", nombre: "PowerSplit", p1: "Power", p2: "Split", color: "#F47920",
    tagline: "Split sagital. Split frontal. Sin importar tu nivel.",
    desc: "Elasticidad + fuerza = progreso real y sostenible. Para todas las edades, desde casa, sin equipo.",
    puntos: ["Splits sagital y frontal", "Elasticidad con fuerza real", "Todos los niveles", "Desde casa, sin equipo"],
    img: "/img/img5896.jpg", imgPos: "50% 65%", video: "/video/powersplit.mp4", lado: "izq" as const,
    shopify: SHOPIFY.powersplit, landing: LANDING.powersplit,
  },
  {
    num: "02", id: "arcos360", nombre: "Arcos360", p1: "Arcos", p2: "360", color: "#E8302A",
    tagline: "Técnica. Fuerza. Método. Tu arco empieza aquí.",
    desc: "Backbend completo, puentes y movilidad espinal profunda con progresión segura y técnica correcta.",
    puntos: ["Backbend y puente completo", "Técnica correcta desde el inicio", "Movilidad espinal profunda", "Progresión segura"],
    img: "/img/arcos-gym.png", imgPos: "center bottom", video: "/video/arcos360.mp4", lado: "der" as const,
    shopify: SHOPIFY.arcos360, landing: LANDING.arcos360,
  },
  {
    num: "03", id: "prepa-fisica", nombre: "Preparación Física", p1: "Preparación", p2: "Física", color: "#7B5EA7",
    tagline: "Prepara el cuerpo que hace posibles los pasos.",
    desc: "Para bailarines, gimnastas y artistas del movimiento. No enseñamos pasos — construimos el cuerpo que los hace posibles.",
    puntos: ["Elevaciones y arabesque", "Saltos y explosividad", "Fuerza de espalda", "Giros y equilibrio"],
    img: "/img/prepa-fisica.jpg", imgPos: "center center", video: "/video/prepa-fisica.mp4", lado: "izq" as const,
    shopify: SHOPIFY.prepa, landing: LANDING.prepa,
  },
];

/* ── Video card con play/pause toggle ── */
function CursoVideo({ curso }: { curso: typeof CURSOS[0] }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      onClick={toggle}
      style={{
        position: "relative", borderRadius: "1.5rem", overflow: "hidden",
        aspectRatio: "4/5", boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        cursor: "pointer", background: "#111010",
      }}
    >
      {/* Thumbnail when paused */}
      {!playing && (
        <Image
          src={curso.img} alt={curso.nombre} fill
          sizes="(max-width:768px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: curso.imgPos }}
        />
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src={curso.video}
        playsInline
        loop
        muted={false}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          opacity: playing ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Overlay oscuro cuando paused */}
      {!playing && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }} />
      )}

      {/* Play / Pause button */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 64, height: 64, borderRadius: "50%",
        background: "rgba(255,255,255,0.95)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        transition: "opacity 0.2s, transform 0.2s",
        opacity: playing ? 0 : 1,
        pointerEvents: "none",
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill={curso.color}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Pause icon al hover cuando está reproduciendo */}
      {playing && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
        >
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
        </div>
      )}

      {/* Chip CURSO 0X */}
      <div className="bebas grad-bg" style={{
        position: "absolute", bottom: "1.25rem", left: "1.25rem",
        fontSize: "0.75rem", letterSpacing: "0.15em", color: "#fff",
        padding: "0.4rem 1rem", borderRadius: "100px",
        opacity: playing ? 0 : 1, transition: "opacity 0.3s",
      }}>
        CURSO {curso.num}
      </div>

      {/* "Toca para ver" label */}
      {!playing && (
        <div style={{
          position: "absolute", bottom: "1.25rem", right: "1.25rem",
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
        }}>
          ▶ Ver video
        </div>
      )}
    </div>
  );
}

/* ── Video thumbnail Elite 1:1 ── */
function EliteVideoThumb() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };
  return (
    <div onClick={toggle} className="elite-video" style={{
      gridColumn: "1 / 3", position: "relative", borderRadius: "0.75rem",
      overflow: "hidden", aspectRatio: "1/1", cursor: "pointer", background: "#111010",
    }}>
      {!playing && (
        <Image src="/elite/elite-foto-06.jpg" alt="Clase Elite 1:1" fill sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }} />
      )}
      <video ref={ref} src="/elite/elite-video-01.mp4" playsInline loop
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: playing ? 1 : 0, transition: "opacity 0.3s" }} />
      {!playing && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,0.95)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)", opacity: playing ? 0 : 1, transition: "opacity 0.2s", pointerEvents: "none",
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#F9B233"><path d="M8 5v14l11-7z"/></svg>
      </div>
      {!playing && (
        <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
          <div className="bebas" style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "#F9B233" }}>▶ CLASE 1 A 1 EN VIVO</div>
        </div>
      )}
    </div>
  );
}

/* ── Video thumbnail de clases ── */
function ClaseVideoThumb() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play(); setPlaying(true); }
  };

  return (
    <div onClick={toggle} className="video-grande" style={{
      gridColumn: "1 / 3", gridRow: "1 / 3",
      position: "relative", borderRadius: "1rem", overflow: "hidden",
      cursor: "pointer", background: "#111010",
    }}>
      {!playing && (
        <Image src="/clases/clase-01.jpg" alt="Clase en vivo CGC" fill sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center top" }} />
      )}
      <video ref={ref} src="/clases/clase-video-01.mp4" playsInline loop
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: playing ? 1 : 0, transition: "opacity 0.3s",
        }}
      />
      {!playing && (
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)" }} />
      )}
      {/* Play button */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 72, height: 72, borderRadius: "50%",
        background: "rgba(255,255,255,0.95)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        opacity: playing ? 0 : 1, transition: "opacity 0.2s",
        pointerEvents: "none",
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#E8302A"><path d="M8 5v14l11-7z"/></svg>
      </div>
      {/* Label */}
      {!playing && (
        <div style={{
          position: "absolute", bottom: "1rem", left: "1rem", right: "1rem",
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        }}>
          <div>
            <div className="bebas grad-bg" style={{
              display: "inline-block", fontSize: "0.7rem", letterSpacing: "0.15em",
              color: "#fff", padding: "0.3rem 0.8rem", borderRadius: "100px", marginBottom: "0.35rem",
            }}>EN VIVO · ZOOM</div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              Así son nuestras clases grupales
            </p>
          </div>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>▶ VER</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ background: "#fff", color: "#111010" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: "#0a0808" }}>
        {/* Foto fondo */}
        <div className="hero-foto-wrap" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/img/hero.jpg" alt="Camila Garay — CGC Method" fill
            className="hero-img" priority />
        </div>
        {/* Gradientes dramáticos */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(10,8,8,0.45) 0%, rgba(10,8,8,0.05) 30%, rgba(10,8,8,0.8) 65%, rgba(10,8,8,0.98) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(90deg, rgba(10,8,8,0.6) 0%, transparent 55%)" }} />
        {/* Barra superior */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--grad)", zIndex: 4 }} />

        {/* Label top */}
        <div style={{ position: "relative", zIndex: 2, padding: "7rem var(--pad-x) 0" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem",
            fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)" }}>
            <span style={{ width: 18, height: 1, background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
            Flexibility · Acro · Dance Technique
            <span style={{ width: 18, height: 1, background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="hero-content" style={{ marginTop: "auto" }}>
          {/* Título GIGANTE */}
          <h1 className="bebas" style={{
            fontSize: "clamp(5.5rem, 24vw, 13rem)",
            lineHeight: 0.83, color: "#fff", marginBottom: "0.2em", letterSpacing: "-0.01em",
          }}>
            TRANS<br />
            <span className="grad-text">FORMA</span><br />
            TU<br />
            <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.25)", color: "transparent" }}>CUERPO</span>
          </h1>

          {/* Stats rápidos */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1.25rem",
            margin: "1.5rem 0 1.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            flexWrap: "wrap",
          }}>
            {[{ num: "+500", label: "alumnas" }, { num: "+10", label: "países" }, { num: "100+", label: "grabaciones" }].map((s, i) => (
              <div key={s.num} style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <div>
                  <div className="bebas" style={{ fontSize: "1.5rem", color: "#fff", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.38)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
                {i < 2 && <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
          </div>

          {/* Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
            {["🌍 Online · todo el mundo", "📍 Presencial · Lima"].map(p => (
              <span key={p} style={{
                fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
                padding: "0.4rem 0.9rem", borderRadius: "100px",
              }}>{p}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="#cursos" className="grad-bg" style={{
              fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
              color: "#fff", padding: "1rem 2.25rem", borderRadius: "100px", textDecoration: "none",
              boxShadow: "0 8px 32px rgba(232,48,42,0.5)",
            }}>
              Quiero inscribirme →
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              fontSize: "0.8rem", fontWeight: 600, color: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(255,255,255,0.18)", padding: "1rem 1.5rem",
              borderRadius: "100px", textDecoration: "none",
            }}>
              💬 Escríbenos
            </a>
          </div>

          {/* Scroll hint */}
          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.12)" }} />
            <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
          </div>
        </div>
      </section>

      {/* ── EQUIPO CGC ── */}
      <section className="section-pad" style={{ background: "#111010", position: "relative", overflow: "hidden" }}>
        {/* Orbs decorativos */}
        <div style={{ position: "absolute", top: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,121,32,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, right: -40, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,94,167,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          {/* Header */}
          <div className="grid-equipo">
            <div>
              {/* Badge CLASES GRUPALES */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#fff",
                background: "linear-gradient(135deg, #F47920, #F9B233)",
                padding: "0.65rem 1.4rem", borderRadius: "100px", marginBottom: "1.5rem",
                boxShadow: "0 4px 20px rgba(244,121,32,0.4)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                Clases grupales · Equipo CGC
              </div>
              <h2 className="bebas" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#fff", marginBottom: "1rem" }}>
                El <span className="grad-text">equipo CGC</span><br />está contigo
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 380 }}>
                Las clases grupales son dictadas por <strong style={{ color: "#fff" }}>entrenadores altamente capacitados</strong> del equipo CGC — seleccionados y formados directamente por Camila Garay para garantizar la misma calidad, metodología y resultados.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { num: "+10", label: "años de\nexperiencia", color: "#F47920" },
                { num: "+500", label: "alumnas\nformadas", color: "#F9B233" },
                { num: "+10", label: "países\nalcanzados", color: "#7B5EA7" },
                { num: "100%", label: "metodología\nCGC Method", color: "#5B6BB5" },
              ].map(s => (
                <div key={s.num} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "1rem", padding: "1.5rem",
                  borderTop: `3px solid ${s.color}`,
                }}>
                  <div className="bebas" style={{ fontSize: "2.5rem", color: s.color, lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: "0.35rem", whiteSpace: "pre-line", lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards del equipo */}
          <div className="grid-3">
            {[
              {
                icon: "🎓",
                titulo: "Formación rigurosa",
                desc: "Cada coach del equipo es entrenado y certificado directamente por Camila Garay bajo la metodología CGC Method.",
                color: "#F47920",
              },
              {
                icon: "📋",
                titulo: "Misma metodología",
                desc: "Todas las clases siguen el mismo sistema de progresión, técnica y seguridad que Camila aplica en sus sesiones personales.",
                color: "#F9B233",
              },
              {
                icon: "🌍",
                titulo: "Online o presencial en Lima",
                desc: "Clases por Zoom para todo el mundo, o en persona si estás en Lima, Perú. Tu coach te ve, te corrige y adapta a tu nivel.",
                color: "#7B5EA7",
              },
            ].map(card => (
              <div key={card.titulo} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "1.25rem", padding: "1.75rem",
                borderLeft: `3px solid ${card.color}`,
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{card.icon}</div>
                <h4 style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: "0.5rem" }}>{card.titulo}</h4>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Nota Camila */}
          <div style={{
            marginTop: "2rem",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "1.25rem", padding: "1.5rem 2rem",
            display: "flex", alignItems: "center", gap: "1rem",
          }}>
            <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>💡</div>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              <strong style={{ color: "#F9B233" }}>¿Quieres entrenar directamente con Camila?</strong>{" "}
              Las clases <strong style={{ color: "#fff" }}>1 a 1 son exclusivamente con ella</strong>.
              {" "}
              <a href="#elite" style={{ color: "#F9B233", textDecoration: "underline" }}>Ver CGC Elite →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── GALERÍA CLASES EN VIVO ── */}
      <section className="section-pad" style={{ background: "#f7f7f7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "0.75rem" }}>
              Así se viven nuestras clases
            </p>
            <h2 className="bebas" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#111010" }}>
              Clases en vivo <span className="grad-text">por Zoom</span>
            </h2>
          </div>

          {/* Grid fotos + video destacado */}
          <div className="grid-galeria">
            <ClaseVideoThumb />
            {["/clases/clase-01.jpg", "/clases/clase-02.jpg", "/clases/clase-03.jpg", "/clases/clase-04.jpg",
              "/clases/clase-05.jpg", "/clases/clase-06.jpg", "/clases/clase-07.jpg", "/clases/clase-08.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", minHeight: 160 }}>
                <Image src={src} alt={`Clase en vivo ${i+1}`} fill sizes="(max-width:768px) 50vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
              Únete a nuestra comunidad de más de 500 alumnas en todo el mundo
            </p>
            <a href="#cursos" className="grad-bg" style={{
              display: "inline-block", fontSize: "0.82rem", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#fff", padding: "0.9rem 2rem", borderRadius: "100px", textDecoration: "none",
            }}>
              Quiero unirme →
            </a>
          </div>
        </div>
      </section>

      {/* ── CURSOS ── fondo claro + videos */}
      <section id="cursos" className="section-pad" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            {/* Etiqueta de sección */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#fff", background: "linear-gradient(135deg, #F47920, #F9B233)",
                padding: "0.55rem 1.25rem", borderRadius: "100px",
                boxShadow: "0 4px 16px rgba(244,121,32,0.35)",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                Clases grupales
              </div>
              <span style={{ fontSize: "0.72rem", color: "#bbb", fontWeight: 500 }}>Dictadas por el equipo CGC · Entrenadores certificados</span>
            </div>
            <h2 className="bebas" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 0.9, color: "#111010" }}>
              Elige tu <span className="grad-text">programa</span>
            </h2>
          </div>

          {CURSOS.map((curso, i) => (
            <div key={curso.id} className="grid-2"
              style={{ marginBottom: i < CURSOS.length - 1 ? "5rem" : 0 }}>
              {/* Video lado izquierdo */}
              {curso.lado === "izq" && <CursoVideo curso={curso} />}

              {/* Texto */}
              <div className={curso.lado === "der" ? "curso-text-der" : ""}>
                <h3 className="bebas" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9, color: "#111010", marginBottom: "0.75rem" }}>
                  {curso.p1}<span style={{ color: curso.color }}>{curso.p2}</span>
                </h3>
                <p style={{ fontWeight: 600, color: curso.color, fontSize: "1rem", marginBottom: "0.75rem" }}>
                  {curso.tagline}
                </p>
                <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 420, marginBottom: "1.5rem" }}>
                  {curso.desc}
                </p>
                <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                  {curso.puntos.map(p => (
                    <li key={p} style={{
                      fontSize: "0.85rem", color: "#555", padding: "0.35rem 0",
                      borderBottom: "1px solid #f0f0f0", display: "flex", gap: "0.6rem", alignItems: "center",
                    }}>
                      <span style={{ color: curso.color, fontWeight: 800 }}>→</span> {p}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a href={curso.shopify} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                    color: "#fff", padding: "0.8rem 1.8rem", borderRadius: "100px", textDecoration: "none",
                    background: curso.color,
                  }}>
                    Inscribirme →
                  </a>
                  <a href={curso.landing} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: "0.78rem", fontWeight: 600, color: "#666",
                    border: "1px solid #ddd", padding: "0.8rem 1.5rem",
                    borderRadius: "100px", textDecoration: "none",
                  }}>
                    Ver más →
                  </a>
                </div>
              </div>

              {/* Video lado derecho */}
              {curso.lado === "der" && <div className="curso-img-der"><CursoVideo curso={curso} /></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE / FOTO SALTO ── */}
      <section className="quote-section">
        <Image src="/img/salto.jpg" alt="CGC Method" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(17,10,10,0.88) 0%, rgba(17,10,10,0.45) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 var(--pad-x)" }}>
          <div style={{ maxWidth: 600 }}>
            <p className="bebas grad-text" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4rem)", lineHeight: 1.05, marginBottom: "1rem" }}>
              "Tu cuerpo puede más<br />de lo que crees"
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              — Camila Garay · CGC Method
            </p>
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <PreciosSection shopifyLink={SHOPIFY.paquetes} />

      {/* ── ELITE ── */}
      <section id="elite" className="section-pad" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header + texto */}
          <div className="grid-elite">
            <div>
              {/* Badge CLASES 1 A 1 */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.75rem",
                fontSize: "0.78rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#fff",
                background: "linear-gradient(135deg, #E8302A, #7B5EA7)",
                padding: "0.65rem 1.4rem", borderRadius: "100px", marginBottom: "0.75rem",
                boxShadow: "0 4px 20px rgba(232,48,42,0.35)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                Clases 1 a 1 · Solo conmigo
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#F9B233", background: "rgba(249,178,51,0.1)", border: "1px solid rgba(249,178,51,0.3)",
                padding: "0.35rem 0.9rem", borderRadius: "100px", marginBottom: "1.25rem",
              }}>
                🏆 Solo 3 cupos mensuales
              </div>
              <h2 className="bebas" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 0.9, color: "#111010", marginBottom: "1rem" }}>
                CGC <span className="grad-text">Elite</span><br />Clases 1 a 1
              </h2>
              <p style={{ color: "#666", fontSize: "1rem", lineHeight: 1.7, maxWidth: 420, marginBottom: "0.75rem" }}>
                Entrenamiento <strong style={{ color: "#111010" }}>exclusivamente con Camila Garay</strong>.
                Seguimiento individual, informes de progreso y plan 100% personalizado para tu objetivo.
              </p>
              {/* Online vs Presencial */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{
                  background: "#f7f7f7", border: "1.5px solid #eee",
                  borderRadius: "1rem", padding: "1rem 1.25rem",
                }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>🌍</div>
                  <p style={{ fontWeight: 700, color: "#111010", fontSize: "0.85rem", marginBottom: "0.2rem" }}>Online · Todo el mundo</p>
                  <p style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.5 }}>Clases por Zoom desde cualquier país. Perú, Chile, México, España, EE.UU. y más.</p>
                </div>
                <div style={{
                  background: "linear-gradient(135deg, rgba(232,48,42,0.05), rgba(249,178,51,0.08))",
                  border: "1.5px solid rgba(232,48,42,0.15)",
                  borderRadius: "1rem", padding: "1rem 1.25rem",
                }}>
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>📍</div>
                  <p style={{ fontWeight: 700, color: "#111010", fontSize: "0.85rem", marginBottom: "0.2rem" }}>Presencial · Lima, Perú</p>
                  <p style={{ fontSize: "0.75rem", color: "#888", lineHeight: 1.5 }}>Si estás en Lima puedes entrenar en persona directamente con Camila.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href={SHOPIFY.elite} target="_blank" rel="noopener noreferrer" className="grad-bg" style={{
                  fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: "#fff", padding: "0.9rem 2rem", borderRadius: "100px", textDecoration: "none",
                }}>
                  Ver plan Elite →
                </a>
                <a href={LANDING.elite} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "0.78rem", fontWeight: 600, color: "#666",
                  border: "1px solid #ddd", padding: "0.9rem 1.6rem",
                  borderRadius: "100px", textDecoration: "none",
                }}>
                  Ver más →
                </a>
              </div>
            </div>

            {/* Foto principal Elite */}
            <div style={{ position: "relative", borderRadius: "1.5rem", overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image src="/elite/elite-foto-01.jpg" alt="CGC Elite — Clase 1 a 1 con Camila" fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center top" }} />
              <div style={{
                position: "absolute", bottom: "1.25rem", left: "1.25rem",
                background: "rgba(17,10,10,0.75)", backdropFilter: "blur(8px)",
                borderRadius: "0.75rem", padding: "0.75rem 1rem",
              }}>
                <p style={{ color: "#F9B233", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Solo con Camila Garay</p>
                <p style={{ color: "#fff", fontSize: "0.82rem", fontWeight: 600 }}>Entrenamiento 1 a 1 personalizado</p>
              </div>
            </div>
          </div>

          {/* Galería elite — fotos + screenshots zoom + video */}
          <div className="grid-elite-galeria">
            {/* Video elite grande — 2x1 */}
            <EliteVideoThumb />

            {/* Fotos pequeñas fila 1 */}
            {["/elite/elite-foto-02.jpg", "/elite/elite-foto-03.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "1/1" }}>
                <Image src={src} alt={`Elite 1:1 ${i+1}`} fill sizes="25vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </div>
            ))}

            {/* Screenshots Zoom */}
            {["/elite/elite-zoom-01.png", "/elite/elite-zoom-02.png", "/elite/elite-zoom-03.png"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "1/1", background: "#111010" }}>
                <Image src={src} alt={`Clase Zoom Elite ${i+1}`} fill sizes="25vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
                <div style={{
                  position: "absolute", top: "0.5rem", left: "0.5rem",
                  background: "#2D8CFF", borderRadius: "4px",
                  padding: "0.15rem 0.5rem", fontSize: "0.6rem", fontWeight: 700, color: "#fff", letterSpacing: "0.05em",
                }}>ZOOM</div>
              </div>
            ))}

            {/* Fotos extra */}
            {["/elite/elite-foto-04.jpg", "/elite/elite-foto-05.jpg"].map((src, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden", aspectRatio: "1/1" }}>
                <Image src={src} alt={`Elite foto ${i+4}`} fill sizes="25vw" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
