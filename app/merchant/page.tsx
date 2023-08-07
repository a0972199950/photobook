import * as React from 'react'
import Link from 'next/link'

const MerchantPage: () => Promise<React.ReactNode> = async () => {
  console.log('MerchantPage render')

  return (
    <>
      <h1>Merchant page</h1>

      <Link href="/shop" prefetch={false}>
        /shop
      </Link>
    </>
  )
}

export default MerchantPage
