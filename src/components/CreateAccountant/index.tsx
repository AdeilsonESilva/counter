import React, { useState } from 'react'
import { ModalProps, Platform } from 'react-native'

import { useTheme } from 'styled-components'

import {
  Container,
  Wrapper,
  Content,
  Title,
  Input,
  Footer,
  Button,
  ButtonText
} from './styles'

interface Props extends ModalProps {
  onCloseModal(): void
}

export const CreateAccountant: React.FC<Props> = ({
  onCloseModal,
  ...rest
}) => {
  const { COLORS } = useTheme()

  const [counter, setCounter] = useState('')

  return (
    <Container transparent animationType="fade" {...rest}>
      <Wrapper>
        <Content>
          <Title>Add new counter</Title>

          <Input
            placeholder="Counter name"
            selectionColor={
              Platform.OS === 'ios' ? COLORS.main : COLORS.main_light
            }
            onChangeText={setCounter}
            value={counter}
          />

          <Footer>
            <Button
              backgroundColor={COLORS.border_light}
              onPress={onCloseModal}
            >
              <ButtonText textColor={COLORS.icon}>Cancel</ButtonText>
            </Button>

            <Button
              backgroundColor={COLORS.main_light}
              onPress={() => console.log('Add')}
            >
              <ButtonText textColor={COLORS.main}>Add</ButtonText>
            </Button>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  )
}
