import * as React from 'react'
import Link from 'next/link'
import HoverableIcon, { Props as HoverableIconProps } from '@/components/atoms/HoverableIcon'

export type Props = Partial<HoverableIconProps> & {
  text: string
  link?: string
}

const IconListItem: React.FC<Props> = ({
  link,
  text,
  icon,
  hoverColor
}) => {
  const Tag = (link ? Link : 'div') as keyof JSX.IntrinsicElements

  return (
    <>
      <Tag href={link}>
        {
          icon &&
          <HoverableIcon icon={icon} hoverColor={hoverColor} />
        }

        {text}
      </Tag>
    </>
  )
}

export default IconListItem
