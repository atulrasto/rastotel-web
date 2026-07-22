import { Container } from './Container'
import { SITE } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div className="py-10 grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold text-sky-700">Rastotel</div>
            <p className="mt-2 text-gray-600">Engineering Wireless Intelligence.</p>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 text-gray-600">
              <li>Phone: <a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>Address: {SITE.address}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="py-4 text-sm text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
