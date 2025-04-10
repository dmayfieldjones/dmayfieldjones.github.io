import { Metadata } from 'next'
import './index.css'
import ClientComponent from './client'

export const metadata: Metadata = {
  title: '7Sisters - Litters',
  description:
    'Our mission and approach to breeding exceptional Great Danes at 7Sisters Farm',
}

export default function () {
  return <ClientComponent />
}
