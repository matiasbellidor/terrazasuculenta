import Link from "next/link";
import { Languages } from "lucide-react";
import { conIdioma } from "@/lib/idiomas";

// Un solo botón: lleva a la misma página en el otro idioma y muestra a cuál pasa.
// `ruta` es la ruta de la página sin idioma ("/" o "/suculentas/..."). Se recibe por prop
// porque usePathname() devuelve la ruta interna reescrita (/es/...) al prerenderizar.
export default function BotonIdioma({ idioma, ruta, etiqueta }) {
  const otro = idioma === "es" ? "en" : "es";

  return (
    <Link
      href={conIdioma(otro, ruta)}
      hrefLang={otro}
      lang={otro}
      aria-label={etiqueta}
      title={etiqueta}
      className="flex h-9 items-center gap-1.5 rounded-full bg-ink/5 px-3 text-xs font-semibold tracking-wide text-ink/80 uppercase transition hover:bg-sage/10 hover:text-sage-dark focus-visible:outline-2 focus-visible:outline-sage sm:h-10"
    >
      <Languages className="size-4" aria-hidden="true" />
      {otro}
    </Link>
  );
}
