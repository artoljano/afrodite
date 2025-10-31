import fs from "node:fs";
import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const file = path.join(process.cwd(), "seo", "seo.config.json");
    const cfg = JSON.parse(fs.readFileSync(file, "utf8"));

    const maps = (cfg.redirects?.map || []).map(r => ({
      source: r.from,
      destination: r.to,
      permanent: r.type === 301
    }));

    const gone = (cfg.redirects?.gone || []).map(g => ({
      source: g,
      destination: "/404",
      permanent: false
    }));

    return [...maps, ...gone];
  }
};

export default nextConfig;
