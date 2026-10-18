import Link from "next/link";
import BotonIdioma from "@/components/BotonIdioma";
import { InstagramIcon, WhatsAppIcon } from "@/components/IconosMarca";
import LogoMarca from "@/components/LogoMarca";
import { INSTAGRAM_URL, linkWhatsApp } from "@/lib/datos";
import { conIdioma } from "@/lib/idiomas";
import { textos } from "@/lib/textos";

const linkExterno = { target: "_blank", rel: "noopener noreferrer" };
const claseEnlace =
  "hidden rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition hover:text-sage-dark";

// `ruta`: ruta de la página actual sin idioma, para que el botón de idioma lleve a su equivalente.
export default function Navbar({ idioma, ruta = "/" }) {
  const t = textos[idioma];
  const inicio = conIdioma(idioma);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={inicio} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <LogoMarca
            alt="Logo de Terraza Suculenta"
            ancho={60}
            className="size-9 ring-1 ring-ink/5 sm:size-10"
          />
          {/* En celulares el nombre va en dos líneas para dejar lugar a los botones */}
          <span className="font-serif text-[15px] leading-[1.1] tracking-tight sm:text-lg sm:leading-normal">
            Terraza
            <br className="sm:hidden" /> Suculenta
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link href={`${inicio}#catalogo`} className={`${claseEnlace} md:block`}>
            {t.nav.catalogo}
          </Link>
          <Link href={`${inicio}#como-comprar`} className={`${claseEnlace} md:block`}>
            {t.nav.comoComprar}
          </Link>
          <Link href={`${inicio}#nosotros`} className={`${claseEnlace} lg:block`}>
            {t.nav.nosotros}
          </Link>
          <Link href={`${inicio}#ideas`} className={`${claseEnlace} mr-1 lg:block`}>
            {t.nav.ideas}
          </Link>
          <BotonIdioma idioma={idioma} ruta={ruta} etiqueta={t.nav.idioma} />
          <a
            href={INSTAGRAM_URL}
            {...linkExterno}
            aria-label={t.nav.instagram}
            className="grid size-9 place-items-center rounded-full text-ink/70 transition hover:bg-sage/10 hover:text-sage-dark sm:size-10"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={linkWhatsApp(t.whatsapp.consulta)}
            {...linkExterno}
            aria-label={t.nav.whatsapp}
            className="grid size-9 place-items-center rounded-full bg-sage text-white shadow-sm transition hover:bg-sage-dark sm:size-10"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
