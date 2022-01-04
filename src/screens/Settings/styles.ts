import styled from 'styled-components/native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 32}px;

  background-color: ${({ theme }) => theme.COLORS.background};
`

export const Content = styled.View`
  flex: 1;
  padding: 64px 16px 0;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONTS.primary_semiBold};
  color: ${({ theme }) => theme.COLORS.title};
`

export const AccountantSession = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 16px 0 32px;
`

export const ConfirmChangeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  height: ${RFValue(55)}px;

  justify-content: center;
  align-items: center;

  border-radius: 16px;

  margin-top: 32px;

  background-color: ${({ theme }) => theme.COLORS.main_light};
`

export const ConfirmChangeButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.main};
`
