export const IDIOMAS = ["es", "en"];

export const esIdioma = (valor) => IDIOMAS.includes(valor);

export const atributoLang = (idioma) => (idioma === "en" ? "en" : "es-AR");

// El español va sin prefijo ("/", "/suculentas/...") y el inglés bajo "/en".
// next.config.mjs reescribe las rutas sin prefijo hacia app/[lang] con lang = "es".
export const conIdioma = (idioma, ruta = "/") => {
  if (idioma === "es") return ruta;
  return ruta === "/" ? "/en" : `/en${ruta}`;
};
