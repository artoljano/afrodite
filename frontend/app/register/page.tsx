// app/register/page.tsx
import type { Metadata } from "next";
import RegisterClient from "./client";

export const metadata: Metadata = {
  title: "Regjistrohu | Afrodite Academy",
  description:
    "Aplikoni për programet profesionale të Afrodite Academy. Plotësoni formularin dhe ekipi ynë do t’ju kontaktojë për orare dhe tarifat.",
  alternates: { canonical: "https://afroditeacademy.al/register" },
  openGraph: {
    title: "Regjistrohu — Afrodite Academy",
    description: "Aplikoni për kurse profesionale me certifikim ndërkombëtar.",
    url: "https://afroditeacademy.al/register",
    images: ["https://afroditeacademy.al/register/opengraph-image"],
  },
};

export default function Page() {
  return <RegisterClient />;
}
