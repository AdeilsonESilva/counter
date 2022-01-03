import React from 'react'
import { TouchableOpacityProps, StyleSheet } from 'react-native'

import { useTheme } from 'styled-components'

import { Swipeable } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { RFValue } from 'react-native-responsive-fontsize'

import { theme } from '@styles/theme'

import {
  Container,
  CardBase,
  Header,
  Title,
  Amount,
  DeleteButton
} from './styles'

interface IAccountantsCardData {
  title: string
  amount: string
}

interface Props extends TouchableOpacityProps {
  data: IAccountantsCardData
  selected?: boolean
  onDelete?(): void
  delay?: number
}

export const AccountantsCard: React.FC<Props> = ({
  data,
  selected,
  onDelete,
  delay,
  ...rest
}) => {
  const { COLORS } = useTheme()

  return (
    <Swipeable
      renderRightActions={() => (
        <DeleteButton onPress={onDelete}>
          <Icon name="trash-2" size={RFValue(24)} color={COLORS.main} />
        </DeleteButton>
      )}
    >
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
    </Swipeable>
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
