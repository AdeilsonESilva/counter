import React from 'react'
import { ModalProps } from 'react-native'

import { useTheme } from 'styled-components'

import {
  Container,
  Wrapper,
  Content,
  Title,
  Footer,
  Button,
  ButtonText
} from './styles'

interface Props extends ModalProps {
  field: React.FC
  actions: {
    negative(): void
    positive(): void
  }
}

export const CreateAccountant: React.FC<Props> = ({
  field: Field,
  actions,
  ...rest
}) => {
  const { COLORS } = useTheme()

  return (
    <Container transparent animationType="fade" {...rest}>
      <Wrapper>
        <Content>
          <Title>Add new counter</Title>

          <Field />

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
              <ButtonText textColor={COLORS.main}>Add</ButtonText>
            </Button>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  )
}
