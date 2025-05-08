export const sendContactForm = async (formData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
  }) => {
    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      if (!response.ok) {
        throw new Error("Failed to send contact form")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error sending contact form:", error)
      throw error
    }
  }