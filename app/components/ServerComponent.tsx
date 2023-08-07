import * as React from 'react'
import AnotherServerComponent from './AnotherServerComponent'
import ClientComponent from './ClientComponent'

const ServerComponent: any = async () => {
  // Server component 可以是 async，並直接在 return 前用 await 獲取資料
  const user = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())

  // ❌ Server component 不能有 useState
  const [_foo, _setFoo] = React.useState(null)

  return (
    <>
      <h1>Server component</h1>
      <p>User: {JSON.stringify(user)}</p>

      {/* ❌ Server component 不能有 event handler */}
      <button onClick={() => console.log(user)}>Log user</button>


      {/* ✔️ Server component 可以引入另一個 server component */}
      <AnotherServerComponent />

      {/* ✔️ Server component 可以引入 client component */}
      <ClientComponent
        /** ✔️ Server component 傳遞純值給 client component **/
        id={1}

        /** ❌ Server component 不能傳遞 function 給 client component **/
        submitCallback={() => ({})} 
      />
    </>
  )
}

export default ServerComponent
