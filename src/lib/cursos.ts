export interface Curso {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  emoji: string;
  colorFrom: string;
  colorTo: string;
  colorHex: string;
  heroImg: string;
  modulos?: { emoji: string; titulo: string; items: string[] }[];
  testimonios?: { nombre: string; perfil: string; texto: string }[];
  faq?: { pregunta: string; respuesta: string }[];
  paraQuien?: string[];
  equipamiento?: string[];
  quote?: string;
  imagenes?: string[];
}

const BASE = "https://camilagaraycoach-dotcom.github.io/cgcmethod";

export const CURSOS_DATA: Curso[] = [
  {
    id: "powersplit",
    nombre: "PowerSplit",
    tagline: "Split sagital. Split frontal. Sin importar tu nivel.",
    descripcion:
      "Elasticidad + fuerza = progreso real y sostenible. Para todas las edades, todos los niveles, desde casa.",
    emoji: "🦵",
    colorFrom: "#F97316",
    colorTo: "#EC4899",
    colorHex: "#F97316",
    heroImg: `${BASE}/assets/img/powersplit-hero.jpg`,
    paraQuien: [
      "Bailarines, gimnastas o artistas que quieren splits reales",
      "Personas sin flexibilidad que nunca pudieron lograrlo",
      "Quienes ya tienen cierta flexibilidad y quieren el split completo",
      "Cualquier edad y nivel, desde casa sin equipamiento",
    ],
    testimonios: [
      {
        nombre: "Alumna PowerSplit",
        perfil: "España",
        texto:
          "En 6 semanas logré el split sagital que llevo años intentando. El método de Cami es diferente a todo lo que había probado.",
      },
      {
        nombre: "Alumna PowerSplit",
        perfil: "Perú",
        texto:
          "Nunca pensé que podría lograrlo. El enfoque en fuerza + elasticidad hace que el progreso sea real y sostenible.",
      },
    ],
    faq: [
      {
        pregunta: "¿Necesito tener flexibilidad previa?",
        respuesta:
          "No. El programa está diseñado para partir desde cero. Trabajamos elasticidad y fuerza juntas para un progreso sostenible.",
      },
      {
        pregunta: "¿Puedo tomarlo desde cualquier país?",
        respuesta:
          "Sí, 100% online. Solo necesitas internet. Alumnos en más de 10 países.",
      },
      {
        pregunta: "¿Qué equipamiento necesito?",
        respuesta: "Ninguno especial. Solo un mat o superficie cómoda desde casa.",
      },
    ],
  },
  {
    id: "arcos360",
    nombre: "Arcos360",
    tagline: "Técnica. Fuerza. Método. Tu arco empieza aquí.",
    descripcion:
      "Backbend completo, puentes y movilidad espinal profunda. Aprende a hacer arcos con técnica correcta, fuerza real y progresión segura.",
    emoji: "🤸",
    colorFrom: "#EC4899",
    colorTo: "#8B5CF6",
    colorHex: "#EC4899",
    heroImg: `${BASE}/assets/img/arcos-hero.jpg`,
    paraQuien: [
      "Bailarines que quieren un arco limpio y controlado",
      "Gimnastas que buscan mejorar su backbend",
      "Artistas que necesitan movilidad espinal real",
      "Cualquier nivel, desde casa",
    ],
    faq: [
      {
        pregunta: "¿Es seguro aprender arcos online?",
        respuesta:
          "Sí, si sigues una progresión correcta. En Arcos360 enseñamos técnica primero, fuerza segundo, arco completo tercero.",
      },
      {
        pregunta: "¿Necesito poder hacer un puente antes?",
        respuesta:
          "No. Empezamos desde la movilidad básica y vamos progresando de forma segura.",
      },
    ],
  },
  {
    id: "prepa-fisica",
    nombre: "Preparación Física",
    tagline: "Prepara el cuerpo que hace posibles los pasos.",
    descripcion:
      "Preparación física profesional para bailarines, gimnastas y artistas del movimiento. Clases en vivo con el equipo CGC. No enseñamos pasos — construimos el cuerpo que los hace posibles.",
    emoji: "💪",
    colorFrom: "#8B5CF6",
    colorTo: "#3B82F6",
    colorHex: "#8B5CF6",
    heroImg: `${BASE}/assets/img/CAMILA-45 (1).jpg`,
    modulos: [
      {
        emoji: "🦵",
        titulo: "Elevaciones de pierna",
        items: [
          "Flexores de cadera y cuádriceps",
          "Fuerza isométrica de sostén",
          "Elevación frontal y lateral",
          "Control en grand battement",
        ],
      },
      {
        emoji: "⚡",
        titulo: "Saltos y explosividad",
        items: [
          "Cadena explosiva posterior",
          "Pliés y reactividad",
          "Velocidad de piernas",
          "Amortiguación y aterrizaje",
        ],
      },
      {
        emoji: "🦢",
        titulo: "Arabesco y fuerza de espalda",
        items: [
          "Glúteo medio y rotadores",
          "Cadena posterior completa",
          "Estabilización de pelvis",
          "Fuerza de espalda baja",
        ],
      },
      {
        emoji: "🌀",
        titulo: "Giros",
        items: [
          "Estabilidad de tobillo y pie",
          "Equilibrio y control del eje",
          "Core profundo y centro",
          "Spot y coordinación de cabeza",
        ],
      },
    ],
    paraQuien: [
      "Bailarín/a, gimnasta, patinador artístico o artista del movimiento",
      "Sientes que tu físico limita tu técnica en escena",
      "Quieres mejorar elevaciones, saltos, arabescos y giros",
      "Necesitas entrenamiento profesional desde casa, sin equipamiento especial",
    ],
    testimonios: [
      {
        nombre: "María R.",
        perfil: "Bailarina de jazz · México",
        texto:
          "Dos meses con el programa y mis giros mejoraron de forma increíble. Por fin entendí qué parte de mi cuerpo no estaba activando.",
      },
      {
        nombre: "Lucía T.",
        perfil: "Estudiante de ballet · Argentina",
        texto:
          "Nunca pensé que pudiera mejorar tanto mis saltos sin ir a un gimnasio. El contenido es muy claro y lo aplico directo en mi ensayo.",
      },
      {
        nombre: "Sofia V.",
        perfil: "Bailarina contemporánea · España",
        texto:
          "El módulo de arabesque fue revelador. Cami explica todo con una precisión que no había encontrado en ningún otro curso online.",
      },
    ],
    quote:
      "La técnica sin base física es como querer subir una escalera sin escalones. Puedes verla, puedes saber cómo sería, pero no llegas.",
    equipamiento: [
      "2 bloques de yoga",
      "1 liga de resistencia",
      "2 pesas de 0.5 a 1 kg",
    ],
    faq: [
      {
        pregunta: "¿Qué equipamiento necesito?",
        respuesta:
          "2 bloques de yoga, 1 liga de resistencia, 2 pesas de 0.5-1 kg. Todo desde casa.",
      },
      {
        pregunta: "¿Es apto para niños y jóvenes?",
        respuesta:
          "Sí, desde 8 años con experiencia previa en danza, gimnasia o patinaje artístico.",
      },
      {
        pregunta: "¿Quién dicta las clases grupales?",
        respuesta:
          "Camila Garay y su equipo de entrenadores CGC, bailarines profesionales especializados en preparación física artística. Las clases 1 a 1 son exclusivamente con Camila.",
      },
      {
        pregunta: "¿Puedo tomarlo desde cualquier país?",
        respuesta:
          "Sí, 100% online. Solo necesitas internet. Alumnos en más de 10 países.",
      },
    ],
    imagenes: [
      `${BASE}/assets/img/CAMILA-41.jpg`,
      `${BASE}/assets/img/CAMILA-42 (1).jpg`,
      `${BASE}/assets/img/clase-vivo-1.png`,
      `${BASE}/assets/img/clase-vivo-2.png`,
      `${BASE}/assets/img/clase-vivo-3.png`,
    ],
  },
];

export const ELITE_DATA = {
  titulo: "CGC Elite — Clases 1:1 con Camila Garay",
  subtitulo: "Entrenamiento 1:1 de élite",
  descripcion:
    "Coaching personalizado para atletas que quieren resultados reales — online o presencial en Lima",
  paises:
    "Perú · Chile · EE.UU. · Inglaterra · España · Alemania · Italia · Rep. Dominicana · Panamá · México",
  especialidades:
    "Gimnastas · Taekwondo · Nadadoras Artísticas · Campeones nacionales e internacionales",
  cupos: "SOLO 3 CUPOS MENSUALES",
  planes: [
    {
      id: "sesion-estrategica",
      nombre: "Sesión Estratégica",
      precio: 60,
      sesiones: 1,
      descripcion: "Diagnóstico personalizado con Camila Garay",
      beneficios: [
        "Formulario detallado previo",
        "1 sesión 1:1 en vivo personalizada",
        "Plan de acción específico para ti",
      ],
      destacado: false,
    },
    {
      id: "cgc-elite-standard",
      nombre: "CGC Elite Standard",
      precio: 459,
      sesiones: 4,
      descripcion: "Planificación semanal con seguimiento continuo",
      beneficios: [
        "Formulario detallado + entrevista estratégica",
        "4 sesiones 1:1 en vivo personalizadas",
        "Planificación semanal adaptada",
        "Acceso a clases grupales mensuales",
        "Informes de avance personalizados",
        "Seguimiento continuo",
      ],
      destacado: false,
    },
    {
      id: "cgc-elite-premium",
      nombre: "CGC Elite Premium",
      precio: 799,
      sesiones: 8,
      descripcion: "Seguimiento prioritario y máximos resultados",
      beneficios: [
        "Todo lo del Standard",
        "8 sesiones 1:1 en vivo personalizadas",
        "4 clases grabadas adicionales",
        "4 informes de avance detallados",
        "Seguimiento prioritario directo con Camila",
        "Acceso ilimitado a biblioteca de grabaciones",
      ],
      destacado: true,
    },
  ],
  pasos: [
    { num: "01", titulo: "Selecciona tu plan", desc: "Elige el plan que mejor se adapte a tus metas y realiza tu pago." },
    { num: "02", titulo: "Agenda tu primera sesión", desc: "Recibirás un link de calendario para agendar directamente con Camila." },
    { num: "03", titulo: "Inicia tu transformación", desc: "Entrena con Camila en sesiones 100% personalizadas a tu nivel y objetivos." },
  ],
  imagenes: [
    `${BASE}/img/clase1.png`,
    `${BASE}/img/clase2.png`,
    `${BASE}/img/clase3.png`,
    `${BASE}/img/clase4.png`,
    `${BASE}/img/clase5.png`,
    `${BASE}/img/virtual1.png`,
    `${BASE}/img/virtual2.png`,
    `${BASE}/img/virtual3.png`,
  ],
  whatsapp: "+51954655122",
  ubicacion: "AcroFlex Training Center — Husares de Junín 374, Jesús María, Lima",
};
