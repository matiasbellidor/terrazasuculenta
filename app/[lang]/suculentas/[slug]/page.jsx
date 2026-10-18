import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gift, MapPin, Truck } from "lucide-react";
import Caracteristicas from "@/components/Caracteristicas";
import EventoVistaProducto from "@/components/EventoVistaProducto";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/IconosMarca";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { formatearPrecio, linkWhatsApp, productos } from "@/lib/datos";
import { grafo, migas, producto as esquemaProducto } from "@/lib/esquemas";
import { conIdioma } from "@/lib/idiomas";
import { alternativas } from "@/lib/sitio";
import { textos } from "@/lib/textos";

const ICONOS_DATOS = [Truck, MapPin, Gift];

const buscarProducto = (slug) => productos.find((producto) => producto.slug === slug);

export function generateStaticParams() {
  return productos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const producto = buscarProducto(slug);
  if (!producto) notFound();
  const info = producto[lang];
  const t = textos[lang];
  const nombre = `${producto.nombre} (${info.nombreComun})`;
  const descripcion = `${info.descripcion} ${formatearPrecio(producto.precio, lang)}. ${t.catalogo.incluye}.`;

  return {
    title: `${nombre} | Terraza Suculenta`,
    description: descripcion,
    alternates: alternativas(lang, `/suculentas/${slug}`),
    openGraph: {
      title: nombre,
      description: descripcion,
      siteName: "Terraza Suculenta",
      locale: lang === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [{ url: producto.imagen, width: 1000, height: 1250, alt: nombre }],
    },
  };
}

export default async function PaginaProducto({ params }) {
  const { lang, slug } = await params;
  const producto = buscarProducto(slug);
  if (!producto) notFound();

  const t = textos[lang];
  const info = producto[lang];
  const inicio = conIdioma(lang);
  const otros = productos.filter((otro) => otro.slug !== slug);

  return (
    <>
      <JsonLd datos={grafo(esquemaProducto(producto, lang), migas(producto, lang))} />
      <EventoVistaProducto slug={slug} />
      <Navbar idioma={lang} ruta={`/suculentas/${slug}`} />
      <main className="flex-1">
        <nav aria-label={t.producto.migas} className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/55">
            <li>
              <Link href={inicio} className="transition hover:text-sage-dark">
                {t.footer.inicio}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`${inicio}#catalogo`} className="transition hover:text-sage-dark">
                {t.nav.catalogo}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink/80 italic">
              {producto.nombre}
            </li>
          </ol>
        </nav>

        <article className="mx-auto mt-6 grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 md:grid-cols-2 md:gap-12 lg:gap-16 lg:pb-24">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-sage/10 shadow-sm ring-1 ring-ink/5">
            <Image
              src={producto.imagen}
              alt={`${producto.nombre} (${info.nombreComun})`}
              fill
              preload
              sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:py-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
              {info.nombreComun}
            </p>
            <h1 className="mt-2 font-serif text-4xl italic sm:text-5xl">{producto.nombre}</h1>
            <p className="mt-4 leading-relaxed text-ink/70">{info.descripcion}</p>

            <p className="mt-6 text-3xl font-semibold text-terracotta">
              {formatearPrecio(producto.precio, lang)}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-ink/60">
              <Gift className="size-4" aria-hidden="true" />
              {t.catalogo.incluye}
            </p>

            <a
              href={linkWhatsApp(t.whatsapp.producto(producto.nombre))}
              target="_blank"
              rel="noopener noreferrer"
              data-ubicacion="ficha"
              data-producto={producto.slug}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sage px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-sage/25 transition hover:bg-sage-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage sm:w-auto sm:self-start"
            >
              <WhatsAppIcon className="size-4" />
              {t.catalogo.comprar}
            </a>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/70">
              {t.hero.datos.map((dato, i) => {
                const Icono = ICONOS_DATOS[i];
                return (
                  <li key={dato} className="inline-flex items-center gap-2">
                    <Icono className="size-4 text-sage-dark" aria-hidden="true" />
                    {dato}
                  </li>
                );
              })}
            </ul>

            <h2 className="mt-10 text-xs font-semibold tracking-[0.2em] text-ink/50 uppercase">
              {t.modal.caracteristicas}
            </h2>
            <Caracteristicas info={info} t={t} />
          </div>
        </article>

        <section className="border-t border-ink/5 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-serif text-2xl sm:text-3xl">{t.producto.otras}</h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              {otros.map((otro) => (
                <li key={otro.slug}>
                  <Link href={conIdioma(lang, `/suculentas/${otro.slug}`)} className="group block">
                    <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-sage/10 ring-1 ring-ink/5">
                      <Image
                        src={otro.imagen}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-serif italic transition group-hover:text-sage-dark">
                      {otro.nombre}
                    </p>
                    <p className="text-xs text-ink/55">{otro[lang].nombreComun}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`${inicio}#catalogo`}
              className="mt-10 inline-flex items-center gap-2 rounded-xl border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-cream"
            >
              {t.producto.volver}
            </Link>
          </div>
        </section>
      </main>
      <Footer idioma={lang} />
    </>
  );
}
