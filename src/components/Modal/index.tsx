import React from 'react'
import { ModalProps } from 'react-native'

import { useTheme } from 'styled-components'

import {
  Container,
  Wrapper,
  Content,
  Title,
  Message,
  Footer,
  Button,
  ButtonText
} from './styles'

interface Props extends ModalProps {
  type: 'delete' | 'clear'
  actions: {
    negative(): void
    positive(): void
  }
}

export const Modal: React.FC<Props> = ({ type, actions, ...rest }) => {
  const { COLORS } = useTheme()

  return (
    <Container transparent animationType="fade" {...rest}>
      <Wrapper>
        <Content>
          <Title>
            {type === 'delete'
              ? 'Are you sure you want to delete?'
              : 'Are you sure you want to clear?'}
          </Title>
          <Message>This action can`t be undone.</Message>

          <Footer>
            <Button
              backgroundColor={COLORS.border_light}
              onPress={actions.negative}
            >
              <ButtonText textColor={COLORS.icon}>Cancel</ButtonText>
            </Button>

            <Button
              backgroundColor={COLORS.main_light}
              onPress={actions.positive}
            >
              <ButtonText textColor={COLORS.main}>
                {type === 'delete' ? 'Delete' : 'Clear'}
              </ButtonText>
            </Button>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  )
}
