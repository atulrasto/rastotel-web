import { Container } from './Container'

type Props = { id?: string; title?: string; subtitle?: string; children: React.ReactNode }
export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="section">
      <Container>
        {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}
