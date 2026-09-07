import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return <section className="container-shell grid min-h-[65svh] place-items-center py-20 text-center"><div className="max-w-xl"><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#dcece5] text-brand"><Compass aria-hidden="true" /></span><p className="eyebrow mt-6 text-coral">Page not found</p><h1 className="display-title mt-4 text-5xl sm:text-6xl">That path leads nowhere.</h1><p className="mt-5 leading-7 text-muted">The page you’re looking for doesn’t exist in this independent concept. Head back to the homepage or explore the gallery.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white"><ArrowLeft className="size-4" aria-hidden="true" />Back to homepage</Link><Link href="/gallery" className="inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 py-3 font-bold">Open gallery</Link></div></div></section>;
}
