// app/page.tsx
import type { Metadata } from "next";
import HomeClient from "./client";

export const metadata: Metadata = {
  title: "Afrodite Academy | Kurse Profesionale me Certifikim Ndërkombëtar",
  description:
    "Akademi profesionale me 20+ vite eksperiencë, 60+ kurse dhe certifikime ndërkombëtare. Regjistrohu dhe ndërto karrierën tënde.",
  alternates: { canonical: "https://afroditeacademy.al/" },
  openGraph: {
    title: "Afrodite Academy — Kurse Profesionale",
    description:
      "Kurse profesionale me certifikime ndërkombëtare, instruktorë ekspertë dhe mundësi punësimi.",
    url: "https://afroditeacademy.al/",
    images: ["https://afroditeacademy.al/opengraph-image"],
  },
};

export default function Page() {
  return <HomeClient />;
}
