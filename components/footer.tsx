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
import { AnimatedButton } from "./animated-button";

export default function Footer() {
  return (
    <footer className="bg-white text-afrodite-purple pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/afrodite-logo.png"
                alt="Afrodite Academy Logo"
                width={80}
                height={80}
                className="bg-white rounded-full p-2"
              />
            </div>
            <p className="text-afrodite-purple mb-6">
              E angazhuar në ngritjen e standardeve të arsimit profesional,
              Afrodite Academy ofron programe të certifikuara.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <AnimatedButton
                  // ← important to make the button render as <a>
                  variant="socials"
                  size="sm"
                  showRipple={false}
                  className="rounded-full p-3"
                >
                  <Facebook className="h-5 w-5" />
                </AnimatedButton>
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
              >
                <AnimatedButton
                  variant="socials"
                  size="sm"
                  className="rounded-full p-3"
                  showRipple={false}
                >
                  <Instagram className="h-5 w-5" />
                </AnimatedButton>
              </Link>

              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
              >
                <AnimatedButton
                  variant="socials"
                  size="sm"
                  className="rounded-full p-3"
                  showRipple={false}
                >
                  <Linkedin className="h-5 w-5" />
                </AnimatedButton>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-poppins mb-6 relative">
              <span className="relative z-10">Lidhje të Shpejta</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-afrodite-purple"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Faqja Kryesore
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Rreth Akademisë
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Kurse Profesionale
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
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
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-afrodite-purple"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses?category=makeup"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Makeup Artist
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=nails"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Manikyr & Pedikyr
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=esthetics"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Estetikë
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=lashes&category=brows"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Qerpikë & Vetulla
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=barber&category=hair"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
                >
                  <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Stilim Flokësh
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?category=pajisje"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors flex items-center group"
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
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-afrodite-purple"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-afrodite-lightPurple mt-1 flex-shrink-0" />
                <span className="text-afrodite-purple">
                  Rruga "Tom Plezha", Kompleksi I pallateve "Milo 2000",
                  Rrethrrotullimi Astir, Unaza e Re, Tirane
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-afrodite-lightPurple flex-shrink-0" />
                <Link
                  href="tel:+35569204353"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors"
                >
                  +355 69 204 3535
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-afrodite-lightPurple flex-shrink-0" />
                <Link
                  href="mailto:info@afroditeacademy.al"
                  className="text-afrodite-lightPurple hover:text-afrodite-purple transition-colors"
                >
                  info@afroditeacademy.al
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-afrodite-purple pt-8 text-center text-afrodite-lightPurple">
          <p>
            &copy; {new Date().getFullYear()} Afrodite Academy. Të gjitha të
            drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
}
