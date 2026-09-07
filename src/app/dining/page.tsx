import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { demoMenu, diningExperiences, diningHero, flavorsImage } from "@/data/dining";

export const metadata: Metadata = {
  title: "Dining & Shared Meals",
  description: "Explore approachable family dining ideas and an illustrative menu in this independent Saniya Resort portfolio concept. No real menu or dining service is confirmed.",
};

export default function DiningPage() {
  return <>
    <section className="relative isolate bg-ink text-white">
      <Image src={diningHero.src} alt={diningHero.alt} fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="container-shell relative py-24 sm:py-32">
        <p className="eyebrow text-sun">Dining · an independent concept</p>
        <h1 className="display-title mt-5 max-w-3xl text-5xl sm:text-7xl">One more plate.<br />A little more time together.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8">An imagined place for family favorites, cool drinks, and the stories that keep everyone at the table.</p>
        <Link href="#flavors" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-sun px-6 py-3 font-bold text-ink hover:bg-canvas">Explore the demo flavors</Link>
        <p className="mt-6 max-w-xl text-sm leading-6">Illustrative photography and dining ideas, not a confirmed restaurant, menu, or service at the real resort.</p>
      </div>
    </section>

    <section className="container-shell grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
      <SectionHeading eyebrow="Easy food, good company" title="A seat for every kind of day" body="From a quick pause to a meal that brings the whole family together, these concepts imagine dining around the rhythm of a tropical getaway." />
      <div className="grid gap-8 sm:grid-cols-2">{diningExperiences.length ? diningExperiences.map(item => <article key={item.id} className="border-t border-ink/20 pt-5">
        <p className="text-sm font-bold text-brand">{item.moment}</p><h3 className="mt-3 font-display text-2xl">{item.title}</h3><p className="mt-3 leading-7 text-muted">{item.description}</p>
      </article>) : <p className="rounded-2xl bg-surface p-6 leading-7">Dining ideas are being refreshed. You can still explore the accommodation and celebration concepts below.</p>}</div>
    </section>

    <section id="flavors" className="scroll-mt-24 bg-surface py-20">
      <div className="container-shell grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div><SectionHeading eyebrow="A taste of the idea" title="Familiar flavors, sunny little twists" body="Illustrative demo menu and prices in Philippine pesos. These are design examples, not actual dishes, portions, rates, or offers from the resort." />
          <figure className="mt-8"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src={flavorsImage.src} alt={flavorsImage.alt} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover" /></div><figcaption className="mt-3 text-sm text-muted">Mood photography; not a photograph of the demo dishes.</figcaption></figure>
        </div>
        <div className="rounded-[2rem] border border-ink/15 bg-canvas p-6 sm:p-9">
          <p className="eyebrow text-brand">The sample menu · demo only</p>
          {demoMenu.length ? <ul className="mt-4 divide-y divide-ink/15">{demoMenu.map(item => <li key={item.id} className="py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-display text-2xl">{item.name}</h3><span className="font-bold">₱{item.demoPrice.toLocaleString("en-PH")} <span className="text-xs">demo</span></span></div>
            <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p><p className="mt-2 text-xs font-bold text-brand">Illustrative price {item.serving}</p>
          </li>)}</ul> : <p className="mt-6 leading-7">The demo menu is being refreshed. No approved menu or prices are available here yet.</p>}
          <p className="border-t border-ink/15 pt-5 text-sm leading-6 text-muted">Recipes, ingredients, availability, and pricing would need business approval before any live use.</p>
        </div>
      </div>
    </section>

    <section className="container-shell grid gap-10 py-20 lg:grid-cols-2">
      <div className="rounded-[2rem] bg-[#dcece5] p-7 sm:p-10"><SectionHeading eyebrow="A little planning helps" title="Make dietary needs part of the conversation" /><p className="mt-5 leading-7">For any real visit, discuss allergies and dietary requests directly with an authorized business contact before making plans. Ask about ingredients, preparation, and cross-contact; this concept cannot confirm that any request can be accommodated.</p><Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-bold text-brand underline underline-offset-4">Contact & location planning</Link></div>
      <div className="self-center"><SectionHeading eyebrow="Keep everyone together" title="Make a meal part of the memory" body="Connect a shared-table idea with a celebration brief or explore a place to stay. Every experience here remains a demonstration." /><nav aria-label="Continue from dining" className="mt-7 flex flex-wrap gap-3"><Link href="/events" className="rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-brand">Plan a celebration</Link><Link href="/accommodations" className="rounded-full border border-ink/25 px-6 py-3 font-bold hover:bg-surface">Explore stays</Link><Link href="/booking" className="rounded-full border border-ink/25 px-6 py-3 font-bold hover:bg-surface">Try the booking demo</Link></nav></div>
    </section>
  </>;
}
