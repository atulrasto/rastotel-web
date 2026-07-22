import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function About() {
  return (
    <>
      <SEO title="About | Rastotel" description="About Rastotel Technologies Pvt Ltd" canonical="https://rastotel.in/about" />
      <PageHeader title="About Us" subtitle="Rastotel builds reliable IT & Telecom systems for a safer, smarter, greener world." />
      <Section title="Vision & Mission">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="text-xl font-semibold">Vision</div>
            <p className="mt-2 text-gray-600">Engineer resilient connectivity across people, places, and devices.</p>
          </div>
          <div className="card p-6">
            <div className="text-xl font-semibold">Mission</div>
            <p className="mt-2 text-gray-600">Deliver radio + IoT + AI solutions to solve challenges in environment, energy, and communications.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
