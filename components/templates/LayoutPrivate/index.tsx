import * as React from 'react'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

interface Props {
  children: React.ReactNode
}

const LayoutPrivate: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default LayoutPrivate
