"use server"

import { createServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function joinWaitlist(prevState: any, formData: FormData) {
  // Check if formData is valid
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const name = formData.get("name")
  const age18 = formData.get("age18") === "on" // Checkbox returns "on" when checked

  // Validate required fields
  if (!email) {
    return { error: "Email is required" }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.toString())) {
    return { error: "Please enter a valid email address" }
  }

  const supabase = createServerClient()

  try {
    const { error } = await supabase.from("waitlist").insert([
      {
        email: email.toString(),
        name: name?.toString() || null,
        age18: age18,
      },
    ])

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return { error: "This email is already on the waitlist" }
      }
      console.error("Waitlist error:", error)
      return { error: "Failed to join waitlist. Please try again." }
    }

    revalidatePath("/")
    return { success: "Successfully joined the waitlist! We'll be in touch soon." }
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}
