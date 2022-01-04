import React, { useState } from 'react'

import { useTheme } from 'styled-components'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Modal } from '@components/Modal'

import {
  Container,
  Title,
  Amount,
  Control,
  Button,
  ClearButton,
  ClearTitle
} from './styles'

export const SelectedCounter: React.FC = () => {
  const { COLORS } = useTheme()

  const [isModalClear, setIsModalClear] = useState(false)

  return (
    <Container>
      <Title>Respiração</Title>
      <Amount>42</Amount>

      <Control>
        <Button>
          <Icon name="minus" size={RFValue(24)} color={COLORS.main} />
        </Button>

        <ClearButton onPress={() => setIsModalClear(!isModalClear)}>
          <ClearTitle>Clear</ClearTitle>
        </ClearButton>

        <Button>
          <Icon name="plus" size={RFValue(24)} color={COLORS.main} />
        </Button>
      </Control>

      <Modal
        type="clear"
        actions={{
          negative: () => setIsModalClear(!isModalClear),
          positive: () => console.log('Clear')
        }}
        visible={isModalClear}
      />
    </Container>
  )
}
