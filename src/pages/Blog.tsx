import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Link } from 'react-router-dom'

const posts = [
  { slug: 'mission-critical-iot', title: 'Mission-Critical IoT: Design Patterns', excerpt: 'Architecting resilient telemetry and control.', date: '2025-08-01' },
  { slug: 'radio-for-resilience', title: 'Radio for Resilience: VHF/UHF/HF', excerpt: 'HAM and professional networks for emergencies.', date: '2025-07-20' },
]

export default function Blog() {
  return (
    <>
      <SEO title="Blog | Rastotel" description="Insights and updates from Rastotel." canonical="https://rastotel.in/blog" />
      <PageHeader title="Insights & News" subtitle="Tech notes, patterns, and updates." />
      <Section>
        <div className="space-y-6">
          {posts.map(p => (
            <article key={p.slug} className="p-6 rounded-2xl bg-white shadow-soft">
              <div className="text-gray-500 text-sm">{p.date}</div>
              <h3 className="text-2xl font-bold"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p className="text-gray-600">{p.excerpt}</p>
              <Link className="inline-block mt-2 text-sky-600" to={`/blog/${p.slug}`}>Read more →</Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
