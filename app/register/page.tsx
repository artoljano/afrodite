import { Suspense } from "react";
import ClientRegisterForm from "./ClientRegisterForm";

export default function RegisterPage() {
  return (
    <div className="relative bg-gradient-to-br from-black via-purple-900 to-black min-h-screen pb-16">
      {/* background pattern */}
      <div
        className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <Suspense
          fallback={
            <div className="text-center text-white">
              Duke ngarkuar formularin…
            </div>
          }
        >
          <ClientRegisterForm />
        </Suspense>
      </div>
    </div>
  );
}
