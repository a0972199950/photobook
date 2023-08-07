/** 在文件第一行標上 'use client'，即可將該檔案轉為 client component **/
'use client' 

import * as React from 'react'
import AnotherClientComponent from './AnotherClientComponent'
// import ServerComponent from './ServerComponent'

const ClientComponent: React.FC<any> = (props) => {
  // Client component 必須先 useState()，然後在 useEffect() 中獲取資料
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(setUser)
  })

  return (
    <>
      <h1>Client component</h1>
      <p>User: {JSON.stringify(user)}</p>

      {/* ✔️ Client component 可以有 event handler */}
      <button onClick={() => console.log(user)}>Log user</button>


      {/* ✔️ Client component 可以引入另一個 client component */}
      <AnotherClientComponent />

      {/* ❌ Client component 不能直接引入 server component */}
      {/* <ServerComponent /> */}

      {/* ✔️ Client component 要引入 server component 必須透過 props 傳遞 */}
      {props.ServerComponent}
    </>
  )
}

export default ClientComponent
