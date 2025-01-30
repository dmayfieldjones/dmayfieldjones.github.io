'use client'

import { useState } from 'react'
import geneCategories from './categories'
import ReactIdeogram from './Ideogram'

function replaceLink(str: string) {
  return str.replace(
    /\(([^,]+),\s*(\d{4})\)(?:.*?)?(https?:\/\/[^\s]+)/g,

    function (match, author, year, url) {
      return `<a href="${url}" target="_blank">(${author}, ${year})</a>`
    },
  )
}

const colorMap = {
  coatcolor: 'green',
  hypersocial: 'red',
  health: 'blue',
}
function Ideogram({
  setType,
  setGene,
}: {
  setType: (arg: string) => void
  setGene: (arg: string) => void
}) {
  const annotations = geneCategories.map(r => {
    const { type, location, name } = r
    const [chr, rest] = location.split(':')
    const [start, stop] = rest.split('-')
    return {
      name,
      chr: chr.replace('chr', ''),
      start: +start.replaceAll(',', ''),
      color: colorMap[type],
      stop: +stop.replaceAll(',', ''),
    }
  })
  return (
    <div id="eukaryotes-example" className="App">
      <ReactIdeogram
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
  const [type, setType] = useState('coatcolor')
  const [gene, setGene] = useState('')
  console.log({ gene })

  const categories = [...new Set<string>(geneCategories.map(f => f.type))]
  const currentCategory = geneCategories.filter(f => f.type === type)
  const geneEntry = currentCategory?.find(f => f.name === gene)
  return (
    <div>
      <div>
        <div className="content">
          <div className="post-title ">
            <h1>Great Dane Genome Browser</h1>
          </div>
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
            <font color="#bf141c">7</font>Sisters Great Dane Genome Browser
            (CanFam5, UMICHZoey3.1)
            <br /> Thank you Colin Diesh for help with JBrowse2.
            <br /> <br /> Select a category of genes, then an individual
            gene/locus to learn more about it, further reading, or download
            related coding sequences from Zoey, a lovely Great Dane. <br />
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
                  const ret = currentCategory.find(
                    f => f.name === event.target.value,
                  )
                  if (ret) {
                    //state.session.view.navToLocString(ret.location, 'canFam5')
                    //state.session.view.showTrack('refGene')
                  }
                }}
                id="geneSelect"
              >
                <option value="">Select a gene</option>
                {currentCategory.map(entry => (
                  <option key={entry.name} value={entry.name}>
                    {entry.name}
                  </option>
                ))}
              </select>
              <div
                style={{ margin: 20 }}
                dangerouslySetInnerHTML={{
                  __html: replaceLink(geneEntry?.summary || ''),
                }}
              ></div>
            </div>
            <div id="buttonarea" /> <div id="summary" />
          </main>
          {/*-<br> <br> <FONT COLOR="#bf141c">Great Dane Genome Browser (CanFam5, UMICHZoey3.1)</FONT><br> <br> Time x generation time, inbreeding via CoI and ACI, Color crosses and popularity, litter size, popular sire. Compare to another breed database like soft-coated wheaten terrier. <br>JBrowse genome browswer for color genes, published. and others. -*/}
        </div>
      </div>
      <div style={{ margin: 50 }}>
        <Ideogram setGene={setGene} setType={setType} />
      </div>
    </div>
  )
}
