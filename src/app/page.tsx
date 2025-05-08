import HeroSection from "@/components/sections/hero-section"
import ValueProposition from "@/components/sections/value-proposition"
import FindPractice from "@/components/sections/find-practice"
import ServicesOverview from "@/components/sections/services-overview"
import ListingsSection from "@/components/sections/listings-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <FindPractice />
      <ServicesOverview />
      <ListingsSection />
      <ContactSection />
    </>
  )
}
