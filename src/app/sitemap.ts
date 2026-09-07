import type { MetadataRoute } from "next";
import { accommodations } from "@/data/home";
import { siteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/accommodations",
  ...accommodations.map(({ id }) => `/accommodations/${id}`),
  "/facilities",
  "/pools",
  "/dining",
  "/events",
  "/gallery",
  "/packages",
  "/contact",
  "/booking",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(path => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : .7,
  }));
}
