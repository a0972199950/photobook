import * as React from 'react'
import { cookies, headers } from 'next/headers'

// React Server Component 提供組件在 server 端可以 await data request 的能力
// 而 NextJS 基於此能力之上，對 component 的 fetch() 設計了一系列的快取機制

const UsersPage: () => Promise<React.ReactNode> = async () => {
  // 1. 對於所有的 fetch，NextJS 預設都會在 build time 把 response 寫成靜態 JSON 檔案 cache 起來
  const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

  // 2. cookies() 和 headers() 是動態 helper function。所有出現在這兩個 function 後面的 fetch，預設都「不會」被 cache
  const _cookieStore = cookies()
  const _headerStore = headers()
  const _todos = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json()

  // 3. 以上兩點預設行為不喜歡的話，也可以在 fetch 加上第二個參數，強制指定 cache 的行為
  const _posts = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
    // [`force-cache`]: 強制 fetch 在 build time cache 起來。如果該 fetch 有使用到 cookie 或 header，則只能拿到 undefined
    // [`no-store`]: 強制 fetch 不可 cache
    // *注意這邊的 cache 和原生 fetch 的 cache 不同，原生的 fetch 是 request 與 browser cache 的互動方式，而這裡的 fetch 則是和 NextJS 的 build time cache 互動
    cache: 'force-cache',

    next: {
      // Cache 過期的時間，單位為秒。超過該時段後，如果 run time 時 request hit cache，cache 會在背後更新資料後回傳
      revalidate: 60 * 60 * 24
    }
  })).json()

  return (
    <>
      <h1>Users page</h1>

      <p>使用者總數: {users.length}</p>
    </>
  )
}

// 4. 可以 export const fetchCache 來統一設定當下組件的所有 fetch 行為
// 適合在不直接使用 fetch，而是使用第三方庫(例如 axios)。或是不想一個一個指定 option 時使用
// [`auto`]: 預設，不改動

// [`default-cache`]: 將 fetch 的 default cache 設為 `force-cache`。但若有手動指定 option，則按照 option 設定
// [`only-cache`]: 將 fetch 的 default cache 設為 `force-cache`，並且不允續手動指定 `force-cache` 以外的 option，若出現則會報錯
// [`force-cache`]: 不管是否有手動指定，強制把所有 fetch cache 覆蓋為 `force-cache`

// [`default-no-store`]: 邏輯同上，但是 cache 設為 `no-store`
// [`only-no-store`]: 邏輯同上，但是 cache 設為 `no-store`
// [`force-no-store`]: 邏輯同上，但是 cache 設為 `no-store`
export const fetchCache = 'default-no-store'

export default UsersPage
