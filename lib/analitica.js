import { sendGAEvent } from "@next/third-parties/google";

// ID de Google Analytics 4 (G-XXXXXXX). Se configura en Vercel; sin él no se carga ni se envía nada.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function registrarEvento(nombre, parametros) {
  if (GA_ID) sendGAEvent("event", nombre, parametros);
}

// Evento recomendado de GA4 al ver una planta (ventana de detalle o ficha).
export function registrarVistaProducto(planta) {
  registrarEvento("view_item", {
    currency: "ARS",
    value: planta.precio,
    items: [{ item_id: planta.slug, item_name: planta.nombre, price: planta.precio }],
  });
}
