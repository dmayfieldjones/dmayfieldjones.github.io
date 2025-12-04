'use client'

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import PhotoCarousel from '../hab/components/PhotoCarousel'
import '../hab/components/hab-styles.css'

declare global {
  interface Window {
    FB: any
    fbAsyncInit: () => void
  }
}

const DiveMap = dynamic(() => import('./components/DiveMap'), {
  ssr: false,
  loading: () => <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>Loading dive site map...</div>
})

export default function InterestsPage() {
  // Initialize Facebook SDK and parse XFBML
  useEffect(() => {
    const parseFBVideo = () => {
      if (typeof window !== 'undefined' && (window as any).FB) {
        (window as any).FB.XFBML.parse()
      } else {
        // Keep checking until FB is available
        setTimeout(parseFBVideo, 200)
      }
    }
    
    // Start checking after component mounts
    const timer = setTimeout(parseFBVideo, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Technical Scuba gallery images
  const scubaImages = [
    {
      src: '/img/dustindiving.jpg',
      alt: 'Dustin diving',
      caption: 'Technical scuba diving in cenotes'
    },
    {
      src: '/img/karentulum - 1.jpeg',
      alt: 'Karen in Tulum',
      caption: 'Cenote diving in Tulum, Mexico'
    },
    {
      src: '/img/nuclearsiloDive.jpg',
      alt: 'Nuclear silo dive',
      caption: 'Cold War missile silo complex | near Royal City, WA'
    },
    {
      src: '/img/ChuchoAndDustin.jpg',
      alt: 'Chucho and Dustin',
      caption: 'Chucho and Dustin showing his original Daniel Riordan cookie',
      objectFit: 'contain' as const
    }
  ]

  // Flying gallery images
  const flyingImages = [
    {
      src: '/img/karenflying.jpg',
      alt: 'Karen flying',
      caption: 'Karen in the front seat of one of our club airplanes | Piper Archer PA-28-181'
    },
    {
      src: '/img/FLIR0349.jpg',
      alt: 'Thermal field image from helicopter',
      caption: 'Thermal imaging from helicopter'
    },
    {
      src: '/img/FLIR0228.jpg',
      alt: 'Thermal image from helicopter',
      caption: 'Aerial thermal photography'
    }
  ]

  // Photography gallery images
  const photographyImages = [
    {
      src: '/img/aubreyStars.jpg',
      alt: 'Stars and night sky',
      caption: 'In Memory of Aubrey | Sand Beach, Acadia National Park'
    },
    {
      src: '/img/ResearchfarmsStars.jpg',
      alt: 'Research farms stars',
      caption: 'Night sky over research farms | Urbana-Champaign, IL'
    },
    {
      src: '/img/alma.jpg',
      alt: 'Alma Mater sculpture',
      caption: 'Alma Mater | University of Illinois Urbana-Champaign, IL'
    },
    {
      src: '/img/middleforkEast.jpg',
      alt: 'Middle Fork East',
      caption: 'International Dark Sky Park | Middle Fork River Forest Preserve, IL'
    }
  ]

  // Other Adventures gallery images
  const otherAdventuresImages = [
    {
      src: '/img/dustinkarenhangva.jpg',
      alt: 'Dustin and Karen caving',
      caption: 'Caving in Hang Va | Central Vietnam'
    },
    {
      src: '/img/hangvagroup.jpg',
      alt: 'Caving group',
      caption: 'Caving expedition group | Hang Va, Central Vietnam'
    },
    {
      src: '/img/karencave.jpg',
      alt: 'Karen caving',
      caption: 'Karen and Mom | Lava Beds National Monument, northeastern CA'
    },
    {
      src: '/img/karenseq.jpeg',
      alt: 'Karen climbing sequoia tree',
      caption: 'Redwood ascent | Santa Cruz Mountains CA'
    },
    {
      src: '/img/DustinandTimKovarinaRedwood.jpg',
      alt: 'Dustin and Tim Kovar in a redwood tree',
      caption: 'Redwood ascent with Tim Kovar | Santa Cruz Mountains CA'
    }
  ]

  return (
    <main className="content-wrapper">
      {/* Header Section */}
      <section className="maker-section">
        <h1 className="section-title">Interests</h1>
        <p className="intro-text">
          Exploring technical diving, aerial photography, and other adventures.
        </p>
      </section>

      {/* Technical Scuba Gallery */}
      <section className="maker-section">
        <h2 className="section-title">Technical Scuba Diving</h2>
        <p className="intro-text">
          Technical diving in cenotes, caves, and unique underwater environments. Night black water dives in Hawaii documenting pelagic species and their biology.
        </p>
        <PhotoCarousel images={scubaImages} autoPlay={true} interval={4000} />
        
        {/* Hawaii Black Water Dive Video */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/C7ct3d5efsM?si=&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;fs=0&amp;cc_load_policy=0&amp;loop=1&amp;playlist=C7ct3d5efsM&amp;disablekb=1&amp;enablejsapi=0&amp;origin=https://mayfieldjones.com" 
            title="YouTube video player - Hawaii Black Water Dive" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ 
              maxWidth: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          ></iframe>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Night black water dive in Hawaii - documenting pelagic species and their biology
          </p>
        </div>
      </section>

      {/* Flying Gallery */}
      <section className="maker-section">
        <h2 className="section-title">Flying & Aerial Photography</h2>
        <p className="intro-text">
          Aerial thermal imaging from helicopters and drone photography from Vietnam.
        </p>
        <PhotoCarousel images={flyingImages} autoPlay={true} interval={4000} />
        
        {/* YouTube Drone Video - Vietnam */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/qjwWjBoys5o?si=Pb1m5PcUfoV3iug-&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;fs=0&amp;cc_load_policy=0&amp;loop=1&amp;playlist=qjwWjBoys5o&amp;disablekb=1&amp;enablejsapi=0&amp;origin=https://mayfieldjones.com" 
            title="YouTube video player - Drone Footage Vietnam" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{
              maxWidth: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          ></iframe>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Drone footage from Vietnam
          </p>
        </div>
        
        {/* Skydiving Video - Central Missouri */}
        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/j7A37OKx6RM?si=&amp;autoplay=1&amp;mute=1&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;fs=0&amp;cc_load_policy=0&amp;loop=1&amp;playlist=j7A37OKx6RM&amp;disablekb=1&amp;enablejsapi=0&amp;origin=https://mayfieldjones.com" 
            title="YouTube video player - Skydiving" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ 
              maxWidth: '100%',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          ></iframe>
          <p style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Our first skydive together at Van's Flying V Ranch | Central Missouri
          </p>
        </div>
      </section>

      {/* Photography Gallery */}
      <section className="maker-section">
        <h2 className="section-title">Photography</h2>
        <p className="intro-text">
          Landscape and night sky photography.
        </p>
        <PhotoCarousel images={photographyImages} autoPlay={true} interval={4000} />
      </section>

      {/* Other Adventures */}
      <section className="maker-section">
        <h2 className="section-title">Other Adventures</h2>
        <p className="intro-text">
          Caving and tree climbing adventures.
        </p>
        <PhotoCarousel images={otherAdventuresImages} autoPlay={true} interval={4000} />
      </section>

      {/* Interactive Dive Map */}
      <section className="maker-section">
        <h2 className="section-title">Dive Sites Map</h2>
        <p className="intro-text">
          Interactive map of scuba diving locations around the world.
        </p>
        <DiveMap />
      </section>
    </main>
  )
}