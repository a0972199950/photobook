import * as React from 'react'

interface Props {
  params: {
    userId: string
  }
}

const UserPage: (props: Props) => Promise<React.ReactNode> = async (props) => {
  const userId = props.params.userId
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: 'no-store' })
    .then(res => res.json())

  return (
    <>
      <h1>User page</h1>

      <ul>
        {
          Object.entries(user).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {typeof value === 'object' ? JSON.stringify(value) : value as any}
            </li>
          ))
        }
      </ul>
    </>
  )
}

// export const generateStaticParams = () => {
//   return [
//     { userId: '1' },
//     { userId: '2' }
//   ]
// }

export default UserPage
