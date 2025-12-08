import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Dustin Mayfield-Jones',
  description:
    'Get in touch about maker resources, startup support, STEAM education, or collaboration opportunities in Central Illinois.',
  keywords: [
    'contact',
    'maker resources',
    'startup support',
    'entrepreneurship',
    'innovation',
    'STEAM education',
    'Central Illinois',
    'collaboration'
  ],
  openGraph: {
    title: 'Contact | Dustin Mayfield-Jones',
    description: 'Get in touch about maker resources, startup support, or collaboration opportunities.',
    type: 'website',
    url: 'https://mayfieldjones.com/contact',
    siteName: 'Mayfield Jones',
  },
  alternates: {
    canonical: 'https://mayfieldjones.com/contact',
  },
}

export default function Contact() {
  return (
    <div>
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>
          You can reach us at:{' '}
          <a href="mailto:dustin@mayfieldjones.com">dustin@mayfieldjones.com</a>
        </p>
      </div>
    </div>
  )
}
