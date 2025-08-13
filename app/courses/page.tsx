"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  X,
  Filter,
  Clock,
  Users,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  GraduationCap,
  CheckCircle,
  Scissors,
  Eye,
  Feather,
  ClipboardList,
  User,
  Play,
} from "lucide-react";
import {
  Headphones,
  PenTool,
  HeartHandshake,
  Droplet,
  Hammer,
  ShoppingBag,
  Heart,
  MapPin,
  Globe,
  Briefcase,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { AnimatedButton } from "@/components/animated-button";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
// Import courses from data/courses.ts
import { courses } from "@/data/courses";
import VideoModal from "@/components/video-modal";

const categories = [
  { id: "makeup", name: "Makeup", icon: <Feather className="h-4 w-4" /> },
  {
    id: "nails",
    name: "Manikyr & Pedikyr",
    icon: <Award className="h-4 w-4" />,
  },
  { id: "esthetics", name: "Estetikë", icon: <Sparkles className="h-4 w-4" /> },
  {
    id: "facials",
    name: "Trajtimet e Fytyrës",
    icon: <User className="h-4 w-4" />,
  },
  // { id: "brows", name: "Vetulla", icon: <Eye className="h-4 w-4" /> },
  {
    id: "lashes",
    name: "Zgjatimi i Qerpikëve",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  { id: "hair", name: "Parukeri", icon: <Users className="h-4 w-4" /> },
  // { id: "barber", name: "Berber", icon: <Scissors className="h-4 w-4" /> },
  { id: "massage", name: "Masazh", icon: <BookOpen className="h-4 w-4" /> },
  {
    id: "therapy",
    name: "Terapitë Estetike",
    icon: <Heart className="h-4 w-4" />,
  },
  // {
  //   id: "reception",
  //   name: "Recepsion",
  //   icon: <Headphones className="h-4 w-4" />,
  // },
  // {
  //   id: "tour-guide",
  //   name: "Udhërrëfyes Turistik",
  //   icon: <MapPin className="h-4 w-4" />,
  // },
  {
    id: "tourism",
    name: "Shërbime Turistike",
    icon: <Globe className="h-4 w-4" />,
  },
  // {
  //   id: "travel-agent",
  //   name: "Agjent Udhëtimesh",
  //   icon: <Briefcase className="h-4 w-4" />,
  // },
  // {
  //   id: "craft",
  //   name: "Veshje Artizanale",
  //   icon: <Hammer className="h-4 w-4" />,
  // },
  // {
  //   id: "industrial",
  //   name: "Modeliste Industriale",
  //   icon: <ShoppingBag className="h-4 w-4" />,
  // },
  {
    id: "fashion",
    name: "Fashion Design",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    id: "cleaning",
    name: "Pastrim Profesional",
    icon: <Droplet className="h-4 w-4" />,
  },
  {
    id: "caregiver",
    name: "Kujdestar",
    icon: <HeartHandshake className="h-4 w-4" />,
  },

  { id: "tattoo", name: "Tattoo Art", icon: <PenTool className="h-4 w-4" /> },
  {
    id: "UET Italia",
    name: "UET Italia",
    icon: <GraduationCap className="h-4 w-4" />,
  },
];

const durations = [
  { id: "50 orë", name: "50 orë" },
  { id: "150 orë", name: "150 orë" },
  { id: "200 orë", name: "200 orë" },
  { id: "300 orë", name: "300 orë" },
  { id: "360 orë", name: "360 orë" },
  { id: "400 orë", name: "400 orë" },
  { id: "560 orë", name: "560 orë" },
  { id: "600 orë", name: "600 orë" },
  { id: "900 orë", name: "900 orë" },
  { id: "1000 orë", name: "1000 orë" },
  { id: "1200 orë", name: "1200 orë" },
  { id: "1500 orë", name: "1500 orë" },
  { id: "1800 orë", name: "1800 orë" },
  { id: "2100 orë", name: "2100 orë" },
  { id: "2500 orë", name: "2500 orë" },
];

export default function CoursesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc" | "date"
  >("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  useEffect(() => {
    if (initialCategory && categories.some((c) => c.id === initialCategory)) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  useEffect(() => {
    const categoriesFromUrl = searchParams.getAll("category");
    setSelectedCategories(categoriesFromUrl);
  }, [searchParams]); // ✅ only runs when URL search params change

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleDuration = (durationId: string) => {
    setSelectedDurations((prev) =>
      prev.includes(durationId)
        ? prev.filter((id) => id !== durationId)
        : [...prev, durationId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSearchQuery("");
    setSortBy("default");
  };

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);
    const matchesDuration =
      selectedDurations.length === 0 ||
      selectedDurations.includes(course.durationCategory);
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDuration && matchesSearch;
  });

  // Sort courses based on selected sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "price-asc") {
      return (
        Number.parseInt(a.price.replace(/[^0-9]/g, "")) -
        Number.parseInt(b.price.replace(/[^0-9]/g, ""))
      );
    } else if (sortBy === "price-desc") {
      return (
        Number.parseInt(b.price.replace(/[^0-9]/g, "")) -
        Number.parseInt(a.price.replace(/[^0-9]/g, ""))
      );
    } else if (sortBy === "date") {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    } else {
      // Default sorting - featured courses first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedDurations.length > 0 ||
    searchQuery !== "";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-32 bg-gradient-to-r from-black to-purple-900 overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/videos/testimonials/diploma.mp4')] bg-cover bg-center opacity-5" />
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span>Kurse të certifikuara ndërkombëtarisht</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6">
              Kurset Tona <span className="text-purple-400">Profesionale</span>
            </h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8" />
            <p className="text-lg text-gray-300 mb-8">
              Zgjidhni nga kurset tona të shumta profesionale për të avancuar
              karrierën tuaj dhe për të fituar aftësi të reja të kërkuara në
              tregun e punës.
            </p>

            {/* Search bar in hero */}
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Kërko kurse..."
                className="pl-10 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Filters Section - Compact Version */}
      <section className="sticky top-[96px] z-30 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-3">
            {/* headline + mobile toggle */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900 flex items-center">
                <Filter className="h-4 w-4 mr-1 text-purple-600" />
                <span>Filtro</span>
              </h3>
              {/* only on small screens */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              >
                {mobileFiltersOpen ? "Mbyll Filtrat" : "Filtrat"}
              </Button>
            </div>

            {/* actual filters: hidden on mobile unless toggled, always visible on md+ */}
            <div
              className={`
                transition-all
                ${
                  mobileFiltersOpen
                    ? "max-h-[500px]"
                    : "max-h-0 overflow-hidden"
                }
                md:max-h-full md:overflow-visible md:flex md:flex-wrap md:gap-4
              `}
            >
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-1.5 mb-3 md:mb-0">
                <span className="text-xs font-medium text-gray-500 mr-1">
                  Kategori:
                </span>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    size="sm"
                    variant={
                      selectedCategories.includes(cat.id)
                        ? "default"
                        : "outline"
                    }
                    className={`
        h-7 px-2 py-0 text-xs
        ${
          cat.id === "UET Italia" && !selectedCategories.includes(cat.id)
            ? "bg-[#FF7F00]"
            : ""
        }
      `}
                    onClick={() => toggleCategory(cat.id)}
                  >
                    {cat.icon}
                    <span className="ml-1">{cat.name}</span>
                  </Button>
                ))}
              </div>

              {/* Duration Filters */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-gray-500 mr-1">
                  Kohëzgjatje:
                </span>
                {durations.map((d) => (
                  <Button
                    key={d.id}
                    size="sm"
                    variant={
                      selectedDurations.includes(d.id) ? "default" : "outline"
                    }
                    className="h-7 px-2 py-0 text-xs"
                    onClick={() => toggleDuration(d.id)}
                  >
                    {d.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section ref={coursesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {sortedCourses.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative flex flex-col h-full"
                >
                  {/* Featured badge */}
                  {course.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Kurs i Rekomanduar
                    </div>
                  )}

                  <div className="relative h-[14rem] overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      style={
                        course.noCustomCrop
                          ? undefined
                          : { objectPosition: "center 30%" }
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Course info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Clock className="h-4 w-4 text-purple-300" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Users className="h-4 w-4 text-purple-300" />
                        <span>{course.students} studentë</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center mb-2 flex-wrap gap-2">
                        <span className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                          {
                            categories.find((c) => c.id === course.category)
                              ?.name
                          }
                        </span>
                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-700 line-clamp-3 mb-4">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Calendar className="h-4 w-4 mr-1 text-purple-600" />
                        <span>{course.schedule}</span>
                      </div>
                      <Link
                        href={
                          course.category === "UET Italia" && course.link
                            ? course.link
                            : `/courses/${course.id}`
                        }
                      >
                        <AnimatedButton
                          size="default"
                          variant="default"
                          className="w-full block px-6 py-2 bg-black hover:bg-black text-white"
                        >
                          Mëso më shumë
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform hover:translate-x-1" />
                        </AnimatedButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nuk u gjet asnjë kurs
              </h3>
              <p className="text-gray-700 mb-6">
                Provoni të ndryshoni filtrat ose të kërkoni diçka tjetër.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Pastro filtrat
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm mb-4">
                <span>Pse të zgjidhni kurset tona</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
                Përfitimet e{" "}
                <span className="text-purple-600">Kurseve Tona</span>
              </h2>
              <p className="text-gray-700 mb-8">
                Në Afrodite Academy, çdo kurs është konceptuar për t’ju pajisur
                me njohuritë dhe aftësitë më të përparuara në industrinë e
                bukurisë, duke hapur rrugën drejt suksesit tuaj profesional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Certifikim Ndërkombëtar
                    </h3>
                    <p className="text-gray-700">
                      Të gjithë studentët marrin certifikata të akredituara
                      ndërkombëtarisht nga Afrodite Academy, që ju mundësojnë të
                      konkurroni dhe të punësoni kudo në botë.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Mentorë me eksperiencë ndërkombëtare
                    </h3>
                    <p className="text-gray-700">
                      Instruktorët tanë janë profesionistë të njohur
                      ndërkombëtarisht, që sjellin përvojën e tyre praktike në
                      çdo seancë dhe ju udhëheqin hap pas hapi drejt
                      ekspertizës.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Praktikë e fokusuar në rezultate
                    </h3>
                    <p className="text-gray-700">
                      Në Afrodite Academy, pjesa praktike zë pjesën më të madhe
                      të programit: ju punoni me pajisje dhe produkte premium,
                      zhvilloni raste studimi reale dhe ndërtoni portofolin tuaj
                      profesional nën mbikëqyrjen e mentorëve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Networking dhe mundësi karriere
                    </h3>
                    <p className="text-gray-700">
                      Si pjesë e komunitetit Afrodite Academy, keni akses në
                      evente ekskluzive rrjetëzimi, bashkëpunime me qendra
                      estetike dhe mundësi praktike drejtëpërdrejt nga partnerët
                      tanë të industrisë.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Mbështetje paskursore
                    </h3>
                    <p className="text-gray-700">
                      Edhe pas përfundimit të kursit, Afrodite Academy ju ofron
                      workshop-e shtesë, seminare dhe akses në grupin tonë
                      profesional për t’ju ndihmuar të qëndroni gjithmonë në
                      majë të trendeve.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column with video preview and modal */}
            <div className="relative">
              <div
                className="
      relative 
      rounded-xl 
      overflow-hidden 
      shadow-lg 
      group 
      h-[300px] 
      sm:h-[400px] 
      md:h-[500px] 
      xl:h-[60vh] 
      w-full"
              >
                <video
                  src="/videos/course-benefits.mp4"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              </div>

              {/* Stats box stays the same */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 max-w-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-700">Studentë të diplomuar</div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-700">Kurse profesionale</div>
                  <div className="text-2xl font-bold text-gray-900">20+</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-gray-700">Vite eksperiencë</div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
              <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Nuk jeni të sigurt cili kurs{" "}
              <span className="text-purple-400">është për ju?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Na kontaktoni për një konsultim falas dhe do t'ju ndihmojmë të
              zgjidhni kursin që përshtatet më mirë me qëllimet tuaja
              profesionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="secondary"
                  className="bg-purple-600 hover:bg-black text-white border border-purple-500/30"
                >
                  NA KONTAKTONI
                </AnimatedButton>
              </Link>
              <Link href="/about">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="bg-black hover:bg-black text-white border border-purple-500/30"
                >
                  RRETH AKADEMISË
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <Image
            src="/wave-pattern.svg"
            alt="Decorative pattern"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
