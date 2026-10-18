"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import LogoMarca from "@/components/LogoMarca";
import { CLAVE_PRELOADER, VIGENCIA_PRELOADER } from "@/lib/preloader";
import { useBloquearScroll } from "@/lib/useBloquearScroll";

// Tiempo mínimo en pantalla y tope máximo, en milisegundos desde que carga el JS.
const DURACION_MINIMA = 900;
const DURACION_MAXIMA = 2000;

// El script de app/layout.jsx lee la misma clave antes de que cargue React,
// para que en las visitas siguientes la pantalla no parpadee.

// Valores fijos (no aleatorios) para que el HTML del servidor y el del navegador coincidan.
const HOJAS = [
  { x: 6, tamano: 22, duracion: 6.2, retraso: 0, giro: 260, tono: "text-sage" },
  { x: 15, tamano: 14, duracion: 7.4, retraso: 1.1, giro: -200, tono: "text-sage-dark/70" },
  { x: 24, tamano: 18, duracion: 5.6, retraso: 0.4, giro: 320, tono: "text-sage/70" },
  { x: 33, tamano: 12, duracion: 6.8, retraso: 1.6, giro: -280, tono: "text-sage" },
  { x: 44, tamano: 20, duracion: 7.1, retraso: 0.8, giro: 240, tono: "text-sage-dark/60" },
  { x: 55, tamano: 15, duracion: 5.9, retraso: 0.2, giro: -300, tono: "text-sage/80" },
  { x: 64, tamano: 24, duracion: 6.6, retraso: 1.3, giro: 200, tono: "text-sage" },
  { x: 73, tamano: 13, duracion: 7.6, retraso: 0.6, giro: -240, tono: "text-sage-dark/70" },
  { x: 82, tamano: 19, duracion: 5.8, retraso: 1.8, giro: 300, tono: "text-sage/70" },
  { x: 91, tamano: 16, duracion: 6.9, retraso: 0.3, giro: -260, tono: "text-sage" },
];

const PARTICULAS = [
  { x: 10, y: 72, tamano: 4, duracion: 3.4, retraso: 0.2, tono: "bg-sage/40" },
  { x: 20, y: 40, tamano: 3, duracion: 2.8, retraso: 1.0, tono: "bg-terracotta/40" },
  { x: 29, y: 82, tamano: 5, duracion: 3.8, retraso: 0.6, tono: "bg-sage/30" },
  { x: 38, y: 25, tamano: 3, duracion: 3.1, retraso: 1.4, tono: "bg-sage/40" },
  { x: 61, y: 78, tamano: 4, duracion: 3.6, retraso: 0.4, tono: "bg-terracotta/30" },
  { x: 70, y: 30, tamano: 3, duracion: 2.9, retraso: 1.2, tono: "bg-sage/40" },
  { x: 79, y: 64, tamano: 5, duracion: 3.9, retraso: 0.8, tono: "bg-sage/30" },
  { x: 88, y: 45, tamano: 3, duracion: 3.2, retraso: 1.6, tono: "bg-terracotta/40" },
];

function Hoja() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
      <path d="M4 20C4 10.5 10.5 4 20 4c0 9.5-6.5 16-16 16Z" />
      <path d="M4 20 14 10" stroke="#fafafa" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function Naturaleza() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {HOJAS.map((hoja, i) => (
        <motion.div
          key={`hoja-${i}`}
          className={`absolute top-0 ${hoja.tono}`}
          style={{ left: `${hoja.x}%`, width: hoja.tamano, height: hoja.tamano }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.9, 0.9, 0],
            rotate: hoja.giro,
            x: [0, 24, -16, 12, 0],
          }}
          transition={{
            duration: hoja.duracion,
            delay: hoja.retraso,
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: hoja.duracion, delay: hoja.retraso, repeat: Infinity, times: [0, 0.1, 0.8, 1] },
            x: { duration: hoja.duracion, delay: hoja.retraso, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Hoja />
        </motion.div>
      ))}

      {PARTICULAS.map((particula, i) => (
        <motion.span
          key={`particula-${i}`}
          className={`absolute rounded-full ${particula.tono}`}
          style={{
            left: `${particula.x}%`,
            top: `${particula.y}%`,
            width: particula.tamano,
            height: particula.tamano,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: -48 }}
          transition={{
            duration: particula.duracion,
            delay: particula.retraso,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Preloader({ etiqueta }) {
  const [visible, setVisible] = useState(true);
  const reducirMovimiento = useReducedMotion();

  // Se oculta cuando terminó de cargar la página y pasó el tiempo mínimo.
  useEffect(() => {
    let yaVisto = false;
    try {
      const ultimaVez = Number(localStorage.getItem(CLAVE_PRELOADER));
      yaVisto = ultimaVez > 0 && Date.now() - ultimaVez < VIGENCIA_PRELOADER;
      if (!yaVisto) localStorage.setItem(CLAVE_PRELOADER, String(Date.now()));
    } catch {}

    if (yaVisto) {
      const inmediato = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(inmediato);
    }

    const inicio = performance.now();
    let temporizador;

    const ocultar = () => {
      const restante = Math.max(0, DURACION_MINIMA - (performance.now() - inicio));
      temporizador = setTimeout(() => setVisible(false), restante);
    };

    if (document.readyState === "complete") ocultar();
    else window.addEventListener("load", ocultar, { once: true });

    const tope = setTimeout(() => setVisible(false), DURACION_MAXIMA);

    return () => {
      clearTimeout(temporizador);
      clearTimeout(tope);
      window.removeEventListener("load", ocultar);
    };
  }, []);

  useBloquearScroll(visible);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          role="status"
          className="preloader-respaldo fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-cream"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <span className="sr-only">{etiqueta}</span>

          {!reducirMovimiento && <Naturaleza />}

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 1.05 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {!reducirMovimiento && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-sage/25"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.45, opacity: [0, 0.7, 0] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
                  aria-hidden="true"
                />
              )}
              <LogoMarca
                ancho={168}
                loading="eager"
                className="size-24 shadow-lg ring-1 ring-ink/5 sm:size-28"
              />
            </div>

            <motion.p
              className="mt-6 font-serif text-2xl tracking-tight text-ink"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            >
              Terraza Suculenta
            </motion.p>

            <motion.span
              className="mt-4 h-px w-24 origin-left bg-terracotta"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1.1, ease: "easeInOut" }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
