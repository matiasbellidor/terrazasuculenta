// Plugin de Embla: desplazamiento continuo con velocidad ajustable mientras se mueve.
// Sigue la misma técnica que embla-carousel-auto-scroll, que no permite cambiar la velocidad en marcha.
// La velocidad está en píxeles por cuadro (a 60 cuadros por segundo, 0,8 ≈ 48 px/s).
export function crearDesplazamiento({ velocidad = 0.8, velocidadLenta = 0.25 } = {}) {
  const estado = { objetivo: velocidad, actual: velocidad };
  let api;
  let cuerpoOriginal;
  let activo = false;

  function crearCuerpo(engine) {
    const { location, previousLocation, target, scrollTarget, index, indexPrevious } = engine;
    let velocidadCuerpo = 0;

    const cuerpo = {
      direction: () => -1,
      duration: () => -1,
      velocity: () => velocidadCuerpo,
      settled: () => false,
      seek() {
        // Acerca de a poco la velocidad a la buscada: frena y acelera sin saltos.
        estado.actual += (estado.objetivo - estado.actual) * 0.05;
        previousLocation.set(location);
        velocidadCuerpo = -estado.actual;
        location.add(velocidadCuerpo);
        target.set(location);
        const indiceActual = scrollTarget.byDistance(0, false).index;
        if (index.get() !== indiceActual) {
          indexPrevious.set(index.get());
          index.set(indiceActual);
          api.emit("select");
        }
        return cuerpo;
      },
      useBaseFriction: () => cuerpo,
      useBaseDuration: () => cuerpo,
      useFriction: () => cuerpo,
      useDuration: () => cuerpo,
    };
    return cuerpo;
  }

  function iniciar() {
    if (activo || !api) return;
    const engine = api.internalEngine();
    engine.scrollBody = crearCuerpo(engine);
    engine.animation.start();
    activo = true;
  }

  function detener() {
    api?.off("scroll", revisarInercia).off("settle", retomar);
    if (!activo) return;
    api.internalEngine().scrollBody = cuerpoOriginal;
    activo = false;
  }

  function retomar() {
    api.off("scroll", revisarInercia).off("settle", retomar);
    // Arranca desde cero y acelera de a poco hasta la velocidad buscada.
    estado.actual = 0;
    iniciar();
  }

  // Tras un arrastre con impulso, no espera a que frene del todo: retoma apenas va lento.
  function revisarInercia() {
    if (Math.abs(api.internalEngine().scrollBody.velocity()) < 0.5) retomar();
  }

  // Después de arrastrar con el dedo o de usar las flechas, retoma solo.
  function reanudarAlAsentarse() {
    api.off("scroll", revisarInercia).off("settle", retomar);
    api.on("scroll", revisarInercia).on("settle", retomar);
  }

  return {
    name: "desplazamiento",
    options: {},
    init(emblaApi) {
      api = emblaApi;
      if (api.scrollSnapList().length <= 1) return;
      cuerpoOriginal = api.internalEngine().scrollBody;
      api.on("pointerDown", detener);
      api.on("pointerUp", reanudarAlAsentarse);
      iniciar();
    },
    destroy() {
      if (!api) return;
      api
        .off("pointerDown", detener)
        .off("pointerUp", reanudarAlAsentarse)
        .off("scroll", revisarInercia)
        .off("settle", retomar);
      detener();
      api = undefined;
    },
    lento(siLento) {
      estado.objetivo = siLento ? velocidadLenta : velocidad;
    },
    pausarYMover(mover) {
      if (!api) return mover();
      detener();
      mover();
      reanudarAlAsentarse();
    },
  };
}
