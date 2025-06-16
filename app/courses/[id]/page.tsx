// app/courses/[id]/page.tsx
import { courses, type Course } from "@/data/courses";
import ClientCourseDetail from "./ClientCourseDetail";
import { notFound } from "next/navigation";

interface Params {
  id: string;
}

// Tell Next.js which dynamic routes to pre-render:
export async function generateStaticParams(): Promise<Params[]> {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

// Disable any on-demand fallback (so we're purely static):
export const dynamicParams = false;

export default function CourseDetailPage({ params }: { params: Params }) {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    // will render app/not-found.tsx or the default 404
    notFound();
  }

  return <ClientCourseDetail course={course as Course} />;
}
