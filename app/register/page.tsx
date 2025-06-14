// app/register/page.tsx
"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { AnimatedButton } from "@/components/animated-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedCourseId: courses.length > 0 ? courses[0].id : 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-purple-900 to-black min-h-screen pb-16">
      {/* Decorative overlay at top */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 pt-24 relative z-10">
        {/* Back to Courses */}
        <div className="mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center text-purple-300 hover:text-white text-sm font-medium transition"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kthehu te Kurset
          </Link>
        </div>

        {/* If submitted, show thank-you panel */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 w-full max-w-md mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Faleminderit për regjistrimin!
            </h2>
            <p className="text-gray-300 mb-6">
              Kemi marrë informacionin tuaj dhe do të kontaktojmë së shpejti për
              konfirmimin e vendit në kurs.
            </p>
            <Link href="/courses">
              <AnimatedButton className="bg-purple-600 hover:bg-purple-700 text-white">
                Shiko Kurset
              </AnimatedButton>
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Header & Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                <span>Bëhu pjesë e suksesit</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
                Gati për të Filluar{" "}
                <span className="text-purple-400">Karrierën Tuaj të Re?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Regjistrohuni sot në kurset tona profesionale dhe bëhuni pjesë e
                komunitetit tonë të profesionistëve të suksesshëm.
              </p>
            </motion.div>

            {/* Form Section */}
            <AnimatePresence>
              <motion.div
                key="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Emri i Plotë
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-600 bg-black/50 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Shkruaj emrin tënd"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-600 bg-black/50 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="email@example.com"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Telefoni
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-600 bg-black/50 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="+355 6XX XXX XXX"
                    />
                  </motion.div>

                  {/* Select Course */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label
                      htmlFor="selectedCourseId"
                      className="block text-sm font-medium text-gray-200 mb-1"
                    >
                      Zgjidh Kursin
                    </label>
                    <select
                      name="selectedCourseId"
                      id="selectedCourseId"
                      value={formData.selectedCourseId}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-600 bg-black/50 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    >
                      {courses.map((course) => (
                        <option
                          key={course.id}
                          value={course.id}
                          className="bg-black text-white"
                        >
                          {course.title} • {course.duration} • {course.price}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="pt-4 border-t border-gray-600"
                  >
                    <AnimatedButton
                      type="submit"
                      size="lg"
                      variant="default"
                      className="w-full bg-black hover:bg-black text-white border border-purple-500/30 transform hover:scale-[1.02] transition"
                    >
                      Dërgo Regjistrimin
                    </AnimatedButton>
                  </motion.div>
                </form>

                {/* FAQ Accordion (optional) */}
                <div className="mt-12 text-left p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Pyetje të Shpeshta
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/10 pb-4">
                      <button className="flex justify-between items-center w-full text-left">
                        <span className="text-white font-medium">
                          Sa zgjat një kurs profesional?
                        </span>
                        <ChevronRight className="h-5 w-5 text-purple-400 transform rotate-90" />
                      </button>
                      <div className="mt-2 text-gray-300 text-sm">
                        Kurset tona profesionale zgjasin nga 1 deri në 6 muaj,
                        në varësi të programit dhe nivelit të zgjedhur.
                      </div>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <button className="flex justify-between items-center w-full text-left">
                        <span className="text-white font-medium">
                          A ofrohen kurse online?
                        </span>
                        <ChevronRight className="h-5 w-5 text-purple-400" />
                      </button>
                    </div>
                    <div className="border-b border-white/10 pb-4">
                      <button className="flex justify-between items-center w-full text-left">
                        <span className="text-white font-medium">
                          Si mund të regjistrohem?
                        </span>
                        <ChevronRight className="h-5 w-5 text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
