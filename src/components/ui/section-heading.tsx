type Props = { eyebrow: string; title: string; body?: string; align?: "left" | "center"; tone?: "light" | "dark" };
export function SectionHeading({ eyebrow, title, body, align = "left", tone = "light" }: Props) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className={`eyebrow ${tone === "dark" ? "text-sun" : "text-brand"}`}>{eyebrow}</p><h2 className={`display-title mt-4 text-4xl sm:text-5xl ${tone === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
    {body ? <p className={`mt-5 text-base leading-7 sm:text-lg ${tone === "dark" ? "text-white/70" : "text-muted"}`}>{body}</p> : null}
  </div>;
}
