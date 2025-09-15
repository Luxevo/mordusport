"use server"

import { revalidatePath } from "next/cache"

export async function joinWaitlist(prevState: any, formData: FormData) {
  // Check if formData is valid
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")

  // Validate required fields
  if (!email) {
    return { error: "Email is required" }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.toString())) {
    return { error: "Please enter a valid email address" }
  }

  // Check if Brevo API key is configured
  const brevoApiKey = process.env.BREVO_API_KEY
  if (!brevoApiKey) {
    console.error("BREVO_API_KEY is not configured")
    return { error: "Service configuration error. Please try again later." }
  }


  try {
    // Prepare contact data for Brevo API
    const contactData = {
      email: email.toString(),
      attributes: {
        SOURCE: 'Website Waitlist',
        SIGNUP_DATE: new Date().toISOString()
      },
      listIds: [19], // Using "Inscription Mordu Sport" list ID
      updateEnabled: true // Allow updating existing contacts
    }

    // Call Brevo API directly
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
        'Accept': 'application/json',
        'User-Agent': 'MorduSport-Website/1.0'
      },
      body: JSON.stringify(contactData)
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("Brevo API error:", {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData,
        requestData: contactData
      })
      
      // Handle specific Brevo errors
      if (response.status === 400) {
        return { error: "Invalid email address. Please check and try again." }
      }
      
      if (response.status === 401) {
        console.error("Brevo API authentication failed")
        return { error: "Service authentication error. Please try again later." }
      }

      if (response.status === 429) {
        return { error: "Too many requests. Please try again in a few minutes." }
      }

      // Generic error for other cases
      return { error: "Failed to join waitlist. Please try again." }
    }

    revalidatePath("/")
    return { success: "Inscrit avec succès à la liste d'attente ! Nous vous contacterons bientôt." }
  } catch (error: any) {
    console.error("Network error:", error)
    return { error: "Network error. Please check your connection and try again." }
  }
}
