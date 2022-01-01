import 'react-native-reanimated'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

import { Home } from '@screens/Home'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
