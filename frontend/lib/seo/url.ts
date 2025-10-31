// lib/seo/url.ts
export const SITE =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const abs = (pathOrUrl?: string | null) => {
  if (!pathOrUrl) return SITE;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
};
