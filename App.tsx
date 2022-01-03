import 'react-native-reanimated'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

// import { Home } from '@screens/Home'
import { Settings } from '@screens/Settings'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Settings />
    </ThemeProvider>
  )
}

export default App
