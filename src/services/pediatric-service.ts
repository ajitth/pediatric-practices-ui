/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchListings = async (filters?: {
  state?: string
  country?: string
  industrie?: string
  minPrice?: string
  maxPrice?: string
  page?: number
  limit?: number
}) => {
  try {
    // Initialize query parts with a default search key
    const qParts: string[] = ['searchKey=like=%22*PRACTICES*%22']
    // Add filters to the query parts
    if (filters?.state) qParts.push(`state==%22${encodeURIComponent(filters.state)}%22`)
    if (filters?.country) qParts.push(`country==%22${encodeURIComponent(filters.country)}%22`)
    if (filters?.industrie) qParts.push(`industrie==%22${encodeURIComponent(filters.industrie)}%22`)
    if (filters?.minPrice) qParts.push(`askingPrice=ge=${encodeURIComponent(filters.minPrice)}`)
    if (filters?.maxPrice) qParts.push(`askingPrice=le=${encodeURIComponent(filters.maxPrice)}`)

    // Calculate offset for pagination
    const offset = ((filters?.page || 1) - 1) * (filters?.limit || 10)

    // Construct the URL
    const url = `https://api.globalbizm.com/api/businesses?offset=${offset}&limit=${filters?.limit || 10}&summary=true&orderby=createdDt&order=desc&q=${qParts.join(';')}`

    // Fetch data from the API
    const response = await fetch(url)

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch listings")
    }

    // Parse the response JSON
    const data = await response.json()

    // Map the data to the desired format
    const listings = data.data.map((listing: any) => ({
      id: listing.businessId,
      title: listing.name,
      description: listing.description,
      price: listing.askingPrice || "Price not available",
      location: `${listing.city || "Unknown City"}, ${listing.state || "Unknown State"}`,
      image: listing.imageUrls?.[0] || "/assets/default.jpg",
      isSold: listing.isSold,
      viewCount: listing.viewCount,
      visitCount: listing.visitCount,
    }))

    // Return the listings and total count
    return {
      listings: listings,
      count: data.count || 0,
    }
  } catch (error) {
    // Log the error
    console.error("Error fetching listings:", error)

    // Return an empty result in case of an error
    return { listings: [], count: 0 }
  }
}