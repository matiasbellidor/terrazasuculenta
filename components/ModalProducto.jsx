"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Droplets, Gauge, Ruler, Sun, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/IconosMarca";
import { formatearPrecio, linkWhatsApp } from "@/lib/datos";
import { useBloquearScroll } from "@/lib/useBloquearScroll";

const CARACTERISTICAS = [
  { clave: "luz", icono: Sun },
  { clave: "riego", icono: Droplets },
  { clave: "dificultad", icono: Gauge },
  { clave: "tamano", icono: Ruler },
];

export default function ModalProducto({ producto, idioma, t, onCerrar }) {
  const botonCerrar = useRef(null);
  const info = producto[idioma];

  useBloquearScroll(true);

  // Foco en "Cerrar" al abrir y Escape para salir.
  useEffect(() => {
    botonCerrar.current?.focus();

    const alPresionarTecla = (evento) => {
      if (evento.key === "Escape") onCerrar();
    };
    window.addEventListener("keydown", alPresionarTecla);
    return () => window.removeEventListener("keydown", alPresionarTecla);
  }, [onCerrar]);

  return (
    <div className="fixed inset-0 z-60 flex items-end justify-center sm:items-center sm:p-6">
      <motion.div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onCerrar}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-producto-titulo"
        className="relative w-full max-w-4xl overflow-hidden rounded-t-2xl bg-cream shadow-2xl sm:rounded-2xl"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 48 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          ref={botonCerrar}
          type="button"
          onClick={onCerrar}
          aria-label={t.modal.cerrar}
          className="absolute top-3 right-3 z-10 grid size-10 cursor-pointer place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-sage"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="grid max-h-[92svh] overflow-y-auto md:grid-cols-2">
          <div className="relative aspect-4/3 bg-sage/10 md:aspect-auto md:min-h-[540px]">
            <Image
              src={producto.imagen}
              alt={`${producto.nombre} (${info.nombreComun})`}
              fill
              sizes="(min-width: 896px) 448px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-sage-dark uppercase">
              {info.nombreComun}
            </p>
            <h2
              id="modal-producto-titulo"
              className="mt-1.5 pr-10 font-serif text-3xl italic md:pr-0"
            >
              {producto.nombre}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{info.descripcion}</p>
            <p className="mt-5 text-2xl font-semibold text-terracotta">
              {formatearPrecio(producto.precio, idioma)}
            </p>

            <h3 className="mt-8 text-xs font-semibold tracking-[0.2em] text-ink/50 uppercase">
              {t.modal.caracteristicas}
            </h3>
            <dl className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
              {CARACTERISTICAS.map(({ clave, icono: Icono }) => (
                <div key={clave} className="py-3.5">
                  <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-sage-dark uppercase">
                    <Icono className="size-4" aria-hidden="true" />
                    {t.modal[clave]}
                  </dt>
                  <dd className="mt-1 pl-6 text-sm text-ink">{info[clave]}</dd>
                </div>
              ))}
            </dl>

            {/* En celulares el botón queda fijo abajo para no tener que scrollear */}
            <div className="sticky bottom-0 -mx-6 mt-8 -mb-6 border-t border-ink/10 bg-cream/95 px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur sm:-mx-8 sm:-mb-8 sm:px-8 md:static md:m-0 md:mt-8 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
              <a
                href={linkWhatsApp(t.whatsapp.producto(producto.nombre))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sage px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sage-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                <WhatsAppIcon className="size-4" />
                {t.catalogo.comprar}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
