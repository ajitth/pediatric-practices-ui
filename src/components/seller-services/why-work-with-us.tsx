// import Image from "next/image"

export default function WhyWorkWithUs() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/4 seller-qut">
            {/* <Image
              src="/assets/images/content/doctor-with-patient-2.jpg"
              alt="Healthcare professional with patient"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            /> */}
            You and your patients are safe in our hands. Let us do the heavy lifting for you so you can focus on what’s important.
          </div>
          <div className="md:w-3/4">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Pediatric Practices Selling Services ✨
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Work with our Team?</h2>
            <p className="mb-4">
              Our team consists of highly skilled professionals with expertise in their respective fields. We have a
              thorough understanding of the market and can help you navigate various challenges and deliver high-quality
              results.
            </p>
            <p className="mb-4">
              We are a group of highly qualified professionals that allow us to fully address your needs. Our team has a
              combined 50+ years of experience in the healthcare industry.
            </p>
            <p>
              Our team brings to your expertise, collaboration, experience, business, client-focused approach, quality,
              and professionalism. Our team operates with integrity and extensive and collaborative regarding sensitive
              information.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  )
}
