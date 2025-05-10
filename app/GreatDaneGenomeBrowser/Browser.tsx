'use client'
import { useState } from 'react'
import MyIdeogram from './MyIdeogram'
import { colorMap } from './colorMap'

function DescriptionComponent({ geneEntry }: { geneEntry: any }) {
  console.log({ geneEntry }, geneEntry.citations)
  return (
    <div style={{ margin: 20 }}>
      {geneEntry.name2} - {geneEntry?.summary}{' '}
      {geneEntry.citations.split(';').map((c: any, idx: number) => (
        <a key={c} href={geneEntry[`doi${idx + 1}`]}>
          {c}
        </a>
      ))}
    </div>
  )
}

export default function Browser({ geneCategories }: { geneCategories: any[] }) {
  const [type, setType] = useState('')
  const [gene, setGene] = useState('')

  const categories = [...new Set<string>(geneCategories.map(f => f.type))]
  const currentCategory = geneCategories.filter(f => f.type === type)
  const geneEntry = currentCategory?.find(f => f.name === gene)
  return (
    <div>
      <div>
        <div className="content">
          <main className="content-wrapper">
            {/* Hero Section */}
            <section className="hero-section">
              <img
                src="/img/Colorlogo_nobackground.png"
                alt="7Sisters Farm Logo"
                width={300}
                height="auto"
                className="hero-logo"
                loading="lazy"
                style={{ margin: '0 auto' }}
              />
            </section>
            <p />
            <span className="accent-color">7</span>Sisters Genome Browser
            (CanFam4)
            <br />
            <br />
            Select a category of genes, then an individual gene/locus to learn
            more about it
            <br />
            <div id="geneSelector">
              <select
                value={type}
                onChange={event => setType(event.target.value)}
                id="categorySelect"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={gene}
                id="geneSelect"
                onChange={event => {
                  setGene(event.target.value)
                }}
              >
                <option value="">
                  Select a gene {type ? `(${type} related)` : ''}
                </option>
                {currentCategory.map(entry => (
                  <option key={entry.name} value={entry.name}>
                    {entry.name}
                  </option>
                ))}
              </select>
              {geneEntry ? (
                <div>
                  <DescriptionComponent geneEntry={geneEntry} />

                  <ul>
                    <li>
                      <a
                        href={`https://jbrowse.org/code/jb2/main/?config=/ucsc/canFam4/config.json&assembly=canFam4&loc=${geneEntry.geneName}&tracks=refGene`}
                        target="_blank"
                      >
                        Link to JBrowse (canFam4)
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            <div id="buttonarea" /> <div id="summary" />
          </main>
        </div>
      </div>
      <div>
        {/* <MyIdeogram */}
        {/*   type={type} */}
        {/*   setGene={setGene} */}
        {/*   setType={setType} */}
        {/*   geneCategories={geneCategories} */}
        {/* /> */}
        {Object.entries(colorMap).map(([key, val]) => (
          <ul key={key}>
            <li>
              <div
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  backgroundColor: val,
                }}
              />{' '}
              {key}
            </li>
          </ul>
        ))}
      </div>
      <div>Thank you Colin Diesh for help with JBrowse2.</div>
    </div>
  )
}
