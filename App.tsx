import 'react-native-reanimated'
import React from 'react'

import Icon from 'react-native-vector-icons/Feather'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

import { SelectedAccountantProvider } from '@hooks/useCounterSelected'

import { Routes } from '@routes/.'

Icon.loadFont()

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SelectedAccountantProvider>
        <Routes />
      </SelectedAccountantProvider>
    </ThemeProvider>
  )
}

export default App
