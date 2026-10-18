import { useEffect } from "react";

// Bloquea el scroll de la página sin que el contenido "salte" al ocultarse la barra.
export function useBloquearScroll(activo) {
  useEffect(() => {
    if (!activo) return;
    const raiz = document.documentElement;
    const anchoBarra = window.innerWidth - raiz.clientWidth;
    raiz.style.overflow = "hidden";
    raiz.style.paddingRight = `${anchoBarra}px`;
    return () => {
      raiz.style.overflow = "";
      raiz.style.paddingRight = "";
    };
  }, [activo]);
}
