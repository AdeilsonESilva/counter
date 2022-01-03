import styled from 'styled-components/native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 32}px;
  background-color: ${({ theme }) => theme.COLORS.background};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;

  padding-top: 64px;
`

export const EmptyList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-bottom: ${RFPercentage(15)}px;
`

export const EmptyTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.description};

  text-align: center;
`
