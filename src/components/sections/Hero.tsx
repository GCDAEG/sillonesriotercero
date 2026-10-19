import Image from "next/image";
import { images } from "@/config/site";

export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" />Sillones · Muebles · Sommiers</p>
        <h1 id="hero-title">Un lugar para <em>sentirse en casa.</em></h1>
        <p className="hero-description">Encontrá sillones, muebles y sommiers para renovar tus espacios.</p>
        <a className="button button--primary" href="#productos">Ver productos <span aria-hidden="true">↓</span></a>
        <p className="hero-location">Río Tercero, Córdoba <span aria-hidden="true">·</span> Envíos a Córdoba</p>
      </div>
      <div className="hero-image-wrap">
        <Image className="hero-image" src={images.hero} alt="Living cálido con sillones y luz natural." fill priority sizes="(max-width: 767px) 100vw, 60vw" />
      </div>
    </div>
    <a className="hero-scroll" href="#productos"><span aria-hidden="true">↓</span> Descubrí el catálogo</a>
  </section>;
}
