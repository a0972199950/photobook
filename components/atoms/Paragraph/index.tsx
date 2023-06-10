import * as React from 'react'
import classes from './style.module.scss'

interface Props {
  grade?: number
  children?: React.ReactNode
}

const Paragraph: React.FC<Props> = (props) => {
  const { grade, children } = props

  return (
    <>
      <p className={classes[`grade-${grade}`]}>
        {children}
      </p>
    </>
  )
}

Paragraph.defaultProps = {
  grade: 4
}

export default Paragraph
