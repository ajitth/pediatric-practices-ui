import Image from "next/image"
import { ConsiderationSection } from "../data/practice-considerations"

interface PracticeConsiderationsProps {
  sections: ConsiderationSection[]
}

export default function PracticeConsiderations({ sections }: PracticeConsiderationsProps) {
  return (
    <section className="py-12 bg-gray-100 px-12">
       <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Considerations of Owning a Pediatric Practice:
        </h2>
      <div className="container mx-auto">
        {sections.map((section, index) => (
          <div key={section.id} className="items-center mb-16 last:mb-0">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 !== 0 ? "md:grid-flow-dense" : ""}`}>
              {/* Content */}
              <div className="flex justify-center items-center">
              <div className={`bg-white p-4 w-80 ${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 ">{section.title}</h2>
                <ul className="space-y-4">
                  {section.points.map((point) => (
                    <li key={point.id} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <p className="text-gray-700">
                        {point.isHighlighted && <strong>{point.content}</strong>}
                        {!point.isHighlighted && point.content}
                      </p>
                    </li>
                  ))}
                </ul>
                </div>
              </div>

              {/* Image */}
              <div
                className={`flex justify-center items-center ${index % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <div className="rounded-lg">
                  <Image
                    src={section.imagePath || "/placeholder.svg"}
                    alt={section.imageAlt}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Divider (except for the last section) */}
            {index < sections.length - 1 && <div className="border-t border-gray-200 my-16"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
