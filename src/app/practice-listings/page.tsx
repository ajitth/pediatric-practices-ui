import PageHeader from "@/components/practice-listings/page-header"
import SearchFilters from "@/components/practice-listings/search-filters"
import ListingsSection from "@/components/sections/listings-section"
import ContactSection from "@/components/sections/contact-section"
import { fetchListings } from "@/services/pediatric-service"
// import { headers } from "next/headers"

// export default async function PracticeListingsPage() {

// const headersList = headers()
// const fullUrl = headersList.get("x-url") || ""
// const url = new URL(fullUrl || "http://localhost") // fallback base for local dev

//       const params = url.searchParams
//   const filters = {
//     country: params.get("country") || "",
//     state: params.get("state") || "",
//     industrie: params.get("industrie") || "",
//     minPrice: params.get("minPrice") || "",
//     maxPrice: params.get("maxPrice") || "",
//     page: parseInt(params.get("page") || "1", 10),
//   }

//   const { listings, count } = await fetchListings(filters)

//   return (
//     <div className="min-h-screen">
//       <PageHeader />
//       <SearchFilters />
//       <ListingsSection initialListings={listings} totalCount={count} filters={filters} />
//       <ContactSection />
//     </div>
//   )
// }


export default async function PracticeListingsPage({ searchParams }: { searchParams: Record<string, string> }) {
  const filters = {
    country: searchParams?.country || "",
    state: searchParams?.state || "",
    industrie: searchParams?.industrie || "",
    minPrice: searchParams?.minPrice || "",
    maxPrice: searchParams?.maxPrice || "",
    page: parseInt(searchParams?.page || "1", 10),
  }

  console.log("Filters passed to fetchListings:", filters) // Debugging

  const { listings, count } = await fetchListings(filters)

  return (
    <div>
      <PageHeader />
      <SearchFilters />
      <ListingsSection initialListings={listings} totalCount={count} filters={filters} />
      <ContactSection />
    </div>
  )
}