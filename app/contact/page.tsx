"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AnimatedButton } from "@/components/animated-button";
import VideoBackground from "@/components/video-background";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

// Define the address data
const addresses = [
  {
    id: 1,
    city: "Tiranë",
    address:
      "Rruga “Tom Plezha”, përballë me karburantin Kastrati, Unaza e Re, Tiranë, Shqipëri",
    phone: "+355 69 204 3535",
    email: "afroditeacademy@gmail.com",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    embedUrl:
      "https://www.google.com/maps?ll=41.328786,19.782922&z=19&t=m&hl=en-US&gl=US&mapclient=embed&q=Afrodite+Academy&output=embed",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Tirana+Building",
  },
  {
    id: 2,
    city: "Durrës",
    address: "Lagja Nr 5, Rruga Dëshmorët, Durrës, Shqipëri",
    phone: "+355 69 123 4567",
    email: "durres@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    embedUrl:
      "https://maps.google.com/maps?q=41.3186617,19.4475765&z=19&output=embed",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Durres+Building",
  },
  {
    id: 3,
    city: "Shkodër",
    address:
      "Rruga “Jeronim de Rada”, tek Biblioteka e Universitetit Juridik, Shkodër, Shqipëri",
    phone: "+355 69 987 6543",
    email: "shkoder@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    embedUrl:
      "https://maps.google.com/maps?q=42.070424,19.516161&z=19&output=embed",
    buildingImage:
      "/placeholder.svg?height=600&width=800&text=Shkoder+Building",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  });
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

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
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          interest: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timeout = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleAddressSelect = (addr: (typeof addresses)[0]) => {
    setSelectedAddress(addr);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-black to-purple-900 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Academy+Building')] bg-cover bg-center opacity-5"
          aria-hidden="true"
        />
        {/* Decorative wave in top‐corner */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt=""
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        {/* (Optional) Video background, controls only */}
        <VideoBackground
          showControls
          className="absolute inset-0 pointer-events-none"
        />

        {/* Dark overlay so text pops */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" /> */}

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span>Na Kontaktoni</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
              Na Kontaktoni
            </h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg text-gray-300">
              Jemi këtu për t'ju ndihmuar me çdo pyetje që mund të keni në
              lidhje me kurset tona profesionale. Na kontaktoni dhe do t'ju
              përgjigjemi sa më shpejt të jetë e mundur.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator fixed at bottom */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Location Selector */}
      <section className="py-6 bg-white border-b sticky top-[80px] z-30 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Zgjidhni lokacionin:
          </h2>
          <div className="flex flex-wrap gap-2">
            {addresses.map((addr) => (
              <AnimatedButton
                key={addr.id}
                variant={
                  selectedAddress.id === addr.id ? "secondary" : "outline"
                }
                size="sm"
                onClick={() => handleAddressSelect(addr)}
                showScale={false}
              >
                <Building className="mr-2 h-4 w-4" />
                {addr.city}
                {selectedAddress.id === addr.id && (
                  <Check className="ml-2 h-4 w-4" />
                )}
              </AnimatedButton>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="mb-8">
              <div className="h-1 w-16 bg-purple-500 mb-4" />
              <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
                Informacione Kontakti
              </h2>
              <p className="text-gray-700">
                Na kontaktoni përmes një prej mënyrave të mëposhtme ose
                plotësoni formularin dhe do t'ju kontaktojmë ne.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Adresa</h3>
                  <p className="text-gray-700">{selectedAddress.address}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <a
                    href={`tel:${selectedAddress.phone}`}
                    className="text-gray-700 hover:text-purple-600"
                  >
                    {selectedAddress.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${selectedAddress.email}`}
                    className="text-gray-700 hover:text-purple-600"
                  >
                    {selectedAddress.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Clock className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Orari</h3>
                  <p className="text-gray-700">
                    E Hënë - E Premte: {selectedAddress.hours.weekdays}
                  </p>
                  <p className="text-gray-700">
                    E Shtunë: {selectedAddress.hours.saturday}
                  </p>
                  <p className="text-gray-700">
                    E Diel: {selectedAddress.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">
                Na ndiqni në rrjetet sociale
              </h3>
              <div className="flex space-x-4">
                <AnimatedButton
                  variant="secondary"
                  size="sm"
                  className="p-3 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </AnimatedButton>
                <AnimatedButton
                  variant="secondary"
                  size="sm"
                  className="p-3 rounded-full"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </AnimatedButton>
                <AnimatedButton
                  variant="secondary"
                  size="sm"
                  className="p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </AnimatedButton>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
                Na dërgoni një mesazh
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">
                      Emri i plotë
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Emri juaj i plotë"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
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
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">
                      Numri i telefonit
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+355 6X XXX XXXX"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700">
                      Subjekti
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subjekti i mesazhit"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-700">
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
                        className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <RadioGroupItem
                          value={opt.id}
                          id={opt.id}
                          className="text-purple-600"
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
                  <Label htmlFor="message" className="text-gray-700">
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
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  />
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full flex justify-center items-center ${
                    status === "sending"
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-purple-700"
                  }`}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
              Na gjeni këtu
            </h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Vizitoni Akademinë Afrodite në {selectedAddress.city} për të
              mësuar më shumë rreth kurseve tona dhe për të takuar ekipin tonë
              profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Google Map */}
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
              />
            </motion.div>

            {/* Building Image */}
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Akademia Afrodite {selectedAddress.city}
                </h3>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-purple-400" />
                  <span>
                    E Hënë - E Premte: {selectedAddress.hours.weekdays}
                  </span>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2 text-purple-400" />
                  <span>{selectedAddress.phone}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
