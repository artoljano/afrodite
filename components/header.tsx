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
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-gray-100 py-2 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-xs">
              <a
                href="tel:+35569204353"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Phone className="h-3 w-3 mr-1" />
                <span>+355 69 204 3535</span>
              </a>
              <a
                href="mailto:afroditeacademy@gmail.com"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Mail className="h-3 w-3 mr-1" />
                <span>afroditeacademy@gmail.com</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="group relative overflow-hidden rounded-full w-6 h-6 flex items-center justify-center bg-white"
              >
                <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <Facebook className="h-3 w-3 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="group relative overflow-hidden rounded-full w-6 h-6 flex items-center justify-center bg-white"
              >
                <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <Instagram className="h-3 w-3 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="group relative overflow-hidden rounded-full w-6 h-6 flex items-center justify-center bg-white"
              >
                <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <Linkedin className="h-3 w-3 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-white transition-all duration-300",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/placeholder.svg?height=40&width=40&text=Logo"
                alt="Afrodite Academy Logo"
                width={40}
                height={40}
                className="transition-all duration-300"
              />
              <div className="hidden sm:block">
                <h1 className="text-base font-bold text-navy-900 leading-tight">
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
                { name: "Kontakt", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative px-5 py-2 mx-1 text-sm font-medium group flex items-center",
                    pathname === item.path
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}

                  {/* Hover effect - line grows from left to right */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
                      pathname === item.path && "scale-x-100"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* CTA Button */}
              <AnimatedButton
                size="sm"
                variant="secondary"
                className="hidden md:flex"
              >
                Regjistrohu Tani
              </AnimatedButton>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
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
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {[
                  { name: "Kryefaqja", path: "/" },
                  { name: "Rreth Nesh", path: "/about" },
                  { name: "Kurset", path: "/courses" },
                  { name: "Kontakt", path: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "font-medium transition-colors py-2 px-4 rounded-lg flex items-center justify-between text-sm",
                      pathname === item.path
                        ? "bg-purple-100 text-purple-700"
                        : "text-black hover:bg-purple-50 hover:text-purple-700"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {pathname === item.path && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="h-2 w-2 rounded-full bg-purple-500"
                      />
                    )}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href="tel:+35569204353"
                    className="flex items-center text-navy-900 hover:text-purple-500 transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+355 69 204 3535</span>
                  </a>
                  <a
                    href="mailto:afroditeacademy@gmail.com"
                    className="flex items-center text-navy-900 hover:text-purple-500 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span>afroditeacademy@gmail.com</span>
                  </a>
                </div>

                <div className="flex space-x-4 mt-4">
                  <Link
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="group relative overflow-hidden rounded-full w-8 h-8 flex items-center justify-center bg-gray-100"
                  >
                    <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <Facebook className="h-4 w-4 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    aria-label="Instagram"
                    className="group relative overflow-hidden rounded-full w-8 h-8 flex items-center justify-center bg-gray-100"
                  >
                    <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <Instagram className="h-4 w-4 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="group relative overflow-hidden rounded-full w-8 h-8 flex items-center justify-center bg-gray-100"
                  >
                    <span className="absolute inset-0 bg-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    <Linkedin className="h-4 w-4 text-gray-600 group-hover:text-white relative z-10 transition-colors" />
                  </Link>
                </div>
              </div>

              <div className="mt-6">
                <AnimatedButton
                  variant="secondary"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Regjistrohu Tani
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
