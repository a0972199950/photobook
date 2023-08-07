import * as React from 'react'
import Link from 'next/link'
// import dynamic from 'next/dynamic'
import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

const ShopPage: () => Promise<React.ReactNode> = async () => {
  console.log('ShopPage render')

  return (
    <>
      <h1>Shop page</h1>

      <Link href="/merchant" prefetch={false}>
        /merchant
      </Link>

      <React.Suspense fallback={<div>Client component loading...</div>}>
        <ClientComponent id={3} />
      </React.Suspense>

      <React.Suspense fallback={<div>Server component loading...</div>}>
        <ServerComponent id={4} />
      </React.Suspense>
    </>
  )
}

export default ShopPage
