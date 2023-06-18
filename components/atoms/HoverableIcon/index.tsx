import * as React from 'react'
import Image from 'next/image'

export interface Props {
  icon: string
  hoverColor?: string
}

const HoverableIcon: React.FC<Props> = ({
  icon
}) => {
  return (
    <>
      {icon}
      {/* <Image
        src={icon}
        alt="icon"
        width={20}
        height={20}
      /> */}
    </>
  )
}

export default HoverableIcon
