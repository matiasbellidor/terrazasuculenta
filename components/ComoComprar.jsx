import { Leaf, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/IconosMarca";

const ICONOS = [Leaf, WhatsAppIcon, Truck];

export default function ComoComprar({ t }) {
  return (
    <section id="como-comprar" className="scroll-mt-16 bg-papel/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-terracotta-dark uppercase">
            {t.comoComprar.etiqueta}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance sm:text-4xl">
            {t.comoComprar.titulo}
          </h2>
        </header>

        <ol className="mt-12 grid gap-5 sm:grid-cols-3 lg:gap-8">
          {t.comoComprar.pasos.map(({ titulo, texto }, i) => {
            const Icono = ICONOS[i];
            return (
              <li key={titulo} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-sage/10 text-sage-dark">
                    <Icono className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-3xl text-ink/15" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{texto}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
