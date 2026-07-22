import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | Rastotel" description="Privacy policy." canonical="https://rastotel.in/privacy" />
      <PageHeader title="Privacy Policy" />
      <Section>
        <div className="prose max-w-none">
          <p>This is a placeholder privacy policy. Replace with your legal text.</p>
        </div>
      </Section>
    </>
  )
}
