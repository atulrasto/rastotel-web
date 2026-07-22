
type Payload = Record<string, string>

export async function sendContact(payload: Payload): Promise<{ ok: boolean; message: string }> {
  const provider = (import.meta.env.VITE_CONTACT_PROVIDER || 'formspree').toLowerCase()

  if (provider === 'formspree') {
    const formId = import.meta.env.VITE_FORMSPREE_ID
    if (!formId) return { ok: false, message: 'Formspree ID missing' }
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, message: 'Message sent successfully' }
    return { ok: false, message: data?.error || 'Failed to send via Formspree' }
  }

  if (provider === 'emailjs') {
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!service || !template || !publicKey) {
      return { ok: false, message: 'EmailJS configuration missing' }
    }
    
    // EmailJS implementation would go here
    // For now, return a placeholder response
    return { ok: false, message: 'EmailJS provider not yet implemented' }
  }

  return { ok: false, message: 'Unknown contact provider' }
}
