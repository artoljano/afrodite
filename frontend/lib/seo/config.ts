import fs from "node:fs";
import path from "node:path";

export type SEOConfig = typeof import("../../seo/seo.config.json");

let cached: SEOConfig | null = null;

export function getSEOConfig(): SEOConfig {
  if (cached) return cached;
  const file = path.join(process.cwd(), "seo", "seo.config.json");
  const raw = fs.readFileSync(file, "utf8");
  cached = JSON.parse(raw);
  return cached!;
}
