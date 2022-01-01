import styled from 'styled-components/native'

import { MotiView } from 'moti'

import { RFValue } from 'react-native-responsive-fontsize'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.FONTS.primary_bold};
  color: ${({ theme }) => theme.COLORS.title};
`

export const ToggleThemeWrapper = styled(MotiView)``

export const ToggleTheme = styled(BorderlessButton)``
