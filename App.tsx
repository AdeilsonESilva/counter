import 'react-native-reanimated'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ThemeProvider } from 'styled-components'
import { light } from '@styles/themes/light'
import { dark } from '@styles/themes/dark'

import { CounterProvider } from '@hooks/useCounter'

import { Routes } from '@routes/.'

Icon.loadFont()

export const App: React.FC = () => {
  const keyTheme = '@counter:theme'

  const [theme, setTheme] = useState(light)

  async function toggleTheme() {
    setTheme(theme.NAME === 'light' ? dark : light)
  }

  useEffect(() => {
    async function loadThemeStorage() {
      const themeSavedStorage = await AsyncStorage.getItem(keyTheme)

      if (themeSavedStorage) {
        setTheme(JSON.parse(themeSavedStorage!))
      } else {
        setTheme(light)
      }
    }
    loadThemeStorage()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(keyTheme, JSON.stringify(theme)).then()
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <CounterProvider>
        <StatusBar
          translucent
          barStyle={theme.NAME === 'light' ? 'dark-content' : 'light-content'}
          backgroundColor="transparent"
        />
        <Routes toggleTheme={toggleTheme} />
      </CounterProvider>
    </ThemeProvider>
  )
}

export default App
