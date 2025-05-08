import PageHeader from "@/components/practice-listings/page-header"
import SearchFilters from "@/components/practice-listings/search-filters"
import ListingsSection from "@/components/sections/listings-section"
import ContactSection from "@/components/sections/contact-section"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PracticeListingsPage({ searchParams }: { searchParams?: any }) {
  const filters = {
    country: searchParams?.country || "",
    state: searchParams?.state || "",
    industrie: searchParams?.industrie || "",
    minPrice: searchParams?.minPrice || "",
    maxPrice: searchParams?.maxPrice || "",
    page: parseInt(searchParams?.page || "1", 10),
  }

  console.log("Filters passed to fetchListings:", filters) // Debugging

  // const { listings, count } = await fetchListings(filters)

  return (
    <div>
      <PageHeader />
      <SearchFilters />
      <ListingsSection filters={filters} />
      <ContactSection />
    </div>
  )
}