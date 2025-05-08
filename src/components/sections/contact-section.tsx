"use client"

import { useState } from "react"
import { sendContactForm } from "@/services/contactService"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      await sendContactForm(formData)
      setSuccessMessage("Your message has been sent successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending contact form:", error)
      setErrorMessage("Failed to send your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 contact-form-wrapper text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Questions? Contact Us.</h2>
          <p className="text-gray-300">The fastest way to contact us is to fill out the form below:</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white text-gray-800 w-100 rounded-sm p-2"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white text-gray-800 w-100 rounded-sm p-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-white text-gray-800 w-100 rounded-sm p-2"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-gray-800 w-100 rounded-sm p-2"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white text-gray-800 min-h-[150px] w-100 rounded-sm p-2"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="pointer bg-yellow-500 hover:bg-teal-500 text-white px-8 py-2 rounded-sm"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-center text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </section>
  )
}