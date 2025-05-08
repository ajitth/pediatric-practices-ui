"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateBusiness() {
  const router = useRouter() // Use Next.js router for navigation
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    typeOfListing: "",
    industry: "",
    askingPrice: 0,
    cashFlow: 0,
    grossRevenue: 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNavigate = () => {
    router.push("/practice-listings") // Navigate to the CreateBusiness route
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form Data Submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Business For Sale</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Business Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Business Title"
            className="w-100 border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Business Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Business Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter business description"
            rows={6}
            className="w-100 border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* Type of Listing and Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="typeOfListing" className="block text-sm font-medium text-gray-700 mb-2">
              Type of Listing <span className="text-red-500">*</span>
            </label>
            <select
              id="typeOfListing"
              name="typeOfListing"
              value={formData.typeOfListing}
              onChange={handleChange}
              className="w-100 border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Type</option>
              <option value="For Sale">For Sale</option>
              <option value="For Lease">For Lease</option>
              <option value="Partnership">Partnership</option>
            </select>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-100 border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">All Industry</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Automotive">Automotive</option>
              <option value="Beauty">Beauty</option>
              <option value="Construction">Construction</option>
              <option value="Education">Education</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Health">Health</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
        </div>

        {/* Asking Price, Cash Flow, and Gross Revenue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="askingPrice" className="block text-sm font-medium text-gray-700 mb-2">
              Asking Price
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">$</span>
              <input
                type="number"
                id="askingPrice"
                name="askingPrice"
                value={formData.askingPrice}
                onChange={handleChange}
                className="w-100 border border-gray-300 rounded-md p-2"
                min={0}
              />
            </div>
          </div>

          <div>
            <label htmlFor="cashFlow" className="block text-sm font-medium text-gray-700 mb-2">
              Cash Flow
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">$</span>
              <input
                type="number"
                id="cashFlow"
                name="cashFlow"
                value={formData.cashFlow}
                onChange={handleChange}
                className="w-100 border border-gray-300 rounded-md p-2"
                min={0}
              />
            </div>
          </div>

          <div>
            <label htmlFor="grossRevenue" className="block text-sm font-medium text-gray-700 mb-2">
              Gross Revenue
            </label>
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">$</span>
              <input
                type="number"
                id="grossRevenue"
                name="grossRevenue"
                value={formData.grossRevenue}
                onChange={handleChange}
                className="w-100 border border-gray-300 rounded-md p-2"
                min={0}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
            <button type="button"  onClick={handleNavigate} className="mt-3 mr-4 pointer bg-gray-500 hover:bg-gray-400 text-white py-2 px-6 rounded-md text-sm font-medium"> Cancel </button>
            <button type="submit" className="mt-3 pointer bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-md text-sm font-medium"> Submit </button>
        </div>
      </form>
    </div>
  )
}