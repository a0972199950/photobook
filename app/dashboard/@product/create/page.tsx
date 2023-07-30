import * as React from 'react'

interface Props {
}

const CreatePage: React.FC<Props> = () => {
  return (
    <>
      <div
        style={{
          border: '1px black solid',
          backgroundColor: 'white'
        }}
      >
        <h1>Create page</h1>
      </div>
    </>
  )
}

export default CreatePage
