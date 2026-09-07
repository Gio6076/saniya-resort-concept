import { Waves } from "lucide-react";
export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <span className="inline-flex items-center gap-2.5" aria-label="Saniya Resort and Hotel">
    <span className={`grid size-10 place-items-center rounded-full ${inverse ? "bg-white/12 text-sun" : "bg-brand text-white"}`}><Waves className="size-5" strokeWidth={2.2} aria-hidden="true" /></span>
    <span className="leading-none"><span className="block font-display text-xl font-semibold tracking-tight">Saniya</span><span className={`mt-1 block text-[.58rem] font-bold uppercase tracking-[.24em] ${inverse ? "text-white/60" : "text-muted"}`}>Resort & Hotel</span></span>
  </span>;
}
