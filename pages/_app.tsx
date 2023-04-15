import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import darkTheme from '../themes/darkTheme'
import { Analytics } from '@vercel/analytics/react'
import { SpotifySongConfig } from 'use-spotify-song';

const accessToken = "AQAosQzI6OmypwX6-WRxTcC0AOcnTaFpf1KepRAnuHR9PCT3eF0eU2qBLz7NKx8MjSDzDP6Jiecr6yJ9hXuSBPdvH4bJzo3W1O5wWnRlRn6wIyKy0EVI4ybkz7Itujd_hCY";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
        <Analytics />
    </NextUIProvider>
  )
}
