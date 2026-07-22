import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | Rastotel" description="Terms of service." canonical="https://rastotel.in/terms" />
      <PageHeader title="Terms & Conditions" />
      <Section>
        <div className="prose max-w-none">
          <p>This is a placeholder terms & conditions page. Replace with your legal text.</p>
        </div>
      </Section>
    </>
  )
}

