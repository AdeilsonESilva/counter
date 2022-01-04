import React, { useState } from 'react'
import { StatusBar } from 'react-native'

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
  ConfirmChangeButton,
  ConfirmChangeButtonText
} from './styles'

export const Settings: React.FC = () => {
  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalCreateAccountant, setIsModalCreateAccountant] = useState(false)

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
            onPress={() => setIsModalDelete(!isModalDelete)}
          />
        </AccountantSession>

        <Title>Selected counter</Title>

        <SelectedCounter />

        <ConfirmChangeButton>
          <ConfirmChangeButtonText>Confirm change</ConfirmChangeButtonText>
        </ConfirmChangeButton>
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
          positive: () => console.log('Delete')
        }}
        visible={isModalDelete}
      />
    </Container>
  )
}
