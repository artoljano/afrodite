// app/contact/page.tsx
import type { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Kontakt | Afrodite Academy",
  description:
    "Na kontaktoni për çdo pyetje rreth kurseve profesionale, orareve dhe regjistrimeve. Zyrat tona në Tiranë dhe Shkodër.",
  alternates: {
    canonical: "https://afroditeacademy.al/contact",
  },
  openGraph: {
    title: "Kontakt — Afrodite Academy",
    description:
      "Na gjeni në Tiranë dhe Shkodër. Na shkruani ose telefononi për informacione mbi kurset dhe regjistrimet.",
    url: "https://afroditeacademy.al/contact",
    images: ["https://afroditeacademy.al/contact/opengraph-image"],
  },
};

export default function Page() {
  return <ContactClient />;
}
