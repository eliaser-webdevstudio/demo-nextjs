"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  priority: z.enum(["low", "normal", "high"]).default("normal"),
  contactMethod: z.enum(["email", "phone"]).default("email"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  formData: FormData,
): Promise<ActionResult> {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || undefined,
      subject: formData.get("subject") || undefined,
      priority: formData.get("priority") || "normal",
      contactMethod: formData.get("contactMethod") || "email",
      message: formData.get("message"),
    };

    const validated = contactFormSchema.safeParse(rawData);

    if (!validated.success) {
      const errors: Record<string, string[]> = {};
      validated.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!errors[path]) errors[path] = [];
        errors[path].push(issue.message);
      });

      return {
        success: false,
        message: "Please fix the errors below.",
        errors,
      };
    }

    // Send to Formspree (existing integration)
    const response = await fetch("https://formspree.io/f/EliaserWebDevStudio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: validated.data.name,
        email: validated.data.email,
        phone: validated.data.phone,
        subject: validated.data.subject,
        priority: validated.data.priority,
        contactMethod: validated.data.contactMethod,
        message: validated.data.message,
        _replyto: validated.data.email,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    revalidatePath("/contact");

    return {
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
