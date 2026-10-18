"use client";

import { useEffect } from "react";
import { registrarVistaProducto } from "@/lib/analitica";
import { productos } from "@/lib/datos";

export default function EventoVistaProducto({ slug }) {
  useEffect(() => {
    const planta = productos.find((p) => p.slug === slug);
    if (planta) registrarVistaProducto(planta);
  }, [slug]);

  return null;
}
