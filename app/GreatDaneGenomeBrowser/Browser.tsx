'use client'
import { useState } from 'react'
import geneCategories from './categories'
import ReactIdeogram from './Ideogram'
import { replaceLink } from './util'

const set1 = [
  '#377eb8',
  '#e41a1c',
  '#4daf4a',
  '#984ea3',
  '#ff7f00',
  '#ffff33',
  '#a65628',
  '#f781bf',
  '#999999',
]

const colorMap = {
  coatcolor: set1[0],
  hypersocial: set1[1],
  health: set1[2],
}

function Ideogram({
  type,
  setType,
  setGene,
}: {
  type: string
  setType: (arg: string) => void
  setGene: (arg: string) => void
}) {
  const annotations = geneCategories
    .filter(f => f.type === type)
    .map(r => {
      const { type, location, name } = r
      const [chr, rest] = location.split(':')
      const [start, stop] = rest.split('-')
      return {
        name,
        type,
        chr: chr.replace('chr', ''),
        start: +start.replaceAll(',', ''),
        color: colorMap[type],
        stop: +stop.replaceAll(',', ''),
      }
    })
  return (
    <div id="eukaryotes-example" className="App">
      <ReactIdeogram
        // @ts-expect-error
        organism="canis-lupus-familiaris"
        rotatable={false}
        chrWidth={10}
        chrHeight={200}
        rows={2}
        showNonNuclearChromosomes={true}
        annotations={annotations}
        onClickAnnot={(arg: { name: string }) => {
          const f = geneCategories?.find(f => f.name === arg.name)?.type
          if (f) {
            setType(f)
            setGene(arg.name)
          }
        }}
      />
    </div>
  )
}

export default function () {
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
                onChange={event => {
                  setGene(event.target.value)
                }}
                id="geneSelect"
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
                  <div
                    style={{ margin: 20 }}
                    dangerouslySetInnerHTML={{
                      __html: replaceLink(geneEntry?.summary || ''),
                    }}
                  ></div>
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
        <Ideogram type={type} setGene={setGene} setType={setType} />
        {Object.entries(colorMap).map(([key, val]) => (
          <ul>
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
