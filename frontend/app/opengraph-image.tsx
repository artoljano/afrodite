// app/(your-group-if-any)/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          fontSize: 64,
          fontWeight: 700,
          background: "#0b0b0c",
          color: "white",
        }}
      >
        <div>Akademia Kryesore në Arsimin Profesional</div>
        <div style={{ fontSize: 28, fontWeight: 400, marginTop: 16 }}>
          Kurse profesionale me standarde europiane në Tiranë &amp; Shkodër.
        </div>
      </div>
    ),
    size
  );
}
