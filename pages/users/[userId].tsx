import * as React from 'react'
import * as Next from 'next'
import { useRouter } from 'next/router'

const PageUserId: Next.NextPage = () => {
  const router = useRouter()

  console.log(router.query) // { userId: '1' }

  return (
    <></>
  )
}

export default PageUserId
