import './index.css'

import { Metadata } from 'next'
import ClientComponent from './client'

export const metadata: Metadata = {
  title: '7Sisters - Common Questions',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
}

export default function () {
  return <ClientComponent />
}
