import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostPageProps {
  post: any
}

export default function PostDetailsPage({ post }: PostPageProps) {
  const router = useRouter()
  return (
    <div>
      <h1>Product Details</h1>
      <p>Query: {JSON.stringify(router.query)}</p>

      <p>Id : {post.id}</p>
      <p>Title : {post.title}</p>
      <p>Author : {post.author}</p>
      <p>Content : {post.description}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()

  data.data.map((post: any) => ({ params: { postId: post.id } }))

  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('Get static props', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }
  // server-side
  // build-time

  // console.log('static props')
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await response.json()
  // console.log('static props', data)
  return {
    props: {
      post: data,
    },
  }
}
