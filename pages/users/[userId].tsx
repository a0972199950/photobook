import * as React from 'react'
import * as Next from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PageUserId: Next.NextPage = () => {
  const router = useRouter()

  // 程式跳轉
  React.useEffect(() => {
    router.push('/users/123')
    router.replace('/users/123')
    router.back()
    router.reload()
  })

  return (
    <>
      <h1>標題</h1>

      {/* UI跳轉 */}
      <Link
        href="/" // 目標路徑
        replace // 取代當前歷史紀錄
        prefetch // 預先載入
        passHref // 傳遞 href 給子元件
        shallow // 純前端跳轉，不觸發 SSR, SSG
        scroll  // 跳轉完滾動到頁面頂部
      >
        <span>首頁</span>
      </Link>

      {/* 不要用原生的 <a>，eslint 會阻止你。next/link 會做預載、cache...等優化，完全可以取代 <a> */}
      <a href="/">
        <span>首頁</span>
      </a>
    </>
  )
}

export default PageUserId
