import { productos } from "@/lib/datos";
import { IDIOMAS, conIdioma } from "@/lib/idiomas";
import { urlAbsoluta } from "@/lib/sitio";

const RUTAS = ["/", ...productos.map(({ slug }) => `/suculentas/${slug}`)];

// Cada URL lista también sus versiones en los dos idiomas, incluida ella misma.
export default function sitemap() {
  return RUTAS.flatMap((ruta) =>
    IDIOMAS.map((idioma) => ({
      url: urlAbsoluta(conIdioma(idioma, ruta)),
      changeFrequency: "monthly",
      priority: ruta === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          "es-AR": urlAbsoluta(conIdioma("es", ruta)),
          en: urlAbsoluta(conIdioma("en", ruta)),
          "x-default": urlAbsoluta(conIdioma("es", ruta)),
        },
      },
    }))
  );
}
