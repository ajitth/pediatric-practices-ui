import Link from "next/link"
import HeroSlider from "../ui/hero-slider"

export default function HeroSection() {
  return (
    <section className="relative text-white">
      <HeroSlider/>
      <div className="container mx-auto px-4 py-24 relative-1 z-10">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">PRACTICES FOR SALE</h1>
          <p className="text-xl mb-8">Search pediatric practices with our extensive filters.</p>
          <Link href="/buyer-services">
            <button className="slider-btn">Learn more here</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
