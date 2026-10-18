import Inicio from "@/components/Inicio";
import { alternativas } from "@/lib/sitio";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { alternates: alternativas(lang, "/") };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <Inicio idioma={lang} />;
}
