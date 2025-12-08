import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Dustin & Karen Mayfield-Jones',
  description:
    'Learn about Dustin and Karen Mayfield-Jones: supporting entrepreneurship, innovation, and maker communities in Central Illinois. Background in scientific research, startup incubation, and STEAM education.',
  keywords: [
    'Dustin Mayfield-Jones',
    'Karen Mayfield-Jones',
    'entrepreneurship support',
    'startup incubation',
    'maker community',
    'STEAM education',
    'scientific research',
    'Central Illinois',
    'innovation',
    'HAB.education'
  ],
  openGraph: {
    title: 'About | Dustin & Karen Mayfield-Jones',
    description: 'Supporting entrepreneurship, innovation, and maker communities in Central Illinois.',
    type: 'website',
    url: 'https://mayfieldjones.com/about',
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
    title: 'About | Dustin & Karen Mayfield-Jones',
    description: 'Supporting entrepreneurship, innovation, and maker communities in Central Illinois.',
    images: ['https://mayfieldjones.com/img/logo.png'],
  },
  alternates: {
    canonical: 'https://mayfieldjones.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
