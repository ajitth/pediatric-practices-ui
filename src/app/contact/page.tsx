import ContactDetails from "@/components/contact/contact-details"
import HaveToQuestion from "@/components/contact/have-to-question"
import PageHeader from "@/components/contact/page-header"

export default function ContactPage() {
  return (
    <main>
      <PageHeader />
      <ContactDetails />
      <HaveToQuestion />
    </main>
  )
}