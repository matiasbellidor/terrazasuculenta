import { Droplets, Gauge, Ruler, Sun } from "lucide-react";

const CARACTERISTICAS = [
  { clave: "luz", icono: Sun },
  { clave: "riego", icono: Droplets },
  { clave: "dificultad", icono: Gauge },
  { clave: "tamano", icono: Ruler },
];

export default function Caracteristicas({ info, t }) {
  return (
    <dl className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
      {CARACTERISTICAS.map(({ clave, icono: Icono }) => (
        <div key={clave} className="py-3.5">
          <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-sage-dark uppercase">
            <Icono className="size-4" aria-hidden="true" />
            {t.modal[clave]}
          </dt>
          <dd className="mt-1 pl-6 text-sm text-ink">{info[clave]}</dd>
        </div>
      ))}
    </dl>
  );
}
