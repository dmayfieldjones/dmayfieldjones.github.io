import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./Browser'), {
  ssr: false,
})

export default function Page() {
  return (
    <div>
      <h1>My page</h1>
      <DynamicComponentWithNoSSR />
    </div>
  )
}
