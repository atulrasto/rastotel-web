import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Link } from 'react-router-dom'

type Solution = {
  name: string
  tagline: string
  forWhom: string
  liveUrl: string
  features: string[]
}

const solutions: Solution[] = [
  {
    name: 'IoT Energy Monitoring',
    tagline: 'Live power and environmental visibility, for every site you run.',
    forWhom: 'Facilities, industrial sites, and multi-site operators.',
    liveUrl: 'https://c1.energymonai.com',
    features: [
      'Designed for quick setup — new sites can be live in hours, not weeks',
      'Live dashboards with historical trends',
      'Automated alerts and scheduled reports',
      'Each customer gets a fully private, isolated view of their own data',
    ],
  },
  {
    name: 'ICU Vitals Monitoring',
    tagline: 'A supplementary bedside-vitals display for hospital wards.',
    forWhom: 'Hospitals and ICU wards adding centralized visibility without replacing certified equipment.',
    liveUrl: 'https://icu1.energymonai.com',
    features: [
      'Mirrors bedside monitor readings — never a replacement for its alarms',
      'Per-parameter threshold alerts',
      'A missing reading is treated as seriously as an abnormal one',
      'Strict, hospital-by-hospital data privacy',
    ],
  },
  {
    name: 'Battery & Inverter Monitoring',
    tagline: 'Advance warning for backup power systems, before they fail.',
    forWhom: 'Sites running battery banks and inverters that need to know about failures before they happen.',
    liveUrl: 'https://batmon.energymonai.com',
    features: [
      'Automatic detection of mains outages and discharge cycles',
      'Early warning on over/under-voltage conditions',
      'Historical reporting per site for maintenance planning',
      'Each customer’s data is kept fully private',
    ],
  },
]

export default function Solutions() {
  return (
    <>
      <SEO title="Solutions | Rastotel" description="Productized IoT monitoring platforms for energy, healthcare, and backup power." canonical="https://rastotel.in/solutions" />
      <PageHeader title="Solutions" subtitle="Productized platforms for energy, healthcare, and backup-power monitoring — built on one proven IoT architecture." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.name} className="card p-6 flex flex-col">
              <div className="text-lg font-semibold">{s.name}</div>
              <p className="mt-2 text-gray-600">{s.tagline}</p>
              <p className="mt-3 text-sm text-gray-500">{s.forWhom}</p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1 flex-1">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={s.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline text-sm mt-4 self-start"
              >
                View Live →
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-600">
          Want the engineering detail behind these? See the{' '}
          <Link className="underline text-sky-600" to="/projects">
            full case studies
          </Link>
          .
        </p>
      </Section>
    </>
  )
}
