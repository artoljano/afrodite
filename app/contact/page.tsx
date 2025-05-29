"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send, Building, Check, Facebook, Instagram, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { AnimatedButton } from "@/components/animated-button"

// Define the address data
const addresses = [
  {
    id: 1,
    city: "Tiranë",
    address: "Rruga 'Tom Plezha', Ura e Re, Tiranë, Shqipëri",
    phone: "+355 69 204 3535",
    email: "afroditeacademy@gmail.com",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    mapImage: "/placeholder.svg?height=400&width=600&text=Tirana+Map",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Tirana+Building",
  },
  {
    id: 2,
    city: "Durrës",
    address: "Bulevardi Kryesor, Pranë Sheshit, Durrës, Shqipëri",
    phone: "+355 69 123 4567",
    email: "durres@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    mapImage: "/placeholder.svg?height=400&width=600&text=Durres+Map",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Durres+Building",
  },
  {
    id: 3,
    city: "Vlorë",
    address: "Lagjja 'Pavarësia', Rruga Principale, Vlorë, Shqipëri",
    phone: "+355 69 765 4321",
    email: "vlore@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    mapImage: "/placeholder.svg?height=400&width=600&text=Vlore+Map",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Vlore+Building",
  },
  {
    id: 4,
    city: "Shkodër",
    address: "Rruga '13 Dhjetori', Qendër, Shkodër, Shqipëri",
    phone: "+355 69 987 6543",
    email: "shkoder@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    mapImage: "/placeholder.svg?height=400&width=600&text=Shkoder+Map",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Shkoder+Building",
  },
  {
    id: 5,
    city: "Korçë",
    address: "Bulevardi 'Fan Noli', Pranë Pazarit, Korçë, Shqipëri",
    phone: "+355 69 456 7890",
    email: "korce@afroditeacademy.al",
    hours: {
      weekdays: "9:00 - 18:00",
      saturday: "9:00 - 14:00",
      sunday: "Mbyllur",
    },
    mapImage: "/placeholder.svg?height=400&width=600&text=Korce+Map",
    buildingImage: "/placeholder.svg?height=600&width=800&text=Korce+Building",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
  })
  const [selectedAddress, setSelectedAddress] = useState(addresses[0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      interest: "general",
    })
    // Show success message
    alert("Mesazhi juaj u dërgua me sukses!")
  }

  const handleAddressSelect = (address: (typeof addresses)[0]) => {
    setSelectedAddress(address)
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-purple-900 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600&text=Academy+Building')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">Na Kontaktoni</h1>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-navy-100">
              Jemi këtu për t'ju ndihmuar me çdo pyetje që mund të keni në lidhje me kurset tona profesionale. Na
              kontaktoni dhe do t'ju përgjigjemi sa më shpejt të jetë e mundur.
            </p>
          </div>
        </div>
      </section>

      {/* Location Selector - Modernized */}
      <section className="py-6 bg-white border-b sticky top-[80px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Zgjidhni lokacionin:</h2>
            <div className="flex flex-wrap gap-2">
              {addresses.map((address) => (
                <AnimatedButton
                  key={address.id}
                  variant={selectedAddress.id === address.id ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => handleAddressSelect(address)}
                  showScale={false}
                >
                  <Building className="mr-2 h-4 w-4" />
                  {address.city}
                  {selectedAddress.id === address.id && <Check className="ml-2 h-4 w-4" />}
                </AnimatedButton>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="relative mb-8">
                <div className="h-1 w-16 bg-purple-500 mb-4"></div>
                <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-6">Informacione Kontakti</h2>
                <p className="text-navy-700">
                  Na kontaktoni përmes një prej mënyrave të mëposhtme ose plotësoni formularin dhe do t'ju kontaktojmë
                  ne.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Adresa</h3>
                    <p className="text-navy-700">{selectedAddress.address}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">Telefon</h3>
                    <a
                      href={`tel:${selectedAddress.phone}`}
                      className="text-navy-700 hover:text-purple-600 transition-colors"
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
                    <h3 className="font-bold text-navy-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${selectedAddress.email}`}
                      className="text-navy-700 hover:text-purple-600 transition-colors"
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
                    <h3 className="font-bold text-navy-900 mb-1">Orari</h3>
                    <p className="text-navy-700">E Hënë - E Premte: {selectedAddress.hours.weekdays}</p>
                    <p className="text-navy-700">E Shtunë: {selectedAddress.hours.saturday}</p>
                    <p className="text-navy-700">E Diel: {selectedAddress.hours.sunday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-navy-900 mb-4">Na ndiqni në rrjetet sociale</h3>
                <div className="flex space-x-4">
                  <AnimatedButton variant="secondary" size="sm" className="p-3 rounded-full" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" size="sm" className="p-3 rounded-full" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </AnimatedButton>
                  <AnimatedButton variant="secondary" size="sm" className="p-3 rounded-full" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold font-poppins text-navy-900 mb-6">Na dërgoni një mesazh</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
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
                    <div className="space-y-2">
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
                    <div className="space-y-2">
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
                    <div className="space-y-2">
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

                  <div className="space-y-3">
                    <Label className="text-gray-700">Jam i/e interesuar për:</Label>
                    <RadioGroup
                      value={formState.interest}
                      onValueChange={handleRadioChange}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    >
                      <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                        <RadioGroupItem value="general" id="general" className="text-purple-600" />
                        <Label htmlFor="general" className="cursor-pointer w-full">
                          Informacion i përgjithshëm
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                        <RadioGroupItem value="courses" id="courses" className="text-purple-600" />
                        <Label htmlFor="courses" className="cursor-pointer w-full">
                          Kurse specifike
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                        <RadioGroupItem value="collaboration" id="collaboration" className="text-purple-600" />
                        <Label htmlFor="collaboration" className="cursor-pointer w-full">
                          Bashkëpunim
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                        <RadioGroupItem value="other" id="other" className="text-purple-600" />
                        <Label htmlFor="other" className="cursor-pointer w-full">
                          Tjetër
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
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

                  <AnimatedButton type="submit" variant="secondary" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Dërgo Mesazhin
                  </AnimatedButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map and Building Section - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-navy-900 mb-4">Na gjeni këtu</h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Vizitoni Akademinë Afrodite në {selectedAddress.city} për të mësuar më shumë rreth kurseve tona dhe për të
              takuar ekipin tonë profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              key={`map-${selectedAddress.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-white relative group"
            >
              {/* Map */}
              <div className="w-full h-full bg-navy-100 flex items-center justify-center relative">
                <Image
                  src={selectedAddress.mapImage || "/placeholder.svg"}
                  alt={`Harta e Akademisë Afrodite në ${selectedAddress.city}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Map overlay with address */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-start text-white">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-purple-400" />
                  <div>
                    <h3 className="font-bold mb-1">Adresa jonë në {selectedAddress.city}</h3>
                    <p className="text-sm">{selectedAddress.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              key={`building-${selectedAddress.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] relative group"
            >
              <Image
                src={selectedAddress.buildingImage || "/placeholder.svg"}
                alt={`Ndërtesa e Akademisë Afrodite në ${selectedAddress.city}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Akademia Afrodite {selectedAddress.city}</h3>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-purple-400" />
                  <span>E Hënë - E Premte: {selectedAddress.hours.weekdays}</span>
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
  )
}
