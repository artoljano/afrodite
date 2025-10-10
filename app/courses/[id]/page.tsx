import { courses, type Course } from "@/data/courses";
import ClientCourseDetail from "./ClientCourseDetail";
import { notFound } from "next/navigation";

type Params = {
  id: string;
};

// ✅ List of blocked course IDs (e.g., hidden, incomplete, or not for public view)
const blockedCourseIds = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
const blockedCategories = ["UET Italia"];

// ✅ Pre-render all course pages except blocked ones
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return courses
    .filter((course) => !blockedCourseIds.includes(course.id))
    .map((course) => ({
      id: course.id.toString(),
    }));
}

export const dynamicParams = false;

export default async function CourseDetailPage({ params }: { params: Params }) {
  const id = Number(params.id);

  // ❌ Block if it's in the blacklist
  if (
    blockedCourseIds.includes(id) ||
    blockedCategories.includes(courses.find((c) => c.id === id)?.category || "")
  ) {
    notFound();
  }

  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return <ClientCourseDetail course={course as Course} />;
}
