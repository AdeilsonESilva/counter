import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { MotiView } from 'moti'

import { RFValue } from 'react-native-responsive-fontsize'

interface CardBaseProps {
  active?: boolean
}

export const Container = styled(MotiView).attrs({
  from: {
    opacity: 0,
    translateX: 100
  },
  animate: {
    opacity: 1,
    translateX: 0
  }
})`
  min-width: 100%;

  padding: 0 16px;
`

export const CardBase = styled(TouchableOpacity)<CardBaseProps>`
  width: 100%;
  height: ${RFValue(120)}px;

  justify-content: space-between;

  padding: 16px 16px 32px;
  margin-bottom: 16px;

  border: ${({ active }) => (active ? 2 : 1)}px solid
    ${({ theme, active }) => (active ? theme.COLORS.main : theme.COLORS.border)};
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.shape};
`

export const Header = styled.View``

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
})`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.description};
`

export const Amount = styled.Text`
  font-size: ${RFValue(48)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.title};

  text-align: right;

  margin-right: 16px;
`

export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 72px;
  height: ${RFValue(120)}px;

  justify-content: center;
  align-items: center;

  padding-right: 14px;
`
