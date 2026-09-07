import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BedDouble, Check, Ruler, Users } from "lucide-react";
import { accommodations } from "@/data/home";
import { QuickBooking } from "@/components/booking/quick-booking";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return accommodations.map(room => ({ id: room.id })); }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = accommodations.find(item => item.id === id);
  const pathname = `/accommodations/${id}`;
  const title = room?.name ?? "Accommodation";
  const description = room
    ? `${room.summary} An illustrative stay concept from the independent Saniya Resort portfolio.`
    : "An illustrative accommodation detail page from the independent Saniya Resort portfolio concept.";

  return createPageMetadata(pathname, title, description);
}

export default async function AccommodationDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const room = accommodations.find(item => item.id === id);
  if (!room) notFound();
  return <>
    <section className="bg-ink py-8 text-white sm:py-12"><div className="container-shell"><Link href="/accommodations" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"><ArrowLeft className="size-4" aria-hidden="true"/>All accommodations</Link><div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="eyebrow text-sun">{room.category}</p><h1 className="display-title mt-4 text-5xl sm:text-7xl">{room.name}</h1></div><p className="max-w-md text-base leading-7 text-white/70 lg:justify-self-end">{room.stayNote}</p></div></div></section>
    <section className="py-8 sm:py-12"><div className="container-shell grid gap-3 md:grid-cols-[1.35fr_.65fr]"><div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] md:min-h-[38rem]"><Image src={room.gallery[0].src} alt={room.gallery[0].alt} fill priority sizes="(max-width:768px) 100vw,65vw" className="object-cover"/></div><div className="relative min-h-[16rem] overflow-hidden rounded-[2rem] md:min-h-0"><Image src={room.gallery[1].src} alt={room.gallery[1].alt} fill sizes="(max-width:768px) 100vw,35vw" className="object-cover"/></div></div></section>
    <section className="pb-20 sm:pb-28"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.7fr] lg:gap-20"><div><p className="eyebrow text-coral">A place to land</p><h2 className="display-title mt-4 text-4xl sm:text-5xl">Comfort, with room for the good stuff.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{room.description}</p><div className="mt-8 grid grid-cols-2 gap-4 border-y border-black/10 py-5 sm:grid-cols-3"><div><Users className="size-5 text-brand" aria-hidden="true"/><p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">Sleeps</p><p className="mt-1 font-bold">Up to {room.capacity}</p></div><div><BedDouble className="size-5 text-brand" aria-hidden="true"/><p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">Sleeping</p><p className="mt-1 font-bold">{room.beds}</p></div><div><Ruler className="size-5 text-brand" aria-hidden="true"/><p className="mt-2 text-xs font-bold uppercase tracking-wider text-muted">Size</p><p className="mt-1 font-bold">{room.size}</p></div></div><h2 className="mt-10 font-display text-3xl font-semibold">What’s included</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{room.amenities.map(item => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid size-7 place-items-center rounded-full bg-[#dcece5]"><Check className="size-4 text-brand" aria-hidden="true"/></span>{item}</li>)}</ul></div><aside className="h-fit rounded-[1.75rem] bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"><p className="eyebrow text-brand">Plan your stay</p><h2 className="mt-3 font-display text-3xl font-semibold">Ready when you are.</h2><p className="mt-3 text-sm leading-6 text-muted">Start with your dates and group size. This is a demo flow with no payment or live reservation processed.</p><QuickBooking/><p className="mt-4 text-center text-xs leading-5 text-muted">Demo availability · No payment or live reservation is processed</p></aside></div></section>
    <section className="bg-coral py-16 text-white"><div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><p className="eyebrow text-white/70">Keep exploring</p><h2 className="display-title mt-3 text-3xl sm:text-4xl">See every way to stay.</h2></div><Link href="/accommodations" className="inline-flex items-center gap-2 font-bold">Back to accommodations <ArrowRight className="size-4" aria-hidden="true"/></Link></div></section>
  </>;
}
