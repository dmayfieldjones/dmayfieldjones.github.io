import { Metadata } from 'next'
import ClientComponents from './client'

export const metadata: Metadata = {
  title: '7Sisters - Genome Browsers',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
}

export default function Page() {
  return <ClientComponents />
}
