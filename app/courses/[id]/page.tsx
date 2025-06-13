// File: /app/courses/[id]/page.tsx
import { courses, Course } from "@/data/courses";
import ClientCourseDetail from "./ClientCourseDetail";

// Next.js will statically pre‐render every `id` returned here
export function generateStaticParams() {
  return courses.map((c) => ({
    id: c.id.toString(),
  }));
}

interface Params {
  id: string;
}

// This is now a “server component.” We look up `course` by `params.id` on the server.
export default async function CourseDetailPage({ params }: { params: Params }) {
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Kursi nuk u gjet</h1>
        <p className="mt-4 text-navy-700">
          Kursi që po kërkoni nuk ekziston ose është hequr.
        </p>
        <a
          href="/courses"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded"
        >
          Kthehu te Kurset
        </a>
      </div>
    );
  }

  // Pass the found `course` into a client‐only subcomponent:
  return <ClientCourseDetail course={course} />;
}
