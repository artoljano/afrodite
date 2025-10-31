// app/sitemap.ts
import { MetadataRoute } from "next";
import { getSEOConfig } from "@/lib/seo/config";
import { courses } from "@/data/courses";

type CF = NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
const CF_ALLOWED = ["always","hourly","daily","weekly","monthly","yearly","never"] as const;

function toCF(value?: string): CF | undefined {
  if (!value) return undefined;
  return (CF_ALLOWED as readonly string[]).includes(value) ? (value as CF) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const cfg = getSEOConfig();
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const base = rawBase.replace(/\/+$/, ""); // strip trailing slash
  const out: MetadataRoute.Sitemap = [];

  // ✅ ensure Set<string>
  const exclude = new Set<string>(cfg.url_and_sitemap.sitemap_exclude_paths ?? []);

  // pages
  if (cfg.url_and_sitemap.sitemap_include.pages) {
    const pages: string[] = ["/", "/about", "/awards", "/contact", "/courses"];
    pages.forEach((p) => {
      if (exclude.has(p)) return;
      out.push({
        url: `${base}${p}`,
        changeFrequency: toCF(cfg.url_and_sitemap.sitemap_changefreq.pages),
        priority: cfg.url_and_sitemap.sitemap_priority.pages,
      });
    });
  }

  // courses
  if (cfg.url_and_sitemap.sitemap_include.courses) {
    courses.forEach((c) => {
      const p = `/courses/${c.id}`;
      if (exclude.has(p)) return;
      out.push({
        url: `${base}${p}`,
        changeFrequency: toCF(cfg.url_and_sitemap.sitemap_changefreq.courses),
        priority: cfg.url_and_sitemap.sitemap_priority.courses,
      });
    });
  }

  // home override (Next will dedupe)
  out.push({
    url: `${base}/`,
    changeFrequency: toCF(cfg.url_and_sitemap.sitemap_changefreq.home),
    priority: cfg.url_and_sitemap.sitemap_priority.home,
  });

  return out;
}
