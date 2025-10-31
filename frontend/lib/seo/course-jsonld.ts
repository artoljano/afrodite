// lib/seo/course-jsonld.ts
import type { Course } from "@/data/courses";
import { abs, SITE } from "./url";

/** Try to get a numeric price from strings like "ALL 50,000" / "50.000 Lekë" / "50 000" */
function parsePrice(raw?: string | null): number | null {
  if (!raw) return null;
  const digits = raw.replace(/[^\d.,]/g, "");
  // remove thousands separators and normalize decimal comma
  const normalized = digits.replace(/\.(?=\d{3}\b)/g, "").replace(",", ".");
  const num = Number.parseFloat(normalized);
  return Number.isFinite(num) ? num : null;
}

// Extend Course locally without changing your source type
type CourseWithRating = Course & {
  aggregateRating?: { ratingValue?: number | null; reviewCount?: number | null };
};

export function courseToJsonLd(course: Course) {
  const c = course as CourseWithRating;

  const priceValue = parsePrice((c as any).price); // price is a string in your UI; safe-cast
  const afroditeOrg = {
    "@type": "Organization",
    name: "Afrodite Academy",
    url: SITE,
  };

  const offers =
    priceValue != null
      ? {
          "@type": "Offer",
          priceCurrency: "ALL",
          price: priceValue,
          availability: "http://schema.org/InStock",
          url: abs(`/courses/${c.id}`),
          seller: afroditeOrg,
        }
      : undefined;

  // prefer course.image; fallback to first media image if present
  const image =
    (c as any).image ||
    (Array.isArray((c as any).media)
      ? (c as any).media.find((m: any) => m?.type === "image")?.src
      : null) ||
    "/opengraph-image";

  
  const data: any = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: (c as any).title,
    description: (c as any).longDescription || (c as any).description,
    image: abs(image),
    url: abs(`/courses/${c.id}`),
    provider: afroditeOrg,
  };

  if (offers) data.offers = offers;

  // Add mentions for UET Italia courses (co-branded), without changing provider
  if ((c as any).category === "UET Italia") {
    data.mentions = [
      {
        "@type": "Organization",
        name: "UET Italia",
        url: "https://www.uetitalia.org/",
      },
    ];
  }

  if (
    c.aggregateRating &&
    c.aggregateRating.ratingValue != null &&
    c.aggregateRating.reviewCount != null
  ) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: c.aggregateRating.ratingValue,
      reviewCount: c.aggregateRating.reviewCount,
    };
  }

  if ((c as any).startDate) data.startDate = (c as any).startDate;
  if ((c as any).level) data.educationalLevel = (c as any).level;
  if ((c as any).duration) data.timeRequired = (c as any).duration;

  return data;
}

export function coursesItemListJsonLd(items: Course[]) {
  const elements = items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: abs(`/courses/${c.id}`),
    name: (c as any).title,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: elements,
  };
}

export function courseBreadcrumbsJsonLd(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": abs("/"), name: "Kreu" },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: { "@id": abs("/courses"), name: "Kurse" },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": abs(`/courses/${course.id}`),
          name: (course as any).title,
        },
      },
    ],
  };
}
