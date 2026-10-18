import Link from "next/link";
import { MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/IconosMarca";
import { INSTAGRAM_URL, INSTAGRAM_USUARIO, WHATSAPP_VISIBLE, linkWhatsApp } from "@/lib/datos";
import { conIdioma } from "@/lib/idiomas";
import { textos } from "@/lib/textos";

const linkExterno = { target: "_blank", rel: "noopener noreferrer" };

export default function Footer({ idioma }) {
  const t = textos[idioma];
  const inicio = conIdioma(idioma);
  const secciones = [
    { href: inicio, texto: t.footer.inicio },
    { href: `${inicio}#catalogo`, texto: t.nav.catalogo },
    { href: `${inicio}#como-comprar`, texto: t.nav.comoComprar },
    { href: `${inicio}#nosotros`, texto: t.nosotros.etiqueta },
    { href: `${inicio}#ideas`, texto: t.nav.ideas },
    { href: `${inicio}#preguntas`, texto: t.nav.preguntas },
  ];

  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-white">Terraza Suculenta</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              {t.footer.lema}
            </p>
          </div>

          <nav aria-label={t.footer.secciones}>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">
              {t.footer.secciones}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {secciones.map(({ href, texto }) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/45 uppercase">
              {t.footer.contacto}
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={linkWhatsApp(t.whatsapp.consulta)}
                  {...linkExterno}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <WhatsAppIcon className="size-4 text-sage" />
                  {WHATSAPP_VISIBLE}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  {...linkExterno}
                  className="inline-flex items-center gap-2.5 transition hover:text-white"
                >
                  <InstagramIcon className="size-4 text-terracotta" />
                  {INSTAGRAM_USUARIO}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-white/45" aria-hidden="true" />
                {t.nosotros.ubicacion}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
          © 2026 Terraza Suculenta. {t.footer.derechos}
        </p>
      </div>
    </footer>
  );
}
