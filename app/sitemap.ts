import type { MetadataRoute } from "next";
import { routes } from "@/lib/data/routes";
import { posts } from "@/lib/data/blog";

const SITE_URL = "https://tiatransfer.com";

// Fully programmatic — every route and blog post you add to lib/data/*
// shows up here automatically, no manual sitemap edits.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/routes", "/fleet", "/faq", "/about", "/contact", "/blog"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const routePages = routes.map((r) => ({
    url: `${SITE_URL}/routes/${r.slug}`,
    lastModified: new Date(),
  }));

  const blogPages = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticPages, ...routePages, ...blogPages];
}
