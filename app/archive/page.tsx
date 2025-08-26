import Link from 'next/link'
import { getAllPosts } from '@/lib/api'

export const metadata = {
  title: 'Great Dane Articles and Insights',
  description: 'Comprehensive guides and practical knowledge on Great Dane breeding, care, development, and ownership.',
}

export default async function Page() {
  const allPosts = await getAllPosts()
  return (
    <div className="content">
      <div className="post-title">
        <h1>Great Dane Articles and Insights</h1>
      </div>
      <main className="content-wrapper">
        <p className="text-lg text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          Comprehensive guides and practical knowledge on Great Dane breeding, care, development, and ownership.
        </p>



        <section className="space-y-1">
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
              <article key={id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <Link href={`/posts/${id}`} className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 hover:text-red-600 transition-colors">
                      {mainTitle}
                    </h2>
                    {subtitle && (
                      <p className="text-sm text-gray-600 mt-0.5">
                        {subtitle}
                      </p>
                    )}
                  </Link>
                  
                  {/* Checklist download button for the breeder guide */}
                  {id === '2025-06-25-choosing-a-great-dane-breeder' && (
                    <a 
                      href="/breeder-evaluation-checklist.pdf"
                      className="px-3 py-2 bg-red-800 text-sm font-bold rounded hover:bg-red-900 transition-colors ml-3 flex-shrink-0"
                      style={{ color: 'black' }}
                      download
                    >
                      Download Checklist
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}
