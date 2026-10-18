"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clientes } from "@/lib/datos";

const claseFlecha =
  "grid size-11 cursor-pointer place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-ink/10 transition hover:text-sage-dark hover:ring-sage/40 focus-visible:outline-2 focus-visible:outline-sage";

export default function CarruselClientes({ t }) {
  const reducirMovimiento = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    // Se desliza solo, sin pausas; se frena con el mouse encima y retoma al salir.
    // Queda quieto si el sistema pide menos movimiento.
    reducirMovimiento
      ? []
      : [AutoScroll({ speed: 0.8, startDelay: 600, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  // La flecha frena el deslizamiento, mueve una historia y lo retoma cuando termina.
  const mover = useCallback(
    (direccion) => {
      if (!emblaApi) return;
      emblaApi.plugins().autoScroll?.reset();
      if (direccion === "anterior") emblaApi.scrollPrev();
      else emblaApi.scrollNext();
    },
    [emblaApi]
  );

  return (
    <div role="region" aria-roledescription="carousel" aria-label={t.clientes.carrusel}>
      {/* Bordes laterales difuminados: las historias aparecen y se van suavemente */}
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]"
        ref={emblaRef}
      >
        <div className="-ml-4 flex touch-pan-y touch-pinch-zoom">
          {clientes.map((foto, i) => (
            <div
              key={foto}
              className="min-w-0 shrink-0 grow-0 basis-3/5 pl-4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              {/* Formato vertical de historia de Instagram (9:16) */}
              <div className="relative aspect-9/16 overflow-hidden rounded-xl bg-sage/10 shadow-sm ring-1 ring-ink/5">
                <Image
                  src={foto}
                  alt={`${t.clientes.alt} (${i + 1})`}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => mover("anterior")}
          aria-label={t.clientes.anterior}
          className={claseFlecha}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => mover("siguiente")}
          aria-label={t.clientes.siguiente}
          className={claseFlecha}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
