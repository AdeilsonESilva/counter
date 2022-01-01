import React, { useState } from 'react'

import { useTheme } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Title, ToggleTheme } from './styles'

Icon.loadFont()

export const Header: React.FC = () => {
  const { COLORS } = useTheme()

  const [toggleTheme, setToggleTheme] = useState(false)

  return (
    <Container>
      <Title>Counters</Title>

      <ToggleTheme onPress={() => setToggleTheme(!toggleTheme)}>
        <Icon
          name={toggleTheme ? 'sun' : 'moon'}
          color={COLORS.title}
          size={RFValue(24)}
        />
      </ToggleTheme>
    </Container>
  )
}
