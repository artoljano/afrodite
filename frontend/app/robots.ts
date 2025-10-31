import { MetadataRoute } from "next";
import { getSEOConfig } from "@/lib/seo/config";

export default function robots(): MetadataRoute.Robots {
  const cfg = getSEOConfig();
  const disallow = cfg.url_and_sitemap.extra_robots_disallow || [];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow }
    ],
    sitemap: [`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/sitemap.xml`]
  };
}
