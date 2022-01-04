import React from 'react'

import { useTheme } from 'styled-components'

import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { RFValue } from 'react-native-responsive-fontsize'

import {
  TabBarContainer,
  TabBarIconContainer,
  TabBarFocusedLine
} from './styles'

export const CustomTabBarContainer: React.FC<BottomTabBarProps> = ({
  ...rest
}) => {
  return (
    <TabBarContainer blurType="light" blurAmount={8}>
      <BottomTabBar {...rest} />
    </TabBarContainer>
  )
}

interface Props {
  icon: string
  focused: boolean
}

export const CustomTabBarIcon: React.FC<Props> = ({ icon, focused }) => {
  const { COLORS } = useTheme()

  return (
    <TabBarIconContainer>
      <Icon
        name={icon}
        size={RFValue(24)}
        color={focused ? COLORS.main : COLORS.icon}
      />

      {focused && <TabBarFocusedLine />}
    </TabBarIconContainer>
  )
}
