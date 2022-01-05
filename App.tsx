import 'react-native-reanimated'
import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

import { CounterProvider } from '@hooks/useCounter'

import { Routes } from '@routes/.'

Icon.loadFont()

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CounterProvider>
        <Routes />
      </CounterProvider>
    </ThemeProvider>
  )
}

export default App
