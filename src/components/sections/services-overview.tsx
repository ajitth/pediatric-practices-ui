import Link from "next/link"
import { FileText, Users } from "lucide-react"

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="text-yellow-500">SERVICES BY</span> You&apos;re in Good Hands
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-500 p-4 rounded-full">
                <FileText size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Buyer Services</h3>
            <p className="text-gray-600 mb-6">
              When it comes to buying a practice, knowing the right information is crucial. That&apos;s why we have tools
              tailored specifically to your needs. Our comprehensive consultation will help you make an easy decision.
            </p>
            <div className="text-center">
              <Link href="/buyer-services">
                <button
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-500 p-4 rounded-full">
                <Users size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Seller Services</h3>
            <p className="text-gray-600 mb-6">
              Our team consists of highly skilled professionals with expertise in their respective fields. We have a
              thorough understanding of the market and can help you navigate various challenges and deliver high-quality
              results.
            </p>
            <div className="text-center">
              <Link href="/seller-services">
                <button
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
