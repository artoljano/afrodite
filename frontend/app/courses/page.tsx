// app/courses/page.tsx
import type { Metadata } from "next";
import CoursesClient from "./client";

export const metadata: Metadata = {
  title: "Kurse Profesionale | Afrodite Academy",
  description:
    "Kurse të certifikuara ndërkombëtarisht në Estetikë, Parukeri, PMU, Masazh, Nail Art, Tattoo, Turizëm dhe më shumë. Zgjidhni programin ideal për karrierën tuaj.",
  alternates: { canonical: "https://afroditeacademy.al/courses" },
  openGraph: {
    title: "Kurse Profesionale — Afrodite Academy",
    description:
      "Zbuloni kurset tona me certifikim ndërkombëtar dhe praktikë reale.",
    url: "https://afroditeacademy.al/courses",
    images: ["https://afroditeacademy.al/courses/opengraph-image"],
  },
};

export default function Page() {
  return <CoursesClient />;
}
