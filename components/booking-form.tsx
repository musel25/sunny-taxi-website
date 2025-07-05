"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Calendar, Clock, Users, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function BookingForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    passengers: '',
    phoneNumber: '',
    specialRequests: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const generateWhatsAppMessage = () => {
    const message = `Hello Sunny Taxi Albania! I would like to book a ride.

📍 Pickup Location: ${formData.pickupLocation || '[Please specify]'}
📍 Destination: ${formData.destination || '[Please specify]'}
📅 Date: ${formData.date || '[Please specify]'}
🕐 Time: ${formData.time || '[Please specify]'}
👥 Number of Passengers: ${formData.passengers || '[Please specify]'}
📞 My Phone Number: ${formData.phoneNumber || '[Please specify]'}
${formData.specialRequests ? `\n💬 Special Requests: ${formData.specialRequests}` : ''}

Please confirm availability and pricing. Thank you!`

    window.open(`https://wa.me/+355682222233?text=${encodeURIComponent(message)}`, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-500 rounded-full p-3">
            <Phone className="h-8 w-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{t('bookViaWhatsApp')}</h3>
        <p className="text-gray-600 mb-6 text-center">
          {t('whatsappBookingDesc')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Pickup Location
            </Label>
            <Input
              id="pickup"
              placeholder="Enter pickup address"
              value={formData.pickupLocation}
              onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Destination
            </Label>
            <Input
              id="destination"
              placeholder="Enter destination"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date
            </Label>
            <Input
              id="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Time
            </Label>
            <Select onValueChange={(value) => handleInputChange('time', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Now</SelectItem>
                <SelectItem value="00:00">12:00 AM</SelectItem>
                <SelectItem value="01:00">1:00 AM</SelectItem>
                <SelectItem value="02:00">2:00 AM</SelectItem>
                <SelectItem value="03:00">3:00 AM</SelectItem>
                <SelectItem value="04:00">4:00 AM</SelectItem>
                <SelectItem value="05:00">5:00 AM</SelectItem>
                <SelectItem value="06:00">6:00 AM</SelectItem>
                <SelectItem value="07:00">7:00 AM</SelectItem>
                <SelectItem value="08:00">8:00 AM</SelectItem>
                <SelectItem value="09:00">9:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
                <SelectItem value="11:00">11:00 AM</SelectItem>
                <SelectItem value="12:00">12:00 PM</SelectItem>
                <SelectItem value="13:00">1:00 PM</SelectItem>
                <SelectItem value="14:00">2:00 PM</SelectItem>
                <SelectItem value="15:00">3:00 PM</SelectItem>
                <SelectItem value="16:00">4:00 PM</SelectItem>
                <SelectItem value="17:00">5:00 PM</SelectItem>
                <SelectItem value="18:00">6:00 PM</SelectItem>
                <SelectItem value="19:00">7:00 PM</SelectItem>
                <SelectItem value="20:00">8:00 PM</SelectItem>
                <SelectItem value="21:00">9:00 PM</SelectItem>
                <SelectItem value="22:00">10:00 PM</SelectItem>
                <SelectItem value="23:00">11:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="passengers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Passengers
            </Label>
            <Select onValueChange={(value) => handleInputChange('passengers', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Number of passengers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
                <SelectItem value="5">5 Passengers</SelectItem>
                <SelectItem value="6">6 Passengers</SelectItem>
                <SelectItem value="7">7 Passengers</SelectItem>
                <SelectItem value="8">8 Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="requests" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Special Requests (Optional)
          </Label>
          <Textarea
            id="requests"
            placeholder="Any special requests or additional information..."
            value={formData.specialRequests}
            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
            rows={3}
          />
        </div>

        <Button 
          size="lg"
          className="w-full bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 mt-6"
          onClick={generateWhatsAppMessage}
        >
          <Phone className="mr-2 h-5 w-5" />
          {t('bookOnWhatsApp')}
        </Button>
      </div>
    </div>
  )
}