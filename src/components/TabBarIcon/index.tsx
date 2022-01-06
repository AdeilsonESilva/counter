import React from 'react'

import { useTheme } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'

import { RFValue } from 'react-native-responsive-fontsize'

import { Container, TabBarFocusedLine } from './styles'

interface Props {
  icon: string
  focused: boolean
}

export const TabBarIcon: React.FC<Props> = ({ icon, focused }) => {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Icon
        name={icon}
        size={RFValue(24)}
        color={focused ? COLORS.main : COLORS.icon}
      />

      {focused && <TabBarFocusedLine />}
    </Container>
  )
}
