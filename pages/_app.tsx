import * as React from 'react'
import '@/styles/globals.scss'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { StoreProvider } from '@/store'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const MemoPageComponent = React.useMemo(() => React.memo(Component), [Component])

  return (
    <StoreProvider>
      <MemoPageComponent {...pageProps} />
    </StoreProvider>
  )
}

export default App
