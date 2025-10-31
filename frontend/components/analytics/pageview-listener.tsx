"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function PageviewListener() {
  const pathname = usePathname();

  // Fire on client navigation (pathname changes)
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || !(window as any).gtag)
      return;

    const search = window.location.search || "";
    const url = `${pathname}${search}`;
    (window as any).gtag("config", GA_ID, { page_path: url });
  }, [pathname]);

  // Fire on back/forward (popstate doesn't change pathname in Next's hook until URL changes)
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || !(window as any).gtag)
      return;

    const onPopState = () => {
      const url = `${window.location.pathname}${window.location.search || ""}`;
      (window as any).gtag("config", GA_ID, { page_path: url });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
}
