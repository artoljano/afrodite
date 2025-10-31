// app/courses/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { Frame, size, contentType } from "../og-shared";
export const dynamic = "force-static";
export { size, contentType };

export default function OG() {
  return new ImageResponse(
    Frame(
      "Kurset Profesionale",
      "Estetikë, Parukeri, Berber, Nails • Programe me praktikë reale."
    ),
    size
  );
}
