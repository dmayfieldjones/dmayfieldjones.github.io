import { getAllPosts } from '@/lib/api'
import ArchiveClient from './ArchiveClient'

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
        <p className="text-center text-gray-600 mt-2 text-sm">
          Comprehensive guides and practical knowledge on Great Dane breeding, care, development, and ownership.
        </p>
      </div>
      
      <ArchiveClient posts={allPosts} />
    </div>
  )
}
