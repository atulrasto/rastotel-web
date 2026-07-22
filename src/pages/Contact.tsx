// src/pages/Contact.tsx
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { SEO } from "../lib/seo"
import { PageHeader } from "../components/layout/PageHeader"
import { Section } from "../components/layout/Section"
import { Input } from "../components/ui/Input"
import { Textarea } from "../components/ui/Textarea"
import { Select } from "../components/ui/Select"
import { Button } from "../components/ui/Button"

// Read from .env (Vite exposes only VITE_* vars)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const CONTACT_PROVIDER = (import.meta.env.VITE_CONTACT_PROVIDER || "formspree").toLowerCase()

// Load the reCAPTCHA v3 script once
function loadRecaptcha() {
  return new Promise<void>((resolve) => {
    const id = "recaptcha-v3"
    if (document.getElementById(id)) return resolve()
    const s = document.createElement("script")
    s.id = id
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`
    s.async = true
    s.onload = () => resolve()
    document.head.appendChild(s)
  })
}

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional().default(""),
  company: z.string().optional().default(""),
  topic: z.string().min(1, "Please select a topic."),
  message: z.string().min(10, "Please enter at least 10 characters."),
})
type FormValues = z.infer<typeof schema>

async function sendContact(values: Record<string, string>) {
  // Only implement provider "formspree" here (others could be added)
  if (CONTACT_PROVIDER !== "formspree") {
    return { ok: true, message: "Demo: message captured." }
  }

  if (!FORMSPREE_ID) {
    return { ok: true, message: "Demo: message captured (add VITE_FORMSPREE_ID in .env to really send)." }
  }
  if (!RECAPTCHA_SITE_KEY) {
    return { ok: false, message: "Missing VITE_RECAPTCHA_SITE_KEY in .env" }
  }

  // 1) Ensure the reCAPTCHA script is loaded
  await loadRecaptcha()

  // 2) Execute reCAPTCHA v3 to get a token (action name can be any string, e.g., "submit" or "contact")
  const grecaptcha = (window as any).grecaptcha
  if (!grecaptcha?.execute) {
    return { ok: false, message: "reCAPTCHA not available. Please try again." }
  }
  const token: string = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" })

  // 3) Send to Formspree with the token as "g-recaptcha-response"
  const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, "g-recaptcha-response": token }),
  })

  let msg = "Message sent successfully."
  try {
    const data = await res.json()
    if (!res.ok) msg = (data && (data.error || data.message)) || "Failed to send. Check your Formspree settings."
  } catch {
    if (!res.ok) msg = "Failed to send."
  }
  return { ok: res.ok, message: msg }
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const [toast, setToast] = useState<string | null>(null)

  async function onSubmit(values: FormValues) {
    const res = await sendContact(values as any)
    setToast(res.message)
    if (res.ok) reset()
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <>
      <SEO title="Contact | Rastotel" description="Get in touch with Rastotel Technologies." canonical="https://rastotel.in/contact" />
      <PageHeader title="Contact Us" subtitle="Let's discuss your project or idea." />
      <Section>
        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <Input {...register("name")} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input type="email" {...register("email")} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <Input {...register("phone")} />
          </div>
          <div>
            <label className="block text-sm font-medium">Company</label>
            <Input {...register("company")} />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Topic</label>
            <Select defaultValue="" {...register("topic")}>
              <option value="">Select a topic</option>
              <option value="General">General</option>
              <option value="IoT">IoT</option>
              <option value="Emergency Comms">Emergency Comms</option>
              <option value="AI & Software">AI & Software</option>
              <option value="Mobile Apps">Mobile Apps</option>
              <option value="Web Portals">Web Portals</option>
            </Select>
            {errors.topic && <p className="text-sm text-red-600 mt-1">{errors.topic.message}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Message</label>
            <Textarea {...register("message")} />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-3 md:col-span-2">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <a
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100"
              href="https://wa.me/919971385555"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </form>

        {toast && (
          <div className="fixed bottom-4 right-4 rounded-xl bg-gray-900 text-white px-4 py-3 shadow-lg">
            {toast}
          </div>
        )}
      </Section>
    </>
  )
}
