import { ELITE_DATA } from "@/lib/cursos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";

export default function ElitePage() {
  const elite = ELITE_DATA;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🏆 {elite.cupos}
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="gradient-cgc-text">CGC Elite</span>
          </h1>
          <p className="text-2xl font-bold text-gray-200 mb-3">{elite.subtitulo}</p>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            {elite.descripcion} — <span className="text-white font-semibold">exclusivamente con Camila Garay</span>
          </p>
          <p className="text-amber-300 font-medium mb-8 text-sm">{elite.paises}</p>
          <p className="text-gray-400 text-sm mb-10">{elite.especialidades}</p>
          <a
            href="#planes"
            className="gradient-cgc text-white font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity inline-block"
          >
            Ver planes y asegurar mi cupo →
          </a>
        </div>
      </section>

      {/* PASOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">
            ¿Cómo <span className="gradient-cgc-text">funciona</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {elite.pasos.map((paso) => (
              <div key={paso.num} className="text-center">
                <div className="w-14 h-14 gradient-cgc rounded-2xl flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
                  {paso.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{paso.titulo}</h3>
                <p className="text-gray-500 text-sm">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-3">
            Elige tu <span className="gradient-cgc-text">plan Elite</span>
          </h2>
          <p className="text-gray-500 text-center mb-10">Precios en USD · Pago único por paquete</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {elite.planes.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 card-hover ${
                  plan.destacado
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl scale-105"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {plan.destacado && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="gradient-cgc text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Star size={12} fill="white" /> MÁS COMPLETO
                    </span>
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-1 ${plan.destacado ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.nombre}
                </h3>
                <div className={`text-5xl font-black mb-1 ${plan.destacado ? "text-white" : "text-gray-900"}`}>
                  ${plan.precio}
                </div>
                <p className={`text-sm mb-2 ${plan.destacado ? "text-gray-400" : "text-gray-400"}`}>
                  {plan.sesiones} {plan.sesiones === 1 ? "sesión" : "sesiones"} · USD
                </p>
                <p className={`text-sm mb-5 ${plan.destacado ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.descripcion}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.beneficios.map((b) => (
                    <li key={b} className={`flex items-start gap-2 text-sm ${plan.destacado ? "text-gray-300" : "text-gray-600"}`}>
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.destacado ? "text-green-400" : "text-green-500"}`} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/51954655122?text=Hola! Quiero el plan ${encodeURIComponent(plan.nombre)} de CGC Elite`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-2xl font-bold text-sm transition-all ${
                    plan.destacado
                      ? "gradient-cgc text-white hover:opacity-90"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  Reservar mi cupo
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-xl mx-auto">
            <p className="font-semibold text-amber-900 mb-2">📍 También presencial en Lima</p>
            <p className="text-sm text-amber-800">{elite.ubicacion}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
