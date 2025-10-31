// app/courses/[id]/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { courses } from "@/data/courses";

// Make the OG route clearly static for `output: "export"`
export const dynamic = "force-static";
export const dynamicParams = false;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export { generateStaticParams } from "./page";

type Props = { params: { id: string } };

export default function OG({ params }: Props) {
  const idNum = Number(params.id);
  const course = courses.find((c) => c.id === idNum);

  const title = course?.title ?? "Detajet e Kursit";
  const subtitle =
    course?.category ??
    "Estetikë, Parukeri, Berber, Nails • Program me praktikë reale.";

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
          background: "#0b0b0c",
          color: "white",
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, fontWeight: 400, marginTop: 16 }}>
          {subtitle}
        </div>
      </div>
    ),
    size
  );
}
