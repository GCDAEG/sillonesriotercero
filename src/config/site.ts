export const site = {
  name: "Sillones Río Tercero",
  logo: "/Sillones Río Tercero Logo.png",
  description: "Sillones, muebles y sommiers. Catálogo de demostración.",
  address: "Av. General Savio 2023",
  locality: "Río Tercero, Córdoba",
  whatsapp: "", // Pendiente de verificar; no activar un destino inventado.
};

export const navigation = [
  { href: "#productos", label: "Productos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export type Category = "Sillones" | "Muebles" | "Sommiers";

export const categories: Category[] = ["Sillones", "Muebles", "Sommiers"];

export const images = {
  hero: "/images/hero.jpg",
};

export const products = [
  { id: "sofa-contemporaneo", name: "Sofá contemporáneo", category: "Sillones", image: "/images/sofa.jpg", alt: "Sofá de dos cuerpos en color verde oscuro sobre un piso de madera.", description: "Consultá por este modelo.", provisional: true },
  { id: "sillon-individual", name: "Sillón individual", category: "Sillones", image: "/images/sillon-individual.jpg", alt: "Sillón individual tapizado en tono claro, fotografiado en un ambiente luminoso.", description: "Consultá por este modelo.", provisional: true },
  { id: "esquinero", name: "Sofá esquinero", category: "Sillones", image: "/images/esquinero.jpg", alt: "Sofá esquinero gris claro en una sala de estar minimalista.", description: "Consultá por este modelo.", provisional: true },
  { id: "silla-comedor", name: "Silla de comedor", category: "Muebles", image: "/images/silla.jpg", alt: "Silla tapizada gris con estructura y patas de madera clara.", description: "Consultá por este modelo.", provisional: true },
  { id: "sofa-cama", name: "Sofá cama", category: "Muebles", image: "/images/sofa-cama.jpg", alt: "Sofá amplio en una sala de estar luminosa.", description: "Consultá por este modelo.", provisional: true },
  { id: "sommier", name: "Sommier", category: "Sommiers", image: "/images/sommier.jpg", alt: "Cama sommier vestida con ropa de cama clara en un dormitorio.", description: "Consultá por este modelo.", provisional: true },
] satisfies Array<{
  id: string; name: string; category: Category; image: string; alt: string;
  description: string; provisional: boolean;
}>;

export function productInquiryUrl(productName: string) {
  if (!site.whatsapp) return null;
  const message = encodeURIComponent(`Hola, quería consultar por ${productName}.`);
  return `https://wa.me/${site.whatsapp}?text=${message}`;
}
