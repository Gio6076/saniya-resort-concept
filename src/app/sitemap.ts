import type { MetadataRoute } from "next";

const routes = ["/", "/accommodations", "/booking", "/contact", "/dining", "/events", "/facilities", "/gallery", "/packages", "/pools"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(path => ({ url: path, changeFrequency: "monthly", priority: path === "/" ? 1 : .7 }));
}
