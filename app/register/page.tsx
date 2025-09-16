// app/register/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import ClientRegisterForm from "@/app/register/ClientRegisterForm";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-afrodite-creme overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt=""
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 rounded-full text-afrodite-purple text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Apliko në Afrodite Academy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-afrodite-purple mb-4">
              Regjistrohu për Programet Profesionale
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6" />
            <p className="text-afrodite-lightPurple text-lg">
              Plotëso formularin e aplikimit dhe ekipi ynë do të kontaktojë së
              shpejti për oraret, tarifat dhe hapat e mëtejshëm.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/courses">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Shiko programet
                </AnimatedButton>
              </Link>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Na kontaktoni
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* ✅ Wrap in Suspense so useSearchParams works */}
          <Suspense
            fallback={
              <div className="text-center text-afrodite-lightPurple">
                Duke ngarkuar formularin…
              </div>
            }
          >
            <ClientRegisterForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
