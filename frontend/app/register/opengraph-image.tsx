// app/register/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { Frame, size, contentType } from "../og-shared";
export const dynamic = "force-static";
export { size, contentType };

export default function OG() {
  return new ImageResponse(
    Frame(
      "Regjistrohu Online",
      "Apliko tani për kurset në Tiranë & Shkodër — vende të limituara."
    ),
    size
  );
}
