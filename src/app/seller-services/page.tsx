// import ServicesOverview from "@/components/sections/services-overview"
// import ValueProposition from "@/components/sections/value-proposition"
import ContactSection from "@/components/sections/contact-section"
import BuyingOrSelling from "@/components/seller-services/buying-or-selling"
import DoingDifferently from "@/components/seller-services/doing-differently"
import PageHeader from "@/components/seller-services/page-header"
import SellingPractice from "@/components/seller-services/selling-practice"
import WhyWorkWithUs from "@/components/seller-services/why-work-with-us"

export const metadata = {
  title: "Seller Services | Pediatric Practices",
  description: "Learn how we can help you sell your pediatric practice with our expert services and support.",
}

export default function SellerServicesPage() {
  return (
    <>
      <PageHeader />
      <WhyWorkWithUs />
      <SellingPractice />
      <BuyingOrSelling />
      <DoingDifferently />
      <ContactSection />
    </>
  )
}
