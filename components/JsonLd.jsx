// Datos estructurados. Se reemplaza "<" para que ningún texto pueda cerrar la etiqueta <script>.
export default function JsonLd({ datos }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replace(/</g, "\\u003c") }}
    />
  );
}
