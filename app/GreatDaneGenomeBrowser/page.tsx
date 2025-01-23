'use client'

import { useState } from 'react'
import geneCategories from './categories'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'

function replaceLink(str: string) {
  return str.replace(
    /\(([^,]+),\s*(\d{4})\)(?:.*?)?(https?:\/\/[^\s]+)/g,

    function (match, author, year, url) {
      return `<a href="${url}" target="_blank">(${author}, ${year})</a>`
    },
  )
}

export default function () {
  const [selector, setSelector] = useState('Coat Color Genes')
  const [gene, setGene] = useState('')
  const [state] = useState(() =>
    createViewState({
      aggregateTextSearchAdapters: [
        {
          type: 'TrixTextSearchAdapter',
          textSearchAdapterId: 'canFam5-index',
          ixFilePath: {
            uri: 'https://jbrowse.org/genomes/canFam5/trix/aggregate.ix',
            locationType: 'UriLocation',
          },
          ixxFilePath: {
            uri: 'https://jbrowse.org/genomes/canFam5/trix/aggregate.ixx',
            locationType: 'UriLocation',
          },
          metaFilePath: {
            uri: 'https://jbrowse.org/genomes/canFam5/trix/aggregate_meta.json',
            locationType: 'UriLocation',
          },
          assemblyNames: ['canFam5'],
        },
      ],
      configuration: {
        theme: {
          palette: {
            primary: {
              main: '#bf141c',
            },
            secondary: {
              main: '#000',
            },
            tertiary: {
              main: '#bf141c2',
            },
            quaternary: {
              main: '#bf141c2',
            },
          },
        },
      },

      assembly: {
        name: 'canFam5',
        sequence: {
          type: 'ReferenceSequenceTrack',
          trackId: 'canFam5-ReferenceSequenceTrack',
          adapter: {
            type: 'TwoBitAdapter',

            chromSizesLocation: {
              uri: 'https://hgdownload.soe.ucsc.edu/goldenPath/canFam5/bigZips/canFam5.chrom.sizes',
              locationType: 'UriLocation',
            },
            twoBitLocation: {
              uri: 'https://hgdownload.soe.ucsc.edu/goldenPath/canFam5/bigZips/canFam5.2bit',
              locationType: 'UriLocation',
            },
          },
        },
      },
      tracks: [
        {
          type: 'FeatureTrack',
          trackId: 'refGene',
          name: 'refGene',
          adapter: {
            type: 'Gff3Adapter',
            gffLocation: {
              uri: 'https://jbrowse.org/genomes/canFam5/refGene.gff',
              locationType: 'UriLocation',
            },
          },
          assemblyNames: ['canFam5'],
          displays: [
            {
              type: 'LinearBasicDisplay',
              displayId: 'refGene',
              renderer: {
                type: 'SvgFeatureRenderer',
                labels: {
                  name: "jexl:get(feature,'gene_name')",
                },
              },
            },
          ],
        },
      ],
    }),
  )
  const currentCategory =
    geneCategories[selector as keyof typeof geneCategories]

  const geneEntry = currentCategory.find(f => f.name === gene)
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
                value={selector}
                onChange={event => setSelector(event.target.value)}
                id="categorySelect"
              >
                <option value="">Select a category</option>
                {Object.keys(geneCategories).map(category => (
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
                    state.session.view.navToLocString(ret.location, 'canFam5')
                    state.session.view.showTrack('refGene')
                  }
                }}
                id="geneSelect"
              >
                <option value="">Select a gene</option>
                {geneCategories[selector as keyof typeof geneCategories].map(
                  entry => (
                    <option key={entry.name} value={entry.name}>
                      {entry.name}
                    </option>
                  ),
                )}
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
        <JBrowseLinearGenomeView viewState={state} />
      </div>
    </div>
  )
}
