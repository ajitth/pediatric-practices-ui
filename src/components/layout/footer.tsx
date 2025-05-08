import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo-white.png"
                alt="Pediatric Practices Logo"
                width={250}
                height={250}
                className="mr-2"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Have any questions?</h3>
            <Link
              href="mailto:info@pediatricpracticesforsale.com"
              className="flex items-center mb-2 text-gray-300 hover:text-white"
            >
              <Mail size={18} className="mr-2" />
              info@pediatricpracticesforsale.com
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <div className="flex items-start mb-2 text-gray-300">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <p>1234 Center Street, Anytown, NC 12345</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Phone</h3>
            <div className="flex items-center text-gray-300">
              <Phone size={18} className="mr-2" />
              <p>800-555-2000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pediatric Practices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
