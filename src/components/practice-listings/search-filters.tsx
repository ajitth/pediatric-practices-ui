"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Filter, X } from "lucide-react"

export default function SearchFilters() {
  const [showFilters, setShowFilters] = useState(true)
  const formRef = useRef<HTMLFormElement>(null) // Reference to the form
  const router = useRouter() // Use Next.js router for navigation

  const handleNavigateToCreateBusiness = () => {
    router.push("/create-business") // Navigate to the CreateBusiness route
  }
  
  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const filters = {
      country: formData.get("country") as string,
      state: formData.get("state") as string,
      industrie: formData.get("industrie") as string,
      minPrice: formData.get("minPrice") as string,
      maxPrice: formData.get("maxPrice") as string,
      timestamp: Date.now().toString(), // Add a unique timestamp to force re-render
    }

    // Update the URL with query parameters
    const query = new URLSearchParams(filters).toString()
    router.push(`/practice-listings?${query}`)
  }

  const clearFilters = () => {
    if (formRef.current) {
      formRef.current.reset() // Reset all form fields to their default values
    }
    router.push("/practice-listings") // Clear filters by navigating to the base route
  }

  return (
    <div className="bg-white rounded-lg p-4 mb-6 px-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <button onClick={() => setShowFilters(!showFilters)} className="text-gray-500 hover:text-gray-700 md:hidden">
          {showFilters ? <X size={16} /> : <Filter size={16} />}
        </button>
      </div>

      {showFilters && (
        <form ref={formRef} onSubmit={handleFilterSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Country Filter */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="w-100 border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">All</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
            </div>

            {/* State Filter */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <select
                id="state"
                name="state"
                className="w-100 border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">All</option>
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Florida">Florida</option>
                <option value="Texas">Texas</option>
                <option value="Illinois">Illinois</option>
              </select>
            </div>

            {/* All Industries Filter */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="industrie" className="block text-sm font-medium text-gray-700 mb-2">
                All Industries
              </label>
              <select
                id="industrie"
                name="industrie"
                className="w-100 border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">All</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Automotive and Boat">Automotive and Boat</option>
                <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                <option value="Building and Construction">Building and Construction</option>
                <option value="Business Services">Business Services</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Clothing and Fashion">Clothing and Fashion</option>
                <option value="Communication & Media">Communication & Media</option>
                <option value="Education & Children">Education & Children</option>
                <option value="Entertainment & Leisure">Entertainment & Leisure</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Food and Beverage">Food and Beverage</option>
                <option value="General Merchandise">General Merchandise</option>
                <option value="Hair and Beauty">Hair and Beauty</option>
                <option value="Health and Medical">Health and Medical</option>
                <option value="Home and Garden">Home and Garden</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="col-span-1 md:col-span-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Min"
                  className="w-1/2 border border-gray-300 rounded-md p-2 text-sm"
                />
                <input
                  type="text"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max"
                  className="w-1/2 border border-gray-300 rounded-md p-2 text-sm  mr-4"
                />
                <button type="submit" className="mr-4 pointer bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-md text-sm font-medium"> Apply </button>
                <button type="button" onClick={clearFilters} className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-md text-sm font-medium"> Clear </button>
              </div>
              </div>

            {/* Buttons */}
            {/* <div className="col-span-1 md:col-span-2 mt-4">
              </div> */}
            <div className="col-span-1 md:col-span-2 mt-4">
            <button type="button"  onClick={handleNavigateToCreateBusiness}
            className="mt-3 pointer bg-teal-500 hover:bg-teal-400 text-white py-2 px-6 rounded-md text-sm font-medium"> Add Business </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}