import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=80&width=80&text=Logo"
                alt="Afrodite Academy Logo"
                width={80}
                height={80}
                className="bg-white rounded-full p-2"
              />
            </div>
            <p className="text-navy-100 mb-6">
              Afrodite Academy është një institucion i specializuar në ofrimin e
              kurseve profesionale ndërkombëtare në fushën e bukurisë dhe
              estetikës.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="bg-purple-700 hover:bg-purple-500 transition-colors p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="bg-purple-700 hover:bg-purple-500 transition-colors p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="bg-purple-700 hover:bg-purple-500 transition-colors p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6 relative">
              <span className="relative z-10">Lidhje të Shpejta</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Faqja Kryesore
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Rreth Akademisë
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Kurse Profesionale
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Na Kontaktoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6 relative">
              <span className="relative z-10">Kurset Tona</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses?category=makeup"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Makeup Artist
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=nails"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Manikyr & Pedikyr
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=esthetics"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Estetikë
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=lashes&category=brows"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Qerpikë & Vetulla
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=barber&category=hair"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Stilim Flokësh
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=pajisje"
                  className="text-navy-100 hover:text-purple-500 transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Pajisje & Trajtimet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6 relative">
              <span className="relative z-10">Na Kontaktoni</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-purple-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-navy-100">
                  Rruga "Tom Plezha", Ura e Re, Tiranë, Shqipëri
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold-500 flex-shrink-0" />
                <Link
                  href="tel:+35569204353"
                  className="text-navy-100 hover:text-gold-500 transition-colors"
                >
                  +355 69 204 3535
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold-500 flex-shrink-0" />
                <Link
                  href="mailto:afroditeacademy@gmail.com"
                  className="text-navy-100 hover:text-gold-500 transition-colors"
                >
                  afroditeacademy@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Afrodite Academy. Të gjitha të
            drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
