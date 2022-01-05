import React, { useState } from 'react'
import { StatusBar, Alert } from 'react-native'

import { useCounter } from '@hooks/useCounter'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { ICounter } from '@dtos/counter'

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

  const keyStorage = '@counter:storage'

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
      const data = await AsyncStorage.getItem(keyStorage)
      const accountantsAlreadyRegistered = JSON.parse(data!) as ICounter[]

      const counterDeletedOnlyStorage = accountantsAlreadyRegistered.filter(
        counter => counter.id !== id
      )

      await AsyncStorage.setItem(
        keyStorage,
        JSON.stringify(counterDeletedOnlyStorage)
      )

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

  async function handleUpdateCounter() {
    try {
      const data = await AsyncStorage.getItem(keyStorage)
      const accountantsAlreadyRegistered = JSON.parse(data!) as ICounter[]

      const filteredCounter = accountantsAlreadyRegistered.filter(
        counter => counter.id === counterSelected!.id
      )

      const [counter] = filteredCounter

      const newQuantity = {
        ...counter,
        amount: counterSelected!.amount
      }

      const updatedAccountant = accountantsAlreadyRegistered.map(
        currentAccountant =>
          currentAccountant.id === counter.id ? newQuantity : currentAccountant
      )

      await AsyncStorage.setItem(keyStorage, JSON.stringify(updatedAccountant))
    } catch {
      Alert.alert(
        'An error has occurred',
        'Unable to update your counter. Try again.'
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

            <ConfirmChangeButton onPress={handleUpdateCounter}>
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
