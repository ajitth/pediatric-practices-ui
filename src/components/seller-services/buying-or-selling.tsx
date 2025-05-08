"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  toggleOpen: () => void
}

function AccordionItem({ title, children, isOpen, toggleOpen }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="p-4 bg-white border-t border-gray-200">{children}</div>}
    </div>
  )
}

export default function BuyingOrSelling() {
  const [openItem, setOpenItem] = useState<string | null>("buyer")

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item)
  }

  return (
    <section className="py-12 bg-yellow-500">
      <div className="container mx-auto px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Buying or Selling</h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <Image
              src="/assets/seller-2.jpg"
              alt="Doctor with family"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="md:w-1/2">
            <AccordionItem
              title="Our Buyer Network"
              isOpen={openItem === "buyer"}
              toggleOpen={() => toggleItem("buyer")}
            >
              <p>
                Pediatric practices for Sale is building relationships with individuals and businesses that can help you
                sell/purchase practices. We will notify our network of potential buyers, including other pediatric
                practices, healthcare systems, private equity organizations, and physicians in similar fields or
                communities to connect with potential buyers and establish partnerships.
              </p>
            </AccordionItem>

            <AccordionItem
              title="Empowering You To Make the Right Decision"
              isOpen={openItem === "decision"}
              toggleOpen={() => toggleItem("decision")}
            >
              <p>
                We provide comprehensive information and guidance to help you make informed decisions about selling your
                practice. Our team of experts will analyze your specific situation and provide personalized
                recommendations.
              </p>
            </AccordionItem>

            <AccordionItem
              title="Practice Valuation"
              isOpen={openItem === "valuation"}
              toggleOpen={() => toggleItem("valuation")}
            >
              <p>
                We offer professional practice valuation services to determine the fair market value of your pediatric
                practice. Our valuation considers multiple factors including financial performance, patient base,
                location, equipment, and growth potential.
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </section>
  )
}
