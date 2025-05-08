"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/buyer-services', label: 'Buyer Services', highlight: false },
    { href: '/seller-services', label: 'Seller Services', highlight: false },
    { href: '/practice-listings', label: 'Buyers Seeking Sellers', highlight: false },
    { href: '/about', label: 'About', highlight: false },
    { href: '/contact', label: 'Contact', highlight: false },
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main Row: Logo, Navigation, and Button */}
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Pediatric Practices Logo"
                width={320}
                height={50}
                className="mr-2"
              />
            </Link>
          </div>

          <div className="flex flex-col w-full md:w-auto ml-4">

            {/* Top Row: Email and Social Icons */}
            <div className="flex justify-between items-center ml-4 pb-4 border-b border-l">
              <Link
                href="mailto:info@pediatricpracticesforsale.com"
                className="flex items-center text-sm text-gray-600 hover:text-gray-800 ml-4 mt-4"
              >
                <Mail size={18} className="mr-2 text-yellow-500" />
                info@pediatricpracticesforsale.com
              </Link>
              <div className="flex space-x-4 mt-3">
                <Link href="https://facebook.com" target="_blank" className="text-yellow-500 hover:text-yellow-600">
                  <Facebook size={18} />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-yellow-500 hover:text-yellow-600">
                  <Twitter size={18} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-yellow-500 hover:text-yellow-600">
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center ml-4 border-l">
            {/* Navigation */}
            {/* <nav className="flex flex-wrap space-x-6 mb-4 md:mb-0 ml-4 pb-4 pt-4">
              <Link href="/buyer-services" className="text-gray-700 hover:text-teal-600">
                Buyer Services
              </Link>
              <Link href="/seller-services" className="text-gray-700 hover:text-teal-600">
                Seller Services
              </Link>
              <Link href="/practice-listings" className="text-gray-700 hover:text-teal-600">
                Buyers Seeking Sellers
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600">
                About
              </Link>
              <Link href="/contact" className="text-yellow-500 font-bold hover:text-yellow-600">
                Contact
              </Link>
            </nav> */}

            <nav className="flex flex-wrap space-x-6 mb-4 md:mb-0 ml-4 pb-4 pt-4">
                  {navItems.map(({ href, label, highlight }) => {
                    const isActive = pathname === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`${
                          isActive
                            ? highlight
                              ? 'text-yellow-500 font-bold'
                              : 'text-yellow-500 font-semibold'
                            : highlight
                            ? 'text-yellow-500 font-bold hover:text-yellow-500'
                            : 'text-gray-700 hover:text-gray-900'
                        }`}
                      >
                        {label}
                      </Link>
                    )
                  })}
                </nav>

            {/* Button */}
            <div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 font-bold">
                Get A Quote ➔
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}