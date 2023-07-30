import * as React from 'react'

interface Props {
  children: React.ReactNode
  product: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({ children, product }) => {
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
        >Dashboard layout</h1>
        
        {children}
        {product}
      </div>
    </>
  )
}

export default DashboardLayout
