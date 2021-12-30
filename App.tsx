import React from 'react'

import { ThemeProvider } from 'styled-components'
import { light } from '@styles/theme'

import { Home } from '@screens/Home'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  )
}

export default App
