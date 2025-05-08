import Image from "next/image"
import Link from "next/link"

export default function FindPractice() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 ml-5">
            <h2 className="text-2xl font-bold mb-4">
              Trying to find the perfect practice? Browse our postings and find your match.
            </h2>
            <p className="text-gray-600 mb-6">
              Selling your practice can be stressful, especially when you want to put your patients first for decades.
              That&apos;s why we&apos;re here. We want to take the stress out of your hands by connecting you with the right
              buyer.
            </p>
            <Link href="/listings">
              <button
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white outline-button"
              >
                View More
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/ent-abt-2.png"
              alt="Doctor with baby"
              width={600}
              height={400}
              className="rounded-lg shadow-md md:text-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
