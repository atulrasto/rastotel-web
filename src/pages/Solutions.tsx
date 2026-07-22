import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Solutions() {
  return (
    <>
      <SEO title="Solutions | Rastotel" description="Products and solutions portfolio." canonical="https://rastotel.in/solutions" />
      <PageHeader title="Solutions" subtitle="Explore our IoT devices, software suites, and radio accessories." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card p-6">
              <div className="h-32 bg-gray-100 rounded-xl" />
              <div className="mt-3 text-lg font-semibold">Solution {i + 1}</div>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Key feature</li>
                <li>Spec placeholder</li>
                <li><a className="underline" href="#">Download PDF</a></li>
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
