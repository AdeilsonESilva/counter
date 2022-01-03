import React from 'react'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { SelectedCounter } from '@components/SelectedCounter'

import { Container, Content, Title, AccountantSession } from './styles'

export const Settings: React.FC = () => {
  return (
    <Container>
      <Header title="Settings" />

      <Content>
        <Title>Counters</Title>

        <AccountantSession>
          <Button title="Add new counter" icon="plus-circle" />
          <Button title="Delete selected counter" icon="trash-2" />
        </AccountantSession>

        <Title>Selected counter</Title>

        <SelectedCounter />
      </Content>
    </Container>
  )
}
