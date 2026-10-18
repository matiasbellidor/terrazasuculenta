import { Plus } from "lucide-react";
import { WhatsAppIcon } from "@/components/IconosMarca";

export default function PreguntasFrecuentes({ t, precio, enlaceWhatsApp }) {
  return (
    <section id="preguntas" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-terracotta-dark uppercase">
            {t.preguntas.etiqueta}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-balance sm:text-4xl">
            {t.preguntas.titulo}
          </h2>
        </header>

        {/* <details> deja las respuestas en el HTML: las leen Google y los asistentes de IA */}
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {t.preguntas.lista.map(({ pregunta, respuesta }) => (
            <details key={pregunta} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium text-ink transition hover:text-sage-dark [&::-webkit-details-marker]:hidden">
                {pregunta}
                <Plus
                  className="size-5 shrink-0 text-sage-dark transition group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink/70 sm:text-base">
                {typeof respuesta === "function" ? respuesta(precio) : respuesta}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-ink/70">{t.preguntas.otraPregunta}</p>
          <a
            href={enlaceWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sage-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            <WhatsAppIcon className="size-4" />
            {t.preguntas.escribinos}
          </a>
        </div>
      </div>
    </section>
  );
}
