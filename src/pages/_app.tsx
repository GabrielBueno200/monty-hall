import React from 'react'
import type { AppProps } from 'next/app'

import { GameProvider } from '../contexts/game'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Monty Hall</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </GameProvider>
  )
}

export default MyApp
