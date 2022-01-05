import React from 'react'

import { useTheme } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'

import { Home } from '@screens/Home'
import { Settings } from '@screens/Settings'

import {
  CustomTabBarContainer,
  CustomTabBarIcon
} from '@components/CustomTabBar'

type RootStackParamList = {
  Home: any
  Settings: any
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const { Navigator, Screen } = createBottomTabNavigator()

export const Routes: React.FC = () => {
  const { COLORS } = useTheme()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: RFValue(70),

            borderTopColor: COLORS.border,
            backgroundColor: 'transparent'
          },
          tabBarShowLabel: false
        }}
        tabBar={CustomTabBarContainer}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomTabBarIcon icon="target" focused={focused} />
            )
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomTabBarIcon icon="settings" focused={focused} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
