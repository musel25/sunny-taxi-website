"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Car, Shield, Star, Phone, Mail, MapPin, CreditCard, Smartphone, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import LanguageToggle from "@/components/ui/language-toggle"

export default function SunnyTaxiWebsite() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Sunny Taxi Albania Logo"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
                <p className="text-sm text-orange-600">{t('subtitle')}</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('services')}
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('about')}
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                {t('contact')}
              </Link>
              <LanguageToggle />
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg">
                {t('bookNow')}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-blue-400/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">{t('welcomeBadge')}</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  {t('heroTitle')}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-xl text-lg px-8 py-4"
                  onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20would%20like%20to%20book%20a%20ride%20with%20Sunny%20Taxi%20Albania', '_blank')}
                >
                  <Car className="mr-2 h-5 w-5" />
                  {t('bookYourRide')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4 bg-transparent"
                  onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20need%20a%20taxi%20right%20now', '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Send WhatsApp
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">{t('happyCustomers')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">{t('available')}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{t('fiveStarService')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="/car-city.jpeg"
                  alt="Modern yellow taxi with Albanian landscape"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <Sun className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">{t('services')}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/car-city.jpeg"
                  alt="City taxi service"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Car className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('cityRides')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('cityRidesDesc')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('airConditioned')}</li>
                  <li>• {t('gpsTracking')}</li>
                  <li>• {t('professionalDrivers')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/car-night.jpeg"
                  alt="Airport transfer taxi service"
                  fill
                  className="object-cover object-[center_63%] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('airportTransfer')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('airportTransferDesc')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('flightTracking')}</li>
                  <li>• {t('meetGreet')}</li>
                  <li>• {t('luggageAssistance')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/car-stadium.jpeg"
                  alt="Stadium and events taxi service"
                  fill
                  className="object-cover object-[center_68%] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('scenicTours')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('scenicToursDesc')}
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• {t('localGuide')}</li>
                  <li>• {t('flexibleItineraries')}</li>
                  <li>• {t('photoStops')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Night Service Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/car-night.jpeg"
            alt="Night taxi service"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-yellow-400 text-gray-900 border-yellow-400 mb-6">{t('availability24')}</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Safe Night Rides Across Albania
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether it's a late dinner, airport pickup, or emergency travel, our professional drivers are ready 24/7 to provide safe and reliable transportation throughout Albania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20need%20a%20taxi%20for%20a%20night%20ride', '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Send WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20would%20like%20to%20book%20a%20ride%20with%20Sunny%20Taxi%20Albania', '_blank')}
              >
                <Sun className="mr-2 h-5 w-5" />
                {t('bookNow')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-4">{t('whyChoose')}</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('moreThanRide')}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('featuresSubtitle')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('availability24')}</h3>
                    <p className="text-gray-600">{t('availabilityDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('safeSecure')}</h3>
                    <p className="text-gray-600">
                      {t('safeSecureDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400 rounded-full p-2 mt-1">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('easyPayment')}</h3>
                    <p className="text-gray-600">{t('easyPaymentDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 rounded-full p-2 mt-1">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{t('easyBooking')}</h3>
                    <p className="text-gray-600">{t('easyBookingDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <Image
                src="/car-beach.jpeg"
                alt="Happy taxi driver in sunny Albania"
                width={600}
                height={500}
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 mb-4">{t('quickBooking')}</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('bookYourSunnyRide')}</h2>
              <p className="text-xl text-gray-600">{t('bookingSubtitle')}</p>
            </div>

            <Card className="shadow-2xl border-2 border-yellow-200">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-green-500 rounded-full p-3">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('bookViaWhatsApp')}</h3>
                    <p className="text-gray-600 mb-6">
                      {t('whatsappBookingDesc')}
                    </p>
                    <Button 
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 mb-4"
                      onClick={() => {
                        const message = `Hello Sunny Taxi Albania! I would like to book a ride.\n\n📍 Pickup Location: \n📍 Destination: \n📅 Date & Time: \n👥 Number of Passengers: \n📞 My Phone Number: \n\nPlease confirm availability and pricing. Thank you!`;
                        window.open(`https://wa.me/+355682222233?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      {t('bookOnWhatsApp')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">{t('getInTouch')}</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('contactTitle')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('whatsAppUs')}</h3>
                <p className="text-gray-600 mb-4">{t('whatsAppUsDesc')}</p>
                <div className="space-y-3">
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20would%20like%20to%20contact%20Sunny%20Taxi%20Albania', '_blank')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t('contactWhatsApp')}
                  </Button>
                  <p className="text-sm text-gray-500">+355 68 222 2233</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{t('emailUs')}</h3>
                <p className="text-gray-600 mb-4">{t('emailUsDesc')}</p>
                <div className="space-y-3">
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => window.open('mailto:sunnytaxialbania@gmail.com?subject=Sunny Taxi Inquiry&body=Hello, I would like to inquire about your taxi services.', '_self')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <p className="text-sm text-gray-500 break-all">sunnytaxialbania@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Sunny Taxi Albania Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">{t('title')}</h3>
                  <p className="text-sm text-gray-400">{t('subtitle')}</p>
                </div>
              </div>
              <p className="text-gray-400">
                {t('footerDesc')}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('cityRides')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('airportTransfer')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('scenicTours')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('corporateTravel')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('ourFleet')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('safety')}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    {t('careers')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <button 
                    onClick={() => window.open('https://wa.me/+355682222233?text=Hello%2C%20I%20would%20like%20to%20contact%20Sunny%20Taxi%20Albania', '_blank')}
                    className="hover:text-green-400 transition-colors"
                  >
                    WhatsApp: +355 68 222 2233
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tirana, Albania</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}