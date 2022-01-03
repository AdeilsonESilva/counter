import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { useTheme } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  icon: string
}

export const Button: React.FC<Props> = ({ title, icon, ...rest }) => {
  const { COLORS } = useTheme()

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Icon name={icon} size={RFValue(24)} color={COLORS.main} />

      <Title>{title}</Title>
    </Container>
  )
}
