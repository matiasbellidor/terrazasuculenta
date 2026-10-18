import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SCRIPT_PRELOADER } from "@/lib/preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "Una tienda que busca ayudarte a decorar tu hogar, mostrando simplicidad y estética. Suculentas en Palermo, CABA.";

export const metadata = {
  title: "Terraza Suculenta | Suculentas en Palermo, CABA",
  description,
  // Íconos y vista previa al compartir: app/icon.png, app/apple-icon.png y app/opengraph-image.jpg
  openGraph: {
    title: "Terraza Suculenta",
    description,
    locale: "es_AR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#fafafa",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es-AR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      // El script de abajo agrega data-preloader-visto antes de que React hidrate.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_PRELOADER }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
