import './index.css'
import './navbar.css'
import Navigation from '../components/Navigation'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="wrapper">{children}</div>
      </body>
      <GoogleAnalytics gaId="G-SDSX26JETX" />
    </html>
  )
}
