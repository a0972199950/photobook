'use client' // Error components must be Client Components

import * as React from 'react'

const CreateError: React.FC = () => {
  return (
    <>
      <div
        style={{
          border: '1px black solid',
          backgroundColor: 'red'
        }}
      >
        <h1>Create error</h1>
      </div>
    </>
  )
}

export default CreateError
