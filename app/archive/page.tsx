import { getAllPosts } from '@/lib/api'
import ArchiveClient from './ArchiveClient'

export const metadata = {
  title: '7Sisters Articles',
  description: 'Articles and insights from 7Sisters Farm.',
}

export default async function Page() {
  const allPosts = await getAllPosts()
  // Show all posts (HAB.education posts are the remaining content)
  const posts = allPosts.filter(p => p.categories?.includes('HAB.education'))

  return (
    <div className="content">
      <div className="post-title">
        <h1>7Sisters Articles</h1>
      </div>
      
      <ArchiveClient posts={posts} />
    </div>
  )
}
