import styled from 'styled-components/native'
import { Modal, Platform } from 'react-native'

import { MotiView } from 'moti'

import { RFValue } from 'react-native-responsive-fontsize'

interface ButtonProps {
  textColor?: string
  backgroundColor?: string
}

export const Container = styled(Modal)``

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height'
})`
  flex: 1;
  justify-content: center;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.COLORS.opacity_dark};
`

export const Content = styled(MotiView).attrs({
  from: {
    opacity: 0,
    translateY: 100
  },
  animate: {
    opacity: 1,
    translateY: 0
  }
})`
  width: 100%;
  height: ${RFValue(170)}px;

  justify-content: space-between;

  padding: 16px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.background};
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
  color: ${({ theme }) => theme.COLORS.title};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})<ButtonProps>`
  width: ${RFValue(140)}px;
  height: ${RFValue(35)}px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ textColor }) => textColor};
`
