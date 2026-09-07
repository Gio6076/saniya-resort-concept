import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Check, Ruler, Users } from "lucide-react";
import { accommodations } from "@/data/home";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = { title: "Accommodations" };

export default function AccommodationsPage() {
  return <>
    <section className="bg-ink py-20 text-white sm:py-28">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
        <div><p className="eyebrow text-sun">Find your space</p><h1 className="display-title mt-5 max-w-3xl text-5xl sm:text-7xl">Room for every kind of getaway.</h1></div>
        <p className="max-w-md text-base leading-7 text-white/70 lg:justify-self-end">From a breezy room for four to a villa made for the whole crew, choose a comfortable home base for your time together.</p>
      </div>
    </section>
    <section className="py-20 sm:py-28"><div className="container-shell">
      <SectionHeading eyebrow="Three ways to stay" title="Settle in, your way" body="Illustrative accommodation types for this independent website concept. Rates and availability are intentionally left for a future live booking connection." />
      <div className="mt-12 grid gap-7 lg:grid-cols-3">{accommodations.map((room, index) => <Reveal key={room.id} delay={index * .08}>
        <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface shadow-[var(--shadow-card)]">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={room.image.src} alt={room.image.alt} fill sizes="(max-width:1024px) 100vw,33vw" className="object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold backdrop-blur">{room.category}</span></div>
          <div className="flex flex-1 flex-col p-6 sm:p-7"><h2 className="font-display text-3xl font-semibold tracking-tight">{room.name}</h2><p className="mt-3 text-sm leading-6 text-muted">{room.summary}</p><div className="mt-5 grid grid-cols-2 gap-3 border-y border-black/8 py-4 text-xs font-bold text-muted"><span className="flex items-center gap-1.5"><Users className="size-4 text-brand" aria-hidden="true"/>Up to {room.capacity}</span><span className="flex items-center gap-1.5"><BedDouble className="size-4 text-brand" aria-hidden="true"/>{room.beds}</span><span className="flex items-center gap-1.5"><Ruler className="size-4 text-brand" aria-hidden="true"/>{room.size}</span></div><ul className="mt-5 space-y-2 text-sm text-muted">{room.amenities.slice(0, 3).map(item => <li key={item} className="flex items-center gap-2"><Check className="size-4 text-brand" aria-hidden="true"/>{item}</li>)}</ul><div className="mt-7 flex flex-wrap items-center gap-4"><Link href={`/accommodations/${room.id}`} className="group/link inline-flex items-center gap-2 font-bold text-brand">View accommodation <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true"/></Link><Link href={`/booking?accommodation=${room.id}`} className="inline-flex items-center rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark">Book this stay</Link></div></div>
        </article>
      </Reveal>)}</div>
    </div></section>
    <section className="bg-[#dcece5] py-16 sm:py-20"><div className="container-shell flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow text-coral">Need a little help choosing?</p><h2 className="display-title mt-3 text-3xl sm:text-4xl">Tell us what your group needs.</h2></div><Link href="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-bold text-white transition hover:bg-brand">Ask about a stay <ArrowRight className="size-4" aria-hidden="true"/></Link></div></section>
  </>;
}
