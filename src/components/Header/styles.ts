import styled from 'styled-components/native'

import { MotiView } from 'moti'

import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${getStatusBarHeight() + 32}px 16px 0;

  position: absolute;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.primary_bold};
  color: ${({ theme }) => theme.COLORS.title};
`

export const ToggleThemeWrapper = styled(MotiView)``

export const ToggleTheme = styled(BorderlessButton)``
