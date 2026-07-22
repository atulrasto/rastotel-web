import { Container } from './Container'

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="bg-gradient-to-r from-sky-600 to-sky-500 text-white">
      <Container>
        <div className="py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
          {subtitle && <p className="mt-3 text-white/90 max-w-2xl">{subtitle}</p>}
        </div>
      </Container>
    </header>
  )
}
