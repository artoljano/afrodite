// app/about/page.tsx
import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "Rreth Afrodite Academy",
  description:
    "Misioni, partneritetet dhe laboratorët tanë modernë. Akademia kryesore në arsimin profesional me standarde europiane.",
  openGraph: {
    title: "Rreth Nesh — Afrodite Academy",
    description:
      "Afrodite Academy — mision, vizion, partneritete ndërkombëtare dhe ambiente moderne mësimore.",
    images: ["https://afroditeacademy.al/about/opengraph-image"],
    url: "https://afroditeacademy.al/about",
  },
  alternates: {
    canonical: "https://afroditeacademy.al/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
