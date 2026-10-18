import Image from "next/image";

// Muestra solo la roseta del logo: el texto de abajo no se lee en tamaños chicos.
// El recorte depende de dónde está la roseta en logo.png (centro 50,4 % / 39 %, radio 29,3 % del ancho).
export default function LogoMarca({ ancho, alt = "", className = "", ...resto }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full bg-white ${className}`}>
      <Image
        src="/images/logo.png"
        alt={alt}
        width={ancho}
        height={ancho}
        className="absolute top-[-11.3%] left-[-29.3%] h-auto w-[157.2%] max-w-none"
        {...resto}
      />
    </span>
  );
}
