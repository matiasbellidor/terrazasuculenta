import Inicio from "@/components/Inicio";
import JsonLd from "@/components/JsonLd";
import { grafo, negocio, sitio } from "@/lib/esquemas";
import { alternativas } from "@/lib/sitio";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { alternates: alternativas(lang, "/") };
}

export default async function Page({ params }) {
  const { lang } = await params;
  return (
    <>
      <JsonLd datos={grafo(negocio(lang), sitio(lang))} />
      <Inicio idioma={lang} />
    </>
  );
}
