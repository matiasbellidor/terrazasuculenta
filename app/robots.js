import { urlAbsoluta } from "@/lib/sitio";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: urlAbsoluta("/sitemap.xml"),
  };
}
