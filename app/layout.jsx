import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  // Vista previa al compartir el link por WhatsApp o Instagram
  openGraph: {
    title: "Terraza Suculenta",
    description,
    locale: "es_AR",
    type: "website",
    images: ["/images/hero-bg.png"],
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
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
