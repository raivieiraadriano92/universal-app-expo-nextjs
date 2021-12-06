import { FunctionComponent } from 'react'

import { AppWrapper } from '@shared'
import type { AppProps } from 'next/app'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default App
