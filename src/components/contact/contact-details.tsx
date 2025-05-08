import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactDetails() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <MapPin size={48} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Our Location</h3>
            <p className="text-gray-600">1328 Center Street, Apex, NC 27502</p>
          </div>

          {/* Email Address */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Mail size={48} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email Address</h3>
            <p className="text-gray-600">info@pediatricpracticesforsale.com</p>
            <p className="text-gray-600">contact@pediatricpracticesforsale.com</p>
          </div>

          {/* Phone Number */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Phone size={48} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Phone Number</h3>
            <p className="text-gray-600">503-332-2502</p>
          </div>
        </div>
      </div>
    </section>
  )
}