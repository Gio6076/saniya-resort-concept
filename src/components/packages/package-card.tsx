import Link from "next/link";
import { ArrowRight, Check, CircleAlert, Users } from "lucide-react";
import { formatDemoPrice } from "@/data/booking";
import type { PackageOffer } from "@/types/content";

const actionLabels = { booking: "Try this stay", accommodations: "Explore stays", events: "Plan a celebration", contact: "Ask about this idea" } as const;

function actionHref(offer: PackageOffer) {
  if (offer.action === "booking") {
    const query = new URLSearchParams();
    if (offer.bookingQuery?.accommodation) query.set("accommodation", offer.bookingQuery.accommodation);
    if (offer.bookingQuery?.guests) query.set("guests", String(offer.bookingQuery.guests));
    return `/booking?${query}`;
  }
  return offer.action === "events" ? "/events#inquiry" : offer.action === "accommodations" ? "/accommodations" : `/contact?topic=Package%20or%20rate%20idea&package=${offer.id}#message`;
}

export function PackageCard({ offer, featured = false }: { offer: PackageOffer; featured?: boolean }) {
  return <article className={`flex h-full flex-col rounded-[2rem] p-6 shadow-[var(--shadow-card)] sm:p-8 ${featured ? "bg-ink text-white" : "bg-surface"}`}>
    <div className="flex items-start justify-between gap-4"><div><p className={`eyebrow ${featured ? "text-sun" : "text-coral"}`}>{offer.category} · demo</p><h2 className="mt-3 font-display text-3xl">{offer.name}</h2></div><span className={`rounded-full px-3 py-1.5 text-xs font-bold ${featured ? "bg-white/10 text-white" : "bg-canvas text-muted"}`}>{offer.badge}</span></div>
    <p className={`mt-4 leading-7 ${featured ? "text-white/75" : "text-muted"}`}>{offer.description}</p>
    <div className={`mt-6 rounded-2xl p-4 ${featured ? "bg-white/10" : "bg-[#e9f3ee]"}`}><p className={`text-2xl font-bold ${featured ? "text-sun" : "text-brand"}`}>{formatDemoPrice(offer.demoStartingPrice)}</p><p className={`mt-1 text-xs font-bold uppercase tracking-wide ${featured ? "text-white/65" : "text-muted"}`}>{offer.priceUnit}</p></div>
    <div className={`mt-6 border-t pt-5 ${featured ? "border-white/15" : "border-ink/10"}`}><h3 className="text-sm font-bold">Designed for</h3><p className={`mt-2 flex gap-2 text-sm leading-6 ${featured ? "text-white/75" : "text-muted"}`}><Users className={`mt-0.5 size-4 shrink-0 ${featured ? "text-sun" : "text-brand"}`} aria-hidden="true" />{offer.suitableFor}</p></div>
    <div className="mt-6"><h3 className="text-sm font-bold">Illustrative inclusions</h3><ul className={`mt-3 space-y-2 text-sm leading-6 ${featured ? "text-white/80" : "text-muted"}`}>{offer.inclusions.map(item => <li key={item} className="flex gap-2"><Check className={`mt-1 size-4 shrink-0 ${featured ? "text-sun" : "text-brand"}`} aria-hidden="true" />{item}</li>)}</ul></div>
    <div className="mt-6"><h3 className="text-sm font-bold">Limits to confirm</h3><ul className={`mt-3 space-y-2 text-sm leading-6 ${featured ? "text-white/75" : "text-muted"}`}>{offer.limitations.map(item => <li key={item} className="flex gap-2"><CircleAlert className={`mt-1 size-4 shrink-0 ${featured ? "text-sun" : "text-coral"}`} aria-hidden="true" />{item}</li>)}</ul></div>
    <Link href={actionHref(offer)} className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${featured ? "bg-white text-ink hover:bg-canvas" : "bg-brand text-white hover:bg-brand-dark"}`}>{actionLabels[offer.action]} <ArrowRight className="size-4" aria-hidden="true" /></Link>
  </article>;
}
