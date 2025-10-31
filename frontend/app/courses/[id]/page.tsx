import { Suspense } from "react";
import { notFound } from "next/navigation";
import { courses, type Course } from "@/data/courses";
import ClientCourseDetail from "./ClientCourseDetail";

import {
  courseToJsonLd,
  courseBreadcrumbsJsonLd,
} from "@/lib/seo/course-jsonld";

type Params = { id: string };

const blockedCourseIds = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
const blockedCategories = ["UET Italia"];

export async function generateStaticParams(): Promise<{ id: string }[]> {
  return courses
    .filter((c) => !blockedCourseIds.includes(c.id))
    .map((c) => ({ id: c.id.toString() }));
}

export const dynamicParams = false;
// export const dynamic = "force-static"; // optional

export default async function CourseDetailPage({ params }: { params: Params }) {
  const id = Number(params.id);

  if (
    blockedCourseIds.includes(id) ||
    blockedCategories.includes(courses.find((c) => c.id === id)?.category || "")
  ) {
    notFound();
  }

  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  const jsonLd = courseToJsonLd(course as Course);
  const crumbs = courseBreadcrumbsJsonLd(course as Course);

  return (
    <>
      {/* JSON-LD for the course + breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <Suspense fallback={<CourseDetailSkeleton />}>
        <ClientCourseDetail course={course as Course} />
      </Suspense>
    </>
  );
}

// Tiny skeleton while client subtree hydrates
function CourseDetailSkeleton() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-2/3 bg-afrodite-lightPurple/20 rounded" />
        <div className="h-5 w-1/2 bg-afrodite-lightPurple/20 rounded" />
        <div className="h-64 w-full bg-afrodite-lightPurple/10 rounded" />
        <div className="h-5 w-3/4 bg-afrodite-lightPurple/20 rounded" />
        <div className="h-5 w-5/6 bg-afrodite-lightPurple/20 rounded" />
      </div>
    </main>
  );
}
