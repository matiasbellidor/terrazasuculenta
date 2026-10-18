"use client";

import { useEffect, useState } from "react";
import LogoMarca from "@/components/LogoMarca";
import { useBloquearScroll } from "@/lib/useBloquearScroll";

// La animación vive en CSS (clases .intro-* de app/globals.css): arranca con el primer pintado,
// sin esperar a React, y se va sola aunque JavaScript no cargue. Este componente solo traba el
// scroll mientras dura y la saca del DOM al terminar.
// 2,4 s en pantalla + 0,9 s de salida: coincide con --intro-pausa y --intro-salida.
const DURACION = 3300;

// Se ve en cada entrada al sitio, pero no al navegar dentro de él (por ejemplo, al cambiar de idioma).
const intro = { mostrada: false };

// Valores fijos (no aleatorios) para que el HTML del servidor y el del navegador coincidan.
const HOJAS = [
  { x: 6, desde: -8, tam: 14, dur: 3.6, retraso: 0, giro: 120, vaiven: 12, tono: "text-sage/40" },
  { x: 18, desde: 20, tam: 10, dur: 3.4, retraso: 0.3, giro: -90, vaiven: -10, tono: "text-sage-dark/30" },
  { x: 31, desde: -4, tam: 12, dur: 3.8, retraso: 0.1, giro: 150, vaiven: 14, tono: "text-sage/35" },
  { x: 44, desde: 52, tam: 9, dur: 3.2, retraso: 0.5, giro: -120, vaiven: -8, tono: "text-sage-dark/25" },
  { x: 62, desde: 6, tam: 13, dur: 3.7, retraso: 0.2, giro: 110, vaiven: 12, tono: "text-sage/40" },
  { x: 74, desde: 30, tam: 10, dur: 3.3, retraso: 0.4, giro: -140, vaiven: -12, tono: "text-sage-dark/30" },
  { x: 86, desde: -10, tam: 15, dur: 3.9, retraso: 0, giro: 90, vaiven: 10, tono: "text-sage/35" },
  { x: 94, desde: 44, tam: 9, dur: 3.1, retraso: 0.6, giro: -100, vaiven: -9, tono: "text-sage/30" },
];

function Hoja() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M4 20C4 10.5 10.5 4 20 4c0 9.5-6.5 16-16 16Z" />
    </svg>
  );
}

export default function Intro() {
  const [visible, setVisible] = useState(() => !intro.mostrada);

  useEffect(() => {
    if (!visible) return;
    intro.mostrada = true;
    const fin = setTimeout(() => setVisible(false), DURACION);
    return () => clearTimeout(fin);
  }, [visible]);

  useBloquearScroll(visible);

  if (!visible) return null;

  return (
    <div
      className="intro fixed inset-0 z-100 grid place-items-center overflow-hidden bg-papel"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0">
        {HOJAS.map((hoja) => (
          <span
            key={`${hoja.x}-${hoja.desde}`}
            className={`intro-hoja absolute top-0 ${hoja.tono}`}
            style={{
              left: `${hoja.x}%`,
              width: hoja.tam,
              height: hoja.tam,
              animationDuration: `${hoja.dur}s`,
              animationDelay: `${hoja.retraso}s`,
              "--desde": `${hoja.desde}vh`,
              "--giro": `${hoja.giro}deg`,
              "--vaiven": `${hoja.vaiven}px`,
            }}
          >
            <Hoja />
          </span>
        ))}
      </div>

      <div className="intro-contenido relative flex flex-col items-center px-6">
        <div className="relative">
          <span className="intro-halo absolute -inset-12 rounded-full bg-white/80 blur-2xl" />
          <LogoMarca ancho={120} loading="eager" className="intro-logo size-20 shadow-sm ring-1 ring-ink/5" />
        </div>
        <p className="intro-nombre mt-7 font-serif text-[26px] whitespace-nowrap text-ink">
          Terraza Suculenta
        </p>
        <span className="intro-linea mt-4 h-px w-10 bg-terracotta/70" />
        <p className="intro-lema mt-4 text-[10px] font-medium tracking-[0.35em] text-ink/45 uppercase">
          Palermo · Buenos Aires
        </p>
      </div>
    </div>
  );
}
