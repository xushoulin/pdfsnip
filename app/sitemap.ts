import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
