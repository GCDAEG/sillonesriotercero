"use client";

import { Brand } from "@/components/ui/Brand";
import { navigation, site } from "@/config/site";

export function Navbar() {
  return <header className="site-header"><div className="container header-inner">
    <a className="brand-link" href="#inicio" aria-label={`${site.name}, inicio`}><Brand /></a>
    <nav aria-label="Navegación principal" className="desktop-nav">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="header-contact" href="#contacto">Consultar <span aria-hidden="true">↗</span></a>
    <details className="mobile-menu" onKeyDown={(event) => { if (event.key === "Escape") { event.currentTarget.removeAttribute("open"); event.currentTarget.querySelector("summary")?.focus(); } }}>
      <summary aria-label="Abrir menú">Menú <span aria-hidden="true">＋</span></summary>
      <nav aria-label="Navegación móvil" onClick={(event) => { if ((event.target as HTMLElement).closest("a")) event.currentTarget.closest("details")?.removeAttribute("open"); }}>
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        <a href="#contacto">Consultar</a>
      </nav>
    </details>
  </div></header>;
}
