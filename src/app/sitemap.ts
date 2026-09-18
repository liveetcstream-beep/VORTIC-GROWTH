import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vorticgrowth.com";
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/local-seo-gold-coast`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/local-seo-pimpama`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.94,
    },
    {
      url: `${baseUrl}/local-seo-coomera`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.94,
    },
    {
      url: `${baseUrl}/tradie-seo-gold-coast`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.93,
    },
    {
      url: `${baseUrl}/dental-seo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/concreters-seo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/builders-seo`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/northern-gold-coast-local-seo-guide-2026`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/blog/how-to-rank-in-google-ai-overviews-gold-coast`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${baseUrl}/blog/gold-coast-google-ai-overviews-2026`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-concreters-tradies-dominate-google-maps-gold-coast`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/local-seo-cost-guide-australia-2026`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
