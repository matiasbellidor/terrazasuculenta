"use client";

import { useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID, registrarEvento } from "@/lib/analitica";
import { productos } from "@/lib/datos";

// Cada clic en un enlace de WhatsApp es la conversión del sitio: se registra como generate_lead
// con dónde estaba el botón (data-ubicacion) y, si corresponde, la planta (data-producto).
export default function Analitica() {
  useEffect(() => {
    if (!GA_ID) return;

    const alHacerClic = (evento) => {
      const enlace = evento.target.closest?.('a[href^="https://wa.me/"]');
      if (!enlace) return;
      const planta = productos.find((p) => p.slug === enlace.dataset.producto);
      registrarEvento("generate_lead", {
        method: "whatsapp",
        ubicacion: enlace.dataset.ubicacion ?? "otro",
        producto: planta?.slug ?? "consulta",
        idioma: document.documentElement.lang,
        ...(planta && { currency: "ARS", value: planta.precio }),
      });
    };

    document.addEventListener("click", alHacerClic);
    return () => document.removeEventListener("click", alHacerClic);
  }, []);

  return GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null;
}
