import { colorMap } from './colorMap'
import ReactIdeogram from './Ideogram'

export default function MyIdeogram({
  type,
  setType,
  setGene,
  geneCategories,
}: {
  type: string
  setType: (arg: string) => void
  setGene: (arg: string) => void
  geneCategories: any[]
}) {
  const annotations = geneCategories
    .filter(f => f.type === type)
    .map(r => {
      const { type, location, name } = r
      if (location) {
        const [chr, rest] = location.split(':')
        const [start, stop] = rest.split('-')
        return {
          name,
          type,
          color: '#984ea3',
          chr: chr.replace('chr', ''),
          start: +start.replaceAll(',', ''),
          stop: +stop.replaceAll(',', ''),
        }
      } else {
        return undefined
      }
    })
    .filter(f => !!f)
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
