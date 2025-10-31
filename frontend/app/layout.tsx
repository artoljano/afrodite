// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import GA from "@/components/analytics/ga";
import PageviewListener from "@/components/analytics/pageview-listener";
import { Suspense } from "react";
import { getSEOConfig } from "@/lib/seo/config";

const cfg = getSEOConfig();
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Afrodite Academy",
  description: "Kurse Profesionale Ndërkombëtare",
  metadataBase: new URL(SITE),
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Afrodite Academy",
    images: [
      {
        url: cfg.media_assets.default_og_image_url || "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [cfg.media_assets.default_og_image_url || "/opengraph-image"],
  },
  verification: {
    google:
      cfg.search_console.google?.verification_method === "meta"
        ? cfg.search_console.google?.verification_token
        : undefined,
    // If you add Bing: other: { "msvalidate.01": "TOKEN" }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${roboto.variable} font-roboto bg-afrodite-creme`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>

        {process.env.NODE_ENV === "production" && (
          <>
            <Suspense fallback={null}>
              <PageviewListener />
            </Suspense>
            <GA />
          </>
        )}
      </body>
    </html>
  );
}
