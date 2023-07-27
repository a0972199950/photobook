import * as React from 'react'
import * as Next from 'next'
import { useRouter } from 'next/router'

const PageArticleTitle: Next.NextPage = () => {
  const router = useRouter()

  console.log(router.query) // { titles: ['foo', 'bar'] }

  return (
    <></>
  )
}

export default PageArticleTitle
