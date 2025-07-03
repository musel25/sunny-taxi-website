import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Car, Shield, Star, Phone, Mail, MapPin, CreditCard, Smartphone, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SunnyTaxiWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className="h-10 w-10 text-yellow-500" />
                <div className="absolute inset-0 animate-pulse">
                  <Sun className="h-10 w-10 text-yellow-300 opacity-50" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Sunny Taxi</h1>
                <p className="text-sm text-orange-600">Albania's Happiest Ride</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg">
                Book Now
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
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">🌞 Welcome to Sunny Taxi</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Your Brightest
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                    {" "}
                    Journey{" "}
                  </span>
                  Starts Here
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience Albania's most reliable and cheerful taxi service. We bring sunshine to every ride with our
                  modern fleet and friendly drivers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-xl text-lg px-8 py-4"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Book Your Ride
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 text-lg px-8 py-4 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">5-Star Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=500"
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sunshine in Every Service</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From quick city rides to scenic tours across beautiful Albania, we've got you covered with our
              comprehensive taxi services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">City Rides</h3>
                <p className="text-gray-600 mb-4">
                  Quick and comfortable transportation around Albanian cities with our modern fleet.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Air-conditioned vehicles</li>
                  <li>• GPS tracking</li>
                  <li>• Professional drivers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Airport Transfer</h3>
                <p className="text-gray-600 mb-4">
                  Reliable airport pickups and drop-offs with flight monitoring and meet & greet service.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Flight tracking</li>
                  <li>• Meet & greet service</li>
                  <li>• Luggage assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Scenic Tours</h3>
                <p className="text-gray-600 mb-4">
                  Discover Albania's beautiful landscapes with our guided taxi tours and sightseeing services.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Local guide knowledge</li>
                  <li>• Flexible itineraries</li>
                  <li>• Photo stops included</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-4">Why Choose Sunny Taxi?</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">More Than Just a Ride</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're committed to making every journey a bright and memorable experience with our exceptional service
                standards.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">24/7 Availability</h3>
                    <p className="text-gray-600">Round-the-clock service whenever you need us, day or night.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Safe & Secure</h3>
                    <p className="text-gray-600">
                      Licensed drivers, insured vehicles, and GPS tracking for your safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-400 rounded-full p-2 mt-1">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Easy Payment</h3>
                    <p className="text-gray-600">Multiple payment options including cash, card, and mobile payments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-400 rounded-full p-2 mt-1">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Easy Booking</h3>
                    <p className="text-gray-600">Book via phone, app, or online with instant confirmation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
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
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 mb-4">Quick Booking</Badge>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Sunny Ride</h2>
              <p className="text-xl text-gray-600">Get started with your journey in just a few clicks</p>
            </div>

            <Card className="shadow-2xl border-2 border-yellow-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                      <Input
                        placeholder="Enter pickup address"
                        className="border-2 border-gray-200 focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                      <Input
                        placeholder="Where are you going?"
                        className="border-2 border-gray-200 focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        placeholder="+355 XX XXX XXX"
                        className="border-2 border-gray-200 focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                      <Input type="datetime-local" className="border-2 border-gray-200 focus:border-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                      <select className="w-full p-3 border-2 border-gray-200 rounded-md focus:border-yellow-400 focus:outline-none">
                        <option>1 Passenger</option>
                        <option>2 Passengers</option>
                        <option>3 Passengers</option>
                        <option>4+ Passengers</option>
                      </select>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white text-lg py-6">
                        <Sun className="mr-2 h-5 w-5" />
                        Book Your Sunny Ride
                      </Button>
                    </div>
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
            <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">Get in Touch</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We're Here to Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or need assistance? Our friendly team is always ready to brighten your day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Available 24/7 for bookings and support</p>
                <p className="text-lg font-semibold text-orange-600">+355 XX XXX XXX</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions anytime</p>
                <p className="text-lg font-semibold text-blue-600">hello@sunnytaxi.al</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our main office location</p>
                <p className="text-lg font-semibold text-green-600">Tirana, Albania</p>
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
                <Sun className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold">Sunny Taxi</h3>
                  <p className="text-sm text-gray-400">Albania's Happiest Ride</p>
                </div>
              </div>
              <p className="text-gray-400">
                Bringing sunshine to every journey across beautiful Albania with reliable, friendly, and professional
                taxi services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    City Rides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Airport Transfer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Scenic Tours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Corporate Travel
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+355 XX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@sunnytaxi.al</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tirana, Albania</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sunny Taxi Albania. All rights reserved. Made with ☀️ in Albania.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
