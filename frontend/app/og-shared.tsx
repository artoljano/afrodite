// app/og-shared.tsx
import type { JSX } from "react";

export const COLORS = {
  primary: "#7d2a80",
  secondary: "#965c9c",
  accent: "#f6f0e7",
};

export const size = { width: 1200, height: 630 };
export const contentType = "image/webp";

/** Shared frame (title + subtitle, light brand deco) */
export function Frame(title: string, subtitle: string): JSX.Element {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.accent,
        position: "relative",
      }}
    >
      {/* soft decorative blobs */}
      <div
        style={{
          position: "absolute",
          right: -110,
          top: -90,
          width: 540,
          height: 540,
          borderRadius: 9999,
          background: COLORS.secondary,
          opacity: 0.12,
          // filter: "blur(2px)",   // optional: comment out if you ever see filter issues
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 70,
          top: 30,
          width: 320,
          height: 320,
          borderRadius: 9999,
          background: COLORS.primary,
          opacity: 0.08,
          // filter: "blur(2px)",
        }}
      />

      <div
        style={{
          width: 1040,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: 28,
            fontSize: 38,
            lineHeight: 1.1,
            fontWeight: 800,
            color: COLORS.primary,
            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
          }}
        >
          Afrodite Academy
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.05,
            color: COLORS.primary,
            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: COLORS.secondary,
            maxWidth: 980,
            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
          }}
        >
          {subtitle}
        </div>

        {/* footer chip */}
        <div
          style={{
            marginTop: 36,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px",
            borderRadius: 999,
            background: "#fff",
            border: `2px solid ${COLORS.primary}`,
            color: COLORS.primary,
            fontSize: 22,
            fontWeight: 600,
            alignSelf: "flex-start",
            fontFamily: "Roboto, Arial, Helvetica, sans-serif",
          }}
        >
          Afrodite Academy • afroditeacademy.al
        </div>
      </div>
    </div>
  );
}
