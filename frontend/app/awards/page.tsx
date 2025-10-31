// app/awards/page.tsx
import type { Metadata } from "next";
import AwardsClient from "./client";

export const metadata: Metadata = {
  title: "Çmime & Certifikime | Afrodite Academy",
  description:
    "Njohje ndërkombëtare për cilësinë e programeve, standardet e sigurisë dhe rezultatet e kursantëve.",
  openGraph: {
    title: "Çmime & Certifikime — Afrodite Academy",
    description:
      "Standardet tona të verifikuara nga organizata prestigjioze ndërkombëtare.",
    images: ["https://afroditeacademy.al/awards/opengraph-image"],
    url: "https://afroditeacademy.al/awards",
  },
  alternates: {
    canonical: "https://afroditeacademy.al/awards",
  },
};

export default function Page() {
  return <AwardsClient />;
}
