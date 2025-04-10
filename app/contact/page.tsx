import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7Sisters - Contact',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
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
