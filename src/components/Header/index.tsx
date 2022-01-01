import React, { useState } from 'react'

import { useTheme } from 'styled-components'
import { useAnimationState } from 'moti'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Title, ToggleThemeWrapper, ToggleTheme } from './styles'

Icon.loadFont()

export const Header: React.FC = () => {
  const { COLORS } = useTheme()

  const [toggleTheme, setToggleTheme] = useState(false)

  const animationState = useAnimationState({
    from: {
      opacity: 1,
      scale: 1
    },
    open: {
      opacity: 1,
      scale: 1
    },
    close: {
      opacity: 0,
      scale: 0
    }
  })

  function handleToggleTheme() {
    const delay = 500

    animationState.transitionTo('close')

    setTimeout(() => {
      setToggleTheme(!toggleTheme)
      animationState.transitionTo('open')
    }, delay)
  }

  return (
    <Container>
      <Title>Counters</Title>

      <ToggleThemeWrapper state={animationState}>
        <ToggleTheme onPress={handleToggleTheme}>
          <Icon
            name={toggleTheme ? 'sun' : 'moon'}
            color={COLORS.title}
            size={RFValue(24)}
          />
        </ToggleTheme>
      </ToggleThemeWrapper>
    </Container>
  )
}
