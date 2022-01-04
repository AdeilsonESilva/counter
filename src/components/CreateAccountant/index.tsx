import React, { useState } from 'react'
import { ModalProps, Platform } from 'react-native'

import { useTheme } from 'styled-components'

import uuid from 'react-native-uuid'

import { getRealm } from '@services/realm'

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

  async function handleCreationNewAccountant() {
    if (!counter) return

    const realm = await getRealm()

    const data = {
      id: String(uuid.v4()),
      title: counter,
      amount: '0'
    }

    realm.write(() => {
      realm.create('Counters', data)
    })
    setCounter('')
  }

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
              onPress={handleCreationNewAccountant}
            >
              <ButtonText textColor={COLORS.main}>Add</ButtonText>
            </Button>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  )
}
