export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mayfieldjones.com/#person",
    "name": "Dustin Mayfield-Jones",
    "alternateName": "Dustin Mayfield Jones",
    "description": "Supporting entrepreneurship, innovation, and maker communities in Central Illinois. Resources for makerspaces, startup software, and STEAM education.",
    "url": "https://mayfieldjones.com",
    "email": "dustin@mayfieldjones.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Champaign",
      "addressRegion": "IL",
      "addressCountry": "US"
    },
    "jobTitle": "Entrepreneurship & Innovation Support",
    "knowsAbout": [
      "Entrepreneurship",
      "Innovation",
      "Maker Resources",
      "Makerspaces",
      "Startup Incubation",
      "STEAM Education",
      "High Altitude Balloons",
      "Scientific Research"
    ],
    "sameAs": [
      "https://github.com/dmayfieldjones"
    ],
    "image": "https://mayfieldjones.com/img/logo.png",
    "keywords": [
      "maker resources",
      "makerspace directory",
      "startup resources",
      "entrepreneurship",
      "innovation",
      "Central Illinois makerspace",
      "STEAM education",
      "high altitude balloons",
      "maker network"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Entrepreneurship & Innovation Support",
      "occupationLocation": {
        "@type": "City",
        "name": "Champaign",
        "addressRegion": "IL"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
