import * as React from 'react'

interface Props {
  params: {
    userId: string
  }
}

// 手動決定該組件是否要被 cache
// ['dynamic']: 自動根據所有 fetch() 決定
// ['force-dynamic']: 強制動態，不會被 cache
// ['force-static']: 強制靜態，會被 cache。但若有動態 fetch() 存在則無效
// ['error']: 強制靜態，會被 cache，並且不允許有動態 fetch() 出現，會報錯
export const dynamic = 'force-dynamic'

// 定義動態路由在 runtime 遇到沒有事先渲染過的路由時的行為，等同於 pages router 的 getStaticPaths() 的 fallback
// 特別注意 pages router 的 fallback = true 的行為(先返回沒有 props 的頁面，再在 client side fetch data)已不存在
// [true]: 等於 getStaticPaths() 的 fallback = 'blocking'。會等待該頁面渲染完成後才會返回(使用流式 SSR)，並更新 cache
// [false]: 等於 getStaticPaths() 的 fallback = false。會直接返回 404 頁面
export const dynamicParams = true

// 等同 pages router 的 getStaticProps() 的 revalidate。定義該頁面的 cache 過期時間
export const revalidate = 60

const UserPage: (props: Props) => Promise<React.ReactNode> = async (props) => {
  const userId = props.params.userId
  const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()

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

export default UserPage
