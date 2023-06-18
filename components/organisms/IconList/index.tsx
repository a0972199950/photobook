import * as React from 'react'
import IconListItem from '@/components/molecules/IconListItem'

interface Props {
  listItems: {
    icon?: string
    text: string
    hoverColor?: string
    link?: string
  }[]
}

const defaultListItems = [
  {
    icon: 'house',
    text: '官網首頁',
    hoverColor: 'var(--color-primary)',
    link: 'https://aibook.com.tw'
  },

  {
    icon: 'house',
    text: '製作 App 首頁',
    hoverColor: 'var(--color-primary)',
    link: '/'
  },

  {
    icon: 'facebook',
    text: 'Facebook',
    hoverColor: 'var(--color-facebook)'
  }
]

const IconList: React.FC<Props> = ({
  listItems = defaultListItems
}) => {
  return (
    <>
      <h1>IconList</h1>

      {
        listItems.map((listItem, index) => (
          <IconListItem key={index} {...listItem} />
        ))
      }
    </>
  )
}

export default IconList
