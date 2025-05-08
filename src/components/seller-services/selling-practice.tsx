import Image from "next/image"

export default function SellingPractice() {
  return (
    <section className="py-12 bg-gray-50 px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Pediatric Practice Selling Services ✨
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Thinking About Selling Your Pediatric Practice?</h2>
            <p className="mb-4">
              Selling a pediatric practice can be a complex process. There are several factors you need to consider
              before making a decision. Our experienced advisors can be a valuable resource, as it&#39;s important to
              approach it strategically. Pediatric practices for sale require you understanding your service value, the
              valuation, Legal and Regulatory Considerations, Financial Assessment, Confidentiality, Transition
              Planning, Practice Marketing and Finding Buyers, Negotiation and Due Diligence, and Transition Assistance.
            </p>
            <p>
              Selling a practice can be a time-consuming and complex process, so it&#39;s important to plan and seek
              professional guidance. By considering these factors and approaching it from a team of advisors, you can
              increase the likelihood of a successful sale and ensure a smooth transition for your patients and staff.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/seller-1.jpg"
              alt="Doctor examining child patient"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
