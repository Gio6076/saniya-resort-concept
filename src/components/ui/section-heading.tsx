type Props = { eyebrow: string; title: string; body?: string; align?: "left" | "center" };
export function SectionHeading({ eyebrow, title, body, align = "left" }: Props) {
  return <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="eyebrow text-brand">{eyebrow}</p><h2 className="display-title mt-4 text-4xl text-ink sm:text-5xl">{title}</h2>
    {body ? <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{body}</p> : null}
  </div>;
}
