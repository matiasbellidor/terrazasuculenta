import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Preloader from "@/components/Preloader";
import { IDIOMAS, atributoLang, esIdioma } from "@/lib/idiomas";
import { SCRIPT_PRELOADER } from "@/lib/preloader";
import { textos } from "@/lib/textos";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const t = textos[lang];
  return {
    title: t.meta.titulo,
    description: t.meta.descripcion,
    // Íconos: app/icon.png y app/apple-icon.png. La imagen para compartir vive en app/ y se
    // referencia acá porque este openGraph reemplaza al que Next arma con el archivo.
    openGraph: {
      title: "Terraza Suculenta",
      description: t.meta.descripcion,
      siteName: "Terraza Suculenta",
      locale: lang === "en" ? "en_US" : "es_AR",
      type: "website",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: t.meta.imagenAlt }],
    },
  };
}

export const viewport = {
  themeColor: "#fafafa",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  // Solo existen / (español) y /en: cualquier otro primer segmento da 404.
  if (!esIdioma(lang)) notFound();

  return (
    <html
      lang={atributoLang(lang)}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      // El script de abajo agrega data-preloader-visto antes de que React hidrate.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_PRELOADER }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Preloader etiqueta={textos[lang].cargando} />
        {children}
      </body>
    </html>
  );
}
