import { conIdioma } from "@/lib/idiomas";

// En Vercel se usa el dominio de producción del proyecto (variable de sistema de Vercel).
// NEXT_PUBLIC_SITE_URL permite fijar otro dominio, por ejemplo uno propio en el futuro.
const dominioVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const URL_SITIO =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (dominioVercel ? `https://${dominioVercel}` : "http://localhost:3000");

export const urlAbsoluta = (ruta) => new URL(ruta, URL_SITIO).toString();

// URL canónica y versiones por idioma (hreflang) de una página. `ruta` va sin idioma.
export const alternativas = (idioma, ruta) => ({
  canonical: conIdioma(idioma, ruta),
  languages: {
    "es-AR": conIdioma("es", ruta),
    en: conIdioma("en", ruta),
    "x-default": conIdioma("es", ruta),
  },
});
