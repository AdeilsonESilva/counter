import React, { useState, useEffect } from 'react'
import { ModalProps, Platform } from 'react-native'

import { useTheme } from 'styled-components'

import AsyncStorage from '@react-native-async-storage/async-storage'

import uuid from 'react-native-uuid'
import { RFValue } from 'react-native-responsive-fontsize'

import Icon from 'react-native-vector-icons/Feather'

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
  visible: boolean
  onCloseModal(): void
}

export const CreateAccountant: React.FC<Props> = ({
  onCloseModal,
  ...rest
}) => {
  const { NAME, COLORS } = useTheme()

  const [counter, setCounter] = useState('')

  const [controlButtonType, setControlButtonType] = useState({
    success: false,
    opened: 0
  })

  async function handleCreationNewAccountant() {
    if (!counter) return

    const data = {
      id: String(uuid.v4()),
      title: counter,
      amount: '0'
    }

    const keyStorage = '@counter:storage'

    const accountantsAlreadyRegistered = await AsyncStorage.getItem(keyStorage)
    const accountantsAlreadyRegisteredFormatted =
      JSON.parse(accountantsAlreadyRegistered!) || []

    await AsyncStorage.setItem(
      keyStorage,
      JSON.stringify([...accountantsAlreadyRegisteredFormatted, data])
    )

    setCounter('')

    setControlButtonType({
      success: true,
      opened: controlButtonType.opened + 1
    })
  }

  function handleCloseModal() {
    setControlButtonType({
      success: false,
      opened: 0
    })

    onCloseModal()
  }

  useEffect(() => {
    if (counter.length === 0 && controlButtonType.opened > 0) {
      setControlButtonType({
        success: true,
        opened: controlButtonType.opened + 1
      })
    } else {
      setControlButtonType({
        success: false,
        opened: 0
      })
    }
  }, [counter])

  return (
    <Container transparent animationType="fade" {...rest}>
      <Wrapper>
        <Content>
          <Title>Add new counter</Title>

          <Input
            placeholder="Counter name"
            placeholderTextColor={
              NAME === 'dark' ? COLORS.border : COLORS.description
            }
            selectionColor={
              Platform.OS === 'ios' ? COLORS.main : COLORS.main_light
            }
            onChangeText={setCounter}
            value={counter}
          />

          <Footer>
            <Button
              backgroundColor={COLORS.border_light}
              onPress={handleCloseModal}
            >
              <ButtonText textColor={COLORS.icon}>Cancel</ButtonText>
            </Button>

            <Button
              backgroundColor={
                controlButtonType.success
                  ? COLORS.success_light
                  : COLORS.main_light
              }
              onPress={handleCreationNewAccountant}
            >
              {controlButtonType.success ? (
                <Icon name="check" size={RFValue(16)} color={COLORS.success} />
              ) : (
                <ButtonText textColor={COLORS.main}>Add</ButtonText>
              )}
            </Button>
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  )
}
