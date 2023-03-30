import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import darkTheme from '../themes/darkTheme'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  )
}
