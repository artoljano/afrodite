// components/rotating-avatars.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Testimonial = {
  name: string;
  hasVideo?: boolean;
  videoSrc?: string;
  avatar?: string;
};

export default function RotatingAvatars({
  items,
  intervalMs = 4000, // how fast to rotate
  seekTime = 1, // thumbnail frame (seconds)
}: {
  items: Testimonial[];
  intervalMs?: number;
  seekTime?: number;
}) {
  // Show a stable, deterministic set on the server (first 3)
  const initial = useMemo(() => items.slice(0, 3), [items]);
  const [mounted, setMounted] = useState(false);
  const [start, setStart] = useState(0);

  // After mount (client), begin rotating through the list
  useEffect(() => {
    setMounted(true);
    if (items.length <= 3) return;

    const id = setInterval(() => {
      setStart((s) => (s + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const clientVisible = useMemo(() => {
    if (items.length === 0) return [];
    return [
      items[start],
      items[(start + 1) % items.length],
      items[(start + 2) % items.length],
    ];
  }, [items, start]);

  const visible = mounted ? clientVisible : initial;

  return (
    <div className="flex -space-x-2" suppressHydrationWarning>
      {visible.map((t, i) => (
        <div
          key={`${mounted ? `${start}-` : "ssr-"}${i}-${t.name}`}
          className="w-10 h-10 rounded-full border-2 border-afrodite-lightPurple overflow-hidden"
          title={t.name}
        >
          {/* Prefer video first frame if available, else fallback to avatar image (if you ever add one) */}
          {t.hasVideo && t.videoSrc ? (
            <video
              src={t.videoSrc}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover bg-black"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                // jump to a stable frame to use as the "avatar"
                try {
                  v.currentTime = seekTime;
                } catch {}
              }}
              onSeeked={(e) => {
                // pause on that frame
                e.currentTarget.pause();
              }}
            />
          ) : t.avatar ? (
            <Image
              src={t.avatar}
              alt={t.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            // ultimate fallback (rare)
            <div className="w-full h-full bg-afrodite-creme" />
          )}
        </div>
      ))}
    </div>
  );
}
