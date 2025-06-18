"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import { AnimatedButton } from "@/components/animated-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function ClientRegisterForm() {
  // Grab ?courseId= from the URL
  const searchParams = useSearchParams();
  const courseIdParam = searchParams.get("courseId");
  // Parse it or fall back to the first course
  const initialCourseId = courseIdParam
    ? parseInt(courseIdParam, 10) || courses[0]?.id
    : courses[0]?.id;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedCourseId: initialCourseId,
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  // If the URL param changes, update the select
  useEffect(() => {
    if (courseIdParam) {
      const id = parseInt(courseIdParam, 10);
      if (!isNaN(id)) {
        setFormData((f) => ({ ...f, selectedCourseId: id }));
      }
    }
  }, [courseIdParam]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "selectedCourseId" ? parseInt(value, 10) : value,
    }));
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const selectedCourse = courses.find(
        (c) => c.id === formData.selectedCourseId
      );

      const formWithCourseTitle = {
        ...formData,
        selectedCourseTitle: selectedCourse ? selectedCourse.title : "Unknown",
      };

      const res = await fetch("http://localhost:5000/api/register-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formWithCourseTitle),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setSubmitted(true);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timeout = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return submitted ? (
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
                value={String(formData.selectedCourseId)}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 bg-black/50 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                {courses.map((course) => (
                  <option
                    key={course.id}
                    value={String(course.id)}
                    className="bg-black text-white"
                  >
                    {course.title}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Submit */}
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
                disabled={status === "sending"}
                className="w-full bg-black hover:bg-black text-white border border-purple-500/30 transform hover:scale-[1.02] transition"
              >
                <div className="flex items-center justify-center gap-x-3">
                  {status === "sending" && (
                    <Loader2 className="animate-spin w-5 h-5" />
                  )}
                  {status === "success" && (
                    <CheckCircle className="text-green-400 w-5 h-5" />
                  )}
                  {status === "error" && (
                    <XCircle className="text-red-500 w-5 h-5" />
                  )}
                  {status === "idle"}
                  <span>
                    {status === "sending"
                      ? "Duke dërguar..."
                      : status === "success"
                      ? "U dërgua me sukses"
                      : status === "error"
                      ? "Dështoi dërgimi"
                      : "Dërgo Regjistrimin"}
                  </span>
                </div>
              </AnimatedButton>
            </motion.div>
          </form>

          {/* FAQ Accordion */}
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
                  Kurset tona profesionale zgjasin nga 1 deri në 6 muaj, në
                  varësi të programit dhe nivelit të zgjedhur.
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
  );
}
