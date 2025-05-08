import Image from "next/image"
import { FileText } from "lucide-react"

export default function WhoWeAre() {
  return (
    <section className="bg-white pt-12">
      <div className="container mx-auto px-12 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <FileText size={54} className="text-teal-500 mt-4" />
            <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed ml-16">
            According to the American Board of Pediatrics, as of May 2023 there are currently 54,571
            board-certified pediatricians age 70 and under. That makes the average per state around
            1,049 pediatricians, which also means there are almost 75 pediatricians for every 100,000
            children. According to the American Academy of Pediatrics, the future of pediatrics has
            been a significant topic of dialogue as there is concern that there will be too much
            demand and not enough doctors to meet that demand.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed ml-16">
            If you’re looking to sell your business, we’re here to make it easier for you to focus on
            your patients through the transition, without the needless stress.
          </p>
          <p className="text-gray-600 leading-relaxed ml-16">
            If you’re looking to buy a new business, we’re here to help you make the best decision,
            and present you with updated information on businesses currently for sale.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <Image
            src="/assets/abt.jpg"
            alt="Who We Are"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mt-8"></div>

      {/* Additional Section */}
      <div className="mx-8 mt-8 px-2">
        <div className="container about-why-us">
          <h5 className="">
            WHY CHOOSE US TO SELL YOUR PRACTICE? <span className="text-yellow-400">▼</span>
          </h5>
          <h3>
            Selling your practice can be stressful, especially when you’re wanting to give your
            patients your full attention. That’s why we’re here. We want to take the stress out of
            your hands so you can focus on helping your patients. We’ll list your practice for you
            and help reel in buyers, making the process easy for you.
          </h3>
        </div>
      </div>
    </section>
  )
}