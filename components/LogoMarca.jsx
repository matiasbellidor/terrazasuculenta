import Image from "next/image";

// Muestra solo la roseta del logo: el texto de abajo no se lee en tamaños chicos.
// El recorte (150 % de ancho, corrido -25 % / -2.5 %) depende de cómo está armado logo.png.
export default function LogoMarca({ ancho, alt = "", className = "", ...resto }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full bg-white ${className}`}>
      <Image
        src="/images/logo.png"
        alt={alt}
        width={ancho}
        height={ancho}
        className="absolute top-[-2.5%] left-[-25%] h-auto w-[150%] max-w-none"
        {...resto}
      />
    </span>
  );
}
