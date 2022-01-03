import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled(TouchableOpacity)`
  width: 180px;
  height: 120px;

  justify-content: center;
  align-items: center;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.main_light};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.secondary_medium};
  color: ${({ theme }) => theme.COLORS.main};

  text-align: center;

  margin-top: 8px;
`
