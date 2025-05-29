"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Calendar, Award, CheckCircle, GraduationCap, ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import VideoBackground from "@/components/video-background"
import RequestInfoButton from "@/components/request-info-button"
import { AnimatedButton } from "@/components/animated-button"

// Mock course data - in a real app, this would come from an API or database
const coursesData = [
  {
    id: 1,
    title: "Kurs Profesional për Makeup Artist",
    category: "makeup",
    duration: "3 muaj",
    durationCategory: "3-mujore",
    level: "Fillestar deri në të Avancuar",
    price: "45,000 Lekë",
    startDate: "15 Qershor 2025",
    schedule: "E Hënë, E Mërkurë, E Premte (17:00 - 20:00)",
    image: "/placeholder.svg?height=600&width=800&text=Makeup+Course",
    description:
      "Kursi Profesional për Makeup Artist në Afrodite Academy është dizajnuar për t'ju dhënë njohuritë dhe aftësitë e nevojshme për të filluar një karrierë të suksesshme si makeup artist. Gjatë këtij kursi 3-mujor, ju do të mësoni teknikat e fundit të makeup nga profesionistët e industrisë, duke përfshirë makeup për evenimente të ndryshme, makeup artistik, dhe teknika profesionale.",
    longDescription:
      "Ky kurs është i përshtatshëm si për fillestarët ashtu edhe për ata që dëshirojnë të përmirësojnë aftësitë e tyre ekzistuese. Nën udhëheqjen e instruktorëve me përvojë ndërkombëtare, ju do të zhvilloni një kuptim të thellë të teorisë së ngjyrave, teknikave të aplikimit, dhe trendeve aktuale në industrinë e makeup. Kursi përfshin trajnime praktike intensive që ju lejojnë të praktikoni aftësitë tuaja në modele reale, duke ju përgatitur për situata reale të punës. Në përfundim të kursit, ju do të keni krijuar një portofol profesional dhe do të merrni një certifikatë të njohur ndërkombëtarisht që vërteton ekspertizën tuaj.",
    instructors: [
      {
        name: "Arta Kelmendi",
        role: "Makeup Artist & Instruktore",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 8 vite përvojë në industrinë e bukurisë dhe trajnime ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Bazat e Makeup",
        lessons: [
          "Njohja me produktet dhe veglat e makeup",
          "Teoria e ngjyrave dhe analiza e tonit të lëkurës",
          "Teknikat bazë të aplikimit",
          "Makeup për fytyrë ovale, katrore, rrethore dhe zemër",
        ],
      },
      {
        title: "Moduli 2: Makeup për Sytë",
        lessons: [
          "Teknikat e hijezimit të syve",
          "Aplikimi i eyeliner dhe qerpikëve artificialë",
          "Makeup për sytë e vegjël, të mëdhenj dhe të rënë",
          "Teknikat e smokey eye",
        ],
      },
      {
        title: "Moduli 3: Makeup për Buzët dhe Faqet",
        lessons: [
          "Aplikimi i buzëkuqit dhe lip liner",
          "Teknikat e konturimit dhe highlighter",
          "Aplikimi i blush dhe bronzer",
          "Balancimi i makeup të syve dhe buzëve",
        ],
      },
      {
        title: "Moduli 4: Makeup për Evenimente",
        lessons: [
          "Makeup për dasma dhe evenimente formale",
          "Makeup për fotografi dhe video",
          "Makeup për evenimente ditore dhe mbrëmjeje",
          "Teknikat e fiksimit të makeup për qëndrueshmëri",
        ],
      },
      {
        title: "Moduli 5: Makeup Artistik dhe Special Effects",
        lessons: [
          "Bazat e makeup artistik",
          "Teknikat e special effects",
          "Makeup për karaktere dhe fantazi",
          "Krijimi i portofolit personal",
        ],
      },
    ],
    benefits: [
      "Certifikim ndërkombëtar të njohur në industri",
      "Trajnim praktik me produkte profesionale",
      "Krijimi i portofolit personal për karrierë",
      "Mundësi punësimi pas diplomimit",
      "Mbështetje për fillimin e biznesit tuaj",
      "Akses në evenimente dhe konkurse ndërkombëtare",
    ],
    materials: [
      "Set profesional brushash makeup",
      "Paletë profesionale ngjyrash",
      "Produkte bazë makeup (foundation, concealer, etj.)",
      "Materiale studimi dhe manuale",
      "Çantë profesionale makeup",
    ],
    testimonials: [
      {
        name: "Elisa Hoxha",
        role: "Makeup Artist",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Kursi i Makeup Artist në Afrodite Academy ishte një eksperiencë transformuese për mua. Mësova teknika profesionale që më ndihmuan të filloj karrierën time si makeup artist.",
      },
      {
        name: "Besa Malaj",
        role: "Pronare Salloni",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Falë kursit në Afrodite Academy, tani kam biznesin tim të suksesshëm. Instruktorët ishin shumë profesionalë dhe të përkushtuar për suksesin e studentëve.",
      },
    ],
    faqs: [
      {
        question: "A është i përshtatshëm ky kurs për fillestarët?",
        answer:
          "Po, kursi është i strukturuar për të akomoduar si fillestarët ashtu edhe ata me përvojë të mëparshme. Instruktorët tanë do t'ju udhëheqin hap pas hapi përmes çdo teknike.",
      },
      {
        question: "Çfarë certifikimi do të marr pas përfundimit të kursit?",
        answer:
          "Pas përfundimit të suksesshëm të kursit, ju do të merrni një certifikatë të njohur ndërkombëtarisht nga Afrodite Academy, e cila është e akredituar nga organizata prestigjioze në industrinë e bukurisë.",
      },
      {
        question: "A ofrohen materiale dhe produkte gjatë kursit?",
        answer:
          "Po, të gjitha materialet dhe produktet e nevojshme për trajnim janë të përfshira në çmimin e kursit. Ju do të merrni një set profesional brushash dhe produktesh që mund t'i mbani pas përfundimit të kursit.",
      },
      {
        question: "A ka mundësi punësimi pas përfundimit të kursit?",
        answer:
          "Afrodite Academy ka partneritete me shumë sallone bukurie dhe kompani në industri. Ne ofrojmë mbështetje për punësim dhe këshilla për karrierë për të gjithë studentët tanë të diplomuar.",
      },
    ],
  },
  {
    id: 8,
    title: "Kurs Profesional për Ndihmës në Masazheri",
    category: "massage",
    duration: "3 muaj",
    durationCategory: "3-mujore",
    level: "Fillestar",
    price: "40,000 Lekë",
    startDate: "1 Qershor 2025",
    schedule: "E Martë, E Enjte (17:00 - 20:00), E Shtunë (10:00 - 14:00)",
    image: "/placeholder.svg?height=600&width=800&text=Massage+Course",
    description:
      "Kursi Profesional për Ndihmës në Masazheri në Afrodite Academy është dizajnuar për t'ju dhënë njohuritë dhe aftësitë bazë për të filluar një karrierë në fushën e masazhit. Gjatë këtij kursi 3-mujor, ju do të mësoni bazat e masazhit dhe teknikat themelore për të ndihmuar masazherët profesionistë.",
    longDescription:
      "Ky kurs është i përshtatshëm për fillestarët që dëshirojnë të hyjnë në fushën e masazhit dhe mirëqenies. Nën udhëheqjen e instruktorëve me përvojë, ju do të zhvilloni një kuptim të anatomisë bazë, teknikave të masazhit, dhe protokolleve të trajtimit. Kursi përfshin trajnime praktike që ju lejojnë të praktikoni aftësitë tuaja në situata reale, duke ju përgatitur për punë si ndihmës masazheri. Në përfundim të kursit, ju do të merrni një certifikatë që vërteton aftësitë tuaja bazë në masazh.",
    instructors: [
      {
        name: "Dritan Berisha",
        role: "Masazher & Instruktor",
        image: "/placeholder.svg?height=200&width=200&text=Instructor",
        bio: "Me mbi 10 vite përvojë në fushën e masazhit terapeutik dhe trajnime ndërkombëtare.",
      },
    ],
    curriculum: [
      {
        title: "Moduli 1: Bazat e Anatomisë dhe Fiziologjisë",
        lessons: [
          "Sistemet kryesore të trupit",
          "Anatomia e muskujve dhe skeletit",
          "Fiziologjia e sistemit nervor",
          "Kontraindikacionet për masazh",
        ],
      },
      {
        title: "Moduli 2: Teknikat Bazë të Masazhit",
        lessons: [
          "Lëvizjet themelore të masazhit",
          "Presioni dhe ritmi i duhur",
          "Pozicionimi i klientit",
          "Ergonomia dhe pozicionimi i masazherit",
        ],
      },
      {
        title: "Moduli 3: Masazhi Suedez",
        lessons: [
          "Historia dhe parimet e masazhit suedez",
          "Teknikat e effleurage, petrissage, dhe friction",
          "Sekuenca e plotë e masazhit suedez",
          "Adaptimi i teknikave për nevoja specifike",
        ],
      },
      {
        title: "Moduli 4: Masazhi me Gurë të Nxehtë",
        lessons: [
          "Përgatitja dhe përdorimi i sigurt i gurëve",
          "Teknikat e masazhit me gurë të nxehtë",
          "Integrimi i gurëve në një seancë masazhi",
          "Kujdesi dhe mirëmbajtja e gurëve",
        ],
      },
      {
        title: "Moduli 5: Etika Profesionale dhe Praktika e Biznesit",
        lessons: [
          "Etika dhe profesionalizmi",
          "Komunikimi me klientët",
          "Mbajtja e të dhënave dhe dokumentacioni",
          "Bazat e menaxhimit të biznesit",
        ],
      },
    ],
    benefits: [
      "Certifikim profesional në masazh",
      "Trajnim praktik me pajisje profesionale",
      "Njohuri të anatomisë dhe fiziologjisë",
      "Mundësi punësimi si ndihmës masazheri",
      "Bazë e fortë për studime të mëtejshme në masazh",
      "Mbështetje për zhvillimin e karrierës",
    ],
    materials: [
      "Manual studimi për anatomia dhe fiziologjia",
      "Vajra dhe locionet bazë për masazh",
      "Çarçafë dhe peshqirë për praktikë",
      "Materiale studimi dhe diagrama",
      "Set gurësh për masazh me gurë të nxehtë",
    ],
    testimonials: [
      {
        name: "Arben Krasniqi",
        role: "Ndihmës Masazher",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Kursi për Ndihmës në Masazheri në Afrodite Academy më dha bazat e forta që më nevojiteshin për të filluar karrierën time. Tani punoj në një spa të njohur dhe vazhdoj të zhvilloj aftësitë e mia.",
      },
      {
        name: "Lindita Shehu",
        role: "Studente",
        image: "/placeholder.svg?height=100&width=100&text=Student",
        text: "Instruktorët ishin shumë të përkushtuar dhe të durueshëm. Mësova shumë për anatomia dhe teknikat e masazhit, dhe tani ndihem e sigurt për të aplikuar për punë në këtë fushë.",
      },
    ],
    faqs: [
      {
        question: "A është i përshtatshëm ky kurs për fillestarët pa përvojë të mëparshme?",
        answer:
          "Po, ky kurs është dizajnuar posaçërisht për fillestarët që nuk kanë përvojë të mëparshme në masazh. Të gjitha teknikat mësohen nga zero.",
      },
      {
        question: "Çfarë mundësish punësimi do të kem pas përfundimit të kursit?",
        answer:
          "Pas përfundimit të kursit, ju mund të punoni si ndihmës masazheri në spa, qendra wellness, hotele, dhe klinika fizioterapie. Shumë studentë tanë gjejnë punë brenda 1-3 muajve pas diplomimit.",
      },
      {
        question: "A mund të vazhdoj studimet e mëtejshme pas këtij kursi?",
        answer:
          "Absolutisht! Ky kurs ofron bazat e nevojshme për të vazhduar me kurse më të avancuara në masazh terapeutik, masazh sportiv, ose specializime të tjera në fushën e masazhit dhe terapisë fizike.",
      },
      {
        question: "A përfshihen materialet në çmimin e kursit?",
        answer:
          "Po, të gjitha materialet e nevojshme për trajnim janë të përfshira në çmimin e kursit, përfshirë manualet e studimit, vajrat bazë për masazh, dhe aksesin në pajisjet profesionale gjatë orëve të praktikës.",
      },
    ],
  },
]

export default function CourseDetailPage() {
  const { id } = useParams()
  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  useEffect(() => {
    // In a real app, you would fetch the course data from an API
    // For this example, we're using the mock data
    const foundCourse = coursesData.find((c) => c.id.toString() === id)
    setCourse(foundCourse)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy-900"></div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Kursi nuk u gjet</h1>
        <p className="mt-4 text-navy-700">Kursi që po kërkoni nuk ekziston ose është hequr.</p>
        <Link href="/courses">
          <AnimatedButton className="mt-6">Kthehu te Kurset</AnimatedButton>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Video Background */}
      <VideoBackground overlayOpacity={0.85} className="py-20 md:py-32 bg-gradient-to-r from-black to-purple-900">
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">{course.title}</h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-navy-100 mb-8">{course.description}</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-white">
                <Clock className="h-5 w-5 mr-2 text-purple-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="h-5 w-5 mr-2 text-purple-500" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center text-white">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                <span>Fillon: {course.startDate}</span>
              </div>
            </div>
            <AnimatedButton size="lg" variant="secondary">
              REGJISTROHU TANI
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </VideoBackground>

      {/* Course Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-6 rounded-lg shadow-lg"
              >
                <span className="text-2xl font-bold">{course.price}</span>
                <span className="block text-sm text-navy-100">Çmimi i plotë</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">Rreth Kursit</h2>
                <div className="h-1 w-16 bg-purple-500 mb-6"></div>
                <p className="text-navy-700">{course.longDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Clock className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Kohëzgjatja</h3>
                    <p className="text-navy-700">{course.duration}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Calendar className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Orari</h3>
                    <p className="text-navy-700">{course.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <Award className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Niveli</h3>
                    <p className="text-navy-700">{course.level}</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-navy-50 rounded-lg">
                  <GraduationCap className="h-10 w-10 text-purple-500 mr-4" />
                  <div>
                    <h3 className="font-bold text-navy-900">Certifikim</h3>
                    <p className="text-navy-700">Certifikatë Ndërkombëtare</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <AnimatedButton size="lg" variant="default">
                  REGJISTROHU TANI
                </AnimatedButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="curriculum" className="text-lg">
                Kurrikula
              </TabsTrigger>
              <TabsTrigger value="instructors" className="text-lg">
                Instruktorët
              </TabsTrigger>
              <TabsTrigger value="benefits" className="text-lg">
                Përfitimet
              </TabsTrigger>
              <TabsTrigger value="faq" className="text-lg">
                Pyetje të Shpeshta
              </TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Çfarë do të mësoni</h3>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-navy-900 hover:text-purple-500">
                      {module.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-6">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <motion.li
                            key={lessonIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: lessonIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-navy-700">{lesson}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="instructors" className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Instruktorët Tanë</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {course.instructors.map((instructor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-navy-50 rounded-xl"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-1">{instructor.name}</h4>
                      <p className="text-purple-600 mb-4">{instructor.role}</p>
                      <p className="text-navy-700">{instructor.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="bg-white p-6 rounded-xl shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Përfitimet e Kursit</h3>
                  <ul className="space-y-4">
                    {course.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Materialet e Përfshira</h3>
                  <ul className="space-y-4">
                    {course.materials.map((material, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{material}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Pyetje të Shpeshta</h3>
              <Accordion type="single" collapsible className="w-full">
                {course.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-lg font-medium text-navy-900 hover:text-purple-500">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-navy-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">Çfarë Thonë Studentët Tanë</h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-navy-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-navy-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-navy-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="Decorative pattern" width={256} height={256} className="object-contain" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              Gati për të Filluar Karrierën Tuaj të Re?
            </h2>
            <p className="text-lg text-navy-100 mb-8">
              Regjistrohuni sot në kursin tonë profesional dhe bëhuni pjesë e komunitetit tonë të profesionistëve të
              suksesshëm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton size="lg" variant="secondary" className="text-white">
                REGJISTROHU TANI
              </AnimatedButton>
              <Link href="/contact">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20"
                  showFill={false}
                >
                  NA KONTAKTONI
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <Image src="/wave-pattern.svg" alt="Decorative pattern" width={256} height={256} className="object-contain" />
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">Kurse të Ngjashme</h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coursesData
              .filter((c) => c.id !== course.id && c.category === course.category)
              .slice(0, 3)
              .map((relatedCourse, index) => (
                <motion.div
                  key={relatedCourse.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg"}
                      alt={relatedCourse.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                      {relatedCourse.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-poppins text-navy-900 mb-3 line-clamp-2">
                      {relatedCourse.title}
                    </h3>
                    <p className="text-navy-700 mb-6 line-clamp-3">{relatedCourse.description}</p>
                    <Link href={`/courses/${relatedCourse.id}`}>
                      <AnimatedButton className="w-full">
                        Mëso më shumë
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Request Info Button */}
      <RequestInfoButton />
    </div>
  )
}
