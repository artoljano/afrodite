// app/contact/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { Frame, size, contentType } from "../og-shared";
export const dynamic = "force-static";
export { size, contentType };

export default function OG() {
  return new ImageResponse(
    Frame(
      "Kontakto Afrodite Academy",
      "Tiranë & Shkodër • +355 69 204 3535 • info@afroditeacademy.al"
    ),
    size
  );
}
