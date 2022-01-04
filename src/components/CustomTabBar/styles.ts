import styled from 'styled-components/native'

import { BlurView } from '@react-native-community/blur'

import { RFValue } from 'react-native-responsive-fontsize'

export const TabBarContainer = styled(BlurView)`
  height: ${RFValue(70)}px;
  justify-content: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

export const TabBarIconContainer = styled.View`
  align-items: center;
`

export const TabBarFocusedLine = styled.View`
  width: 20px;
  height: 4px;

  border-radius: 10px;

  margin-top: 5px;

  position: absolute;
  bottom: -40%;

  background-color: ${({ theme }) => theme.COLORS.main};
`
