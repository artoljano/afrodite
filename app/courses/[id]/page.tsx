import { courses, type Course } from "@/data/courses";
import ClientCourseDetail from "./ClientCourseDetail";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

// ✅ Pre-render all course pages statically
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

// ✅ Fully static (no fallback at runtime)
export const dynamicParams = false;

// ✅ Fix: async + destructure inside the function to avoid Next.js console error
export default async function CourseDetailPage(props: { params: Params }) {
  const { params } = props;

  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    notFound(); // Triggers 404 or not-found.tsx
  }

  return <ClientCourseDetail course={course as Course} />;
}
