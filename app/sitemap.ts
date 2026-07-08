import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/schema";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/turkey`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/chinese-duck`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/quail`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/titir`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedDate,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
