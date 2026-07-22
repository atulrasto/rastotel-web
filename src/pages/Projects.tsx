import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Projects() {
  return (
    <>
      <SEO title="Projects | Rastotel" description="Case studies and showcases." canonical="https://rastotel.in/projects" />
      <PageHeader title="Projects & Case Studies" subtitle="Context • Challenge • Solution • Architecture • Outcomes" />
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card p-6">
              <div className="text-xl font-semibold">Case Study {i + 1}</div>
              <p className="mt-2 text-gray-600">Brief description and measurable outcomes (KPIs).</p>
              <div className="mt-3 h-28 bg-gray-100 rounded-xl" />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
