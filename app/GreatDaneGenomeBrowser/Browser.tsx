'use client'
import { useEffect, useState } from 'react'
import geneCategories from './categories'
import ReactIdeogram from './Ideogram'
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

function JBrowse({ location }: { location: string }) {
  const [state] = useState(() =>
    createViewState({
      aggregateTextSearchAdapters: [
        {
          type: 'TrixTextSearchAdapter',
          textSearchAdapterId: 'canFam5-index',
          uri: 'https://jbrowse.org/genomes/canFam5/trix/aggregate.ix',
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
            chromSizes:
              'https://hgdownload.soe.ucsc.edu/goldenPath/canFam5/bigZips/canFam5.chrom.sizes',
            uri: 'https://hgdownload.soe.ucsc.edu/goldenPath/canFam5/bigZips/canFam5.2bit',
          },
        },
        refNameAliases: {
          adapter: {
            type: 'NcbiSequenceReportAliasAdapter',
            uri: 'https://jbrowse.org/genomes/canFam5/sequence_report.tsv',
          },
        },
      },
      tracks: [
        {
          type: 'FeatureTrack',
          trackId: 'ncbiRefSeq',
          name: 'ncbiRefSeq',
          adapter: {
            type: 'Gff3TabixAdapter',
            uri: 'https://jbrowse.org/genomes/camFam5/genomic.sorted.gff.gz',
          },
          assemblyNames: ['canFam5'],
        },
        {
          type: 'FeatureTrack',
          trackId: 'refGene',
          name: 'refGene',
          adapter: {
            type: 'Gff3Adapter',
            uri: 'https://jbrowse.org/genomes/canFam5/refGene.gff',
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

  useEffect(() => {
    state.session.view.navToLocString(location, 'canFam5')
    state.session.view.showTrack('refGene')
  }, [location])
  return <JBrowseLinearGenomeView viewState={state} />
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
  const [showBrowser, setShowBrowser] = useState(false)

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
            <span className="accent-color">7</span>Sisters Great Dane Genome
            Browser (CanFam5, UMICHZoey3.1)
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
                  <button onClick={() => setShowBrowser(!showBrowser)}>
                    {showBrowser ? 'Hide' : 'Show'} genome browser
                  </button>
                  {showBrowser && geneEntry ? (
                    <JBrowse location={geneEntry.location} />
                  ) : null}
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
              {key}
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: val,
                }}
              />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
