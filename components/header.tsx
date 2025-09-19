"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { AnimatedButton } from "@/components/animated-button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 ">
      {/* Top Info Bar */}
      <div className="bg-afrodite-lightPurple py-2 border-b border-afrodite-creme ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-xs">
              <a
                href="tel:+355 69 204 3535"
                className="flex items-center text-afrodite-creme hover:text-afrodite-purple transition-colors"
              >
                <Phone className="h-3 w-3 mr-1" />
                <span>+355 69 204 3535</span>
              </a>
              <a
                href="mailto:info@afroditeacademy.al"
                className="flex items-center text-afrodite-creme hover:text-afrodite-purple transition-colors"
              >
                <Mail className="h-3 w-3 mr-1" />
                <span>info@afroditeacademy.al</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="hidden sm:flex items-center space-x-4">
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
                  className="rounded-full h-6 w-6 p-1"
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
                  className="rounded-full h-6 w-6 p-1"
                  showRipple={false}
                >
                  <Instagram className="h-6 w-6" />
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
                  className="rounded-full h-6 w-6 p-1"
                  showRipple={false}
                >
                  <Linkedin className="h-5 w-5" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-afrodite-creme transition-all duration-300 border-b border-afrodite-purple ",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/afrodite-logo.png"
                alt="Afrodite Academy Logo"
                width={40}
                height={40}
                className="transition-all duration-300"
              />
              <div className="hidden sm:block">
                <h1 className="text-base font-bold text-afrodite-purple leading-tight">
                  Afrodite Academy
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {[
                { name: "Kryefaqja", path: "/" },
                { name: "Rreth Nesh", path: "/about" },
                { name: "Kurset", path: "/courses" },
                { name: "Cmimet", path: "/awards" },
                { name: "Kontakt", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative px-5 py-2 mx-1 text-sm font-medium group flex items-center",
                    item.path === "/"
                      ? pathname === "/"
                        ? "text-afrodite-purple"
                        : "text-afrodite-lightPurple hover:text-afrodite-purple"
                      : pathname.startsWith(item.path)
                      ? "text-afrodite-purple"
                      : "text-afrodite-lightPurple hover:text-afrodite-purple"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />} */}

                  {/* Hover effect - line grows from left to right */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                      item.path === "/"
                        ? pathname === "/" && "scale-x-100"
                        : pathname.startsWith(item.path) && "scale-x-100"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* CTA Button */}
              <Link href="/register">
                <AnimatedButton
                  size="sm"
                  variant="secondary"
                  className="hidden md:flex"
                >
                  Regjistrohu Tani
                </AnimatedButton>
              </Link>
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2  text-afrodite-lightPurple hover:text-afrodite-purple transition-colors bg-afrodite-creme"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-afrodite-creme border-t border-b border-afrodite-purple shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {[
                  { name: "Kryefaqja", path: "/" },
                  { name: "Rreth Nesh", path: "/about" },
                  { name: "Kurset", path: "/courses" },
                  { name: "Cmimet", path: "/awards" },
                  { name: "Kontakt", path: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "relative px-5 py-2 mx-1 text-sm font-medium group flex items-center",
                      item.path === "/"
                        ? pathname === "/"
                          ? "text-afrodite-purple"
                          : "text-afrodite-lightPurple hover:text-afrodite-purple"
                        : pathname.startsWith(item.path)
                        ? "text-afrodite-purple"
                        : "text-afrodite-lightPurple hover:text-afrodite-purple"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {(item.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.path)) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full"
                      />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-b border-afrodite-purple">
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href="tel:+355692043535"
                    className="flex items-center text-afrodite-lightPurple hover:text-afrodite-purple transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+355 69 204 3535</span>
                  </a>
                  <a
                    href="mailto:info@afroditeacademy.al"
                    className="flex items-center text-afrodite-lightPurple hover:text-afrodite-purple transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span>info@afroditeacademy.al</span>
                  </a>
                </div>

                <div className="flex space-x-4 mt-4">
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
                      className="rounded-full h-6 w-6 p-1"
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
                      className="rounded-full h-6 w-6 p-1"
                      showRipple={false}
                    >
                      <Instagram className="h-6 w-6" />
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
                      className="rounded-full h-6 w-6 p-1"
                      showRipple={false}
                    >
                      <Linkedin className="h-5 w-5" />
                    </AnimatedButton>
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/register">
                  <AnimatedButton
                    variant="secondary"
                    className="w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Regjistrohu Tani
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
