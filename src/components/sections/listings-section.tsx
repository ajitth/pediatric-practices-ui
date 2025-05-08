"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchListings } from "@/services/pediatric-service"
import { MapPin } from "lucide-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ListingsSection({ filters }: { filters?: any }) {
  interface Listing {
    id: string
    image: string
    title: string
    description: string
    price: string
    location: string
    viewCount: number
    visitCount: number
    isSold: boolean
  }

  const router = useRouter()
  const searchParams = useSearchParams()
  const [listings, setListings] = useState<Listing[]>([]) // Listings state
  const [loading, setLoading] = useState(true) // Loading state
  const [totalCount, setTotalCount] = useState(0) // Total count of listings
  const listingsPerPage = 10 // Number of listings per page
  const currentPage = parseInt(searchParams.get("page") || "1", 10) // Get current page from URL

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true) // Start loading
      try {
        const data = await fetchListings({ ...filters, page: currentPage, limit: listingsPerPage })
        setListings(data.listings || []) // Update listings
        setTotalCount(data.count || 0) // Update total count
      } catch (error) {
        console.error("Error fetching listings:", error)
        setListings([]) // Fallback to an empty array in case of an error
      } finally {
        setLoading(false) // Stop loading
      }
    }
    loadListings()
  }, [filters, currentPage]) // Re-fetch data when filters or page changes

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString()) // Update the page parameter
    router.push(`/practice-listings?${params.toString()}`) // Update the URL
  }

  const truncateText = (text: string, maxLength: number) => {
    const plainText = text.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    return plainText.length > maxLength ? `${plainText.substring(0, maxLength)}...` : plainText
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-12">
        <h2 className="text-center text-3xl font-bold mb-12">Pediatric Practices</h2>

        {loading ? (
          // Loading Spinner
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-start"
                >
                  {/* Left Side: Details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                    <p className="text-gray-500 flex items-center mb-4">
                      <MapPin size={16} className="text-yellow-500 mr-2" />
                      {listing.location}
                    </p>
                    <p
                      className="text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: truncateText(listing.description, 100),
                      }}
                    ></p>
                    <button
                      onClick={() => window.open(`https://globalbizm.com/business/business-details?businessId=${listing.id}`, "_blank")}
                      className="pointer bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-md"
                    >
                      View Details
                    </button>
                  </div>

                  {/* Right Side: Image */}
                  <div className="w-32 h-32 ml-4">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: Math.ceil(totalCount / listingsPerPage) }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="powered-by text-gray-600">Powered By <b>GLOBAL BUSINESS MARKETPLACE</b></div>
          </>
        )}
      </div>
    </section>
  )
}