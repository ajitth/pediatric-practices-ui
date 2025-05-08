import { Check } from "lucide-react"
import Image from "next/image"

export default function ValueProposition() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 ml-5">
            <Image
              src="/assets/ent-abt.png"
              alt="Doctor with patient"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 mr-5">
            <div className="rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-md font-bold text-yellow-500 rounded">
                  Pediatric Practices For Sale
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                You and your patients are safe in our hands. Let us do the heavy lifting for you so you can focus on
                what&apos;s important.
              </h2>

              <div className="space-y-3 mt-6">
                <div className="flex items-start">
                  <Check className="text-yellow-500 font-bold mr-2 mt-1" />
                  <p>Listing your practice is easy</p>
                </div>
                <div className="flex items-start">
                  <Check className="text-yellow-500 font-bold mr-2 mt-1" />
                  <p>Just provide some important information and we&apos;ll do the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
