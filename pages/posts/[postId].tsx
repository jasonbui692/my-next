import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostDetailsPageProps {}

export default function PostDetailsPage(props: PostDetailsPageProps) {
  const router = useRouter()
  return (
    <div>
      <h1>Product Details</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
