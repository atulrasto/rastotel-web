import { Link } from 'react-router-dom'
import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

type CSRProject = {
  name: string
  category: string
  need: string
  approach: string
  scheduleVII: string
  suitableFor: string
}

const projects: CSRProject[] = [
  {
    name: 'energymonai',
    category: 'Environmental Sustainability',
    need: 'Institutions and public facilities often only discover energy waste after the bill arrives — by then, the waste has already happened.',
    approach:
      'energymonai alerts facility staff before an appliance\'s consumption spikes, catching waste as it starts rather than after the fact. Less wasted energy means a smaller carbon footprint, supporting an organization\'s broader sustainability and carbon-reduction goals.',
    scheduleVII: 'Environmental sustainability, ecological balance, and conservation of natural resources.',
    suitableFor: 'Schools, community centers, hospitals, and other public-facing facilities a company wants to support.',
  },
  {
    name: 'icumonai',
    category: 'Healthcare Access',
    need: 'Rural clinics and home-care setups often have no way to keep a specialist informed of a patient\'s vitals between visits — access to specialist oversight shouldn\'t depend on distance.',
    approach:
      'icumonai extends vitals monitoring, and the reach of a supervising doctor, to rural and home-care settings — positioned strictly as a supplementary display alongside any certified equipment already in use, never a replacement for it.',
    scheduleVII: 'Promoting health care, including preventive health care, and rural development.',
    suitableFor: 'Rural hospitals, primary health centers, and home-care programs supported by a CSR initiative.',
  },
]

export default function CSR() {
  return (
    <>
      <SEO title="CSR | Rastotel" description="CSR partnership opportunities in energy efficiency and rural healthcare access." canonical="https://rastotel.in/csr" />
      <PageHeader title="CSR Initiatives" subtitle="Partner with us on CSR-eligible projects in energy efficiency and rural healthcare access." />

      <Section title="Why Partner With Us" subtitle="Our platforms are built for exactly the kind of ongoing, measurable impact CSR programs look for.">
        <p className="text-gray-600 max-w-3xl">
          Rastotel's monitoring platforms can be deployed as CSR-funded projects under Schedule VII of the
          Companies Act, 2013 — giving a sponsoring organization a concrete, ongoing initiative rather than
          a one-time contribution.
        </p>
      </Section>

      <Section title="Project Opportunities">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card p-6 flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xl font-semibold">{p.name}</div>
                <span className="text-xs font-semibold uppercase tracking-wide text-sky-700 bg-sky-50 rounded-full px-3 py-1">
                  {p.category}
                </span>
              </div>
              <p className="mt-3 text-gray-600">{p.need}</p>
              <p className="mt-3 text-gray-600">{p.approach}</p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Schedule VII Fit</div>
                <p className="mt-1 text-gray-700">{p.scheduleVII}</p>
              </div>
              <div className="mt-3">
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Suitable For</div>
                <p className="mt-1 text-gray-700">{p.suitableFor}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Get in Touch">
        <p className="text-gray-600 max-w-2xl">
          If your organization is looking to fund or co-run a CSR project in either of these areas,{' '}
          <Link className="underline text-sky-600" to="/contact">get in touch</Link> and we can scope a
          project together.
        </p>
      </Section>
    </>
  )
}
