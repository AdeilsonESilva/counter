import React from 'react'
import { TouchableOpacityProps, StyleSheet } from 'react-native'

import { theme } from '@styles/theme'

import { Container, CardBase, Header, Title, Amount } from './styles'

interface IAccountantsCardData {
  title: string
  amount: string
}

interface Props extends TouchableOpacityProps {
  data: IAccountantsCardData
  selected?: boolean
  delay?: number
}

export const AccountantsCard: React.FC<Props> = ({
  data,
  selected,
  delay,
  ...rest
}) => {
  return (
    <Container transition={{ type: 'timing', delay: delay! * 100 }}>
      <CardBase
        activeOpacity={0.7}
        style={selected && styles.active}
        active={selected}
        {...rest}
      >
        <Header>
          <Title>{data.title}</Title>
        </Header>

        <Amount>{data.amount}</Amount>
      </CardBase>
    </Container>
  )
}

const styles = StyleSheet.create({
  active: {
    shadowColor: theme.COLORS.main,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})
