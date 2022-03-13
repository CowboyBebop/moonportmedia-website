import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import globalStyle from '@css/global.style'

import light from '@css/light'

const Moonport = ({ Component, pageProps }: AppProps) => {
  globalStyle()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableColorScheme={false}
      value={{
        dark: 'dark',
        light: light.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Moonport
