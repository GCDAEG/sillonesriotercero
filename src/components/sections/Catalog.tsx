"use client";

import Image from "next/image";
import { useState } from "react";
import { categories, productInquiryUrl, products, type Category } from "@/config/site";

type Filter = "Todos" | Category;

export function Catalog() {
  const [active, setActive] = useState<Filter>("Todos");
  const visible = active === "Todos" ? products : products.filter((product) => product.category === active);

  return <section id="productos" className="catalog section-space" aria-labelledby="catalog-title">
    <div className="container">
      <div className="catalog-heading"><div><p className="eyebrow">Una selección para tu casa</p><h2 id="catalog-title">Encontrá tu lugar.</h2></div><p className="catalog-intro">Sillones, muebles y sommiers para distintos espacios de tu casa.</p></div>
      <div className="catalog-toolbar"><div className="filters" role="group" aria-label="Filtrar productos por categoría">{(["Todos", ...categories] as Filter[]).map((filter) => <button key={filter} className={`filter${active === filter ? " is-active" : ""}`} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}</div><span className="product-count" aria-live="polite">{visible.length} {visible.length === 1 ? "modelo" : "modelos"}</span></div>
      <div className="product-grid">{visible.map((product) => {
        const inquiryUrl = productInquiryUrl(product.name);
        return <article className="product" key={product.id}>
          <div className="product-image-wrap"><Image className="product-image" src={product.image} alt={product.alt} fill sizes="(max-width: 767px) 88vw, (max-width: 900px) 45vw, 30vw" /></div>
          <div className="product-info"><div><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="product-description">{product.description}</p></div>{inquiryUrl ? <a className="product-link" href={inquiryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por ${product.name} por WhatsApp`}>Consultar <span aria-hidden="true">↗</span></a> : <button className="product-link" type="button" disabled aria-label={`Consulta por ${product.name} pendiente de verificar`}>Consultar <span aria-hidden="true">↗</span></button>}</div>
        </article>;
      })}</div>
      <p className="catalog-footnote">Fotografías ilustrativas de Unsplash; no corresponden al negocio.</p>
    </div>
  </section>;
}
