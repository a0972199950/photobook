import * as React from 'react'
import Image from 'next/image'
import classes from './style.module.scss'

interface Props {
  imageUrl: string
  shape: 'circle' | 'square'
}

const Avatar: React.FC<Props> = (props) => {
  return (
    <>
      <Image
        src={props.imageUrl}
        alt="avatar"
        width={200}
        height={200}
        className={`${classes.image} ${classes[props.shape]}`}
      />
    </>
  )
}

Avatar.defaultProps = {
  shape: 'circle'
}

export default Avatar
