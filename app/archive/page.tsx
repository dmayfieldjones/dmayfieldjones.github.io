import Link from 'next/link'
import { getAllPosts } from '@/lib/api'

export const metadata = {
  title: 'Great Dane Blog - Educational Resources',
  description: 'Comprehensive guides and insights on Great Dane breeding, care, development, and ownership from 7Sisters Farm.',
}

export default async function Page() {
  const allPosts = await getAllPosts()
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-full lg:max-w-5xl md:max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Great Dane Educational Resources</h1>
        
        <p className="text-lg text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          Comprehensive guides and insights on Great Dane breeding, care, development, and ownership.
        </p>

        <section className="space-y-1 w-full">
          {allPosts.slice().reverse().map(post => {
            const { id, date, title } = post
            
            // Split title into main title and subtitle
            let mainTitle = title
            let subtitle = ""
            
            // Check for common subtitle patterns
            if (title.includes(": ")) {
              const parts = title.split(": ")
              mainTitle = parts[0]
              subtitle = parts.slice(1).join(": ")
            } else if (title.includes(" - ")) {
              const parts = title.split(" - ")
              mainTitle = parts[0]
              subtitle = parts.slice(1).join(" - ")
            }
            
            return (
              <article key={id} className="border border-gray-200 rounded-lg p-2 hover:shadow-md transition-shadow w-full">
                <Link href={`/posts/${id}`} className="block w-full">
                  <h2 className="text-2xl font-semibold text-gray-900 hover:text-red-600 transition-colors">
                    {mainTitle}
                  </h2>
                  {subtitle && (
                    <p className="text-sm text-gray-600 mt-0.5">
                      {subtitle}
                    </p>
                  )}
                </Link>
              </article>
            )
          })}
        </section>
      </div>
    </div>
  )
}
