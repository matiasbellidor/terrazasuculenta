// Datos estructurados (schema.org) con datos reales del negocio.
// No agregar reseñas, puntuaciones ni stock sin datos verdaderos.
import { INSTAGRAM_URL, WHATSAPP_NUMERO, nombreDe } from "@/lib/datos";
import { atributoLang, conIdioma } from "@/lib/idiomas";
import { urlAbsoluta } from "@/lib/sitio";
import { textos } from "@/lib/textos";

const ID_NEGOCIO = () => urlAbsoluta("/#negocio");

export const negocio = (idioma) => ({
  "@type": "OnlineStore",
  "@id": ID_NEGOCIO(),
  name: "Terraza Suculenta",
  url: urlAbsoluta("/"),
  logo: urlAbsoluta("/images/logo.png"),
  image: urlAbsoluta("/opengraph-image.jpg"),
  description: textos[idioma].footer.lema,
  foundingDate: "2023",
  telephone: `+${WHATSAPP_NUMERO}`,
  sameAs: [INSTAGRAM_URL],
  areaServed: { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${WHATSAPP_NUMERO}`,
    contactType: "sales",
    availableLanguage: ["es", "en"],
  },
});

export const sitio = (idioma) => ({
  "@type": "WebSite",
  "@id": urlAbsoluta(`${conIdioma(idioma)}#sitio`),
  name: "Terraza Suculenta",
  url: urlAbsoluta(conIdioma(idioma)),
  inLanguage: atributoLang(idioma),
  publisher: { "@id": ID_NEGOCIO() },
});

export const producto = (planta, idioma) => {
  const info = planta[idioma];
  const url = urlAbsoluta(conIdioma(idioma, `/suculentas/${planta.slug}`));
  return {
    "@type": "Product",
    "@id": `${url}#producto`,
    name: `${nombreDe(planta, idioma)} (${info.nombreComun})`,
    description: info.descripcion,
    image: urlAbsoluta(planta.imagen),
    sku: planta.slug,
    brand: { "@type": "Brand", name: "Terraza Suculenta" },
    offers: {
      "@type": "Offer",
      url,
      price: planta.precio,
      priceCurrency: "ARS",
      seller: { "@id": ID_NEGOCIO() },
    },
  };
};

export const migas = (planta, idioma) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: textos[idioma].footer.inicio,
      item: urlAbsoluta(conIdioma(idioma)),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: nombreDe(planta, idioma),
      item: urlAbsoluta(conIdioma(idioma, `/suculentas/${planta.slug}`)),
    },
  ],
});

export const grafo = (...nodos) => ({ "@context": "https://schema.org", "@graph": nodos });
