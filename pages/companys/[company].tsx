import * as Next from 'next'
import * as React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

interface Props {
  name: string
  startAt: string
}

const CompanyPage: Next.NextPage<Props> = (props) => {
  const {
    name = '預設公司',
    startAt = '1997'
  } = props

  const ClientOnlyComponent = dynamic(() => import('../../components/ClientOnlyComponent'))

  return (
    <>
      <h1>Company 頁面標題</h1>

      <p>公司名稱: {name}</p>
      <p>成立於: {startAt}</p>

      {/* 透過 lazy import 的 component，可跳過 server side 渲染 */}
      <ClientOnlyComponent />

      <Link href="/profile">
        /company
      </Link>
    </>
  )
}

// 只要有 export 名稱為 `getServerSideProps` 的 function，就能在 component 渲染前在 server side 獲取數據
// 須注意即使沒有 export `getServerSideProps`，也是會在 server side 預渲染 HTML
export const getServerSideProps: Next.GetServerSideProps<Props> = async () => {
  return {
    props: {
      name: 'LINE',
      startAt: '2013'
    }
  }
}

export default CompanyPage
