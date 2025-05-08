import BuildingVsBuying from "@/components/buyer-services/building-vs-buying";
import IntroSection from "@/components/buyer-services/intro-section";
import PageHeader from "@/components/buyer-services/page-header";
import PracticeConsiderations from "@/components/buyer-services/practice-considerations";
import { practiceConsiderations } from "@/components/data/practice-considerations";
import ContactSection from "@/components/sections/contact-section";

export default function BuyerServicesPage() {
    return (
      <div className="min-h-screen">
      <PageHeader />
      <IntroSection />
      <BuildingVsBuying />
      <PracticeConsiderations sections={practiceConsiderations} />
      <ContactSection />
    </div>
    );
  }
  