// Todos los textos de la página, en español e inglés.
// Los datos de cada planta (nombre común, cuidados) están en lib/datos.js.
export const textos = {
  es: {
    meta: {
      titulo: "Suculentas en Palermo con envío en CABA | Terraza Suculenta",
      descripcion: (precio) =>
        `Tienda boutique de suculentas en Palermo. Cada planta viene con maceta y presentación de regalo, a ${precio}. Envíos en CABA y retiro en Las Cañitas.`,
      imagenAlt:
        "Terraza Suculenta: suculentas con maceta y presentación de regalo, en Palermo. Envíos en CABA y compra por WhatsApp.",
    },
    cargando: "Cargando…",
    nav: {
      catalogo: "Catálogo",
      comoComprar: "Cómo comprar",
      preguntas: "Preguntas frecuentes",
      nosotros: "Nosotros",
      ideas: "Ideas",
      idioma: "View in English",
      instagram: "Instagram de Terraza Suculenta",
      whatsapp: "Escribinos por WhatsApp",
    },
    hero: {
      ubicacion: "Palermo · CABA",
      tituloAntes: "Decorá tu hogar con ",
      tituloDestacado: "simplicidad",
      tituloDespues: " y estética",
      subtitulo: "Suculentas seleccionadas para llenar de vida cada rincón de tu casa.",
      verCatalogo: "Ver catálogo",
      consulta: "Hacer una consulta",
      datos: ["Envíos en CABA", "Retiro en Las Cañitas", "Presentación de regalo incluida"],
    },
    catalogo: {
      etiqueta: "Catálogo",
      titulo: "Nuestras suculentas",
      texto:
        "Elegí tu favorita y coordinamos la compra por WhatsApp. Todas vienen con maceta y presentación de regalo.",
      verDetalles: "Ver detalles",
      comprar: "Comprar por WhatsApp",
      incluye: "Incluye maceta y presentación de regalo",
    },
    comoComprar: {
      etiqueta: "Cómo comprar",
      titulo: "Tu suculenta en tres pasos",
      pasos: [
        {
          titulo: "Elegí tu suculenta",
          texto: "Mirá el catálogo y tocá «Comprar por WhatsApp» en la que más te guste.",
        },
        {
          titulo: "Escribinos por WhatsApp",
          texto:
            "Te llega el mensaje armado. Pagás por transferencia bancaria, Mercado Pago o en efectivo.",
        },
        {
          titulo: "Recibila o retirala",
          texto:
            "Te la enviamos dentro de CABA o la retirás en Las Cañitas, Palermo, en el horario que acordemos.",
        },
      ],
    },
    preguntas: {
      etiqueta: "Preguntas frecuentes",
      titulo: "Lo que más nos preguntan",
      otraPregunta: "¿Tenés otra pregunta?",
      escribinos: "Escribinos por WhatsApp",
      lista: [
        {
          pregunta: "¿Qué incluye el precio?",
          respuesta: (precio) =>
            `La suculenta, su maceta y una presentación lista para regalar. Todas cuestan ${precio}.`,
        },
        {
          pregunta: "¿Hacen envíos?",
          respuesta: "Sí, dentro de CABA. El costo y el día de entrega los coordinamos por WhatsApp.",
        },
        {
          pregunta: "¿Puedo retirarla?",
          respuesta:
            "Sí. Tenemos un punto de retiro en Las Cañitas, Palermo. Te pasamos la dirección por WhatsApp y acordamos el horario.",
        },
        {
          pregunta: "¿Cómo puedo pagar?",
          respuesta: "Con transferencia bancaria, Mercado Pago o efectivo.",
        },
        {
          pregunta: "¿Sirve para regalar?",
          respuesta:
            "Sí. Cada planta viene con una presentación de regalo. Si es para otra persona, avisanos y coordinamos la entrega.",
        },
        {
          pregunta: "¿Cómo la cuido?",
          respuesta:
            "Cada planta tiene su ficha con luz, riego, dificultad y tamaño: tocá «Ver detalles» en el catálogo. Si te queda alguna duda, escribinos.",
        },
      ],
    },
    producto: {
      migas: "Ruta de navegación",
      otras: "Otras suculentas",
      volver: "Ver todo el catálogo",
      verFicha: "Ver ficha completa",
    },
    modal: {
      cerrar: "Cerrar",
      caracteristicas: "Características",
      luz: "Luz",
      riego: "Riego",
      dificultad: "Dificultad",
      tamano: "Tamaño",
    },
    nosotros: {
      etiqueta: "Sobre nosotros",
      titulo: "Una tienda pensada para tu hogar",
      parrafos: [
        "Terraza Suculenta es un emprendimiento de Palermo dedicado a las suculentas. Elegimos cada planta a mano, pensando en que sea fácil de cuidar y linda de mirar.",
        "Empezamos en 2023 y muchas personas ya confiaron en nosotros para decorar sus hogares.",
        "Queremos ayudarte a decorar tu hogar con simplicidad y estética.",
      ],
      desde: "Desde 2023",
      ubicacion: "CABA | Palermo",
      valores: [
        {
          titulo: "Selección cuidada",
          texto: "Cada ejemplar se elige por su forma, su color y su salud.",
        },
        {
          titulo: "Pensadas para decorar",
          texto: "Plantas que suman calidez a livings, escritorios y balcones.",
        },
        {
          titulo: "Atención personalizada",
          texto: "Te asesoramos por WhatsApp para que encuentres la ideal.",
        },
      ],
    },
    ideas: {
      etiqueta: "Ideas",
      titulo: "Ideas para tu rincón",
      texto: "Algunas formas de sumar suculentas a tu casa.",
      seguidores: (cantidad) => `Más de ${cantidad.toLocaleString("es-AR")} personas nos siguen en Instagram`,
      verInstagram: "Ver más en Instagram",
      carrusel: "Ideas de decoración",
      alt: "Ilustración",
      anterior: "Idea anterior",
      siguiente: "Idea siguiente",
    },
    footer: {
      lema: "Una tienda que busca ayudarte a decorar tu hogar, mostrando simplicidad y estética.",
      secciones: "Secciones",
      inicio: "Inicio",
      contacto: "Contacto",
      derechos: "Todos los derechos reservados.",
    },
    whatsapp: {
      consulta: "¡Hola! Quisiera hacer una consulta.",
      producto: (nombre) => `Hola Terraza Suculenta, quiero la suculenta ${nombre}`,
    },
  },

  en: {
    meta: {
      titulo: "Succulents in Palermo, Buenos Aires | Terraza Suculenta",
      descripcion: (precio) =>
        `Boutique succulent shop in Palermo, Buenos Aires. Each plant comes with a pot and a gift presentation for ${precio}. City delivery and pickup in Las Cañitas.`,
      imagenAlt:
        "Terraza Suculenta: succulents with a pot and gift presentation, in Palermo. Delivery in Buenos Aires City and ordering on WhatsApp.",
    },
    cargando: "Loading…",
    nav: {
      catalogo: "Catalog",
      comoComprar: "How to buy",
      preguntas: "FAQ",
      nosotros: "About",
      ideas: "Ideas",
      idioma: "Ver en español",
      instagram: "Terraza Suculenta on Instagram",
      whatsapp: "Message us on WhatsApp",
    },
    hero: {
      ubicacion: "Palermo · Buenos Aires",
      tituloAntes: "Decorate your home with ",
      tituloDestacado: "simplicity",
      tituloDespues: " and style",
      subtitulo: "Hand-picked succulents to bring every corner of your home to life.",
      verCatalogo: "View catalog",
      consulta: "Send us a message",
      datos: ["Delivery in Buenos Aires City", "Pickup in Las Cañitas", "Gift presentation included"],
    },
    catalogo: {
      etiqueta: "Catalog",
      titulo: "Our succulents",
      texto:
        "Pick your favorite and we'll arrange your purchase on WhatsApp. Every one comes with its pot and a gift presentation.",
      verDetalles: "View details",
      comprar: "Buy on WhatsApp",
      incluye: "Pot and gift presentation included",
    },
    comoComprar: {
      etiqueta: "How to buy",
      titulo: "Your succulent in three steps",
      pasos: [
        {
          titulo: "Pick your succulent",
          texto: "Browse the catalog and tap “Buy on WhatsApp” on the one you like.",
        },
        {
          titulo: "Message us on WhatsApp",
          texto: "Your message comes pre-filled. Pay by bank transfer, Mercado Pago or cash.",
        },
        {
          titulo: "Get it delivered or pick it up",
          texto:
            "We deliver within Buenos Aires City, or you can pick it up in Las Cañitas, Palermo, at a time we agree on.",
        },
      ],
    },
    preguntas: {
      etiqueta: "FAQ",
      titulo: "What people ask us most",
      otraPregunta: "Have another question?",
      escribinos: "Message us on WhatsApp",
      lista: [
        {
          pregunta: "What does the price include?",
          respuesta: (precio) =>
            `The succulent, its pot and a gift-ready presentation. They all cost ${precio}.`,
        },
        {
          pregunta: "Do you deliver?",
          respuesta:
            "Yes, within Buenos Aires City. We arrange the delivery cost and day on WhatsApp.",
        },
        {
          pregunta: "Can I pick it up?",
          respuesta:
            "Yes. We have a pickup point in Las Cañitas, Palermo. We'll send you the address on WhatsApp and agree on a time.",
        },
        {
          pregunta: "How can I pay?",
          respuesta: "By bank transfer, Mercado Pago or cash.",
        },
        {
          pregunta: "Is it a good gift?",
          respuesta:
            "Yes. Every plant comes with a gift presentation. If it's for someone else, let us know and we'll arrange the delivery.",
        },
        {
          pregunta: "How do I care for it?",
          respuesta:
            "Each plant has a care sheet with light, watering, difficulty and size: tap “View details” in the catalog. If you have any questions, message us.",
        },
      ],
    },
    producto: {
      migas: "Breadcrumb",
      otras: "Other succulents",
      volver: "See the full catalog",
      verFicha: "Open full page",
    },
    modal: {
      cerrar: "Close",
      caracteristicas: "Features",
      luz: "Light",
      riego: "Watering",
      dificultad: "Difficulty",
      tamano: "Size",
    },
    nosotros: {
      etiqueta: "About us",
      titulo: "A shop designed for your home",
      parrafos: [
        "Terraza Suculenta is a small business from Palermo, Buenos Aires, devoted to succulents. We hand-pick every plant, making sure it's easy to care for and beautiful to look at.",
        "We started in 2023 and many people have already trusted us to decorate their homes.",
        "We want to help you decorate your home with simplicity and style.",
      ],
      desde: "Since 2023",
      ubicacion: "Palermo | Buenos Aires",
      valores: [
        {
          titulo: "Carefully selected",
          texto: "Every plant is chosen for its shape, color and health.",
        },
        {
          titulo: "Made for decorating",
          texto: "Plants that bring warmth to living rooms, desks and balconies.",
        },
        {
          titulo: "Personal service",
          texto: "We'll help you on WhatsApp to find the right one.",
        },
      ],
    },
    ideas: {
      etiqueta: "Ideas",
      titulo: "Ideas for your corner",
      texto: "A few ways to bring succulents into your home.",
      seguidores: (cantidad) => `More than ${cantidad.toLocaleString("en-US")} people follow us on Instagram`,
      verInstagram: "See more on Instagram",
      carrusel: "Decorating ideas",
      alt: "Illustration",
      anterior: "Previous idea",
      siguiente: "Next idea",
    },
    footer: {
      lema: "A shop that aims to help you decorate your home with simplicity and style.",
      secciones: "Sections",
      inicio: "Home",
      contacto: "Contact",
      derechos: "All rights reserved.",
    },
    whatsapp: {
      consulta: "Hi! I have a question.",
      producto: (nombre) => `Hi Terraza Suculenta, I'd like to buy the ${nombre} succulent`,
    },
  },
};
