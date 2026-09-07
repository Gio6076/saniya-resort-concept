import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventInquiryForm } from "@/components/events/event-inquiry-form";
import { eventPlanningSteps, eventSettings, eventsHero, eventTypes } from "@/data/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(
  "/events",
  "Events & Celebrations",
  "Imagine birthdays, reunions, and meaningful gatherings with conceptual settings in this independent Saniya Resort portfolio concept, not a live event service.",
);

export default function EventsPage() {
  return <>
    <section className="bg-[#dcece5] py-12 sm:py-20">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div><p className="eyebrow text-brand">Celebrations · an independent concept</p><h1 className="display-title mt-5 text-5xl sm:text-7xl">Your people.<br />Your reason<br />to celebrate.</h1><p className="mt-6 max-w-lg text-lg leading-8">The birthday everyone talks about. The reunion that was overdue. Start with the people, then imagine a day that feels like you.</p><Link href="#inquiry" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-brand">Build a demo event brief</Link><p className="mt-5 max-w-lg text-sm leading-6">No real inquiry is sent. Settings, photography, and package ideas are illustrative; no venue or service is confirmed.</p></div>
        <figure><div className="relative aspect-[4/5] overflow-hidden rounded-t-[9rem] rounded-b-[2rem] sm:aspect-square"><Image src={eventsHero.src} alt={eventsHero.alt} fill priority sizes="(max-width:1024px) 100vw,50vw" className="object-cover" /></div><figcaption className="mt-3 text-sm text-muted">A little gathering inspiration, not a verified resort venue.</figcaption></figure>
      </div>
    </section>

    <section className="container-shell py-16">
      <h2 className="font-display text-3xl">Big feelings. All kinds of occasions.</h2>
      {eventTypes.length ? <ul className="mt-6 flex flex-wrap gap-3">{eventTypes.map(item => <li key={item.id} className="rounded-full border border-ink/20 bg-surface px-5 py-3 font-semibold">{item.label}</li>)}</ul> : <p className="mt-5 text-muted">Occasion ideas are being updated. The demo form still lets you describe another celebration.</p>}
    </section>

    <section className="container-shell pb-20">
      <SectionHeading eyebrow="Picture the gathering" title="A setting to shape your day" body="These are possible directions for the design, not bookable venues. Actual spaces, capacities, services, and access would require confirmation." />
      <div className="mt-10 grid gap-7 md:grid-cols-2">{eventSettings.length ? eventSettings.map(setting => <article key={setting.id} className="overflow-hidden rounded-[2rem] bg-surface">
        <div className="relative aspect-[16/9]"><Image src={setting.image.src} alt={setting.image.alt} fill sizes="(max-width:768px) 100vw,50vw" className="object-cover" /></div><div className="p-6 sm:p-8"><p className="eyebrow text-brand">Conceptual setting</p><h3 className="mt-3 font-display text-3xl">{setting.name}</h3><p className="mt-4 leading-7 text-muted">{setting.description}</p><p className="mt-5 border-t border-ink/15 pt-5 text-sm leading-6">{setting.planningNote}</p></div>
      </article>) : <p className="rounded-2xl bg-surface p-6 leading-7">Setting ideas are being refreshed. Describe your preferred atmosphere in the demo brief; no venue selection is required.</p>}</div>
    </section>

    <section className="bg-ink py-20 text-white">
      <div className="container-shell"><SectionHeading eyebrow="From occasion to outline" title="Build the idea, one choice at a time" tone="dark" body="A package-planning framework, not a package for sale. Use the message field below for setting, food, and enhancement ideas." />
        {eventPlanningSteps.length ? <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{eventPlanningSteps.map((step, index) => <li key={step.title} className="border-t border-white/25 pt-5"><span className="text-sm font-bold text-sun">0{index + 1}</span><h3 className="mt-3 font-display text-2xl">{step.title}</h3><p className="mt-3 text-sm leading-7 text-white/80">{step.description}</p></li>)}</ol> : <p className="mt-8 leading-7">Start with an occasion, date, and guest estimate below. Further planning ideas will be added here.</p>}
        <Link href="/dining" className="mt-9 inline-flex min-h-11 items-center font-bold text-sun underline underline-offset-4">Explore illustrative meal ideas</Link>
      </div>
    </section>

    <section id="inquiry" className="container-shell grid scroll-mt-24 items-start gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      <div><SectionHeading eyebrow="Your celebration starts with an idea" title="Let’s put the day into words" body="Try a short inquiry flow with sample details. You’ll see a local confirmation of your brief, with no email sent and no booking made." /><p className="mt-6 leading-7 text-muted">Not sure about the setting or food yet? Leave those ideas open. Your guest estimate helps describe the gathering; it does not confirm a suitable venue.</p><nav aria-label="Related celebration planning" className="mt-8 grid justify-items-start gap-3 font-bold text-brand"><Link href="/accommodations" className="py-2 underline underline-offset-4">Explore the accommodation concept</Link><Link href="/booking" className="py-2 underline underline-offset-4">Try an overnight booking demo</Link><Link href="/contact" className="py-2 underline underline-offset-4">Contact & location planning</Link></nav></div>
      <EventInquiryForm eventTypes={eventTypes} />
    </section>
  </>;
}
