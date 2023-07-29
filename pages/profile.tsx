import * as Next from 'next'
import * as React from 'react'
import Link from 'next/link'

interface Props {
  name: string
  age: number
}

const ProfilePage: Next.NextPage<Props> = (props) => {
  const {
    name = '預設名稱',
    age = 0
  } = props

  const [displayName, setDisplayName] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setDisplayName(true)
    }, 5000)
  })

  return (
    <>
      <h1>Profile 頁面標題</h1>

      {
        displayName &&
        <p>姓名: {name}</p>
      }
      
      <p>年紀: {age}</p>

      <Link href="/companys/company">
        /company
      </Link>

      <br />

      <Link href="/shop">
        /shop
      </Link>
    </>
  )
}

// export const getServerSideProps: Next.GetServerSideProps<Props> = async () => {
//   return {
//     props: {
//       name: '小明',
//       age: Math.random() * 10
//     }
//   }
// }

export default ProfilePage
