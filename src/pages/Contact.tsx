// src/pages/Contact.tsx
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { SEO } from "../lib/seo"
import { PageHeader } from "../components/layout/PageHeader"
import { Section } from "../components/layout/Section"
import { Input } from "../components/ui/Input"
import { Textarea } from "../components/ui/Textarea"
import { Select } from "../components/ui/Select"
import { Button } from "../components/ui/Button"
import { SITE, WHATSAPP_LINK } from "../config/site"

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
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6">
              <div className="text-lg font-semibold">Contact Details</div>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <a href={`tel:${SITE.phone}`} className="font-medium text-gray-900">{SITE.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href={`mailto:${SITE.email}`} className="font-medium text-gray-900">{SITE.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sky-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-medium text-gray-900">{SITE.address}</div>
                  </div>
                </div>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn mt-6 w-full justify-center gap-2 bg-green-500 text-white hover:bg-green-600"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Response Time</div>
              <p className="mt-2 text-gray-600">We typically respond within one business day.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="card p-6 md:p-8 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
                <Input {...register("name")} />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
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

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Topic <span className="text-red-500">*</span></label>
                <Select defaultValue="" {...register("topic")}>
                  <option value="">Select a topic</option>
                  <option value="General">General</option>
                  <option value="IoT Energy Monitoring (energymonai)">IoT Energy Monitoring (energymonai)</option>
                  <option value="ICU Vitals Monitoring (icumonai)">ICU Vitals Monitoring (icumonai)</option>
                  <option value="Battery & Inverter Monitoring (batmonai)">Battery & Inverter Monitoring (batmonai)</option>
                  <option value="IoT">Other IoT</option>
                  <option value="Emergency Comms">Emergency Comms</option>
                  <option value="AI & Software">AI & Software</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="Web Portals">Web Portals</option>
                </Select>
                {errors.topic && <p className="text-sm text-red-600 mt-1">{errors.topic.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Message <span className="text-red-500">*</span></label>
                <Textarea rows={5} {...register("message")} />
                {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <Button disabled={isSubmitting} type="submit" className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {toast && (
          <div className="fixed bottom-4 right-4 rounded-xl bg-gray-900 text-white px-4 py-3 shadow-lg">
            {toast}
          </div>
        )}
      </Section>
    </>
  )
}
