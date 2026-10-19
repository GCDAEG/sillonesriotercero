import { site } from "@/config/site";

export function Introduction() {
  return <section id="ubicacion" className="location section-space" aria-labelledby="location-title">
    <div className="container location-inner">
      <div><p className="eyebrow">Encontranos</p><h2 id="location-title">Cerca tuyo,<br /><em>en Río Tercero.</em></h2></div>
      <div className="location-detail"><p className="address-label">Visitá el local</p><address>{site.address}<br />{site.locality}</address><p className="shipping-note"><span aria-hidden="true">↗</span> Envíos a Córdoba</p></div>
      <div id="contacto" className="contact-detail"><p className="address-label">¿Ya encontraste tu próximo sillón?</p><p>Consultá por el modelo que te gustó.</p><button className="button button--disabled" type="button" disabled aria-describedby="contact-pending">Consultar por WhatsApp <span aria-hidden="true">↗</span></button><small id="contact-pending">Contacto pendiente de verificación para esta demo.</small></div>
    </div>
  </section>;
}
