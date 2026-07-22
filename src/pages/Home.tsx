import { SEO } from '../lib/seo'
import { Section } from '../components/layout/Section'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'

const TAGLINE = "Engineering Wireless Intelligence."
const SUBLINE = "IT & Telecom • IoT • HAM (VHF/UHF/HF) • Emergency Comms • AI/Apps • Energy & Environment"

export default function Home() {
  return (
    <>
      <SEO title="Rastotel Technologies | IT, IoT, HAM & Emergency Communications" description="Engineering Wireless Intelligence." canonical="https://rastotel.in/" />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-600 to-sky-500"></div>
        <Container>
          <div className="py-20 md:py-28 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold">{TAGLINE}</h1>
            <p className="mt-4 text-white/90 max-w-3xl">{SUBLINE}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services"><Button>Explore Services</Button></Link>
              <Link to="/contact"><Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-sky-700">Talk to Us</Button></Link>
            </div>
          </div>
        </Container>
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] h-48 rounded-full blur-3xl opacity-50 bg-white/20"></div>
      </header>

      <Section title="What We Do" subtitle="End-to-end IT & Telecom solutions for mission-critical operations.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="IoT-based Applications" desc="Sensors, telemetry, device onboarding, secure cloud pipelines." />
          <Card title="HAM Radio (VHF/UHF/HF)" desc="Gateways, repeaters, resilient voice/data links." />
          <Card title="Emergency Communications" desc="DMR/TETRA, SAT backup, field-ready kits." />
          <Card title="AI & Software" desc="Analytics, anomaly detection, intelligent agents." />
          <Card title="Mobile Apps" desc="Android & iOS apps for field ops and dashboards." />
          <Card title="Web Portals & SaaS" desc="Secure portals, multi-tenant SaaS, workflows." />
        </div>
      </Section>

      <Section title="Platforms We Operate" subtitle="Not slideware — three working platforms, built end-to-end in-house, that you can try today.">
        <div className="grid md:grid-cols-3 gap-6">
          <PlatformCard name="energymonai" industry="Energy & Facilities" desc="Live energy and environmental monitoring across every site you run." liveUrl="https://c1.energymonai.com" />
          <PlatformCard name="icumonai" industry="Healthcare" desc="ICU vitals monitoring as a safe, supplementary display alongside certified bedside monitors." liveUrl="https://icu1.energymonai.com" />
          <PlatformCard name="batmonai" industry="Backup Power" desc="Battery and inverter monitoring with automatic mains-outage and discharge detection." liveUrl="https://batmon.energymonai.com" />
        </div>
        <div className="mt-6">
          <Link className="text-sky-600 underline" to="/projects">See the full case studies →</Link>
        </div>
      </Section>

      <Section title="Ready to Build?">
        <div className="flex flex-wrap gap-3">
          <Link to="/contact"><Button>Schedule a discovery call</Button></Link>
          <a className="btn btn-outline" href="https://wa.me/919971385555" target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
      </Section>
    </>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card p-6">
      <div className="text-xl font-semibold">{title}</div>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  )
}

function PlatformCard({ name, industry, desc, liveUrl }: { name: string; industry: string; desc: string; liveUrl: string }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">{name}</div>
        <span className="text-xs font-semibold uppercase tracking-wide text-sky-700 bg-sky-50 rounded-full px-3 py-1">
          {industry}
        </span>
      </div>
      <p className="mt-2 text-gray-600">{desc}</p>
      <a href={liveUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sky-600 underline text-sm">
        View Live →
      </a>
    </div>
  )
}
