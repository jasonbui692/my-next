import { useRouter } from 'next/router'
import React from 'react'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()

  console.log('about query:', router.query)

  return (
    <div>
      About page
      <p>About query:{JSON.stringify(router.query)}</p>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
