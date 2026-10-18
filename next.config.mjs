/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // El español vive sin prefijo y el inglés bajo /en; las dos versiones salen de app/[lang].
  async rewrites() {
    return [
      { source: "/", destination: "/es" },
      { source: "/suculentas/:slug", destination: "/es/suculentas/:slug" },
    ];
  },
  // /es no debe existir como copia: redirige a la URL sin prefijo.
  async redirects() {
    return [
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:ruta+", destination: "/:ruta+", permanent: true },
    ];
  },
  images: {
    // 90 solo para la ilustración de portada, que tiene trazos finos.
    qualities: [75, 90],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
