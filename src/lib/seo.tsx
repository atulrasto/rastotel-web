
import { Helmet } from 'react-helmet-async'

type Props = { title?: string; description?: string; canonical?: string }
export function SEO({ title, description, canonical }: Props) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}
