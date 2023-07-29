'use client' // Error components must be Client Components

import * as React from 'react'

const ShopError: React.FC = () => {
  return (
    <>
      <div
        style={{
          border: '1px black solid',
          backgroundColor: 'red'
        }}
      >
        <h1>Shop error</h1>
      </div>
    </>
  )
}

export default ShopError
