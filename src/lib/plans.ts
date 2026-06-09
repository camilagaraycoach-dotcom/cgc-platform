export type Currency = "USD" | "PEN";

export interface Plan {
  id: string;
  clases: number;
  precioUSD: number;
  precioPEN: number;
  vigencia: string;
  descuento: string | null;
  precioPorClaseUSD: number;
  precioPorClasePEN: number;
  badge: string | null;
  renovacion: string;
  destacado: boolean;
  shopifyLink: string;
}

export const PLANES: Plan[] = [
  {
    id: "1-clase",
    clases: 1,
    precioUSD: 15,
    precioPEN: 45,
    vigencia: "1 semana",
    descuento: null,
    precioPorClaseUSD: 15,
    precioPorClasePEN: 45,
    badge: null,
    renovacion: "",
    destacado: false,
    shopifyLink: "https://camilagaraycoach.com/products/1-clase-online-en-vivo?variant=47159884808366",
  },
  {
    id: "4-clases",
    clases: 4,
    precioUSD: 45,
    precioPEN: 140,
    vigencia: "1 mes",
    descuento: "Solo $11.25 por clase",
    precioPorClaseUSD: 11.25,
    precioPorClasePEN: 35,
    badge: null,
    renovacion: "10% de descuento al renovar antes de que culmine",
    destacado: false,
    shopifyLink: "https://camilagaraycoach.com/products/4-clases-virtuales?variant=47157324447918",
  },
  {
    id: "8-clases",
    clases: 8,
    precioUSD: 80,
    precioPEN: 250,
    vigencia: "1 mes",
    descuento: "Ahorras $40 frente a clases sueltas",
    precioPorClaseUSD: 10,
    precioPorClasePEN: 31.25,
    badge: "MÁS ELEGIDO",
    renovacion: "10% de descuento al renovar antes de que culmine",
    destacado: true,
    shopifyLink: "https://camilagaraycoach.com/products/8-clases-online-en-vivo?variant=47157324939438",
  },
  {
    id: "12-clases",
    clases: 12,
    precioUSD: 105,
    precioPEN: 330,
    vigencia: "2 meses",
    descuento: "Solo $8.75 por clase",
    precioPorClaseUSD: 8.75,
    precioPorClasePEN: 27.50,
    badge: null,
    renovacion: "20% de descuento al renovar antes de que culmine",
    destacado: false,
    shopifyLink: "https://camilagaraycoach.com/products/12-clases-online-en-vivo?variant=47159884054702",
  },
  {
    id: "20-clases",
    clases: 20,
    precioUSD: 165,
    precioPEN: 520,
    vigencia: "2 meses",
    descuento: "Ahorras $135",
    precioPorClaseUSD: 8.25,
    precioPorClasePEN: 26,
    badge: "MÁS RECOMENDADO",
    renovacion: "20% de descuento al renovar antes de que culmine",
    destacado: true,
    shopifyLink: "https://camilagaraycoach.com/collections/all",
  },
  {
    id: "32-clases",
    clases: 32,
    precioUSD: 245,
    precioPEN: 770,
    vigencia: "3 meses",
    descuento: "Solo $7.65 por clase",
    precioPorClaseUSD: 7.65,
    precioPorClasePEN: 24,
    badge: null,
    renovacion: "20% de descuento al renovar antes de que culmine",
    destacado: false,
    shopifyLink: "https://camilagaraycoach.com/collections/all",
  },
];

export const CURSOS = [
  {
    id: "powersplit",
    nombre: "PowerSplit",
    descripcion: "Flexibilidad extrema y splits desde cero o nivel avanzado",
    emoji: "🦵",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: "arcos360",
    nombre: "Arcos360",
    descripcion: "Backbend completo, puentes y movilidad espinal profunda",
    emoji: "🤸",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: "prepa-fisica",
    nombre: "Preparación Física",
    descripcion: "Fuerza, acondicionamiento y base atlética para bailarines",
    emoji: "💪",
    color: "from-purple-600 to-blue-500",
  },
];
