import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { GalleryBrowser } from "@/components/gallery/gallery-browser";
import { gallery, galleryCategories } from "@/data/gallery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/gallery",
  "Gallery",
  "An editorial gallery of conceptual resort moods for this independent Saniya Resort portfolio concept.",
);

export default function GalleryPage() {
  return <>
    <section className="bg-ink py-20 text-white sm:py-28"><div className="container-shell grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end"><div><p className="eyebrow text-sun">A visual direction</p><h1 className="display-title mt-5 max-w-3xl text-5xl sm:text-7xl">See yourself<br /><span className="text-[#f7cf91]">in the moment.</span></h1></div><div className="max-w-md lg:justify-self-end"><p className="text-lg leading-8 text-white/75">A collection of conceptual moods for stays, swims, shared tables, and celebrations at an imagined tropical resort.</p><p className="mt-5 text-sm font-bold leading-6 text-white/55">Every image on this page is replaceable conceptual photography pending approved resort photography. It does not depict confirmed Saniya Resort & Hotel facilities.</p></div></div></section>
    <section className="py-16 sm:py-24"><div className="container-shell"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow text-coral">Browse the mood</p><h2 className="display-title mt-3 text-4xl sm:text-5xl">A day, in fragments.</h2></div><Camera className="hidden size-10 text-brand sm:block" aria-hidden="true" /></div><GalleryBrowser items={gallery} categories={galleryCategories} /></div></section>
    <section className="bg-[#dcece5] py-16 sm:py-24"><div className="container-shell flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><p className="eyebrow text-coral">Turn the mood into a plan</p><h2 className="display-title mt-4 max-w-2xl text-4xl sm:text-5xl">Find a place to stay, then make it yours.</h2><p className="mt-4 max-w-xl leading-7 text-muted">Explore the accommodation concept or build a local-only demo booking. No availability, payment, or reservation is created.</p></div><nav aria-label="Next steps from gallery" className="flex shrink-0 flex-wrap gap-3"><Link href="/accommodations" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-brand">Explore stays <ArrowRight className="size-4" aria-hidden="true" /></Link><Link href="/booking" className="inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 py-3 font-bold hover:bg-surface">Try demo booking</Link></nav></div></section>
  </>;
}
