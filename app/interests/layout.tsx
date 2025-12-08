import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interests | Adventures & Photography',
  description:
    'Technical scuba diving, aerial photography, caving, and other adventures. Explore dive sites around the world, aerial thermal imaging, and landscape photography.',
  keywords: [
    'technical scuba diving',
    'cave diving',
    'cenote diving',
    'aerial photography',
    'thermal imaging',
    'caving',
    'adventure photography',
    'landscape photography',
    'night sky photography',
    'dive sites',
    'scuba diving map',
    'underwater photography'
  ],
  openGraph: {
    title: 'Interests | Adventures & Photography',
    description: 'Technical scuba diving, aerial photography, caving, and other adventures.',
    type: 'website',
    url: 'https://mayfieldjones.com/interests',
    siteName: 'Mayfield Jones',
    images: [
      {
        url: 'https://mayfieldjones.com/img/logo.png',
        width: 200,
        height: 200,
        alt: 'Mayfield Jones Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interests | Adventures & Photography',
    description: 'Technical scuba diving, aerial photography, caving, and other adventures.',
    images: ['https://mayfieldjones.com/img/logo.png'],
  },
  alternates: {
    canonical: 'https://mayfieldjones.com/interests',
  },
}

export default function InterestsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

