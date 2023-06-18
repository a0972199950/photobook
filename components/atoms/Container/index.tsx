import * as React from 'react'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className={classNames(['container', className])}>
        {children}
      </div>
    </>
  )
}

export default Container
