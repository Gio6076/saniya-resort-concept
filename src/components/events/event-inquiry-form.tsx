"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { EventType } from "@/types/content";
import { createEventInquirySchema, emptyEventInquiry, localToday, type EventInquiryValues } from "@/lib/event-inquiry";

const subscribeToDate = () => () => {};
const serverDate = () => "";

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: ReactNode }) {
  return <div>
    <label htmlFor={id} className="field-label">{label}{children}</label>
    {hint && <p id={`${id}-hint`} className="mt-2 text-sm leading-5 text-muted">{hint}</p>}
    {error && <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-red-800" role="alert">{error}</p>}
  </div>;
}

export function EventInquiryForm({ eventTypes }: { eventTypes: EventType[] }) {
  // Avoid embedding a build-time date or mismatching the visitor's time zone during hydration.
  const today = useSyncExternalStore(subscribeToDate, localToday, serverDate);
  const { register, handleSubmit, reset, setFocus, formState: { errors, isSubmitting } } = useForm<EventInquiryValues>({
    resolver: zodResolver(createEventInquirySchema(eventTypes.map(item => item.id))),
    defaultValues: emptyEventInquiry, mode: "onTouched",
  });
  const [summary, setSummary] = useState<EventInquiryValues | null>(null);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const resetFocus = useRef(false);
  useEffect(() => {
    if (summary) successHeading.current?.focus();
    else if (resetFocus.current) { setFocus("eventType"); resetFocus.current = false; }
  }, [summary, setFocus]);

  const accessibility = (key: keyof EventInquiryValues, hasHint = false) => ({
    id: `event-${key}`, "aria-invalid": Boolean(errors[key]),
    "aria-describedby": [hasHint ? `event-${key}-hint` : "", errors[key] ? `event-${key}-error` : ""].filter(Boolean).join(" ") || undefined,
  });
  const submit = async (values: EventInquiryValues) => {
    // Deliberately local: no fetch, persistence, email, or reservation side effects.
    await new Promise(resolve => setTimeout(resolve, 650));
    setSummary(values);
  };

  if (summary) return <div className="rounded-[2rem] bg-surface p-6 shadow-[var(--shadow-card)] sm:p-9">
    <p className="eyebrow text-brand">Demo complete</p>
    <h3 ref={successHeading} tabIndex={-1} className="mt-4 font-display text-3xl">Your celebration brief is ready.</h3>
    <p role="status" className="mt-5 leading-7">No real inquiry was sent. No date, venue, or package has been reserved, and no one will contact you from this demo.</p>
    <dl className="mt-6 grid gap-4 rounded-2xl bg-canvas p-5 sm:grid-cols-2">
      <div><dt className="text-sm text-muted">Occasion</dt><dd className="mt-1 font-bold">{eventTypes.find(item => item.id === summary.eventType)?.label ?? "Other celebration"}</dd></div>
      <div><dt className="text-sm text-muted">Preferred date</dt><dd className="mt-1 font-bold"><time dateTime={summary.preferredDate}>{summary.preferredDate}</time></dd></div>
      <div><dt className="text-sm text-muted">Estimated guests</dt><dd className="mt-1 font-bold">{summary.guests}</dd></div>
      <div><dt className="text-sm text-muted">Prepared for</dt><dd className="mt-1 break-words font-bold">{summary.name}</dd></div>
    </dl>
    <p className="mt-5 text-sm leading-6 text-muted">This brief exists only in this page’s memory. Reloading, leaving, or resetting clears it. For a real event, use an independently verified official business contact.</p>
    <button type="button" onClick={() => { reset(emptyEventInquiry); resetFocus.current = true; setSummary(null); }} className="mt-7 min-h-12 rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">Plan another celebration</button>
  </div>;

  return <form noValidate onSubmit={handleSubmit(submit)} aria-describedby="event-demo-notice" aria-busy={isSubmitting} className="rounded-[2rem] bg-surface p-6 shadow-[var(--shadow-card)] sm:p-9">
    <h3 className="font-display text-3xl">Tell the story of your day</h3>
    <p id="event-demo-notice" className="mt-4 text-sm leading-6 text-muted">Demo only: no real inquiry is sent or stored. Use sample contact details. All fields are required except the message.</p>
    <fieldset disabled={isSubmitting} className="mt-7 min-w-0 space-y-5 disabled:opacity-65">
      <legend className="sr-only">Celebration and contact details</legend>
      <Field id="event-eventType" label="Event type" error={errors.eventType?.message}>
        <select {...register("eventType")} {...accessibility("eventType")} required><option value="">Choose an occasion</option>{eventTypes.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}<option value="other">Other celebration / help me decide</option></select>
      </Field>
      {!eventTypes.length && <p className="text-sm text-muted">Occasion ideas are being updated. Choose “Other celebration” and describe your plans below.</p>}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="event-preferredDate" label="Preferred date" error={errors.preferredDate?.message} hint="Today or later, using your local date. Availability is not checked.">
          <input type="date" min={today || undefined} onFocus={event => { event.currentTarget.min = localToday(); }} {...register("preferredDate")} {...accessibility("preferredDate", true)} required />
        </Field>
        <Field id="event-guests" label="Estimated guests" error={errors.guests?.message} hint="Include children. This does not confirm capacity.">
          <input type="number" min="1" step="1" inputMode="numeric" {...register("guests")} {...accessibility("guests", true)} required />
        </Field>
      </div>
      <Field id="event-name" label="Name" error={errors.name?.message}><input autoComplete="name" maxLength={100} {...register("name")} {...accessibility("name")} required /></Field>
      <Field id="event-email" label="Email" error={errors.email?.message}><input type="email" autoComplete="email" maxLength={254} {...register("email")} {...accessibility("email")} required /></Field>
      <Field id="event-phone" label="Phone" error={errors.phone?.message}><input type="tel" autoComplete="tel" {...register("phone")} {...accessibility("phone")} required /></Field>
      <Field id="event-message" label="Message (optional)" error={errors.message?.message} hint="Share a setting preference, meal idea, or optional enhancements. Please avoid sensitive personal or medical information."><textarea rows={4} maxLength={2000} {...register("message")} {...accessibility("message", true)} /></Field>
      <button type="submit" disabled={isSubmitting} className="min-h-12 w-full rounded-full bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark disabled:cursor-wait">{isSubmitting ? "Preparing demo brief…" : "Preview demo inquiry"}</button>
    </fieldset>
    <p role="status" aria-live="polite" className="mt-3 text-sm text-muted">{isSubmitting ? "Preparing your brief locally. Nothing is being sent." : "No payment, live availability, or follow-up."}</p>
  </form>;
}
