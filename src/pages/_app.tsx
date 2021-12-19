import React from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

import { GameProvider } from '../contexts/game'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import 'react-toastify/dist/ReactToastify.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    </GameProvider>
  )
}

export default MyApp
