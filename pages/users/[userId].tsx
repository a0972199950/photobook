import * as React from 'react'
import * as Next from 'next'
import { useRouter } from 'next/router'

const PageUserId: Next.NextPage = () => {
  const router = useRouter()

  console.log(router) // { userId: '1' }

  return (
    <>
      <h1>query: {JSON.stringify(router.query)}</h1>
    </>
  )
}

export default PageUserId
