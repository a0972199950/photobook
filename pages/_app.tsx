import * as React from 'react'
import '@/styles/globals.scss'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { StoreProvider } from '@/store'
import LayoutPrivate from '@/components/templates/LayoutPrivate'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const MemoLayoutPrivate = React.useMemo(() => React.memo(LayoutPrivate), [LayoutPrivate])
  const MemoPageComponent = React.useMemo(() => React.memo(Component), [Component])

  return (
    <StoreProvider>
      <MemoLayoutPrivate>
        <MemoPageComponent {...pageProps} />
      </MemoLayoutPrivate>
    </StoreProvider>
  )
}

export default App
