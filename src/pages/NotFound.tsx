import { Link } from 'react-router-dom'
import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Rastotel" description="This page doesn't exist." />
      <PageHeader title="Page Not Found" subtitle="The page you're looking for doesn't exist or has moved." />
      <Section>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </Section>
    </>
  )
}
