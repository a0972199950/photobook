import * as React from 'react'
import classNames from 'classnames'
import classes from './style.module.scss'

interface Props {
  grade?: number
  className?: string
  children: React.ReactNode
}

const Title: React.FC<Props> = (props) => {
  const { grade, children, className } = props

  const Tag = `h${grade}` as keyof JSX.IntrinsicElements

  return (
    <>
      <Tag className={classNames([
        classes.title,
        classes[`grade-${grade}`],
        className
      ])}>
        {children}
      </Tag>
    </>
  )
}

Title.defaultProps = {
  grade: 1
}

export default Title