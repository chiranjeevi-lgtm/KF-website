import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",         // Next.js internal assets
          "/api/",           // API routes — not for public crawling
          "/sample/",        // Internal/dev pages
          "/productImages/", // Raw image assets
        ],
      },
      {
        // Block AI training crawlers — no SEO benefit, waste crawl budget
        userAgent: ["GPTBot", "ClaudeBot", "Bytespider", "CCBot", "anthropic-ai"],
        disallow: "/",
      },
      {
        // Block aggressive SEO bots that waste crawl budget
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
