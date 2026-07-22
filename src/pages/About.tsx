import { Link } from 'react-router-dom'
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

      <Section title="Who We Are">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="text-xl font-semibold">The Company</div>
            <p className="mt-2 text-gray-600">
              Rastotel Technologies Pvt Ltd is a deep-tech IoT venture building affordable monitoring
              systems for healthcare and energy — designed, built, and operated in-house.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Incorporated 25 August 2025 (Private Limited Company) · Headquartered in New Delhi, India.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-xl font-semibold">Atul Rastogi</div>
            <p className="text-sm text-gray-500">Founder & Director</p>
            <p className="mt-2 text-gray-600">
              30 years across automation, telecom, and IT. Began in automation at Siemens Automation
              System House (New Delhi) and Sepp RalliOY (Finland), before joining the Department of
              Telecommunications as an Indian Telecommunication Service (ITS) officer, 1994 batch. Later
              served at MTNL, then as Executive Director at TCIL.
            </p>
            <p className="mt-2 text-gray-600">
              B.E. (Electrical); M.E. coursework in Control &amp; Guidance, University of Roorkee (now IIT
              Roorkee); MBA, University of Bedfordshire, UK.
            </p>
            <p className="mt-2 text-gray-600">
              Expert in full-stack development, DevOps, Python, Java, and AI.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">PMP — PMI, USA</span>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">ITIL V3</span>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">Scrum</span>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">Claude Code</span>
            </div>
          </div>
        </div>
      </Section>

      <Section title="What We've Built" subtitle="Real, self-built platforms — not slideware.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-3xl font-extrabold text-sky-700">3</div>
            <div className="mt-1 font-semibold">Industries Served</div>
            <p className="mt-2 text-gray-600">Energy & facilities, healthcare, and backup power — one proven approach, applied across very different needs.</p>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-extrabold text-sky-700">In-House</div>
            <div className="mt-1 font-semibold">Designed & Built</div>
            <p className="mt-2 text-gray-600">Every platform, end to end — designed, built, and operated by our own team, not outsourced.</p>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-extrabold text-sky-700">Private</div>
            <div className="mt-1 font-semibold">By Design</div>
            <p className="mt-2 text-gray-600">Every customer's data is kept strictly separate from every other customer's, as a rule, not an afterthought.</p>
          </div>
        </div>
        <p className="mt-6 text-gray-600">
          See what we've built in detail: <Link className="underline text-sky-600" to="/projects">Projects & Case Studies</Link>.
        </p>
      </Section>

      <Section title="Ecosystem & Support">
        <p className="text-gray-600">
          We're actively engaging with FITT (IIT Delhi) and NASSCOM to help take these platforms further.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">FITT — IIT Delhi</span>
          <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1">NASSCOM</span>
        </div>
      </Section>

      <Section title="How We Work">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="text-xl font-semibold">Reliability first</div>
            <p className="mt-2 text-gray-600">We design for systems that run unattended for years, not demos that work once.</p>
          </div>
          <div className="card p-6">
            <div className="text-xl font-semibold">Safety-conscious</div>
            <p className="mt-2 text-gray-600">Where the stakes are high, we scope carefully and never overstate what a system does.</p>
          </div>
          <div className="card p-6">
            <div className="text-xl font-semibold">Built to last</div>
            <p className="mt-2 text-gray-600">One team, one proven approach — reused and hardened across every new problem we take on.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
