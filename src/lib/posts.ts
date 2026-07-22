export type PostSection = {
  heading?: string
  paragraphs: string[]
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: 'remote-icu-monitoring-rural-india',
    title: 'Why Remote ICU Monitoring Matters for Rural India',
    excerpt:
      'India has 2.3–3.6 ICU beds per 100,000 people, and intensivists are scarcest exactly where they are needed most. Here is why we built icumonai as a supplement, not a replacement.',
    date: '2026-07-01',
    sections: [
      {
        heading: 'The problem with a bedside-only view',
        paragraphs: [
          'A bedside monitor shows exactly what is happening right now — and nothing else. The moment a reading scrolls off screen, it is gone. There is no history to look back on, no way to see a pattern forming over hours or days.',
          'That is fine when a specialist is standing at the bedside around the clock. It is a serious gap everywhere else.',
        ],
      },
      {
        heading: "Distance shouldn't decide outcomes",
        paragraphs: [
          'Intensivists are scarce in India, and scarcest in exactly the places that need them most: rural and semi-urban hospitals, often hundreds of kilometres from the nearest specialist.',
          'Without a history to review, deterioration patterns and recurring issues — a dip in oxygen levels every night, for example — can go unnoticed simply because no one was watching at the right moment. And without a way to bring a specialist in remotely, a rural hospital is left making critical decisions alone.',
        ],
      },
      {
        heading: "Why we didn't build a replacement",
        paragraphs: [
          'It would be tempting for a small team to build a "smarter" monitor — one that scores patients, predicts outcomes, or suggests interventions. We deliberately did not.',
          'icumonai captures what a bedside monitor already shows, stores it, and makes trends visible to a specialist anywhere — nothing more. It mirrors the monitor\'s own thresholds and never substitutes its judgment for the certified equipment already at the bedside. A missing reading is treated as seriously as an abnormal one, because in this kind of system, silence is a warning sign too.',
          'For a healthcare product, that restraint is the responsible choice, not a missing feature. The goal is to widen access to specialist oversight, not to replace the equipment or the clinicians already doing that job.',
        ],
      },
    ],
  },
  {
    slug: 'one-proven-approach-three-industries',
    title: 'One Proven Approach, Three Industries',
    excerpt:
      'Energy monitoring, ICU vitals, and backup power do not look alike on the surface. We built all three the same way — and that consistency is the point.',
    date: '2026-06-15',
    sections: [
      {
        heading: "Why we didn't start from scratch each time",
        paragraphs: [
          'It would have been easy to treat energymonai, icumonai, and batmonai as three unrelated projects. Instead, each one was built on the same underlying discipline: design for systems that run unattended for years, keep every customer\'s data strictly private by default, and never overstate what a system does — especially where the stakes are high.',
          'That consistency is not an accident. It is a deliberate choice to reuse what already works instead of reinventing it for every new problem.',
        ],
      },
      {
        heading: 'What stays the same',
        paragraphs: [
          'Across all three platforms: continuous visibility beats periodic manual checks, automatic detection beats waiting for something to fail, and every customer\'s data is isolated from every other customer\'s as a rule, not an afterthought.',
        ],
      },
      {
        heading: 'What changes',
        paragraphs: [
          'The stakes and the domain expertise are different in each case. A facility manager cares about cost and efficiency. A hospital cares about patient safety and staying strictly within the bounds of certified equipment. A site running backup power cares about knowing about a failure before it becomes an outage.',
          'Meeting each of those bars properly takes real domain understanding — but the underlying engineering discipline behind all three is the same one we keep refining with every platform we build.',
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string | undefined): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
