"use client";

import { useEffect, useMemo, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, XCircle, Send } from "lucide-react";
import { courses } from "@/data/courses";

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(
  /\/+$/,
  ""
);

/* safe params helper */
function useSafeSearchParams() {
  const [sp, setSp] = useState<URLSearchParams | null>(null);
  useEffect(() => {
    setSp(new URLSearchParams(window.location.search));
    const onPop = () => setSp(new URLSearchParams(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return sp;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ClientRegisterForm() {
  const safeParams = useSafeSearchParams();
  const courseIdParam = safeParams?.get("courseId") ?? null;

  const preselectedCourse = useMemo(() => {
    if (!courseIdParam) return null;
    const idNum = Number(courseIdParam);
    if (!Number.isFinite(idNum)) return null;
    return courses.find((c) => c.id === idNum) ?? null;
  }, [courseIdParam]);

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    city: "",
    address: "",
    email: "",
    phone: "",
    selectedCourseId: "",
    level: "",
    education: "",
    employed: "",
    experience: "",
    heardFrom: "",
    paymentMethod: "",
    /** honeypot */
    company: "",
  });

  useEffect(() => {
    if (preselectedCourse) {
      setForm((f) =>
        f.selectedCourseId
          ? f
          : { ...f, selectedCourseId: String(preselectedCourse.id) }
      );
    }
  }, [preselectedCourse]);

  const currentCourse = useMemo(() => {
    if (form.selectedCourseId) {
      const bySelect = courses.find(
        (c) => String(c.id) === form.selectedCourseId
      );
      if (bySelect) return bySelect;
    }
    return preselectedCourse;
  }, [form.selectedCourseId, preselectedCourse]);

  const onChange =
    (name: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const val =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((f) => ({ ...f, [name]: val as any }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.company) return; // bot trap

    if (
      !form.selectedCourseId ||
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone
    ) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const selectedCourse = courses.find(
        (c) => String(c.id) === form.selectedCourseId
      );
      const payload = {
        ...form,
        selectedCourseTitle: selectedCourse?.title ?? "",
      };

      const res = await fetch(`${API_BASE}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Bad response");
      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setForm({
          firstName: "",
          lastName: "",
          birthDate: "",
          gender: "",
          city: "",
          address: "",
          email: "",
          phone: "",
          selectedCourseId: "",
          level: "",
          education: "",
          employed: "",
          experience: "",
          heardFrom: "",
          paymentMethod: "",
          company: "",
        });
      }, 1500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-afrodite-creme rounded-xl shadow-md p-8"
    >
      <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-2">
        Plotësoni Formularin e Aplikimit
      </h3>

      {currentCourse && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-afrodite-purple/10 px-3 py-1 text-sm text-afrodite-purple">
          <span className="opacity-80">Kurs i përzgjedhur:</span>
          <span className="font-semibold">{currentCourse.title}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* honeypot */}
        <input
          name="company"
          value={form.company}
          onChange={onChange("company")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Personal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Emri" required>
            <input
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.firstName}
              onChange={onChange("firstName")}
              placeholder="Emri"
              required
            />
          </Field>
          <Field label="Mbiemri" required>
            <input
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.lastName}
              onChange={onChange("lastName")}
              placeholder="Mbiemri"
              required
            />
          </Field>

          <Field label="Datëlindja">
            <input
              type="date"
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.birthDate}
              onChange={onChange("birthDate")}
            />
          </Field>

          <Field label="Gjinia">
            <SelectField
              value={form.gender}
              onChange={onChange("gender")}
              placeholder="Zgjidh gjininë"
              allowUnspecified
            >
              <option value="F">F</option>
              <option value="M">M</option>
              <option value="Tjetër">Tjetër</option>
            </SelectField>
          </Field>

          <Field label="Qyteti">
            <input
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.city}
              onChange={onChange("city")}
              placeholder="p.sh. Tiranë"
            />
          </Field>
          <Field label="Adresa">
            <input
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.address}
              onChange={onChange("address")}
              placeholder="Rruga, pallati, nr..."
            />
          </Field>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Email" required>
            <input
              type="email"
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.email}
              onChange={onChange("email")}
              placeholder="adresa@juaj.com"
              required
            />
          </Field>
          <Field label="Telefoni" required>
            <input
              className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
              value={form.phone}
              onChange={onChange("phone")}
              placeholder="+355 6X XXX XXXX"
              required
              inputMode="tel"
            />
          </Field>
        </div>

        {/* Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Kursi" required>
            <SelectField
              value={form.selectedCourseId}
              onChange={(e) =>
                setForm((f) => ({ ...f, selectedCourseId: e.target.value }))
              }
              placeholder="Zgjidh kursin"
              required
            >
              {courses.map((c) => (
                <option key={c.id} value={String(c.id)}>
                  {c.title}
                </option>
              ))}
            </SelectField>
          </Field>

          <Field label="Niveli">
            <SelectField
              value={form.level}
              onChange={onChange("level")}
              placeholder="Zgjidh nivelin"
              allowUnspecified
            >
              <option value="Bazë">Bazë</option>
              <option value="Avancuar">Avancuar</option>
              <option value="Vjetor">Vjetor</option>
            </SelectField>
          </Field>
        </div>

        {/* Education / Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Arsimi">
            <SelectField
              value={form.education}
              onChange={onChange("education")}
              placeholder="Zgjidh nivelin arsimor"
              allowUnspecified
            >
              <option value="9-vjeçare">9-vjeçare</option>
              <option value="Gjimnaz">Gjimnaz</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Tjetër">Tjetër</option>
            </SelectField>
          </Field>
        </div>

        <Field label="Përvoja / motivimi">
          <textarea
            rows={4}
            className="w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
            value={form.experience}
            onChange={onChange("experience")}
            placeholder="Na tregoni shkurtimisht për përvojën ose motivimin tuaj…"
          />
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Si na gjetët?">
            <SelectField
              value={form.heardFrom}
              onChange={onChange("heardFrom")}
              placeholder="Zgjidh një opsion"
              allowUnspecified
            >
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Mik/Familjar">Mik / Familjar</option>
              <option value="Tjetër">Tjetër</option>
            </SelectField>
          </Field>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "sending"}
            onClick={handleSubmit}
            className={`w-full flex justify-center items-center rounded-xl px-8 py-3 bg-afrodite-lightPurple text-afrodite-creme hover:bg-afrodite-purple transition-colors duration-300 ${
              status === "sending" ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <div className="flex items-center gap-x-3">
              {status === "sending" && (
                <Loader2 className="animate-spin w-5 h-5" />
              )}
              {status === "success" && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
              {status === "error" && (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
              {status === "idle" && <Send className="w-5 h-5" />}
              <span>
                {status === "sending"
                  ? "Duke dërguar…"
                  : status === "success"
                  ? "U dërgua me sukses"
                  : status === "error"
                  ? "Dështoi dërgimi"
                  : "Dërgo aplikimin"}
              </span>
            </div>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-afrodite-lightPurple mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  placeholder,
  children,
  allowUnspecified = false,
  required = false,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  children: React.ReactNode;
  allowUnspecified?: boolean;
  required?: boolean;
}) {
  const isPlaceholder = value === "";
  return (
    <select
      value={value}
      onChange={onChange}
      required={required}
      className={[
        "w-full rounded-md border border-afrodite-lightPurple/20 px-4 py-2 bg-white focus:border-afrodite-purple focus:ring-afrodite-purple",
        isPlaceholder ? "text-gray-400" : "text-afrodite-lightPurple",
      ].join(" ")}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {allowUnspecified && (
        <option value="unspecified">— Preferoj të mos e specifikoj —</option>
      )}
      {children}
    </select>
  );
}
