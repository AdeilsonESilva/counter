import React, { useState } from 'react'
import { StatusBar, Platform } from 'react-native'

import { useTheme } from 'styled-components'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { SelectedCounter } from '@components/SelectedCounter'
import { CreateAccountant } from '@components/CreateAccountant'
import { Modal } from '@components/Modal'

import { Container, Content, Title, AccountantSession, Input } from './styles'

export const Settings: React.FC = () => {
  const { COLORS } = useTheme()

  const [isModalDelete, setIsModalDelete] = useState(false)
  const [isModalCreateAccountant, setIsModalCreateAccountant] = useState(false)

  const [counter, setCounter] = useState('')

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
      </Content>

      <CreateAccountant
        field={() => (
          <Input
            placeholder="Counter name"
            selectionColor={
              Platform.OS === 'ios' ? COLORS.main : COLORS.main_light
            }
            onChangeText={setCounter}
            value={counter}
          />
        )}
        actions={{
          negative: () => setIsModalCreateAccountant(!isModalCreateAccountant),
          positive: () => console.log('Add')
        }}
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
