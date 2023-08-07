import * as React from 'react'

export const dynamic = 'force-static'
export const fetchCache = 'default-no-store'

const UsersPage: () => Promise<React.ReactNode> = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())

  return (
    <>
      <h1>Users page</h1>

      <p>使用者總數: {users.length}</p>
    </>
  )
}

export default UsersPage
