"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Gift,
  House,
  Leaf,
  MapPin,
  MessageCircle,
  Sprout,
  Truck,
} from "lucide-react";
import CarruselIdeas from "@/components/CarruselIdeas";
import ComoComprar from "@/components/ComoComprar";
import Footer from "@/components/Footer";
import { InstagramIcon, WhatsAppIcon } from "@/components/IconosMarca";
import ModalProducto from "@/components/ModalProducto";
import Navbar from "@/components/Navbar";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import {
  INSTAGRAM_URL,
  SEGUIDORES_INSTAGRAM,
  formatearPrecio,
  linkWhatsApp,
  nombreDe,
  precioDesde,
  productos,
} from "@/lib/datos";
import { conIdioma } from "@/lib/idiomas";
import { textos } from "@/lib/textos";

const linkExterno = { target: "_blank", rel: "noopener noreferrer" };
const ICONOS_VALORES = [Leaf, House, MessageCircle];
const ICONOS_DATOS = [Truck, MapPin, Gift];
const DIFUMINADO = "radial-gradient(ellipse 50% 50% at 50% 50%, #000 55%, transparent 100%)";

function Hero({ t }) {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-linear-to-b from-papel from-70% to-cream"
    >
      {/* La ilustración se desvanece en óvalo hacia todos sus bordes, así se funde con el fondo sin cortes.
          En pantallas grandes va a la derecha; en celulares queda detrás del texto, más suave. */}
      <div
        className="absolute inset-0 -z-10 lg:left-1/2 xl:left-[44%]"
        style={{ maskImage: DIFUMINADO, WebkitMaskImage: DIFUMINADO }}
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          preload
          quality={90}
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-papel/70 lg:hidden" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl text-ink lg:max-w-md xl:max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-sage-dark uppercase ring-1 ring-sage/15 backdrop-blur-sm">
            <MapPin className="size-3.5" aria-hidden="true" />
            {t.hero.ubicacion}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-balance sm:text-5xl xl:text-6xl">
            {t.hero.tituloAntes}
            <em className="text-sage-dark">{t.hero.tituloDestacado}</em>
            {t.hero.tituloDespues}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-ink/70 sm:text-lg">
            {t.hero.subtitulo}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sage/25 transition hover:bg-sage-dark"
            >
              {t.hero.verCatalogo}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={linkWhatsApp(t.whatsapp.consulta)}
              {...linkExterno}
              data-ubicacion="portada"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition hover:bg-white"
            >
              <WhatsAppIcon className="size-4" />
              {t.hero.consulta}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/70">
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
        </div>
      </div>
    </section>
  );
}

function TarjetaProducto({ producto, idioma, t, onAbrir }) {
  const info = producto[idioma];
  const nombre = nombreDe(producto, idioma);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-4/5 overflow-hidden bg-sage/10">
        <Image
          src={producto.imagen}
          alt={`${nombre} (${info.nombreComun})`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
          {info.nombreComun}
        </p>
        <h3 className="mt-1.5 font-serif text-xl italic">{nombre}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{info.descripcion}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <p className="text-xl font-semibold text-terracotta">
            {formatearPrecio(producto.precio, idioma)}
          </p>
          {/* El ::after cubre toda la tarjeta. Es un enlace real a la ficha (Google lo sigue y se
              puede abrir en otra pestaña), pero un clic común abre el detalle en la ventana. */}
          <Link
            href={conIdioma(idioma, `/suculentas/${producto.slug}`)}
            onClick={(evento) => {
              if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
              evento.preventDefault();
              onAbrir(producto, evento);
            }}
            aria-label={`${t.catalogo.verDetalles}: ${nombre}`}
            className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-sage-dark after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-sage"
          >
            {t.catalogo.verDetalles}
            <ArrowRight
              className="size-4 transition group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink/55">
          <Gift className="size-3.5" aria-hidden="true" />
          {t.catalogo.incluye}
        </p>

        <a
          href={linkWhatsApp(t.whatsapp.producto(nombre))}
          {...linkExterno}
          data-ubicacion="tarjeta"
          data-producto={producto.slug}
          className="relative z-10 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white transition hover:bg-sage-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          <WhatsAppIcon className="size-4" />
          {t.catalogo.comprar}
        </a>
      </div>
    </article>
  );
}

function Catalogo({ t, idioma, onAbrir }) {
  return (
    <section id="catalogo" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-terracotta-dark uppercase">
            {t.catalogo.etiqueta}
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{t.catalogo.titulo}</h2>
          <p className="mt-4 leading-relaxed text-ink/70">{t.catalogo.texto}</p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {productos.map((producto) => (
            <TarjetaProducto
              key={producto.slug}
              producto={producto}
              idioma={idioma}
              t={t}
              onAbrir={onAbrir}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SobreNosotros({ t }) {
  return (
    <section id="nosotros" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-terracotta-dark uppercase">
            {t.nosotros.etiqueta}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance sm:text-4xl">
            {t.nosotros.titulo}
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink/75">
            {t.nosotros.parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm font-medium text-sage-dark">
              <MapPin className="size-4" aria-hidden="true" />
              {t.nosotros.ubicacion}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-4 py-2 text-sm font-medium text-terracotta-dark">
              <Sprout className="size-4" aria-hidden="true" />
              {t.nosotros.desde}
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {t.nosotros.valores.map(({ titulo, texto }, i) => {
            const Icono = ICONOS_VALORES[i];
            return (
              <li
                key={titulo}
                className="flex gap-4 rounded-xl bg-cream p-6 ring-1 ring-ink/5 sm:flex-col lg:flex-row"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-terracotta/10 text-terracotta">
                  <Icono className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg">{titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{texto}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Ideas({ t, idioma }) {
  return (
    <section id="ideas" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-terracotta-dark uppercase">
            {t.ideas.etiqueta}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance sm:text-4xl">
            {t.ideas.titulo}
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">{t.ideas.texto}</p>
          <a
            href={INSTAGRAM_URL}
            {...linkExterno}
            className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-left text-sm shadow-sm ring-1 ring-ink/5 transition hover:ring-sage/40"
          >
            <InstagramIcon className="size-5 shrink-0 text-terracotta" />
            <span>
              <span className="font-medium text-ink">{t.ideas.seguidores(SEGUIDORES_INSTAGRAM)}</span>
              <span className="hidden text-ink/30 sm:inline" aria-hidden="true">
                {" · "}
              </span>
              <span className="block font-medium text-sage-dark sm:inline">{t.ideas.verInstagram}</span>
            </span>
          </a>
        </header>

        <div className="mt-12">
          <CarruselIdeas t={t} idioma={idioma} />
        </div>
      </div>
    </section>
  );
}

export default function Inicio({ idioma }) {
  const [productoActivo, setProductoActivo] = useState(null);
  const disparador = useRef(null);
  const t = textos[idioma];

  const abrirProducto = (producto, evento) => {
    disparador.current = evento.currentTarget;
    setProductoActivo(producto);
  };

  const cerrarProducto = useCallback(() => setProductoActivo(null), []);

  return (
    <>
      {/* Con el detalle abierto, el resto de la página queda inactiva (foco y clics) */}
      <div inert={productoActivo !== null} className="flex flex-1 flex-col">
        <Navbar idioma={idioma} />
        <main>
          <Hero t={t} />
          <Catalogo t={t} idioma={idioma} onAbrir={abrirProducto} />
          <ComoComprar t={t} />
          <SobreNosotros t={t} />
          <Ideas t={t} idioma={idioma} />
          <PreguntasFrecuentes
            t={t}
            precio={formatearPrecio(precioDesde, idioma)}
            enlaceWhatsApp={linkWhatsApp(t.whatsapp.consulta)}
          />
        </main>
        <Footer idioma={idioma} />
      </div>

      <AnimatePresence onExitComplete={() => disparador.current?.focus()}>
        {productoActivo && (
          <ModalProducto
            key={productoActivo.slug}
            producto={productoActivo}
            idioma={idioma}
            t={t}
            onCerrar={cerrarProducto}
          />
        )}
      </AnimatePresence>
    </>
  );
}
