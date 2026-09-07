import type { Metadata } from "next";

export const siteUrl = new URL("https://saniya-resort-concept.vercel.app");

export const siteDescription =
  "An independent portfolio concept for a welcoming tropical resort website experience.";

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
