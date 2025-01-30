'use client'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./Browser'), {
  ssr: false,
})

export default function Page() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}
