import Inicio from "@/components/Inicio";

export default async function Page({ params }) {
  const { lang } = await params;
  return <Inicio idioma={lang} />;
}
