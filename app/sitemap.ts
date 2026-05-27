import type { MetadataRoute } from "next";
import { talents } from "@/data/talents";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const staticRoutes = [
    "",
    "/contact",
    "/apply",
    "/talent",
    "/ja",
    "/ja/talent",
    "/ja/contact",
    "/ja/apply",
    "/ja/company",
    "/ja/privacy",
    "/en",
    "/en/talent",
    "/en/contact",
    "/en/apply",
    "/en/company",
    "/en/privacy"
  ];

  const talentRoutes = talents.flatMap((talent) => [`/talent/${talent.slug}`, `/ja/talent/${talent.slug}`, `/en/talent/${talent.slug}`]);

  return [...staticRoutes, ...talentRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
