import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";

interface SanitySlugDoc {
  slug: string;
  _updatedAt?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.theuselessproject.co";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/markets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporateevents`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/impact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/updates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  let dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const [events, updates] = await Promise.all([
      client.fetch<SanitySlugDoc[]>(
        `*[_type == "event" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
      ),
      client.fetch<SanitySlugDoc[]>(
        `*[_type in ["Update", "update"] && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
      ),
    ]);

    const eventUrls: MetadataRoute.Sitemap = (events || []).map((item) => ({
      url: `${baseUrl}/events/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    const updateUrls: MetadataRoute.Sitemap = (updates || []).map((item) => ({
      url: `${baseUrl}/updates/${item.slug}`,
      lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    dynamicRoutes = [...eventUrls, ...updateUrls];
  } catch (err) {
    console.error("Error generating dynamic sitemap from Sanity:", err);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
