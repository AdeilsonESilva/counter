import styled from 'styled-components/native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 32}px 16px 0;

  background-color: ${({ theme }) => theme.COLORS.background};
`

export const Content = styled.View`
  flex: 1;
  padding-top: 64px;
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
