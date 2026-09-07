import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { parseBookingQuery } from "@/data/booking";

export const metadata: Metadata = { title: "Plan your stay" };

export default async function BookingPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const query = await searchParams;
  return <><section className="bg-ink py-14 text-white sm:py-20"><div className="container-shell"><p className="eyebrow text-sun">Plan your stay</p><h1 className="display-title mt-4 max-w-3xl text-5xl sm:text-7xl">A few easy choices,<br/><span className="text-[#f7cf91]">then more time together.</span></h1><p className="mt-5 max-w-xl text-base leading-7 text-white/70">Build an illustrative stay at your own pace. This independent concept does not connect to live availability or reservations.</p></div></section><section className="py-10 sm:py-16"><div className="container-shell"><Suspense fallback={<div className="rounded-[1.5rem] bg-surface p-8 text-muted">Loading booking planner…</div>}><BookingWizard initialValues={parseBookingQuery(query)}/></Suspense></div></section></>;
}
