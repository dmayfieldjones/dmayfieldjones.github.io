import React from 'react'
import { Mail, Github } from 'lucide-react'
import { Metadata } from 'next'
// Force rebuild - September 6, 2025 - Attempt 2

export const metadata: Metadata = {
  title: 'Dustin Mayfield-Jones | Innovation, Inspiration & Maker Resources',
  description:
    'Portfolio and resources for entrepreneurs, makers, and innovators in Central Illinois. Makerspace directory, startup software resources, STEAM education initiatives, and personal adventures.',
  keywords: [
    'maker resources',
    'makerspace directory',
    'startup resources',
    'entrepreneurship',
    'innovation',
    'Central Illinois makerspace',
    'Champaign Urbana makerspace',
    'STEAM education',
    'high altitude balloons',
    'maker network',
    'startup software',
    'innovation resources',
    'Dustin Mayfield-Jones',
    'Karen Mayfield-Jones'
  ],
  openGraph: {
    title: 'Dustin Mayfield-Jones | Innovation, Inspiration & Maker Resources',
    description: 'Portfolio and resources for entrepreneurs, makers, and innovators in Central Illinois.',
    type: 'website',
    url: 'https://mayfieldjones.com',
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
    title: 'Dustin Mayfield-Jones | Innovation, Inspiration & Maker Resources',
    description: 'Portfolio and resources for entrepreneurs, makers, and innovators in Central Illinois.',
    images: ['https://mayfieldjones.com/img/logo.png'],
  },
  alternates: {
    canonical: 'https://mayfieldjones.com',
  },
}

const MayfieldJonesProfile = () => {
  return (
    <div>
      <div className="w-full max-w-sm mx-auto text-center">
        <div className="mb-4">
          <a href="http://mayfieldjones.com">
            <img
              src="/img/logo.png"
              alt="Mayfield Jones Logo"
              width={200}
              height="auto"
              loading="lazy"
            />
          </a>
        </div>

        <div className="mb-4">
          <p className="text-lg">Dustin and Karen Mayfield-Jones</p>
          <hr className="my-2 border-gray-100" />
          <p className="text-base">Innovation, Inspiration & Maker Resources</p>
          <p className="text-sm text-gray-600">Central Illinois • Champaign-Urbana Area</p>
          <hr className="my-2 border-gray-100" />
        </div>

        <div className="space-y-2 mb-4">
          <h3>
            <a href="/maker" className="btn btn-zoom hover:text-red-600">
              Maker
            </a>
          </h3>
          <h3>
            <a href="/hab" className="btn btn-zoom hover:text-red-600">
              Our STEAM Education Initiative
            </a>
          </h3>
          <h3>
            <a href="/interests" className="btn btn-zoom hover:text-red-600">
              Interests
            </a>
          </h3>
          <h3>
            <a href="https://7SistersGreatDanes.com" className="btn btn-zoom hover:text-red-600" target="_blank" rel="noopener noreferrer">
              Great Danes
            </a>
          </h3>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="mailto:dustin@mayfieldjones.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="http://github.com/dmayfieldjones"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MayfieldJonesProfile
