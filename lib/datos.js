export const WHATSAPP_NUMERO = "5491133941717";
export const WHATSAPP_VISIBLE = "+54 9 11 3394-1717";
export const INSTAGRAM_URL = "https://www.instagram.com/terrazasuculenta.ba/";
export const INSTAGRAM_USUARIO = "@terrazasuculenta.ba";

export const linkWhatsApp = (mensaje) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;

// En español: "$34.999". En inglés se aclara "ARS" para que no se lea como dólares.
export const formatearPrecio = (precio, idioma) =>
  idioma === "en"
    ? `ARS $${precio.toLocaleString("en-US")}`
    : `$${precio.toLocaleString("es-AR")}`;

// Para agregar una planta: sumá un objeto acá y su foto en /public/images.
// `nombre` es el nombre científico; si el producto no es una especie (un mix, un combo),
// se puede traducir poniendo `nombre` dentro de `es` y `en`.
export const productos = [
  {
    slug: "crassula-ovata-gollum",
    nombre: "Crassula ovata 'Gollum'",
    precio: 34999,
    imagen: "/images/crassula-ovata-gollum.jpg",
    es: {
      nombreComun: "Jade Gollum",
      descripcion:
        "Hojas tubulares que terminan en una ventosa, como pequeñas trompetas. Crece como un arbolito y, con buena luz, se le ponen rojas las puntas.",
      luz: "Mucha luz, con algunas horas de sol directo",
      riego: "Cada 15–20 días; en invierno, una vez por mes",
      dificultad: "Muy fácil",
      tamano: "Crece lento; con los años puede superar los 50 cm",
    },
    en: {
      nombreComun: "Gollum jade",
      descripcion:
        "Tubular leaves that end in a suction-cup tip, like tiny trumpets. It grows like a little tree, and in bright light the tips turn red.",
      luz: "Bright light with a few hours of direct sun",
      riego: "Every 15–20 days; once a month in winter",
      dificultad: "Very easy",
      tamano: "Slow-growing; can exceed 50 cm over the years",
    },
  },
  {
    slug: "pachyphytum-oviferum",
    nombre: "Pachyphytum oviferum",
    precio: 34999,
    imagen: "/images/pachyphytum-oviferum-terraza.jpg",
    es: {
      nombreComun: "Piedra de luna",
      descripcion:
        "Hojas gorditas con forma de huevo, cubiertas de un polvillo que les da un tono verde grisáceo con reflejos lilas. Conviene tocarla poco para no borrarlo.",
      luz: "Sol directo o mucha luz; así toma tonos rosados",
      riego: "Escaso, cada 2–3 semanas",
      dificultad: "Media",
      tamano: "Hasta 10 cm de alto",
    },
    en: {
      nombreComun: "Moonstones",
      descripcion:
        "Plump, egg-shaped leaves covered in a powdery coating that gives them a grey-green tone with lilac hints. Handle it gently so the powder stays.",
      luz: "Direct sun or very bright light brings out pink tones",
      riego: "Sparingly, every 2–3 weeks",
      dificultad: "Moderate",
      tamano: "Up to 10 cm tall",
    },
  },
  {
    slug: "echeveria",
    nombre: "Echeveria",
    precio: 34999,
    imagen: "/images/echeveria.jpg",
    es: {
      nombreComun: "Rosa de piedra",
      descripcion:
        "Roseta compacta verde agua con las puntas rojizas. Con más sol, el borde de las hojas se pone más rojo.",
      luz: "Mucha luz, con algunas horas de sol directo",
      riego: "Cada 10–15 días, con la tierra bien seca",
      dificultad: "Fácil",
      tamano: "Roseta compacta que entra en la palma de la mano",
    },
    en: {
      nombreComun: "Stone rose",
      descripcion:
        "Compact sea-green rosette with reddish tips. With more sun, the leaf edges turn redder.",
      luz: "Bright light with a few hours of direct sun",
      riego: "Every 10–15 days, once the soil is fully dry",
      dificultad: "Easy",
      tamano: "Compact rosette that fits in the palm of your hand",
    },
  },
  {
    slug: "haworthiopsis-fasciata",
    nombre: "Haworthiopsis fasciata",
    precio: 34999,
    imagen: "/images/haworthiopsis-fasciata.jpg",
    es: {
      nombreComun: "Cebrita",
      descripcion:
        "Hojas firmes y puntiagudas con franjas blancas en relieve, como una cebra. Antes se la conocía como Haworthia fasciata. Ideal para interiores.",
      luz: "Luz indirecta brillante; ideal para interiores",
      riego: "Cada 2–3 semanas",
      dificultad: "Muy fácil",
      tamano: "Entre 8 y 15 cm de alto",
    },
    en: {
      nombreComun: "Zebra plant",
      descripcion:
        "Firm, pointed leaves with raised white stripes, like a zebra. Formerly known as Haworthia fasciata. Great for indoors.",
      luz: "Bright indirect light; ideal indoors",
      riego: "Every 2–3 weeks",
      dificultad: "Very easy",
      tamano: "8–15 cm tall",
    },
  },
  {
    slug: "mix-rosetas-coloridas",
    nombre: "Mix de rosetas coloridas",
    precio: 34999,
    imagen: "/images/mix-rosetas-coloridas.jpg",
    es: {
      nombreComun: "Pachyveria y otras rosetas",
      descripcion:
        "Varias suculentas juntas en una misma maceta: una pachyveria azulada (una cruza de Pachyphytum y Echeveria) rodeada de rosetas verdes, rosadas y cobrizas. Un centro de mesa que ya viene armado.",
      luz: "Mucha luz, con sol suave; así mantienen sus colores",
      riego: "Cada 10–15 días, con la tierra bien seca",
      dificultad: "Fácil",
      tamano: "Varias rosetas en una misma maceta",
    },
    en: {
      nombre: "Colorful rosette mix",
      nombreComun: "Pachyveria and other rosettes",
      descripcion:
        "Several succulents together in one pot: a bluish pachyveria (a cross between Pachyphytum and Echeveria) surrounded by green, pink and copper rosettes. A ready-made centerpiece.",
      luz: "Bright light with soft sun keeps their colors",
      riego: "Every 10–15 days, once the soil is fully dry",
      dificultad: "Easy",
      tamano: "Several rosettes in one pot",
    },
  },
  {
    slug: "sucus-mini-para-regalar",
    nombre: "Sucus mini para regalar",
    precio: 15799,
    imagen: "/images/sucus-mini-para-regalar.jpg",
    es: {
      nombreComun: "Suculentas pequeñas",
      descripcion:
        "Echeverias y otras rosetas chiquitas en tonos verdes, rosados y anaranjados. Ideales como detalle para regalar o para empezar una colección. Preguntanos por WhatsApp qué variedades hay.",
      luz: "Mucha luz, con algunas horas de sol directo",
      riego: "Cada 7–10 días: en maceta chica la tierra se seca más rápido",
      dificultad: "Fácil",
      tamano: "Pequeñas, en maceta chica",
    },
    en: {
      nombre: "Mini succulents for gifting",
      nombreComun: "Small succulents",
      descripcion:
        "Tiny echeverias and other rosettes in green, pink and orange tones. Perfect as a small gift or to start a collection. Ask us on WhatsApp which varieties are available.",
      luz: "Bright light with a few hours of direct sun",
      riego: "Every 7–10 days: small pots dry out faster",
      dificultad: "Easy",
      tamano: "Small, in a little pot",
    },
  },
];

export const nombreDe = (producto, idioma) => producto[idioma].nombre ?? producto.nombre;

export const precioDesde = Math.min(...productos.map((producto) => producto.precio));

// Seguidores reales de Instagram (dato de la dueña, 2026-10-18). Se muestra redondeado hacia abajo.
export const SEGUIDORES_INSTAGRAM = 1000;

// Ideas para decorar (no son fotos de clientes).
// Cuando haya historias reales con permiso de cada persona, se pueden mostrar acá.
export const ideas = [
  { imagen: "/images/idea-ventana.jpg", es: "Frente a la ventana", en: "By the window" },
  { imagen: "/images/idea-escritorio.jpg", es: "En el escritorio", en: "On your desk" },
  { imagen: "/images/idea-mesa-ratona.jpg", es: "En la mesa ratona", en: "On the coffee table" },
  { imagen: "/images/idea-regalar.jpg", es: "Para regalar", en: "As a gift" },
  { imagen: "/images/idea-estante.jpg", es: "En el estante", en: "On the shelf" },
  { imagen: "/images/idea-cocina.jpg", es: "En la cocina", en: "In the kitchen" },
];
