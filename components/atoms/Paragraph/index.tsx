import * as React from 'react'
import classes from './style.module.scss'

interface Props {
  grade?: number
  children?: React.ReactNode
}

const Paragraph: React.FC<Props> = ({
  grade = 4,
  children
}) => {
  return (
    <>
      <p className={classes[`grade-${grade}`]}>
        {children}
      </p>
    </>
  )
}

export default Paragraph
