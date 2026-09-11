import type { Metadata } from "next";

export const siteUrl = new URL("https://saniya-resort-concept.vercel.app");
export const creatorName = "Giovani Paulo R. Ebarola";
export const creatorUrl = "https://github.com/Gio6076";

export const siteDescription =
  "An independent website concept for a welcoming tropical resort experience, designed and developed by Giovani Paulo R. Ebarola.";

export function createPageMetadata(
  pathname: string,
  title: string,
  description: string,
): Metadata {
  const url = new URL(pathname, siteUrl);

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title: `${title} | Saniya Resort Concept`,
      description,
      type: "website",
      url,
    },
    twitter: {
      card: "summary",
      title: `${title} | Saniya Resort Concept`,
      description,
    },
  };
}
