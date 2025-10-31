"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

import { AnimatedButton } from "@/components/animated-button";
import WhatsAppButton from "@/components/whatsapp-button";
import { awards } from "@/data/awards";
import JsonLd from "@/components/seo/JsonLd";

export default function AwardsClient() {
  // Build an ItemList for awards JSON-LD
  const itemList = awards.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: a.title,
      datePublished: `${a.year}`,
      provider: a.organization
        ? { "@type": "Organization", name: a.organization }
        : undefined,
      image: a.imageSrc ? `https://afroditeacademy.al${a.imageSrc}` : undefined,
      url: "https://afroditeacademy.al/awards",
      description: a.description,
    },
  }));

  return (
    <Suspense fallback={<div className="p-8">Loading…</div>}>
      {/* JSON-LD: WebPage + Breadcrumbs + ItemList of awards */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Çmime & Certifikime",
          url: "https://afroditeacademy.al/awards",
          description:
            "Njohje dhe certifikime ndërkombëtare për cilësinë e programeve të Afrodite Academy.",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: { "@id": "https://afroditeacademy.al/", name: "Kreu" },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": "https://afroditeacademy.al/awards",
                  name: "Çmime & Certifikime",
                },
              },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: itemList,
        }}
      />

      <main className="flex flex-col w-full">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-afrodite-creme">
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-afrodite-purple">
                Çmimet dhe{" "}
                <span className="text-afrodite-purple">Certifikimet</span>
              </h1>
              <div className="h-1 w-24 bg-afrodite-purple mx-auto mt-6"></div>
              <p className="text-afrodite-lightPurple mt-6">
                Njohje ndërkombëtare për cilësinë e arsimit, standardet e
                sigurisë dhe rezultatet e kursantëve tanë.
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-8 h-12 border-2 border-afrodite-purple/30 rounded-full flex justify-center pt-2">
              <motion.div
                className="w-1.5 h-1.5 bg-afrodite-lightPurple rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-afrodite-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* center line (desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-afrodite-purple/30 hidden md:block" />
            <div className="space-y-16">
              {awards.map((award, idx) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col items-center md:items-stretch md:flex-row ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  } relative`}
                >
                  {/* text */}
                  <div
                    className={`md:w-1/2 p-6 text-afrodite-purple ${
                      idx % 2 === 0
                        ? "md:pr-16 text-center md:text-right"
                        : "md:pl-16 text-center md:text-left"
                    }`}
                  >
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-afrodite-creme text-sm mb-3 bg-afrodite-lightPurple">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{award.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                    <p className="text-afrodite-lightPurple font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-afrodite-lightPurple">
                      {award.description}
                    </p>
                  </div>

                  {/* image/icon */}
                  <div className="md:w-1/2 flex justify-center p-6">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center bg-afrodite-creme">
                      <Image
                        src={award.imageSrc || "/placeholder.svg"}
                        alt={award.title}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* center dot (desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-afrodite-creme border-4 border-afrodite-lightPurple rounded-full hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA footer */}
        <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <Image
              src="/wave-pattern.svg"
              alt="Decorative pattern"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4">
                <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
                <span>Bashkohuni me ne</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
                Gati të bashkoheni me akademinë tonë?
              </h2>
              <p className="text-lg text-afrodite-lightPurple mb-8">
                Zbuloni programet dhe certifikimet që ju hapin dyer
                ndërkombëtare.
              </p>
              <Link href="/courses" className="inline-block">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Shiko kurset tona
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </main>
    </Suspense>
  );
}
