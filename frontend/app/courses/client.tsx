"use client";

import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  Suspense,
  useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  ChevronRight,
  Filter,
  Clock,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  Users,
  GraduationCap,
  CheckCircle,
  Scissors,
  Feather,
  User,
  Globe,
  Heart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/animated-button";
import { courses } from "@/data/courses";
import WhatsAppButton from "@/components/whatsapp-button";
import { coursesItemListJsonLd } from "@/lib/seo/course-jsonld";
import { HeartHandshake, Droplet, ShoppingBag, PenTool } from "lucide-react";

/** safe search params (no Suspense rule) */
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

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

const tokenize = (q: string) =>
  normalize(q)
    .split(/[\s,;]+/)
    .filter(Boolean)
    .filter((t) => t.length >= 2);

/* Categories */
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
  { id: "UET Italia", name: "UET Italia", icon: <Globe className="h-4 w-4" /> },
] as const;

const categoryKeywords: Record<string, string[]> = {
  estetike: ["estetike", "estetikë", "beauty", "esthetics", "skincare"],
  parukeri: ["parukeri", "hair", "hairdresser", "kapshtare", "floktari"],
  "parukeri-estetike": ["parukeri estetike", "beauty & hair", "salon"],
  "trajtimet-e-fytyres": ["trajtimet e fytyrës", "fytyra", "facial", "face"],
  berber: ["berber", "barber", "barbering"],
  "zgjatimi-i-qerpikeve": ["qerpikë", "qerpike", "lash", "eyelash extension"],
  "kujdestar-per-te-moshuar-dhe-femije": [
    "caregiver",
    "kujdestar",
    "baby sitter",
    "fëmijë",
    "moshuar",
  ],
  makeup: ["makeup", "grim", "grimi"],
  "makeup-permanent-pmu": [
    "pmu",
    "permanent makeup",
    "microblading",
    "dermapigmentation",
  ],
  masazhet: ["masazh", "massage", "masazhe"],
  "manikyr-pedikyr-nail-art": [
    "manikyr",
    "pedikyr",
    "manicure",
    "pedicure",
    "nail",
    "gel",
    "akrilik",
  ],
  "operatoret-turistike": [
    "turizëm",
    "turistik",
    "operator turistik",
    "tourism",
  ],
  "pajisjet-e-estetikes": [
    "pajisje estetike",
    "aparat",
    "devices",
    "laser",
    "microneedling",
  ],
  "sherbim-pastrimi-ne-njesi-banimi-dhe-institucione": [
    "pastrim",
    "cleaning",
    "housekeeping",
  ],
  recepsion: ["recepsion", "reception", "front desk"],
  "tattoo-art": ["tattoo", "tatuazh", "ink"],
  "fashion-design": ["modë", "moda", "fashion", "design", "stilim"],
  "terapia-hixhama": ["hixhama", "cupping", "terapi", "therapy"],
  "UET Italia": [
    "uet",
    "italia",
    "uet italia",
    "apulia",
    "university",
    "universitet",
    "italy",
  ],
};

type TimeBucketId = "short" | "6mo" | "1to2yr" | "2to3yr" | "review";
const TIME_FILTERS: { id: TimeBucketId; label: string }[] = [
  { id: "short", label: "Kurse të shkurtra" },
  { id: "6mo", label: "Kurse 6 mujore" },
  { id: "1to2yr", label: "Kurse 1-2 vjeçare" },
  { id: "2to3yr", label: "Kurse 2-3 vjeçare" },
];

const HOUR_TO_BUCKET: { id: TimeBucketId; maxHours: number }[] = [
  { id: "short", maxHours: 200 },
  { id: "6mo", maxHours: 450 },
  { id: "1to2yr", maxHours: 950 },
  { id: "2to3yr", maxHours: 2500 },
];

const normalizeDiacritics = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

function hourStringToBucket(s: string): TimeBucketId | null {
  const m = s.match(/(\d+(?:[\.,]\d+)?)\s*o?r[eë]\b/);
  if (!m) return null;
  const hours = parseFloat(m[1].replace(",", "."));
  if (Number.isNaN(hours)) return null;
  for (const row of HOUR_TO_BUCKET) if (hours <= row.maxHours) return row.id;
  return "review";
}

function explicitBucketFromLabel(v?: string): TimeBucketId | null {
  if (!v) return null;
  const s = normalizeDiacritics(v);
  if (s.includes("kurse 6 mujore")) return "6mo";
  if (s.includes("kurse 2-3 vjecare")) return "2to3yr";
  if (s.includes("kurse 1-2 vjecare")) return "1to2yr";
  if (s.includes("kurse te shkurta") || s.includes("kurse te shkurter"))
    return "short";
  return null;
}

function parseDurationToMonths(raw?: string): number | null {
  if (!raw) return null;
  const s = normalizeDiacritics(String(raw));
  if (/\b1\s*[-–]\s*2\b.*vj/.test(s) || /\b1\s*[-–]\s*2\b.*vit/.test(s))
    return 18;
  if (/\b2\s*[-–]\s*3\b.*vj/.test(s) || /\b2\s*[-–]\s*3\b.*vit/.test(s))
    return 30;
  if (/\b6\b.*muaj/.test(s) || /\b6\b.*mujore/.test(s)) return 6;

  const years =
    s.match(
      /(\d+(?:[\.,]\d+)?)\s*(?:vit|vite|vjet|vjecare|vjecar|vjec|vjecarë|vjecare)\b/
    ) || s.match(/(\d+(?:[\.,]\d+)?)\s*vj(?:ec|eç)/);
  if (years) {
    const y = parseFloat((years[1] ?? years[0]).replace(",", "."));
    if (!Number.isNaN(y)) return Math.round(y * 12);
  }

  const months = s.match(/(\d+(?:[\.,]\d+)?)\s*(?:muaj|mujore)\b/);
  if (months) {
    const m = parseFloat(months[1].replace(",", "."));
    if (!Number.isNaN(m)) return Math.round(m);
  }

  const hb = hourStringToBucket(s);
  if (hb) {
    if (hb === "short") return 3;
    if (hb === "6mo") return 6;
    if (hb === "1to2yr") return 18;
    if (hb === "2to3yr") return 30;
  }

  const plain = s.match(/\b(\d{1,2})\b/);
  if (plain) {
    const n = parseInt(plain[1], 10);
    if (n >= 1 && n <= 48) return n;
  }
  return null;
}

function bucketFromMonths(m: number | null): TimeBucketId {
  if (m === null) return "review";
  if (m < 6) return "short";
  if (m === 6) return "6mo";
  if (m >= 12 && m <= 24) return "1to2yr";
  if (m > 24 && m <= 36) return "2to3yr";
  if (m > 6 && m < 12) return "review";
  return "review";
}

function getCourseTimeBucket(course: any): TimeBucketId {
  const explicit =
    explicitBucketFromLabel(course?.timeCategory) ||
    explicitBucketFromLabel(course?.durationCategory);
  if (explicit) return explicit;

  const months =
    parseDurationToMonths(course?.duration) ??
    parseDurationToMonths(course?.durationCategory);
  if (months !== null) return bucketFromMonths(months);

  const s =
    normalizeDiacritics(String(course?.duration ?? "")) +
    " " +
    normalizeDiacritics(String(course?.durationCategory ?? ""));
  const hb = hourStringToBucket(s);
  if (hb) return hb;

  return "review";
}

export default function CoursesClient() {
  const safeParams = useSafeSearchParams();
  const initialCategory = safeParams?.get("category") ?? null;

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTimeCats, setSelectedTimeCats] = useState<TimeBucketId[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc" | "date"
  >("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const catalogRef = useRef<HTMLElement | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const STICKY_OFFSET = 96;
  const HIDE_HYSTERESIS = 24;
  const SHOW_EARLY = 140;
  const HIDE_EARLY = 140;
  const boundsRef = useRef({ top: 0, bottom: 0 });

  const measure = () => {
    if (!catalogRef.current) return;
    const rect = catalogRef.current.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    boundsRef.current = {
      top: rect.top + scrollY,
      bottom: rect.bottom + scrollY,
    };
  };

  useLayoutEffect(() => {
    measure();
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => measure());
    if (catalogRef.current) ro.observe(catalogRef.current);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  const scrollRaf = useRef<number | null>(null);
  const lastState = useRef<"ABOVE" | "INSIDE" | "BELOW" | null>(null);
  const lastYRef = useRef(0);

  const onScroll = () => {
    if (scrollRaf.current != null) return;
    scrollRaf.current = window.requestAnimationFrame(() => {
      scrollRaf.current = null;
      const currentY = window.scrollY || 0;
      const goingDown = currentY >= lastYRef.current;
      lastYRef.current = currentY;

      const yTop = currentY + STICKY_OFFSET;
      const { top, bottom } = boundsRef.current;

      const hideLine = bottom - HIDE_EARLY;
      const showLine = bottom - SHOW_EARLY;

      let state: "ABOVE" | "INSIDE" | "BELOW";
      if (yTop < top - 16) state = "ABOVE";
      else if (goingDown)
        state = yTop > hideLine + HIDE_HYSTERESIS ? "BELOW" : "INSIDE";
      else state = yTop <= showLine ? "INSIDE" : "BELOW";

      if (state !== lastState.current) {
        lastState.current = state;
        setShowFilters(state !== "BELOW");
      }
    });
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRaf.current) cancelAnimationFrame(scrollRaf.current);
    };
  }, []);

  useEffect(() => {
    if (initialCategory && categories.some((c) => c.id === initialCategory)) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (!safeParams) return;
    const categoriesFromUrl = safeParams.getAll("category");
    setSelectedCategories(categoriesFromUrl);
  }, [safeParams]);

  const toggleCategory = (id: string) =>
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleTimeCat = (id: TimeBucketId) =>
    setSelectedTimeCats((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTimeCats([]);
    setSearchQuery("");
    setSortBy("default");
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const courseBucket = getCourseTimeBucket(course);
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes((course as any).category);
      const matchesTime =
        selectedTimeCats.length === 0 ||
        selectedTimeCats.includes(courseBucket);

      const categoryName =
        categories.find((c) => c.id === (course as any).category)?.name ??
        (course as any).category;
      const catAliases = categoryKeywords[(course as any).category] ?? [];

      const haystack = [
        (course as any).title,
        (course as any).description,
        (course as any).level,
        (course as any).schedule,
        categoryName,
        (course as any).category,
        ...(((course as any).keywords ?? []) as string[]),
        ...catAliases,
      ]
        .filter(Boolean)
        .map((x: string) => normalize(x))
        .join(" • ");

      const tokens = tokenize(searchQuery);
      const matchesSearch =
        tokens.length === 0 || tokens.every((tok) => haystack.includes(tok));

      return matchesCategory && matchesTime && matchesSearch;
    });
  }, [selectedCategories, selectedTimeCats, searchQuery]);

  const sortedCourses = useMemo(() => {
    const list = [...filteredCourses];
    switch (sortBy) {
      case "price-asc":
        return list.sort(
          (a: any, b: any) =>
            parseInt(String(a.price).replace(/[^0-9]/g, "")) -
            parseInt(String(b.price).replace(/[^0-9]/g, ""))
        );
      case "price-desc":
        return list.sort(
          (a: any, b: any) =>
            parseInt(String(b.price).replace(/[^0-9]/g, "")) -
            parseInt(String(a.price).replace(/[^0-9]/g, ""))
        );
      case "date":
        return list.sort(
          (a: any, b: any) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      default:
        return list.sort(
          (a: any, b: any) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        );
    }
  }, [filteredCourses, sortBy]);

  const itemListJsonLd = sortedCourses.length
    ? coursesItemListJsonLd(sortedCourses as any)
    : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col w-full">
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-afrodite-creme">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="" width={256} height={256} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Kurse të certifikuara ndërkombëtarisht</span>
            </div>
            {/* fixed tailwind typo: md:text-5xl / lg:text-6xl */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-afrodite-purple mb-6">
              Kurset Tona Profesionale
            </h1>
            <div className="h-1 w-24 bg-afrodite-purple mx-auto mb-8" />
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Zgjidhni nga programet tona për të avancuar karrierën tuaj.
            </p>

            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Kërko kurse…"
                className="pl-10 py-6 bg-afrodite-creme border-afrodite-lightPurple text-afrodite-purple placeholder:text-afrodite-lightPurple rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-afrodite-lightPurple h-5 w-5" />
            </div>
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

      {/* Sticky filters */}
      <section
        aria-hidden={!showFilters}
        className={`sticky top-[96px] z-30 border-b border-t border-afrodite-purple shadow-sm transition-opacity duration-200 bg-afrodite-creme ${
          showFilters
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="py-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-afrodite-purple flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                <span>Filtro</span>
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileFiltersOpen((s) => !s)}
              >
                {mobileFiltersOpen ? "Mbyll Filtrat" : "Filtrat"}
              </Button>
            </div>

            <div
              className={`transition-all ${
                mobileFiltersOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"
              } md:max-h-full md:overflow-visible md:flex md:flex-wrap md:gap-4`}
            >
              {/* Category chips */}
              <div className="flex flex-wrap items-center gap-1.5 mb-3 md:mb-0">
                <span className="text-xs font-medium text-afrodite-lightPurple mr-1">
                  Kategori:
                </span>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    size="sm"
                    variant="ghost"
                    className={`h-7 px-2 py-0 text-xs border ${
                      selectedCategories.includes(cat.id)
                        ? "bg-afrodite-purple text-afrodite-creme border-transparent"
                        : "bg-afrodite-lightPurple/50 text-afrodite-purple border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
                    } ${
                      cat.id === "UET Italia" &&
                      !selectedCategories.includes(cat.id)
                        ? "bg-[#FF7F00] text-white"
                        : ""
                    }`}
                    onClick={() => toggleCategory(cat.id)}
                  >
                    {cat.icon}
                    <span className="ml-1">{cat.name}</span>
                  </Button>
                ))}
              </div>

              {/* Duration chips */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-afrodite-lightPurple mr-1">
                  Kohëzgjatje:
                </span>
                {TIME_FILTERS.map((t) => (
                  <Button
                    key={t.id}
                    size="sm"
                    variant="ghost"
                    className={`h-7 px-2 py-0 text-xs border ${
                      selectedTimeCats.includes(t.id)
                        ? "bg-afrodite-purple text-afrodite-creme border-transparent"
                        : "bg-afrodite-lightPurple/50 text-afrodite-purple border-transparent hover:bg-afrodite-purple hover:text-afrodite-creme"
                    }`}
                    onClick={() => toggleTimeCat(t.id)}
                  >
                    {t.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section ref={catalogRef as any} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {sortedCourses.length ? (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-afrodite-creme text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
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

                      {course.category === "UET Italia" && course.link ? (
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Hap faqen e kursit UET: ${course.title}`}
                        >
                          <AnimatedButton
                            size="default"
                            variant="default"
                            className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                          >
                            Mëso më shumë
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </AnimatedButton>
                        </a>
                      ) : (
                        <Link href={`/courses/${course.id}`} prefetch>
                          <AnimatedButton
                            size="default"
                            variant="default"
                            className="px-8 bg-afrodite-lightPurple text-afrodite-creme"
                          >
                            Mëso më shumë
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </AnimatedButton>
                        </Link>
                      )}
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

      {/* Why choose */}
      <section className="py-16 bg-afrodite-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 rounded-full text-afrodite-purple text-sm mb-4">
                <span>Pse të zgjidhni kurset tona</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
                Ndërto me ne Të Ardhmen Tënde
              </h2>
              <p className="text-afrodite-lightPurple mb-8">
                Çdo kurs është konceptuar për t’ju pajisur me njohuri dhe aftësi
                të avancuara.
              </p>

              {[
                {
                  icon: <Award className="h-5 w-5 text-afrodite-purple" />,
                  t: "Certifikim Ndërkombëtar",
                  d: "Certifikata të akredituara ndërkombëtarisht dhe mundësi diplome në vitin e tretë (Apulia University).",
                },
                {
                  icon: <Users className="h-5 w-5 text-afrodite-purple" />,
                  t: "Ekspertë me përvojë",
                  d: "Instruktorë të njohur ndërkombëtarisht dhe punë praktike reale.",
                },
                {
                  icon: <BookOpen className="h-5 w-5 text-afrodite-purple" />,
                  t: "Praktikë e fokusuar",
                  d: "Pajisje & produkte premium, raste reale, portofol profesional.",
                },
                {
                  icon: <Calendar className="h-5 w-5 text-afrodite-purple" />,
                  t: "Networking & karrierë",
                  d: "Evente, partneritete dhe mundësi praktike drejtëpërdrejt nga industria.",
                },
                {
                  icon: (
                    <GraduationCap className="h-5 w-5 text-afrodite-purple" />
                  ),
                  t: "Mbështetje paskursore",
                  d: "Përgatitje sipas kurrikulave ndërkombëtare dhe diferencim në treg.",
                },
              ].map((row) => (
                <div key={row.t} className="flex items-start gap-4 mb-6">
                  <div className="bg-afrodite-creme p-3 rounded-full flex-shrink-0">
                    {row.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-afrodite-purple mb-2">
                      {row.t}
                    </h3>
                    <p className="text-afrodite-lightPurple">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg group h-[300px] sm:h-[400px] md:h-[500px] xl:h-[60vh] w-full">
                <video
                  src="/videos/course-benefits.webm"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-afrodite-creme p-4 sm:p-6 rounded-xl shadow-lg border-l-4 border-afrodite-purple w-60 sm:max-w-xs text-sm sm:text-base">
                {[
                  ["Studentë të diplomuar", "2500+"],
                  ["Kurse profesionale", "60+"],
                  ["Vite eksperiencë", "20+"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between mb-3 last:mb-0"
                  >
                    <div className="text-afrodite-lightPurple">{k}</div>
                    <div className="text-xl sm:text-2xl font-bold text-afrodite-purple">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-afrodite-creme py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="" width={256} height={256} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-afrodite-purple/10 rounded-full text-afrodite-purple text-sm mb-4 border border-afrodite-purple/20">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Bëhu pjesë e suksesit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-afrodite-purple mb-6">
              Nuk jeni të sigurt cili kurs{" "}
              <span className="text-afrodite-purple">është për ju?</span>
            </h2>
            <p className="text-lg text-afrodite-lightPurple mb-8">
              Na kontaktoni për t’ju ndihmuar të zgjidhni kursin më të
              përshtatshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Na Kontaktoni
                </AnimatedButton>
              </Link>
              <Link href="/about">
                <AnimatedButton
                  size="lg"
                  variant="default"
                  className="rounded-xl px-8 bg-afrodite-lightPurple text-afrodite-creme"
                >
                  Rreth Akademisë
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="" width={256} height={256} />
        </div>
      </section>

      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}
