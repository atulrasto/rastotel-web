import { useParams } from 'react-router-dom'
import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'

export default function Post() {
  const { slug } = useParams()
  return (
    <>
      <SEO title={`${slug} | Rastotel`} description="Blog post" canonical={`https://rastotel.in/blog/${slug}`} />
      <PageHeader title="Blog Post" subtitle={slug} />
      <Section>
        <div className="prose max-w-none">
          <p>Placeholder content for <strong>{slug}</strong>. Replace with MD/MDX content or CMS later.</p>
        </div>
      </Section>
    </>
  )
}
