import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const CreateLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'orange',
          width: '80vw',
          height: '60vh',
          paddingTop: '20vh',
          paddingLeft: '10vw',
          position: 'relative'
        }}
      >
        <h1 style={{
          position: 'absolute',
          top: 0,
          left: 0
        }}
        >Create layout</h1>
        {children}
      </div>
    </>
  )
}

export default CreateLayout
