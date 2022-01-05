import React, { useState } from 'react'

import { useTheme } from 'styled-components'
import { useCounter } from '@hooks/useCounter'

import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { Modal } from '@components/Modal'

import { ICounter } from '@dtos/counter'

import {
  Container,
  Title,
  Amount,
  Control,
  Button,
  ClearButton,
  ClearTitle
} from './styles'

interface Props {
  data: Omit<ICounter, 'id'>
}

export const SelectedCounter: React.FC<Props> = ({ data }) => {
  const { COLORS } = useTheme()

  const { counterSelected, setCounterSelected } = useCounter()

  const [isModalClear, setIsModalClear] = useState(false)

  const persistentData = {
    id: counterSelected!.id,
    title: counterSelected!.title
  }

  const currentAmount = Number(counterSelected!.amount)

  function handleQuantityControl(control: 'decrease' | 'increase') {
    if (control === 'decrease') {
      if (currentAmount === 0) return
      setCounterSelected({
        ...persistentData,
        amount: String(currentAmount - 1)
      })
    } else {
      setCounterSelected({
        ...persistentData,
        amount: String(currentAmount + 1)
      })
    }
  }

  function handleOpenModalClear() {
    if (currentAmount > 0) {
      setIsModalClear(!isModalClear)
    }
  }

  function hanldeClearAmount() {
    setCounterSelected({
      ...persistentData,
      amount: '0'
    })

    setIsModalClear(!isModalClear)
  }

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>

      <Control>
        <Button onPress={() => handleQuantityControl('decrease')}>
          <Icon name="minus" size={RFValue(24)} color={COLORS.main} />
        </Button>

        <ClearButton onPress={handleOpenModalClear}>
          <ClearTitle>Clear</ClearTitle>
        </ClearButton>

        <Button onPress={() => handleQuantityControl('increase')}>
          <Icon name="plus" size={RFValue(24)} color={COLORS.main} />
        </Button>
      </Control>

      <Modal
        type="clear"
        actions={{
          negative: () => setIsModalClear(!isModalClear),
          positive: hanldeClearAmount
        }}
        visible={isModalClear}
      />
    </Container>
  )
}
