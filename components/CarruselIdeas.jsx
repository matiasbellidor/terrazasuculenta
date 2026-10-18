"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ideas } from "@/lib/datos";
import { crearDesplazamiento } from "@/lib/desplazamiento";

const claseFlecha =
  "grid size-11 cursor-pointer place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-ink/10 transition hover:text-sage-dark hover:ring-sage/40 focus-visible:outline-2 focus-visible:outline-sage";

export default function CarruselIdeas({ t, idioma }) {
  const reducirMovimiento = useReducedMotion();
  const [desplazamiento] = useState(() => crearDesplazamiento({ velocidad: 0.8, velocidadLenta: 0.25 }));
  // Se mueve siempre: con el mouse encima va más lento y con el dedo se puede arrastrar.
  // Queda quieto solo si el sistema pide menos movimiento.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    reducirMovimiento ? [] : [desplazamiento]
  );

  // La flecha frena el deslizamiento, mueve una idea y lo retoma cuando termina.
  const mover = useCallback(
    (direccion) => {
      if (!emblaApi) return;
      desplazamiento.pausarYMover(() =>
        direccion === "anterior" ? emblaApi.scrollPrev() : emblaApi.scrollNext()
      );
    },
    [emblaApi, desplazamiento]
  );

  // Solo el mouse lo frena: en pantallas táctiles no hay "encima" y quedaría lento para siempre.
  const alEntrar = (evento) => evento.pointerType === "mouse" && desplazamiento.lento(true);
  const alSalir = (evento) => evento.pointerType === "mouse" && desplazamiento.lento(false);

  return (
    <div role="region" aria-roledescription="carousel" aria-label={t.ideas.carrusel}>
      {/* Bordes laterales difuminados: las historias aparecen y se van suavemente */}
      <div
        className="cursor-grab overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] active:cursor-grabbing"
        ref={emblaRef}
        onPointerEnter={alEntrar}
        onPointerLeave={alSalir}
      >
        <div className="-ml-4 flex touch-pan-y touch-pinch-zoom">
          {ideas.map((idea) => (
            <div
              key={idea.imagen}
              className="min-w-0 shrink-0 grow-0 basis-3/5 pl-4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <figure className="relative aspect-9/16 overflow-hidden rounded-xl bg-sage/10 shadow-sm ring-1 ring-ink/5">
                <Image
                  src={idea.imagen}
                  alt={`${t.ideas.alt}: ${idea[idioma]}`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 60vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/65 to-transparent px-4 pt-14 pb-4 font-serif text-lg text-white">
                  {idea[idioma]}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => mover("anterior")}
          aria-label={t.ideas.anterior}
          className={claseFlecha}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => mover("siguiente")}
          aria-label={t.ideas.siguiente}
          className={claseFlecha}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
