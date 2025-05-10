import { colorMap } from './colorMap'
import ReactIdeogram from './Ideogram'

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

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
      const { type, undefined: location, name } = r
      if (location) {
        const [chr, rest] = location.split(':')
        const [start, stop] = rest.split('-')
        return {
          name,
          type,
          chr: chr.replace('chr', ''),
          start: +start.replaceAll(',', ''),
          color: '#984ea3',
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
