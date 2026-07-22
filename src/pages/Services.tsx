import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Services() {
  return (
    <>
      <SEO title="Services | Rastotel" description="IoT, HAM radio, emergency communications, AI & software, mobile and web." canonical="https://rastotel.in/services" />
      <PageHeader title="Services" subtitle="From field sensors to cloud to radio links, we design, build, and support end-to-end systems." />

      <ServiceSection id="iot" title="IoT-based Applications" points={['Edge to cloud telemetry', 'Secure onboarding', 'OTA updates']} />
      <ServiceSection id="ham" title="HAM Radio (VHF/UHF/HF)" points={['Repeater setups', 'Gateways', 'Field kits']} />
      <ServiceSection id="emergency" title="Emergency Communications" points={['Coverage planning', 'Rapid deployment', 'Training & support']} />
      <ServiceSection id="env-energy" title="Environment & Energy" points={['Energy dashboards', 'Env monitoring', 'Alerts & reports']} />
      <ServiceSection id="ai" title="AI & Software" points={['Anomaly detection', 'Predictive models', 'Process automation']} />
      <ServiceSection id="mobile" title="Mobile Apps (Android/iOS)" points={['Native apps', 'Offline-first', 'Secure auth']} />
      <ServiceSection id="web" title="Web Portals & SaaS" points={['Role-based access', 'Audit logs', 'Scalable infra']} />
    </>
  )
}

function ServiceSection({ id, title, points }: { id: string; title: string; points: string[] }) {
  return (
    <Section id={id} title={title}>
      <div className="card p-6">
        <div className="text-xl font-semibold">Solution</div>
        <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </Section>
  )
}
