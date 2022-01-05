import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import { useCounterSelected } from '@hooks/useCounterSelected'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { SelectedCounter } from '@components/SelectedCounter'
import { CreateAccountant } from '@components/CreateAccountant'
import { Modal } from '@components/Modal'

import { getRealm } from '@services/realm'

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
  const { counterSelected, setCounterSelected } = useCounterSelected()

  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalCreateAccountant, setIsModalCreateAccountant] = useState(false)

  function handleOpenDeleteModal() {
    if (counterSelected) {
      setIsModalDelete(!isModalDelete)
    }
  }

  async function handleDeleteCounter(id: string) {
    try {
      const realm = await getRealm()

      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('Counters', id))
      })

      if (counterSelected!.id === id) {
        setCounterSelected(null)
      }

      setIsModalDelete(!isModalDelete)
    } catch {
      console.log('Unable to delete counter.')
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
            onPress={() => setIsModalCreateAccountant(!isModalCreateAccountant)}
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
          negative: () => setIsModalDelete(!isModalDelete),
          positive: () => handleDeleteCounter(counterSelected!.id)
        }}
        visible={isModalDelete}
      />
    </Container>
  )
}
