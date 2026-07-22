import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

type CaseStudy = {
  slug: string
  title: string
  industry: string
  liveUrl: string
  need: string
  advantages: string[]
  suitableFor: string
  outcomes: string[]
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'energymonai',
    title: 'energymonai — IoT Energy Monitoring',
    industry: 'Energy & Facilities',
    liveUrl: 'https://c1.energymonai.com',
    need: 'Facility managers often only discover power and environmental problems after a bill spikes or equipment fails. energymonai gives them live, continuous visibility instead of periodic manual readings.',
    advantages: [
      'Live dashboards replace manual meter readings and guesswork',
      'Automated alerts catch problems as they happen, not at month-end',
      'Scheduled reports save facility teams hours of manual work',
      'Each site or customer gets a fully private, isolated view of their own data',
    ],
    suitableFor: 'Facility managers, industrial sites, and multi-site operators who need centralized power and environment monitoring across locations.',
    outcomes: [
      'A complete, working platform, demonstrable today',
      'Designed so new sites can be onboarded in hours, not weeks',
      'Alerts and reports run automatically with no manual data pulls',
    ],
  },
  {
    slug: 'icumonai',
    title: 'icumonai — ICU Vitals Monitoring',
    industry: 'Healthcare',
    liveUrl: 'https://icu1.energymonai.com',
    need: 'Ward staff and administrators often can’t see bedside vitals except at the bedside itself. icumonai gives hospitals centralized, ward-wide visibility — built deliberately as a supplement to certified bedside monitors, never a replacement for their alarms.',
    advantages: [
      'Centralized visibility across beds and wards, without touching certified equipment',
      'Threshold alerts mirror the bedside monitor for an extra layer of awareness',
      'If a feed goes silent, staff are alerted immediately — a missing reading is treated as seriously as an abnormal one',
      'Each hospital’s data is kept strictly private and isolated from every other customer',
    ],
    suitableFor: 'Hospitals and ICU wards that want centralized vitals visibility for staff and administrators, alongside — never instead of — certified bedside monitoring.',
    outcomes: [
      'Built and positioned strictly as a secondary display, by design',
      'Patient data handled under strict access controls',
      'Designed for ward reality: staleness and downtime are treated as safety events',
    ],
  },
  {
    slug: 'batmonai',
    title: 'batmonai — Battery & Inverter Monitoring',
    industry: 'Backup Power & Critical Infrastructure',
    liveUrl: 'https://batmon.energymonai.com',
    need: 'Battery banks and inverters usually only get attention after they’ve already failed during an outage. batmonai gives site owners advance warning and a historical record instead of surprises.',
    advantages: [
      'Automatic detection of mains outages and battery discharge events, in real time',
      'Early warning on over/under-voltage conditions before they cause damage',
      'Historical reporting per battery and per site for maintenance planning',
      'One customer’s data is never visible to another',
    ],
    suitableFor: 'Sites running backup battery banks and inverters — telecom, critical facilities, and any operation that can’t afford silent power failures.',
    outcomes: [
      'Built to automatically flag outages and discharge cycles as they happen',
      'Gives maintenance teams a historical record instead of relying on memory',
      'Third product built on the same proven monitoring approach as energymonai and icumonai',
    ],
  },
]

export default function Projects() {
  return (
    <>
      <SEO title="Projects | Rastotel" description="Real case studies: monitoring platforms for energy, healthcare, and backup power." canonical="https://rastotel.in/projects" />
      <PageHeader title="Projects & Case Studies" subtitle="Need • Advantages • Who It's For • Outcomes" />

      <Section title="One proven approach, three industries" subtitle="Each platform below is a real, working system, built to turn scattered, after-the-fact information into private, always-on visibility — applied to energy, healthcare, and backup power.">
        <div className="space-y-10">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </Section>
    </>
  )
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="card p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-700 bg-sky-50 rounded-full px-3 py-1">
            {caseStudy.industry}
          </span>
        </div>
        <a
          href={caseStudy.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline text-sm"
        >
          View Live →
        </a>
      </div>

      <div className="mt-4">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">The Need</div>
        <p className="mt-1 text-gray-700">{caseStudy.need}</p>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Advantages</div>
          <ul className="mt-1 list-disc list-inside text-gray-700 space-y-1">
            {caseStudy.advantages.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Outcomes</div>
          <ul className="mt-1 list-disc list-inside text-gray-700 space-y-1">
            {caseStudy.outcomes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Suitable For</div>
        <p className="mt-1 text-gray-700">{caseStudy.suitableFor}</p>
      </div>
    </article>
  )
}
