import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",        // Next.js internal assets
          "/api/",          // API routes (if added later)
          "/sample/",       // Internal/dev pages
          "/productImages/", // Raw image assets
        ],
      },
      {
        // Block aggressive bots that waste crawl budget
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
