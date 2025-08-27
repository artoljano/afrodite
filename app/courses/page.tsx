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

export const categories = [
  { id: "estetike", name: "Estetikë", icon: <Sparkles className="h-4 w-4" /> },
  { id: "parukeri", name: "Parukeri", icon: <Users className="h-4 w-4" /> },
  {
    id: "parukeri-estetike",
    name: "Parukeri–Estetikë",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    id: "trajtimet-e-fytyres",
    name: "Trajtimet e Fytyrës",
    icon: <User className="h-4 w-4" />,
  },
  { id: "berber", name: "Berber", icon: <Scissors className="h-4 w-4" /> },
  {
    id: "zgjatimi-i-qerpikeve",
    name: "Zgjatimi i Qerpikëve",
    icon: <CheckCircle className="h-4 w-4" />,
  },
  {
    id: "kujdestar-per-te-moshuar-dhe-femije",
    name: "Kujdestar për të Moshuar dhe Fëmijë",
    icon: <HeartHandshake className="h-4 w-4" />,
  },
  { id: "makeup", name: "Makeup", icon: <Feather className="h-4 w-4" /> },
  {
    id: "makeup-permanent-pmu",
    name: "Makeup Permanent (PMU)",
    icon: <Sparkles className="h-4 w-4" />,
  },
  { id: "masazhet", name: "Masazhe", icon: <Heart className="h-4 w-4" /> },
  {
    id: "manikyr-pedikyr-nail-art",
    name: "Manikyr & Pedikyr (Nail Art)",
    icon: <Award className="h-4 w-4" />,
  },
  {
    id: "operatoret-turistike",
    name: "Operatorët Turistikë",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: "pajisjet-e-estetikes",
    name: "Pajisjet e Estetikës",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    id: "sherbim-pastrimi-ne-njesi-banimi-dhe-institucione",
    name: "Shërbim Pastrimi në Njësi Banimi dhe Institucione",
    icon: <Droplet className="h-4 w-4" />,
  },
  { id: "recepsion", name: "Recepsion", icon: <User className="h-4 w-4" /> },
  {
    id: "tattoo-art",
    name: "Tattoo Art",
    icon: <PenTool className="h-4 w-4" />,
  },
  {
    id: "fashion-design",
    name: "Fashion Design",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
  {
    id: "terapia-hixhama",
    name: "Terapia Hixhama",
    icon: <Heart className="h-4 w-4" />,
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
        className="relative py-20 md:py-32 bg-afrodite-creme"
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
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
              <span>Kurse të certifikuara ndërkombëtarisht</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-afrodite-purple mb-6">
              Kurset Tona Profesionale
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-8" />
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Zgjidhni nga kurset tona të shumta profesionale për të avancuar
              karrierën tuaj dhe për të fituar aftësi të reja të kërkuara në
              tregun e punës.
            </p>

            {/* Search bar in hero */}
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Kërko kurse..."
                className="pl-10 py-6 bg-afrodite-creme backdrop-blur-sm border-afrodite-lightPurple text-afrodite-purple placeholder:text-afrodite-lightPurple rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-afrodite-lightPurple h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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

      {/* Filters Section - Compact Version */}
      <section className="sticky top-[96px] z-30 bg-afrodite-creme border-b border-t border-afrodite-purple shadow-sm">
        <div className="container mx-auto px-4">
          <div className="py-3">
            {/* headline + mobile toggle */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-afrodite-purple flex items-center">
                <Filter className="h-4 w-4 mr-1 text-afrodite-purple" />
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
                <span className="text-xs font-medium text-afrodite-lightPurple mr-1">
                  Kategori:
                </span>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    size="sm"
                    variant="ghost"
                    className={`
    h-7 px-2 py-0 text-xs border
    ${
      selectedCategories.includes(cat.id)
        ? "bg-afrodite-purple text-afrodite-creme border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
        : "bg-afrodite-lightPurple/50 text-afrodite-purple border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
    }
    ${
      cat.id === "UET Italia" && !selectedCategories.includes(cat.id)
        ? "bg-[#FF7F00] text-white"
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
                <span className="text-xs font-medium text-afrodite-lightPurple mr-1">
                  Kohëzgjatje:
                </span>
                {durations.map((d) => (
                  <Button
                    key={d.id}
                    size="sm"
                    variant="ghost"
                    className={`
      h-7 px-2 py-0 text-xs border
      ${
        selectedDurations.includes(d.id)
          ? "bg-afrodite-purple text-afrodite-creme border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
          : "bg-afrodite-lightPurple/50 text-afrodite-purple border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
      }
    `}
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
                  className="bg-afrodite-creme rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative flex flex-col h-full"
                >
                  {/* Featured badge */}
                  {course.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-amber-500 text-afrodite-purple text-xs font-bold px-3 py-1 rounded-full">
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
                      <div className="flex items-center space-x-2 text-afrodite-creme text-sm">
                        <Clock className="h-4 w-4 text-afrodite-creme" />
                        <span>{course.duration}</span>
                      </div>
                      {/* <div className="flex items-center space-x-2 text-afrodite-creme text-sm">
                        <Users className="h-4 w-4 text-afrodite-creme" />
                        <span>{course.students} studentë</span>
                      </div> */}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="flex items-center mb-2 flex-wrap gap-2">
                        <span className="text-xs font-medium bg-afrodite-purple text-afrodite-creme px-3 py-1 rounded-full">
                          {
                            categories.find((c) => c.id === course.category)
                              ?.name
                          }
                        </span>
                        <span className="text-xs font-medium bg-afrodite-purple text-afrodite-creme px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-poppins text-afrodite-purple mb-3 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-afrodite-lightPurple line-clamp-3 mb-4">
                        {course.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-afrodite-purple">
                      <div className="flex items-center text-sm text-afrodite-lightPurple mb-4">
                        <Calendar className="h-4 w-4 mr-1 text-afrodite-purple" />
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
                          className="bg-afrodite-lightPurple text-afrodite-creme"
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
              <h3 className="text-xl font-bold text-afrodite-purple mb-2">
                Nuk u gjet asnjë kurs
              </h3>
              <p className="text-afrodite-lightPurple mb-6">
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
      <section className="py-16 bg-afrodite-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4">
                <span>Pse të zgjidhni kurset tona</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
                Ndërto me ne Të Ardhmen Tënde
              </h2>
              <p className="text-afrodite-lightPurple mb-8">
                Në Afrodite Academy, çdo kurs është konceptuar për t’ju pajisur
                me njohuritë dhe aftësitë më të përparuara në industrinë e
                bukurisë, duke hapur rrugën drejt suksesit tuaj profesional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    <Award className="h-5 w-5 text-afrodite-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      Certifikim Ndërkombëtar
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Të gjithë studentët marrin certifikata të akredituara
                      ndërkombëtarisht nga Afrodite Academy, si dhe të drejtën e
                      provimit dhe diplomimit të vitit të tretë për direksion
                      teknik, e drejta e hapjes së biznesit tuaj nga shkolla
                      prestigjoze Italiane Apulia University, që ju mundëson të
                      konkurroni dhe të punësoheni në Europë dhe kudo në botë.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-afrodite-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      Profesionistë me eksperiencë ndërkombëtare
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Instruktorët tanë janë profesionistë të njohur
                      ndërkombëtarisht, që sjellin përvojën e tyre praktike në
                      çdo seancë dhe ju udhëheqin hap pas hapi drejt
                      ekspertizës.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-afrodite-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      Praktikë e fokusuar në rezultate
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Në Afrodite Academy, pjesa praktike zë pjesën më të madhe
                      të programit: ju punoni me pajisje dhe produkte premium,
                      zhvilloni raste studimi reale dhe ndërtoni portofolin tuaj
                      profesional nën mbikëqyrjen e profesionistëve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    <Calendar className="h-5 w-5 text-afrodite-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      Networking dhe mundësi karriere
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Si pjesë e komunitetit Afrodite Academy, keni akses në
                      evente ekskluzive rrjetëzimi, bashkëpunime me qendra
                      estetike dhe mundësi praktike drejtëpërdrejt nga partnerët
                      tanë të industrisë.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-afrodite-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      Mbështetje paskursore
                    </h3>
                    <p className="text-afrodite-lightPurple">
                      Profesionistët që studiojnë në Afrodite Academy, jo vetëm
                      që hapin dyert për mundësi të shkëlqyera punësimi brënda
                      dhe jashtë vendit, dhe karriere, por dallojnë si më të
                      mirët në fushat e tyre. Kjo sepse programet tona janë
                      ndërtuar sipas kurrikulave ndërkombëtare që garantojnë
                      përgatitje të plotë si teorike ashtu dhe praktike në
                      sallonet prestigjoze gjatë periudhës së studimeve.
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
              <div
                className="
    absolute -bottom-6 -right-6 
    bg-afrodite-creme 
    p-4 sm:p-6                /* smaller padding on mobile */
    rounded-xl shadow-lg 
    border-l-4 border-afrodite-purple 
    w-60 sm:max-w-xs          /* narrower width on mobile */
    text-sm sm:text-base      /* shrink text on mobile */
  "
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-afrodite-lightPurple">
                    Studentë të diplomuar
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-afrodite-purple">
                    2500+
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="text-afrodite-lightPurple">
                    Kurse profesionale
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-afrodite-purple">
                    60+
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-afrodite-lightPurple">
                    Vite eksperiencë
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-afrodite-purple">
                    20+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600&text=Pattern')] bg-cover bg-center opacity-5"></div> */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>{" "}
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
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 backdrop-blur-sm rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <Sparkles className="h-4 w-4 mr-2 text-afrodite-purple" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Nuk jeni të sigurt cili kurs{" "}
              <span className="text-afrodite-purple">është për ju?</span>
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Na kontaktoni për të diskutuar rrugët tuaja të zhvillimit
              profesional dhe për të gjetur kursin më të përshtatshëm për ju.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="bg-afrodite-lightPurple text-afrodite-creme"
                >
                  NA KONTAKTONI
                </AnimatedButton>
              </Link>
              <Link href="/about">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="bg-afrodite-lightPurple text-afrodite-creme"
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
