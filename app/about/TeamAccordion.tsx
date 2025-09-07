'use client'

import { useState } from 'react'

export default function TeamAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const teamMembers = [
    {
      id: 'dustin',
      name: 'Meet Dustin',
      content: `I'm a recovering plant biologist who transitioned from crunching genomics data on supercomputers to hands-on problem solving as a laboratory and facilities manager at a deep-tech business incubator. These days I keep startup labs running with a wrench in one hand and AI troubleshooting tools in the other—a blend that perfectly captures my approach to Great Dane breeding.<br><br>
      
      My background in computational biology helps me stay current with cutting-edge breeding science, while my work empowering entrepreneurs has taught me the value of mentorship and hands-on support. I'm actively involved in our local Great Dane community, where I focus on education around genetic diversity, breeding science, and health research.<br><br>
      
      But my love for Great Danes started long before any of that—at age 10 in an Iowa BBQ joint, where I fell hard for these gentle giants. What really drives me now is being part of a community that believes in "more than show and go"—lifelong mentorship, ongoing education, and genuine stewardship of the breed.<br><br>
      
      When families choose one of our Great Danes, they're not just getting a puppy—they're joining a legacy of education and support that spans generations. That's what being a responsible breeder means to me.`
    },
    {
      id: 'karen',
      name: 'Meet Karen',
      content: `I'm a litigation attorney by profession, but my passion for dogs started much earlier—growing up with parents who bred dachshunds, competing in 4-H obedience shows, and working at a veterinary clinic as a child. While I discovered Great Danes through my husband Dustin, my legal training and lifelong dog experience bring a unique perspective to our breeding program.<br><br>
      
      My background in law helps ensure our breeding practices are ethical, transparent, and built on solid contracts that protect both families and our dogs. As an attorney, I understand the importance of clear communication and building trust—skills that serve me well in all aspects of responsible breeding.<br><br>
      
      I'm actively involved in our local Great Dane community and have dedicated over 20 years to service with Blood Cancer United, which has taught me that meaningful change happens through sustained commitment and attention to detail—the same approach I bring to responsible breeding.<br><br>
      
      When families choose one of our Great Danes, they're getting the benefit of both my legal thoroughness and my genuine love for these gentle giants. My goal is to ensure every family feels supported, informed, and confident in their decision to welcome a Great Dane into their lives.`
    }
  ]

  return (
    <section className="team-section">
      <h2 className="section-title">Meet the Team</h2>
      <p className="intro-text">
        Learn more about the people behind 7Sisters Farm and what drives our passion for Great Dane breeding.
      </p>
      
      <div className="accordion-container">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="accordion-item">
            <button
              className={`accordion ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`${member.id}-panel`}
            >
              <span className="accent-color">{member.name}</span>
            </button>
            <div
              className={`panel ${activeIndex === index ? 'panel-open' : ''}`}
              id={`${member.id}-panel`}
            >
              <p dangerouslySetInnerHTML={{ __html: member.content }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
