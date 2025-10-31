"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  Facebook,
  Instagram,
  Sparkles,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatedButton } from "@/components/animated-button";
import WhatsAppButton from "@/components/whatsapp-button";

/* =========================
   Types
   ========================= */
type Address = {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  embedUrl: string;
  buildingImage: string;
};

type Status = "idle" | "sending" | "success" | "error";

/* =========================
   Data
   ========================= */
const addresses = [
  {
    id: 1,
    city: "Tiranë",
    address:
      'Rruga "Tom Plezha", Kompleksi I pallateve "Milo 2000", Rrethrrotullimi Astir, Unaza e Re, Tiranë',
    phone: "+355 69 204 3535",
    email: "info@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    embedUrl:
      "https://www.google.com/maps?ll=41.328786,19.782922&z=19&t=m&hl=en-US&gl=US&mapclient=embed&q=Afrodite+Academy&output=embed",
    buildingImage: "/contact/contact-tirane.webp",
  },
  {
    id: 3,
    city: "Shkodër",
    address:
      "Rruga “Jeronim de Rada”, tek Biblioteka e Universitetit Juridik, Shkodër, Shqipëri",
    phone: "+355 69 204 3535",
    email: "shkoder@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    embedUrl:
      "https://maps.google.com/maps?q=42.070424,19.516161&z=19&output=embed",
    buildingImage: "/contact/contact-shkoder.webp",
  },
] satisfies ReadonlyArray<Address>;

/* =========================
   API helper
   ========================= */
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "";
const api = (path: string) => (API_BASE ? `${API_BASE}${path}` : path);

/* =========================
   Component
   ========================= */
export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
    /** honeypot */
    company: "",
  });

  // Typed so any element from addresses is valid
  const [selectedAddress, setSelectedAddress] = useState<Address>(addresses[0]);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((p) => ({ ...p, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormState((p) => ({ ...p, interest: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.company) return; // bot trap
    setStatus("sending");
    try {
      const response = await fetch(api("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Bad response");
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        interest: "general",
        message: "",
        company: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-afrodite-creme">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="" width={256} height={256} />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Na Kontaktoni</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-afrodite-purple mb-6">
              Na kontaktoni
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-8" />
            <p className="text-lg text-afrodite-lightPurple">
              Jemi këtu për çdo pyetje rreth kurseve tona profesionale.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 border-2 border-afrodite-purple/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-afrodite-lightPurple rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Location Selector */}
      <section className="py-6 bg-white border-b sticky top-[80px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-afrodite-purple">
            Zgjidhni lokacionin:
          </h2>
          <div className="flex flex-wrap gap-2">
            {addresses.map((addr) => (
              <AnimatedButton
                key={addr.id}
                variant={selectedAddress.id === addr.id ? "default" : "custom"}
                size="sm"
                onClick={() => setSelectedAddress(addr)}
                showScale={false}
                className="px-8 !bg-afrodite-lightPurple !text-afrodite-creme flex items-center"
              >
                <Building className="mr-2 h-4 w-4" />
                {addr.city}
                {selectedAddress.id === addr.id && (
                  <MapPin className="ml-2 h-4 w-4" />
                )}
              </AnimatedButton>
            ))}
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-16 md:py-24 bg-afrodite-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-afrodite-creme p-8 rounded-xl shadow-md"
          >
            <div className="mb-8">
              <div className="h-1 w-16 bg-afrodite-purple mb-4" />
              <h2 className="text-3xl font-bold font-poppins text-afrodite-purple mb-4">
                Informacione Kontakti
              </h2>
              <p className="text-afrodite-lightPurple">
                Na kontaktoni përmes një prej mënyrave të mëposhtme ose
                plotësoni formularin.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-afrodite-purple p-3 rounded-full mr-4 group-hover:bg-afrodite-lightPurple transition-colors">
                  <MapPin className="h-6 w-6 text-afrodite-creme" />
                </div>
                <div>
                  <h3 className="font-bold text-afrodite-purple mb-1">
                    Adresa
                  </h3>
                  <p className="text-afrodite-lightPurple">
                    {selectedAddress.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-afrodite-purple p-3 rounded-full mr-4 group-hover:bg-afrodite-lightPurple transition-colors">
                  <Phone className="h-6 w-6 text-afrodite-creme" />
                </div>
                <div>
                  <h3 className="font-bold text-afrodite-purple mb-1">
                    Telefon
                  </h3>
                  <a
                    href={`tel:${selectedAddress.phone}`}
                    className="text-afrodite-lightPurple hover:text-afrodite-purple"
                  >
                    {selectedAddress.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-afrodite-purple p-3 rounded-full mr-4 group-hover:bg-afrodite-lightPurple transition-colors">
                  <Mail className="h-6 w-6 text-afrodite-creme" />
                </div>
                <div>
                  <h3 className="font-bold text-afrodite-purple mb-1">Email</h3>
                  <a
                    href={`mailto:${selectedAddress.email}`}
                    className="text-afrodite-lightPurple hover:text-afrodite-purple"
                  >
                    {selectedAddress.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-afrodite-purple p-3 rounded-full mr-4 group-hover:bg-afrodite-lightPurple transition-colors">
                  <Clock className="h-6 w-6 text-afrodite-creme" />
                </div>
                <div>
                  <h3 className="font-bold text-afrodite-purple mb-1">Orari</h3>
                  <p className="text-afrodite-lightPurple">
                    E Hënë - E Premte: {selectedAddress.hours.weekdays}
                  </p>
                  <p className="text-afrodite-lightPurple">
                    E Shtunë: {selectedAddress.hours.saturday}
                  </p>
                  <p className="text-afrodite-lightPurple">
                    E Diel: {selectedAddress.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-afrodite-purple">
              <h3 className="font-bold text-afrodite-purple mb-4">
                Na ndiqni në rrjete
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1CXyPNAHqP/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <AnimatedButton
                    variant="socials"
                    size="sm"
                    showRipple={false}
                    className="rounded-full p-3"
                  >
                    <Facebook className="h-5 w-5" />
                  </AnimatedButton>
                </a>

                <a
                  href="https://www.instagram.com/afrodite.academy_shkoder?igsh=ZGUyZHJnc2ZteHJ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <AnimatedButton
                    variant="socials"
                    size="sm"
                    showRipple={false}
                    className="rounded-full p-3"
                  >
                    <Instagram className="h-5 w-5" />
                  </AnimatedButton>
                </a>

                <a
                  href="https://www.tiktok.com/@afrodite_academy?_t=ZM-90vhH2Wr7Gu&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <AnimatedButton
                    variant="socials"
                    size="sm"
                    showRipple={false}
                    className="rounded-full p-3"
                  >
                    <SiTiktok className="h-5 w-5" />
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-afrodite-creme rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold font-poppins text-afrodite-purple mb-6">
                Na dërgoni një mesazh
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* honeypot */}
                <input
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-afrodite-lightPurple">
                      Emri i plotë
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Emri juaj i plotë"
                      required
                      className="border-afrodite-lightPurple/20 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-afrodite-lightPurple"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="adresa@juaj.com"
                      required
                      className="border-afrodite-lightPurple/20 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-afrodite-lightPurple"
                    >
                      Numri i telefonit
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+355 6X XXX XXXX"
                      className="border-afrodite-lightPurple/20 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-afrodite-lightPurple"
                    >
                      Subjekti
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subjekti i mesazhit"
                      required
                      className="border-afrodite-lightPurple/20 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-afrodite-lightPurple">
                    Jam i/e interesuar për:
                  </Label>
                  <RadioGroup
                    value={formState.interest}
                    onValueChange={handleRadioChange}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                  >
                    {[
                      { id: "general", label: "Informacion i përgjithshëm" },
                      { id: "courses", label: "Kurse specifike" },
                      { id: "collaboration", label: "Bashkëpunim" },
                      { id: "other", label: "Tjetër" },
                    ].map((opt) => (
                      <div
                        key={opt.id}
                        className="flex items-center space-x-2 bg-afrodite-creme p-3 rounded-lg hover:bg-afrodite-lightPurple/20 transition-colors"
                      >
                        <RadioGroupItem
                          value={opt.id}
                          id={opt.id}
                          className="text-afrodite-purple"
                        />
                        <Label
                          htmlFor={opt.id}
                          className="cursor-pointer w-full"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-afrodite-lightPurple"
                  >
                    Mesazhi
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Shkruani mesazhin tuaj këtu..."
                    rows={5}
                    required
                    className="border-afrodite-lightPurple/20 text-afrodite-lightPurple focus:border-afrodite-purple focus:ring-afrodite-purple"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={status === "sending"}
                  variant="custom"
                  size="lg"
                  className={cn(
                    "w-full flex justify-center items-center bg-afrodite-lightPurple text-afrodite-creme",
                    "hover:bg-afrodite-purple transition-colors duration-300 px-8",
                    status === "sending" && "opacity-70 cursor-not-allowed"
                  )}
                >
                  <div className="flex items-center gap-x-3">
                    {status === "sending" && (
                      <Loader2 className="animate-spin w-5 h-5" />
                    )}
                    {status === "success" && (
                      <CheckCircle className="text-green-400 w-5 h-5" />
                    )}
                    {status === "error" && (
                      <XCircle className="text-red-500 w-5 h-5" />
                    )}
                    {status === "idle" && <Send className="w-5 h-5" />}
                    <span>
                      {status === "sending"
                        ? "Duke dërguar..."
                        : status === "success"
                        ? "U dërgua me sukses"
                        : status === "error"
                        ? "Dështoi dërgimi"
                        : "Dërgo Mesazhin"}
                    </span>
                  </div>
                </AnimatedButton>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map & Building */}
      <section className="py-16 md:py-24 bg-afrodite-creme relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-afrodite-purple mb-4">
              Na gjeni këtu
            </h2>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-6" />
            <p className="text-lg text-afrodite-lightPurple max-w-2xl mx-auto">
              Vizitoni Akademinë Afrodite në {selectedAddress.city}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              key={`map-${selectedAddress.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-navy-100"
            >
              <iframe
                src={selectedAddress.embedUrl}
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                title={`Harta ${selectedAddress.city}`}
              />
            </motion.div>

            <motion.div
              key={`building-${selectedAddress.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] relative group"
            >
              <Image
                src={selectedAddress.buildingImage}
                alt={`Ndërtesa e Akademisë Afrodite në ${selectedAddress.city}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-afrodite-creme">
                <h3 className="text-xl font-bold mb-2">
                  Akademia Afrodite {selectedAddress.city}
                </h3>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>
                    E Hënë - E Premte: {selectedAddress.hours.weekdays}
                  </span>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{selectedAddress.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
