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
export const productos = [
  {
    slug: "echeveria-elegans",
    nombre: "Echeveria elegans",
    precio: 34999,
    imagen: "/images/echeveria-elegans.jpg",
    es: {
      nombreComun: "Rosa de alabastro",
      descripcion:
        "Roseta compacta de tono verde azulado. Ideal para mesas y escritorios luminosos.",
      luz: "Mucha luz, con algunas horas de sol directo",
      riego: "Cada 10–15 días, con la tierra bien seca",
      dificultad: "Fácil",
      tamano: "Roseta de 5 a 10 cm",
    },
    en: {
      nombreComun: "Mexican snowball",
      descripcion: "Compact blue-green rosette. Perfect for bright tables and desks.",
      luz: "Bright light with a few hours of direct sun",
      riego: "Every 10–15 days, once the soil is fully dry",
      dificultad: "Easy",
      tamano: "5–10 cm rosette",
    },
  },
  {
    slug: "haworthia-fasciata",
    nombre: "Haworthia fasciata",
    precio: 34999,
    imagen: "/images/haworthia-fasciata.jpg",
    es: {
      nombreComun: "Planta cebra",
      descripcion:
        "Hojas firmes con franjas blancas. Se adapta muy bien a interiores con menos luz.",
      luz: "Luz indirecta brillante; ideal para interiores",
      riego: "Cada 2–3 semanas",
      dificultad: "Muy fácil",
      tamano: "Hasta 15 cm de alto",
    },
    en: {
      nombreComun: "Zebra plant",
      descripcion: "Firm leaves with white stripes. Thrives indoors with less light.",
      luz: "Bright indirect light; ideal indoors",
      riego: "Every 2–3 weeks",
      dificultad: "Very easy",
      tamano: "Up to 15 cm tall",
    },
  },
  {
    slug: "sedum-morganianum",
    nombre: "Sedum morganianum",
    precio: 34999,
    imagen: "/images/sedum-morganianum.jpg",
    es: {
      nombreComun: "Cola de burro",
      descripcion:
        "Tallos colgantes cubiertos de hojas carnosas. Perfecta para estantes y macetas colgantes.",
      luz: "Mucha luz, con sol suave de mañana",
      riego: "Cada 10–15 días",
      dificultad: "Media: sus hojas se desprenden al tocarlas",
      tamano: "Tallos colgantes de hasta 60 cm",
    },
    en: {
      nombreComun: "Burro's tail",
      descripcion:
        "Trailing stems covered in plump leaves. Perfect for shelves and hanging pots.",
      luz: "Bright light with soft morning sun",
      riego: "Every 10–15 days",
      dificultad: "Moderate: its leaves fall off easily when touched",
      tamano: "Trailing stems up to 60 cm",
    },
  },
  {
    slug: "pachyphytum-oviferum",
    nombre: "Pachyphytum oviferum",
    precio: 34999,
    imagen: "/images/pachyphytum-oviferum.jpg",
    es: {
      nombreComun: "Piedra de luna",
      descripcion:
        "Hojas redondeadas con un velo empolvado en tonos lavanda. Delicada y escultural.",
      luz: "Sol directo o mucha luz; así toma tonos rosados",
      riego: "Escaso, cada 2–3 semanas",
      dificultad: "Media",
      tamano: "Hasta 10 cm de alto",
    },
    en: {
      nombreComun: "Moonstones",
      descripcion:
        "Rounded leaves with a powdery lavender bloom. Delicate and sculptural.",
      luz: "Direct sun or very bright light brings out pink tones",
      riego: "Sparingly, every 2–3 weeks",
      dificultad: "Moderate",
      tamano: "Up to 10 cm tall",
    },
  },
  {
    slug: "graptopetalum-paraguayense",
    nombre: "Graptopetalum paraguayense",
    precio: 34999,
    imagen: "/images/graptopetalum-paraguayense.jpg",
    es: {
      nombreComun: "Planta fantasma",
      descripcion:
        "Rosetas gris rosadas que se van volcando con el tiempo. Muy fácil de cuidar.",
      luz: "Sol directo o semisombra",
      riego: "Cada 10–15 días",
      dificultad: "Muy fácil",
      tamano: "Rosetas de hasta 15 cm",
    },
    en: {
      nombreComun: "Ghost plant",
      descripcion:
        "Pinkish-grey rosettes that gently trail over time. Very easy to care for.",
      luz: "Full sun or partial shade",
      riego: "Every 10–15 days",
      dificultad: "Very easy",
      tamano: "Rosettes up to 15 cm",
    },
  },
  {
    slug: "aloe-aristata",
    nombre: "Aloe aristata",
    precio: 34999,
    imagen: "/images/aloe-aristata.jpg",
    es: {
      nombreComun: "Aloe encaje",
      descripcion:
        "Pequeña y resistente, con hojas moteadas de blanco. Ideal para empezar con suculentas.",
      luz: "Luz brillante; tolera semisombra",
      riego: "Cada 2 semanas en verano, menos en invierno",
      dificultad: "Muy fácil",
      tamano: "Roseta de 10 a 20 cm",
    },
    en: {
      nombreComun: "Lace aloe",
      descripcion: "Small and hardy, with white-speckled leaves. A great first succulent.",
      luz: "Bright light; tolerates partial shade",
      riego: "Every 2 weeks in summer, less in winter",
      dificultad: "Very easy",
      tamano: "10–20 cm rosette",
    },
  },
];

// Seguidores reales de Instagram (dato de la dueña, 2026-10-18). Se muestra redondeado hacia abajo.
export const SEGUIDORES_INSTAGRAM = 1000;

// Ideas para decorar: ilustraciones, no fotos de clientes.
// Cuando haya historias reales con permiso de cada persona, se pueden mostrar acá.
export const ideas = [
  { imagen: "/images/idea-1.jpg", es: "Junto a la ventana", en: "By the window" },
  { imagen: "/images/idea-2.jpg", es: "Para regalar", en: "As a gift" },
  { imagen: "/images/idea-3.jpg", es: "Colgada cerca de la luz", en: "Hanging near the light" },
  { imagen: "/images/idea-4.jpg", es: "En el escritorio", en: "On your desk" },
  { imagen: "/images/idea-5.jpg", es: "En los estantes", en: "On your shelves" },
  { imagen: "/images/idea-6.jpg", es: "En la mesa ratona", en: "On the coffee table" },
  { imagen: "/images/idea-7.jpg", es: "En la cocina", en: "In the kitchen" },
  { imagen: "/images/idea-8.jpg", es: "En la mesa de luz", en: "On the nightstand" },
];
