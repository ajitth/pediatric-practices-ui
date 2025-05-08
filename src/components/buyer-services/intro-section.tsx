export default function IntroSection() {
    return (
      <section className="py-12 bg-white px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="mb-4">
                <span className="inline-block text-yellow-500 text-xm font-bold rounded">
                  Buyer + Seller Services
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thinking about buying a practice?</h2>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600">
                When it comes to buying a practice, knowing the right information is crucial. That&apos;s why we hand-walk
                clients behind the scenes to provide all the necessary information you need to make an easy decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }