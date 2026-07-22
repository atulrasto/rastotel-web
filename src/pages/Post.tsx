import { Link, useParams } from 'react-router-dom'
import { SEO } from '../lib/seo'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { getPostBySlug } from '../lib/posts'

export default function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <>
        <SEO title="Post Not Found | Rastotel" description="This blog post doesn't exist." />
        <PageHeader title="Post Not Found" subtitle="This post doesn't exist or has moved." />
        <Section>
          <Link className="text-sky-600 underline" to="/blog">Back to Blog</Link>
        </Section>
      </>
    )
  }

  return (
    <>
      <SEO title={`${post.title} | Rastotel`} description={post.excerpt} canonical={`https://rastotel.in/blog/${post.slug}`} />
      <PageHeader title={post.title} subtitle={post.date} />
      <Section>
        <div className="max-w-3xl space-y-8 text-gray-700">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>}
              {section.paragraphs.map((p, j) => (
                <p key={j} className="mt-2">{p}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link className="text-sky-600 underline" to="/blog">← Back to Blog</Link>
        </div>
      </Section>
    </>
  )
}
