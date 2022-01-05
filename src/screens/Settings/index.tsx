import React, { useState } from 'react'
import { StatusBar, Alert } from 'react-native'

import { useCounter } from '@hooks/useCounter'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { SelectedCounter } from '@components/SelectedCounter'
import { CreateAccountant } from '@components/CreateAccountant'
import { Modal } from '@components/Modal'

import {
  Container,
  Content,
  Title,
  AccountantSession,
  SelectedCounterContainer,
  ConfirmChangeButton,
  ConfirmChangeButtonText
} from './styles'

export const Settings: React.FC = () => {
  const { counterSelected, setCounterSelected } = useCounter()

  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalCreateAccountant, setIsModalCreateAccountant] = useState(false)

  function handleOpenCounterCreationModal() {
    setIsModalCreateAccountant(!isModalCreateAccountant)
  }

  function handleOpenDeleteModal() {
    if (counterSelected) {
      setIsModalDelete(!isModalDelete)
    }
  }

  function handleCloseDeleteModal() {
    setIsModalDelete(!isModalDelete)
  }

  async function handleDeleteCounter(id: string) {
    try {
      if (counterSelected!.id === id) {
        setCounterSelected(null)
      }

      setIsModalDelete(!isModalDelete)
    } catch {
      Alert.alert(
        'An error has occurred',
        'It was not possible to delete this counter. Try again.'
      )
    }
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <Header title="Settings" />

      <Content>
        <Title>Counters</Title>

        <AccountantSession>
          <Button
            title="Add new counter"
            icon="plus-circle"
            onPress={handleOpenCounterCreationModal}
          />
          <Button
            title="Delete selected counter"
            icon="trash-2"
            onPress={handleOpenDeleteModal}
          />
        </AccountantSession>

        {!!counterSelected && (
          <SelectedCounterContainer>
            <Title>Selected counter</Title>

            <SelectedCounter
              data={{
                title: counterSelected!.title,
                amount: counterSelected!.amount
              }}
            />

            <ConfirmChangeButton>
              <ConfirmChangeButtonText>Confirm change</ConfirmChangeButtonText>
            </ConfirmChangeButton>
          </SelectedCounterContainer>
        )}
      </Content>

      <CreateAccountant
        onCloseModal={() =>
          setIsModalCreateAccountant(!isModalCreateAccountant)
        }
        visible={isModalCreateAccountant}
      />

      <Modal
        type="delete"
        actions={{
          negative: handleCloseDeleteModal,
          positive: () => handleDeleteCounter(counterSelected!.id)
        }}
        visible={isModalDelete}
      />
    </Container>
  )
}
