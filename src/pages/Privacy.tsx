import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { SITE } from '../config/site'

// Baseline privacy policy template — not reviewed by counsel. Have a
// qualified professional review before relying on this in production,
// especially given the health-data-adjacent nature of some Rastotel work.
const LAST_UPDATED = 'July 22, 2026'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | Rastotel" description="How Rastotel Technologies collects and uses information from this website." canonical="https://rastotel.in/privacy" />
      <PageHeader title="Privacy Policy" subtitle={`Last updated: ${LAST_UPDATED}`} />
      <Section>
        <div className="max-w-3xl space-y-8 text-gray-700">
          <p>
            This policy explains what information {SITE.name} ("Rastotel", "we", "us") collects through{' '}
            {SITE.domain}, and how we use it. It applies only to this website, not to any product or
            platform operated separately by Rastotel or its clients.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Contact details you submit through our contact form — name, email, phone, company, and message.</li>
              <li>Basic usage data (pages visited, browser/device type) if analytics is enabled on this site.</li>
              <li>Verification data collected by our spam-protection provider when you submit the contact form.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">How We Use It</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>To respond to your enquiry and communicate with you about it.</li>
              <li>To protect the contact form from spam and abuse.</li>
              <li>To understand how visitors use this site, so we can improve it.</li>
            </ul>
            <p className="mt-2">We do not sell your information.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Third-Party Services</h2>
            <p className="mt-2">
              This site relies on a small number of third-party services to operate: a form-processing
              provider to deliver contact-form submissions to us, a spam-verification service to protect
              that form, and, where enabled, a web analytics provider. Each operates under its own privacy
              policy and may process data (such as IP address) independently of Rastotel.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
            <p className="mt-2">
              If analytics is enabled on this site, it may use cookies to distinguish visitors and measure
              usage. You can control or disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
            <p className="mt-2">
              We retain contact-form submissions only as long as needed to respond to your enquiry and keep
              reasonable business records, after which they are deleted.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
            <p className="mt-2">
              You can ask us what information we hold about you, or request that we correct or delete it, by
              emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Changes to This Policy</h2>
            <p className="mt-2">
              We may update this policy from time to time. The "last updated" date above reflects the most
              recent revision.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone}.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
