import React from 'react'

import { useTheme } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'

import { Home } from '@screens/Home'
import { Settings } from '@screens/Settings'

import { TabBarIcon } from '@components/TabBarIcon'
import { Header } from '@components/Header'

type RootStackParamList = {
  Home: any
  Settings: any
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

interface Props {
  toggleTheme(): void
}

const { Navigator, Screen } = createBottomTabNavigator()

export const Routes: React.FC<Props> = ({ toggleTheme }) => {
  const { NAME, COLORS } = useTheme()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            height: RFValue(70),

            borderTopColor: COLORS.border,
            backgroundColor: NAME === 'light' ? COLORS.shape : COLORS.shape
          },
          tabBarShowLabel: false
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header title="Home" toggleTheme={toggleTheme} />,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon="target" focused={focused} />
            )
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            header: () => <Header title="Settings" toggleTheme={toggleTheme} />,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon icon="settings" focused={focused} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
