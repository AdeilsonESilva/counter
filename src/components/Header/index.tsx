import React from 'react'

import { useTheme } from 'styled-components'
import { useAnimationState } from 'moti'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Container, Title, ToggleThemeWrapper, ToggleTheme } from './styles'

interface Props {
  title: string
  toggleTheme(): void
}

export const Header: React.FC<Props> = ({ title, toggleTheme }) => {
  const { NAME, COLORS } = useTheme()

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
    const delay = 200

    animationState.transitionTo('close')

    setTimeout(() => {
      animationState.transitionTo('open')
      toggleTheme()
    }, delay)
  }

  return (
    <Container>
      <Title>{title}</Title>

      <ToggleThemeWrapper state={animationState}>
        <ToggleTheme onPress={handleToggleTheme}>
          <Icon
            name={NAME === 'light' ? 'moon' : 'sun'}
            color={COLORS.title}
            size={RFValue(24)}
          />
        </ToggleTheme>
      </ToggleThemeWrapper>
    </Container>
  )
}
