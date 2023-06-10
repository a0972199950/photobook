import type { NextPage } from 'next'
import Avatar from '@/components/atoms/Avatar'
import Paragraph from '@/components/atoms/Paragraph'

const Profile: NextPage = () => {
  return (
    <>
      <h1>profile</h1>
      <Avatar imageUrl="https://placehold.jp/150x150.png" shape="circle" />

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </Paragraph>
    </>
  )
}

export default Profile
