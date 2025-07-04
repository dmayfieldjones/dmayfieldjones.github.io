import { getPostById, getAllPosts } from '@/lib/api'
import Container from '@/components/container'
import Markdown from 'react-markdown'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { title } = await getPostById(id)
  return {
    title,
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const { content, title, date } = await getPostById(id)
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <h4>{date}</h4>
      </div>
      <Markdown>{content}</Markdown>
    </Container>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    id: post.id,
  }))
}
