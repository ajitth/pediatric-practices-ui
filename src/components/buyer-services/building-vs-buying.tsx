import { FileText } from "lucide-react"

export default function BuildingVsBuying() {
  return (
    <section className="py-12 bg-yellow-400 mx-12 px-4">
      <div className="container mx-auto">
        <div className="flex items-start gap-4 mb-6">
          <div className="rounded-full">
            <FileText className="text-gray-100 h-15 w-15" />
          </div>
          <h2 className="text-2xl font-bold text-gray-100 mt-4">Building vs. Buying a Practice:</h2>
        </div>

        <div className="text-gray-100 space-y-4 ml-20">
          <p>
            When deciding whether to build a practice from scratch or buy an existing one, there are several factors to
            consider.
          </p>

          <p>
            Building a practice is a big step. First, you need to secure capital, which can be challenging, especially
            if you&apos;re just starting out. You&apos;ll need to find the right location, purchase equipment, hire staff, and
            develop systems from scratch. This can be time-consuming and expensive. Additionally, building a practice
            means starting with zero patients and having to build a reputation from the ground up, which can take years.
          </p>

          <p>
            On the other hand, buying an established practice means you&apos;re inheriting a business that already has
            patients, staff, and systems in place. This can be a huge advantage as it allows you to hit the ground
            running. The existing patient base provides immediate income, and the established reputation can help
            attract new patients. Additionally, buying a practice often comes with mentorship opportunities, as the
            previous owner may stay on to help with the transition.
          </p>
        </div>
      </div>
    </section>
  )
}
