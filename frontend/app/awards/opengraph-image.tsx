// app/awards/opengraph-image.tsx
export const dynamic = "force-static";

import { ImageResponse } from "next/og";
import { Frame, size, contentType } from "../og-shared";

export { size, contentType };

export default function OG() {
  return new ImageResponse(
    Frame(
      "Çmimet & Certifikimet",
      "Njohje ndërkombëtare për cilësinë e programeve dhe arritjet e kursantëve."
    ),
    size
  );
}
