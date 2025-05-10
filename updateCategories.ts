import readline from 'readline'
import fs from 'fs'
const rl = readline.createInterface({
  input: process.stdin,
})
const geneMap = JSON.parse(fs.readFileSync('out.json', 'utf8'))

function makeLoc(arg?: { chr: string; start: number; end: number }) {
  return arg ? `${arg.chr}:${arg.start}-${arg.end}` : undefined
}
;(async () => {
  const ret = {} as { chr: string; start: number; end: number }[]
  for await (const line of rl) {
    const [type, name, name2, summary, location, citations] = line.split('\t')

    console.log(
      [
        type,
        name,
        name2,
        summary,
        location,
        citations,
        makeLoc(geneMap[name2]),
      ].join('\t'),
    )
  }
})()
