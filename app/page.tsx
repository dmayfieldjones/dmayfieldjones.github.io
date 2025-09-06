import React from 'react'
import { Mail, Github } from 'lucide-react'
import { Metadata } from 'next'
// Force rebuild - September 6, 2025 - Attempt 2

export const metadata: Metadata = {
  title: '7Sisters - Home',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
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
          <p className="text-base">Central Illinois</p>
          <hr className="my-2 border-gray-100" />
        </div>

        <div className="space-y-2 mb-4">
          <h3>
            <a href="/7Sisters" className="btn btn-zoom hover:text-red-600">
              Great Danes
            </a>
          </h3>
          <h3>
            <a href="/about" className="btn btn-zoom">
              <span className="text-red-600">7</span>Sisters Farm
            </a>
          </h3>
          <h3>
            <a href="/maker" className="btn btn-zoom hover:text-red-600">
              Maker
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

        <hr className="my-2 border-gray-300" />

        <div className="text-center">
          <p>
            <span className="text-red-600">7</span>Sisters Social Media
          </p>
          <iframe
            src="https://www.tiktok.com/embed/@7sistersgreatdanes"
            className="w-full max-w-md mx-auto"
            height="458"
            title="7 Sisters Great Danes TikTok"
          />
        </div>
      </div>
    </div>
  )
}

export default MayfieldJonesProfile
