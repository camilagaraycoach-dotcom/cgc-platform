import { CURSOS_DATA } from "@/lib/cursos";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreciosSection from "@/components/PreciosSection";
import { Check, ChevronDown } from "lucide-react";

export function generateStaticParams() {
  return CURSOS_DATA.map((c) => ({ id: c.id }));
}

export default async function CursoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const curso = CURSOS_DATA.find((c) => c.id === id);
  if (!curso) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section
        className="pt-24 pb-16 px-4 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${curso.colorFrom}15, ${curso.colorTo}10, #fff)` }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <div
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
              style={{ background: `linear-gradient(135deg, ${curso.colorFrom}, ${curso.colorTo})` }}
            >
              <span>{curso.emoji}</span> CGC Method
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
              {curso.nombre}
            </h1>
            <p
              className="text-2xl font-bold mb-4"
              style={{ color: curso.colorFrom }}
            >
              {curso.tagline}
            </p>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">{curso.descripcion}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#precios"
                className="text-white font-bold px-8 py-3 rounded-2xl text-center transition-opacity hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${curso.colorFrom}, ${curso.colorTo})` }}
              >
                Ver precios e inscribirme →
              </a>
              <a
                href="https://wa.me/51954655122"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-2xl text-center hover:border-gray-400 transition-colors"
              >
                💬 ¿Dudas? Escríbenos
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="w-72 h-80 rounded-3xl shadow-2xl flex items-center justify-center text-8xl"
              style={{ background: `linear-gradient(135deg, ${curso.colorFrom}30, ${curso.colorTo}30)` }}
            >
              {curso.emoji}
            </div>
          </div>
        </div>
        <div className="text-center mt-10 animate-bounce">
          <ChevronDown size={28} className="mx-auto text-gray-300" />
        </div>
      </section>

      {/* MÓDULOS */}
      {curso.modulos && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-3">
              Áreas de <span className="gradient-cgc-text">entrenamiento</span>
            </h2>
            <p className="text-gray-500 text-center mb-10">
              4 módulos especializados para construir tu base artística
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curso.modulos.map((mod) => (
                <div key={mod.titulo} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{mod.emoji}</span>
                    <h3 className="text-lg font-bold text-gray-900">{mod.titulo}</h3>
                  </div>
                  <ul className="space-y-2">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PARA QUIÉN ES */}
      {curso.paraQuien && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-10">
              ¿Es para <span className="gradient-cgc-text">ti</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {curso.paraQuien.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${curso.colorFrom}, ${curso.colorTo})` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* QUOTE */}
      {curso.quote && (
        <section
          className="py-16 px-4"
          style={{ background: `linear-gradient(135deg, ${curso.colorFrom}, ${curso.colorTo})` }}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
              &ldquo;{curso.quote}&rdquo;
            </p>
            <p className="text-white/70 font-medium">— Camila Garay · CGC Method</p>
          </div>
        </section>
      )}

      {/* EQUIPAMIENTO */}
      {curso.equipamiento && (
        <section className="py-12 px-4 bg-amber-50 border-y border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎒 Equipamiento necesario</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {curso.equipamiento.map((item) => (
                <span key={item} className="bg-white border border-amber-200 text-amber-800 text-sm font-medium px-4 py-2 rounded-full">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-amber-700 mt-3">Todo desde casa. No necesitas gimnasio.</p>
          </div>
        </section>
      )}

      {/* TESTIMONIOS */}
      {curso.testimonios && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
              Resultados <span className="gradient-cgc-text">reales</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {curso.testimonios.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.texto}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: `linear-gradient(135deg, ${curso.colorFrom}, ${curso.colorTo})` }}
                    >
                      {t.nombre.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.nombre}</p>
                      <p className="text-gray-400 text-xs">{t.perfil}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {curso.faq && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
              Preguntas <span className="gradient-cgc-text">frecuentes</span>
            </h2>
            <div className="space-y-4">
              {curso.faq.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{item.pregunta}</h3>
                  <p className="text-gray-600 text-sm">{item.respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRECIOS */}
      <PreciosSection />

      <Footer />
    </div>
  );
}
