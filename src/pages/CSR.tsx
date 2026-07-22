import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function CSR() {
  return (
    <>
      <SEO title="CSR | Rastotel" description="Environment & energy conservation initiatives." canonical="https://rastotel.in/csr" />
      <PageHeader title="CSR & Environment" subtitle="Reducing environmental impact and improving energy efficiency." />
      <Section>
        <div className="grid grid-cols-3 gap-6">
          <Metric value="25%" label="Avg. Energy Saved" />
          <Metric value="120+" label="Sensors Deployed" />
          <Metric value="99.9%" label="Uptime" />
        </div>
      </Section>
    </>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold text-sky-700">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

