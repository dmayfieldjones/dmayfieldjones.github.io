import './index.css'
import './navbar.css'

export const metadata = {
  title: '7Sisters Farm',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <ul className="navbar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/BreedingPhilosophy">Breeding Philosophy</a></li>
            <li><a href="/Litters">Litters</a></li>
            <li><a href="/Resources">Resources</a></li>
            <li><a href="/CommonQuestions">Common Questions</a></li>
          </ul>
        </nav>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  )
}
