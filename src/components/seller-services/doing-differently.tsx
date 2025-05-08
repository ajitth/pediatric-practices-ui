import Image from "next/image"
import Link from "next/link"

export default function DoingDifferently() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Pediatric Practice Selling Services ✨
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why and How We&#39;re Doing things Differently.</h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Innovation and Technology:</span> We understand the unique challenges
                  existing health care organizations face. Healthcare and organizations are already thin on time,
                  technologies, and resources that lead to preventable and costly errors.
                </div>
              </li>

              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Changing Needs and Considerations:</span> We know the needs and
                  circumstances of healthcare providers are constantly evolving, and we adapt our approach accordingly.
                </div>
              </li>

              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Customization and Flexibility:</span> We understand that each practice is
                  unique, providing the best solutions requires a tailored approach that addresses your specific
                  business needs.
                </div>
              </li>

              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Transparency and Social Responsibility:</span> Increasing awareness of
                  environmental issues and social considerations has prompted many to reevaluate their practice
                  operations and impact.
                </div>
              </li>

              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <div>
                  <span className="font-bold">Lessons Learned and Feedback:</span> Reflecting on past experiences and
                  learning from both successes and failures is essential to improvement of working practices. We always
                  strive to be the best at what we do.
                </div>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="md:w-1/3">
            <Image
              src="/assets/seller-4.png"
              alt="Healthcare professional"
              width={400}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
