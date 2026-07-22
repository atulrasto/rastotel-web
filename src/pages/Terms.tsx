import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { SITE } from '../config/site'

// Baseline terms template — not reviewed by counsel. Have a qualified
// professional review before relying on this in production.
const LAST_UPDATED = 'July 22, 2026'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | Rastotel" description="Terms of use for the Rastotel Technologies website." canonical="https://rastotel.in/terms" />
      <PageHeader title="Terms & Conditions" subtitle={`Last updated: ${LAST_UPDATED}`} />
      <Section>
        <div className="max-w-3xl space-y-8 text-gray-700">
          <p>
            These terms apply to your use of {SITE.domain} (this "Site"), operated by {SITE.name}. By
            using this Site, you agree to them. These terms cover this website only — not any product
            or platform operated separately by Rastotel or its clients.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Use of This Site</h2>
            <p className="mt-2">
              This Site is provided for general information about Rastotel's services and projects. You
              may not use it in any way that could damage, disable, or impair it, or interfere with anyone
              else's use of it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Intellectual Property</h2>
            <p className="mt-2">
              All content on this Site — text, graphics, logos, and case-study material — belongs to
              {' '}{SITE.name} unless otherwise noted, and may not be reproduced without our permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">No Warranty</h2>
            <p className="mt-2">
              This Site is provided "as is." We make reasonable efforts to keep it accurate and available,
              but we don't guarantee it will be error-free or uninterrupted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            <p className="mt-2">
              To the extent permitted by law, {SITE.name} is not liable for any loss or damage arising from
              your use of this Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Third-Party Links</h2>
            <p className="mt-2">
              This Site may link to third-party websites. We are not responsible for their content or
              practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of India, and any disputes are subject to the
              jurisdiction of the courts of New Delhi, India.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Changes to These Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. The "last updated" date above reflects the most
              recent revision.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
